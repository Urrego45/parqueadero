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
  const { parqueadero, tipo_vehiculo, cupos } = req.body

  try {

    const { rows } = await pool.query(
      "INSERT INTO parametrizacion_vehiculo (parqueadero, tipo_vehiculo, cupos) VALUES ($1, $2, $3) ",
      [parqueadero, tipo_vehiculo, cupos]
    )

    res.json({
      parqueadero: parqueadero,
      tipo_vehiculo: tipo_vehiculo,
      cupos: cupos
    })

    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateSettingVehicle = async (req, res) => {
  const { parqueadero, tipo_vehiculo, cupos } = req.body

  try {

    await pool.query(
      "UPDATE parametrizacion_vehiculo SET tipo_vehiculo = $1, cupos = $2 WHERE uuid = $3"
      [tipo_vehiculo, cupos, req.params.uuid]
    )

    res.json({ message: "Parametrización actualizada." })
    
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

