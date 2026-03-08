import rateLimit from 'express-rate-limit';

// Rate limiter para login - 3 tentativas por 15 minutos
export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 3, // Máximo 3 tentativas
  message: {
    message: 'Muitas tentativas de login. Por favor, tente novamente em 15 minutos.'
  },
  standardHeaders: true, // Retorna info no header `RateLimit-*`
  legacyHeaders: false, // Desabilita headers `X-RateLimit-*`
  // Identificar por IP
  keyGenerator: (req) => {
    return req.ip;
  },
  // Handler customizado
  handler: (req, res) => {
    res.status(429).json({
      message: 'Muitas tentativas de login. Por favor, tente novamente em 15 minutos.',
      retryAfter: Math.ceil(req.rateLimit.resetTime / 1000)
    });
  }
});

// Rate limiter geral para API - 100 requisições por 15 minutos
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Máximo 100 requisições
  message: {
    message: 'Muitas requisições. Por favor, tente novamente mais tarde.'
  },
  standardHeaders: true,
  legacyHeaders: false
});
