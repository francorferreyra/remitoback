import UserModel from '../../models/UserModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

const createUser = async (req, res) => {
  try {
    const { password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new UserModel({
      ...req.body,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({
      message: 'Usuario creado exitosamente',
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error al crear el usuario',
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar usuario
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: 'Usuario no encontrado',
      });
    }

    // Comparar contraseña
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: 'Contraseña incorrecta',
      });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET || "secreto",
    );

    user.token = token;
    await user.save();

    // Login exitoso
    res.status(200).json({
      message: 'Login exitoso',
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });

  } catch (error) {
    res.status(500).json({
      message: 'Error en el login',
      error: error.message,
    });
  }
};

export default {
  createUser,
  login,
};