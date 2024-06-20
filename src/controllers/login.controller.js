
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

    if (rows.length === 0) return res.status(400).json({ message: 'El correo y/o contraseña no son correctas.' })

    const isMatch = await bcrypt.compare(contrasenia, rows[0].contrasenia)
    if (!isMatch) return res.status(400).json({ message: "Credenciales incorrectas." })

    const token = await createAccessToken({ id: rows[0].uuid })


    res.cookie('token', token)
    res.status(200).json({
      id: rows[0].uuid,
      username: rows[0].nombre_completo,
      email: rows[0].correo
    })

      
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateUser = async (req, res) => {
  const { nombre_completo, telefono, cedula, rol, correo, contrasenia, estado } = req.body

  try {
    const { rows } = await pool.query(
      "SELECT * FROM usuarios WHERE uuid = $1",
      [req.params.uuid]
    )

    if (rows.length === 0) return res.status(400).json({ message: "Este usuario no existe." })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }

  try {

    const { rows } = await pool.query(
      "UPDATE usuarios SET nombre_completo = $1, telefono = $2, cedula = $3, rol = $4, correo = $5, contrasenia = $6, estado = $7 WHERE uuid = $8",
      [nombre_completo, telefono, cedula, rol, correo, contrasenia, estado, req.params.uuid]
    )

    res.json({ message: "Tarea actualizada." })
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


export const listUser = async (req, res) => {
  try {
    
    const { rows } = await pool.query("SELECT * FROM usuarios")

    res.json(rows)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

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

  if (!token) return res.status(401).json({ message: "Sin autorización."})

  jwt.verify(token, process.env.TOKEN_SECRET, async (error, user) => {

    if (error) return res.status(401).json({ message: "Sin autorización." })

    const { rows } = await pool.query(
      "SELECT * FROM usuarios WHERE uuid = $1",
      [user.id]
    )

    if (!rows || rows.length === 0) return res.status(401).json({ message: "Sin autorización." })

    return res.json({
      uuid: rows[0].uuid,
      nombre_completo: rows[0].nombre_completo,
      correo: rows[0].correo,
    });

  });
}


