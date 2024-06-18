
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createAccessToken } from '../libs/jwt.js'
import { pool } from '../db.js';



export const registerUser = async (req, res) => {
  const { nombre_completo, telefono, cedula, rol, correo, contrasenia } = req.body

  try {
    const { rows } = await pool.query(
      "SELECT * FROM usuarios WHERE correo = $1",
      [correo]
    )

    console.log(rows);

    if (rows.length > 0) return res.status(400).json({
      message: "Este 'Email' ya está en uso."
    })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }

  try {

    const passwordHash = await bcrypt.hash(contrasenia, 15)

    const { rows } = await pool.query(
      "INSERT INTO usuarios (nombre_completo, telefono, cedula, rol, correo, contrasenia) VALUES ($1,$2,$3,$4,$5,$6) RETURNING uuid",
      [nombre_completo, telefono, cedula, rol, correo, passwordHash]
    )

    const token = await createAccessToken({id: rows[0].uuid})
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

export const login = async (req, res) => {
  const { correo, contrasenia } = req.body

  try {

    const { rows } = await pool.query(
      "SELECT * FROM usuarios WHERE correo = $1",
      [correo]
    )

    const isMatch = await bcrypt.compare(contrasenia, rows[0].contrasenia)
    if (!isMatch) return res.status(400).json({ message: "Credenciales incorrectas." })

    const token = await createAccessToken({ id: rows[0].uuid })

    res.cookie('token', token)
    res.json({
      id: rows.uuid,
      username: rows.nombre_completo,
      email: rows.correo
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

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  console.log(token, '-------------------------');

  if (!token) return res.status(401).json({ message: "Sin autorización."})

  jwt.verify(token, process.env.TOKEN_SECRET, async (error, user) => {
    console.log(user, 'User aaaaaaaaaaaaaaaaa');
    console.log(user.id, 'User id');

    if (error) return res.status(401).json({ message: "Sin autorización." })

    const { rows } = await pool.query(
      "SELECT * FROM usuarios WHERE uuid = $1",
      [user.id]
    )

    console.log(rows);

    if (!rows || rows.length === 0) return res.status(401).json({ message: "Sin autorización." })

    console.log('object');


    return res.json({
      uuid: rows.uuid,
      nombre_completo: rows.nombre_completo,
      correo: rows.correo,
    });

  });
}


