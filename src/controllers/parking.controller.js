import { pool } from '../db.js';



export const getParking = async (req, res) => {
  try {

    const { rows } = await pool.query("select * from parqueaderos")

    res.json(rows)
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createParking = async (req, res) => {
  const { empresa, nombre, direccion, telefono } = req.body
  try {

    const { rows } = await pool.query(
      "INSERT INTO parqueaderos (empresa, nombre, direccion, telefono) VALUES ($1, $2, $3, $4)",
      [empresa, nombre, direccion, telefono]
    )

    res.json({
      nombre: nombre,
      direccion: direccion,
      telefono: telefono
    })
    
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateParking = async (req, res) => {
  const { empresa, nombre, direccion, telefono } = req.body

  try {

    await pool.query(
      "UPDATE parqueaderos SET nombre = $1, direccion = $2, telefono = $3 WHERE uuid = $4 ",
      [nombre, direccion, telefono, req.params.uuid]
    )

    res.json({ message: "Parqueadero actualizado." })
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteParking = async (req, res) => {
  try {

    await pool.query(
      "delete from parqueaderos where uuid = $1",
      [req.params.uuid]
    )

    res.json({ message: "Parqueadero eliminado eliminada." })
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


