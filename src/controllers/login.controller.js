
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createAccessToken } from '../libs/jwt.js'
import { pool } from '../db.js';



export const registerUser = async (req, res) => {
  const { nombre_completo, telefono, cedula, rol, correo, contrasenia } = req.body


  try {

    const [findUser] = await pool.query(
      "SELECT * FROM usuarios WHERE correo = ?",
      [correo]
    )

    if (findUser.length > 0) return res.status(400).json({
      message: "Este 'Email' y/o el 'Nombre usuario' ya está en uso."
    })

    const passwordHash = await bcrypt.hash(contrasenia, 15)

    const [result] = await pool.query(
      "insert into usuarios (nombre_completo, telefono, cedula, rol, correo, contrasenia) values (?,?,?,?,?,?)",
      [nombre_completo, telefono, cedula, rol, correo, passwordHash]
    )

    console.log(result);

    const token = await createAccessToken({id: result.insertId})
    res.cookie('token', token)

    res.json({
      nombre_completo: nombre_completo,
      telefono: telefono,
      cedula: cedula,
      rol: rol,
      correo: correo
    })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateUser = async (req, res) => {}

export const updateEstadoUser = async (req, res) => {}

export const listUser = async (req, res) => {}


export const logout = async (req, res) => {
  try {
    await res.cookie('token', "", {
      expires: new Date(0)
    })

    return res.status(200).json({ message: 'Sesión terminada exitosamente.' })
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const verifyToken = async (req, res) => {}


