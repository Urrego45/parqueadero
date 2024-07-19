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
  try {
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateParking = async (req, res) => {
  try {
    
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


