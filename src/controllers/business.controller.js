import { pool } from '../db.js';



export const getBusinesses = async (req, res) => {
  try {

    const { rows } = await pool.query("select * from empresas")

    res.json(rows)
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getBusiness = async (req, res) => {
  try {

    const { rows } = await pool.query(
      "select * from empresas where uuid = $1",
      [req.params.uuid]
    )

    if (rows.length === 0) return res.status(400).json({ message: "Estos precios no existen." })

    res.json(rows)
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createBusiness = async (req, res) => {
  const { nombre, direccion, telefono } = req.body

  console.log(req.body);

  try {

    console.log(nombre, direccion, telefono);

    const rows  = await pool.query(
      "INSERT INTO empresas (nombre, direccion, telefono) VALUES ($1, $2, $3)",
      [nombre, direccion, telefono]
    )

    console.log(rows, '-----------------------');

    res.json({
      nombre: nombre,
      direccion: direccion,
      telefono: telefono
    })

    
  } catch (error) {
    console.log(error);
    res.status(500).json({ messsage: error.messsage })
  }
}

export const updateBusiness = async (req, res) => {
  const { nombre, direccion, telefono } = req.body

  try {

    pool.query(
      "UPDATE empresas SET nombre = $1, direccion = $2, telefono = $3 WHERE uuid = $4",
      [nombre, direccion, telefono, req.params.uuid]
    )

    res.json({ message: "Empresa actualizada" })
    
  } catch (error) {
    res.status(500).json({ messsage: error.messsage })
  }
}

export const deleteBusiness = async (req, res) => {
  try {

    await pool.query(
      "delete from empresas where uuid = $1",
      [req.params.uuid]
    )

    res.json({ message: "Empresa eliminada." })
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

