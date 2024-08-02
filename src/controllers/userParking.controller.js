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
  const { parqueadero, usuario, fecha_inicio, fecha_final } = req.body

  try {

    const { rows } = await pool.query(
      "INSERT INTO (parqueadero, usuario, fecha_inicio, fecha_final) VALUES ($1, $2, $3, $4)",
      [parqueadero, usuario, fecha_inicio, fecha_final]
    )

    res.json({
      parqueadero: parqueadero,
      usuario: usuario,
      fecha_inicio: fecha_inicio,
      fecha_final: fecha_final
    })
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateUserParking = async (req, res) => {
  const { fecha_inicio, fecha_final } = req.body

  try {

    await pool.query(
      "UPDATE parqueaderos_usuarios SET fecha_inicio = $1, fecha_final = $2 WHERE uuid = $3",
      [fecha_inicio, fecha_final, req.params.uuid]
    )

    res.json({ message: "Parqueadero usuario actualizado." })

    
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
