// middleware/auth.js
import jwt from 'jsonwebtoken';
import config from '../config.js';

const { jwtSecret } = config;

const auth = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    req.school_id = decoded.school_id;
    console.log('Decoded token: ', decoded); // Log decoded token
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

export default auth;
