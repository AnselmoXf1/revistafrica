import nodemailer from 'nodemailer';

// Configurar transporter do Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Gerar código de 6 dígitos
export const generateVerificationCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Enviar email com código de verificação
export const sendVerificationEmail = async (email, code) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Código de Recuperação de Senha - Revista África',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb;">Recuperação de Senha</h2>
        <p>Você solicitou a recuperação de senha para sua conta na Revista África.</p>
        <p>Use o código abaixo para redefinir sua senha:</p>
        <div style="background-color: #f3f4f6; padding: 20px; text-align: center; margin: 20px 0; border-radius: 8px;">
          <h1 style="color: #1f2937; font-size: 32px; letter-spacing: 8px; margin: 0;">${code}</h1>
        </div>
        <p style="color: #6b7280;">Este código expira em 15 minutos.</p>
        <p style="color: #6b7280;">Se você não solicitou esta recuperação, ignore este email.</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        <p style="color: #9ca3af; font-size: 12px;">Revista África - Sistema de Gestão de Acervo</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw new Error('Erro ao enviar email de verificação');
  }
};
