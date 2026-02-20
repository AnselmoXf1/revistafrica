import express from 'express';
import { body, validationResult } from 'express-validator';
import Magazine from '../models/Magazine.js';
import { protect, admin } from '../middleware/auth.js';
import upload from '../middleware/upload.js';
import cloudinary from '../config/cloudinary.js';

const router = express.Router();

// Upload para Cloudinary
const uploadToCloudinary = (buffer, folder, resourceType = 'image') => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder, resource_type: resourceType },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    uploadStream.end(buffer);
  });
};

// GET /api/magazines - Listar todas as revistas
router.get('/', async (req, res) => {
  try {
    const magazines = await Magazine.find().sort({ uploadDate: -1 });
    res.json(magazines);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar revistas', error: error.message });
  }
});

// GET /api/magazines/:id - Buscar revista por ID
router.get('/:id', async (req, res) => {
  try {
    const magazine = await Magazine.findById(req.params.id);
    if (!magazine) {
      return res.status(404).json({ message: 'Revista não encontrada' });
    }
    res.json(magazine);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar revista', error: error.message });
  }
});

// POST /api/magazines - Criar nova revista (Admin)
router.post('/', protect, admin, upload.fields([
  { name: 'cover', maxCount: 1 },
  { name: 'pdf', maxCount: 1 }
]), async (req, res) => {
  try {
    const { title, description, year, edition, category } = req.body;

    if (!req.files || !req.files.cover || !req.files.pdf) {
      return res.status(400).json({ message: 'Capa e PDF são obrigatórios' });
    }

    // Upload capa
    const coverResult = await uploadToCloudinary(
      req.files.cover[0].buffer,
      'revista-africa/covers',
      'image'
    );

    // Upload PDF
    const pdfResult = await uploadToCloudinary(
      req.files.pdf[0].buffer,
      'revista-africa/pdfs',
      'raw'
    );

    const magazine = await Magazine.create({
      title,
      description,
      year: parseInt(year),
      edition: parseInt(edition),
      category,
      coverUrl: coverResult.secure_url,
      coverPublicId: coverResult.public_id,
      pdfUrl: pdfResult.secure_url,
      pdfPublicId: pdfResult.public_id
    });

    res.status(201).json(magazine);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar revista', error: error.message });
  }
});

// PUT /api/magazines/:id - Atualizar revista (Admin)
router.put('/:id', protect, admin, upload.fields([
  { name: 'cover', maxCount: 1 }
]), async (req, res) => {
  try {
    const { title, description, year, edition, category } = req.body;
    const magazine = await Magazine.findById(req.params.id);

    if (!magazine) {
      return res.status(404).json({ message: 'Revista não encontrada' });
    }

    // Atualizar campos básicos
    magazine.title = title || magazine.title;
    magazine.description = description || magazine.description;
    magazine.year = year ? parseInt(year) : magazine.year;
    magazine.edition = edition ? parseInt(edition) : magazine.edition;
    magazine.category = category || magazine.category;

    // Se nova capa foi enviada, fazer upload e deletar a antiga
    if (req.files && req.files.cover) {
      // Deletar capa antiga do Cloudinary
      await cloudinary.uploader.destroy(magazine.coverPublicId);

      // Upload nova capa
      const coverResult = await uploadToCloudinary(
        req.files.cover[0].buffer,
        'revista-africa/covers',
        'image'
      );

      magazine.coverUrl = coverResult.secure_url;
      magazine.coverPublicId = coverResult.public_id;
    }

    await magazine.save();
    res.json(magazine);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar revista', error: error.message });
  }
});

// DELETE /api/magazines/:id - Deletar revista (Admin)
router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const magazine = await Magazine.findById(req.params.id);
    if (!magazine) {
      return res.status(404).json({ message: 'Revista não encontrada' });
    }

    // Deletar arquivos do Cloudinary
    await cloudinary.uploader.destroy(magazine.coverPublicId);
    await cloudinary.uploader.destroy(magazine.pdfPublicId, { resource_type: 'raw' });

    await magazine.deleteOne();
    res.json({ message: 'Revista deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar revista', error: error.message });
  }
});

export default router;
