import mongoose from 'mongoose';

const magazineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  coverUrl: {
    type: String,
    required: true
  },
  coverPublicId: {
    type: String,
    required: true
  },
  pdfUrl: {
    type: String,
    required: true
  },
  pdfPublicId: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  edition: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Ciências Sociais', 'História', 'Cultura', 'Política', 'Economia', 'Educação', 'Outro']
  },
  uploadDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export default mongoose.model('Magazine', magazineSchema);
