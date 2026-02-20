import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Conectado ao MongoDB');

    const adminEmail = 'admin@revistafrica.com';
    const existingAdmin = await User.findOne({ email: adminEmail });

    if (existingAdmin) {
      console.log('⚠️  Admin já existe!');
      process.exit(0);
    }

    const admin = await User.create({
      name: 'Administrador',
      email: adminEmail,
      password: 'admin123',
      isAdmin: true
    });

    console.log('✅ Admin criado com sucesso!');
    console.log('Email:', admin.email);
    console.log('Senha: admin123');
    console.log('⚠️  IMPORTANTE: Altere a senha após o primeiro login!');

    process.exit(0);
  } catch (error) {
    console.error('❌ Erro:', error.message);
    process.exit(1);
  }
};

createAdmin();
