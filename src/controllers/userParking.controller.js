import { pool } from '../db.js';



export const getUserParking = async (req, res) => {
  try {

    const { rows } = await pool.query("select * from parqueaderos_usuarios")

    res.json(rows)
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createUserParking = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateUserParking = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteUserParking = async (req, res) => {
  try {

    await pool.query(
      "delete from parqueaderos_usuarios where uuid = $1",
      [req.params.uuid]
    )

    res.json({ message: "Parqueadero usuarios eliminada." })
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
