import { pool } from '../db.js';



export const getParked = async (req, res) => {
  try {

    const { rows } = await pool.query("select * from vehiculos_parqueados")

    res.json(rows)
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createParked = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateParked = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteParked = async (req, res) => {
  try {

    await pool.query(
      "delete from vehiculos_parqueados where uuid = $1",
      [req.params.uuid]
    )

    res.json({ message: "Vehiculo parqueado eliminada." })
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

