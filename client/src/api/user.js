import axios from './axios';


export const getUserstRequest = async () => axios.get("/usuarios")

export const createUsertRequest = async (user) => axios.post("/usuarios", user)

export const updateUsertRequest = async (id, user) => axios.put(`/usuarios/${id}`, user)

export const deleteUsertRequest = async (id) => axios.delete(`/usuarios/${id}`)

export const getUsertRequest = async (id) => axios.get(`/usuarios/${id}`)

