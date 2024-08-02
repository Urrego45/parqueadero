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
  const { parqueadero, tipo_vehiculo, placa, fecha_ingreso, fecha_salida } = req.body

  try {
    
    const { rows } = await pool.query(
      "INSERT INTO vehiculos_parqueados (parqueadero, tipo_vehiculo, placa, fecha_ingreso, fecha_salida) VALUES ($1, $2, $3, $4, $5)",
      [parqueadero, tipo_vehiculo, placa, fecha_ingreso, fecha_salida]
    )

    res.json({
      tipo_vehiculo: tipo_vehiculo,
      placa: placa,
      fecha_ingreso: fecha_ingreso,
      fecha_salida: fecha_salida
    })


  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateParked = async (req, res) => {
  const { tipo_vehiculo, placa, fecha_ingreso, fecha_salida } = req.body

  try {

    await pool.query(
      "UPDATE vehiculos_parqueados SET tipo_vehiculo = $1, placa = $2, fecha_ingreso = $3, fecha_salida = $4 WHERE uuid = $5",
      [tipo_vehiculo, placa, fecha_ingreso, fecha_salida, req.params.uuid]
    )

    res.json({ message: 'Vehiculos parqueados actualizado.' })
    
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

