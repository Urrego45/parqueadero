import { pool } from '../db.js';



export const getSettingVehicle = async (req, res) => {
  try {

    const { rows } = await pool.query("select * from parametrizacion_vehiculo")

    res.json(rows)
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createSettingVehicle = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateSettingVehicle = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteSettingVehicle = async (req, res) => {
  try {

    await pool.query(
      "delete from parametrizacion_vehiculo where uuid = $1",
      [req.params.uuid]
    )

    res.json({ message: "Parametrizacion del vehiculo eliminada." })
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

