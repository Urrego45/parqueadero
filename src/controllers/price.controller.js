import { pool } from '../db.js';



export const getPrices = async (req, res) => {
  try {

    const { rows } = await pool.query("select * from precios")

    res.json(rows)
    
  } catch (error) {
    res.status(500).json({ messsage: error.messsage })
  }
}

export const getPrice = async (req, res) => {
  try {

    const { rows } = await pool.query(
      "select * from precios where uuid = $1",
      [req.params.uuid]
    )

    if (rows.length === 0) return res.status(400).json({ message: "Estos precios no existen." })

    res.json(rows)
    
  } catch (error) {
    res.status(500).json({ messsage: error.messsage })
  }
}

export const createPrice = async (req, res) => {
  const { tipo_vehiculo, hora_inicial, precio_hora_inicial, precio_hora_siguiente } = req.body

  try {

    const { rows } = pool.query(
      "insert into precios (tipo_vehiculo, hora_inicial, precio_hora_inicial, precio_hora_siguiente) VALUES ($1, $2, $3, $4)"
      [tipo_vehiculo, hora_inicial, precio_hora_inicial, precio_hora_siguiente]
    )

    console.log(rows);

    res.json({
      tipo_vehiculo: tipo_vehiculo,
      hora_inicial: hora_inicial,
      precio_hora_inicial: precio_hora_inicial,
      precio_hora_siguiente: precio_hora_siguiente
    })

    
  } catch (error) {
    res.status(500).json({ messsage: error.messsage })
  }
}

export const updatePrice = async (req, res) => {
  const { tipo_vehiculo, hora_inicial, precio_hora_inicial, precio_hora_siguiente } = req.body

  try {

    const { rows } = pool.query(
      "UPDATE precios SET tipo_vehiculo = $1, hora_inicial = $2, precio_hora_inicial = $3, precio_hora_siguiente = $4 WHERE uuid = $5",
      [tipo_vehiculo, hora_inicial, precio_hora_inicial, precio_hora_siguiente, req.params.uuid]
    )

    res.json({ message: "Precio actualizafo" })
    
  } catch (error) {
    res.status(500).json({ messsage: error.messsage })
  }
}

export const deletePrice = async (req, res) => {
  try {

    await pool.query(
      "delete from precios where uuid = $1",
      [req.params.uuid]
    )

    res.json({ message: "Empresa eliminada." })
    
  } catch (error) {
    res.status(500).json({ messsage: error.messsage })
  }
}

