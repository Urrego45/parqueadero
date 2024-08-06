import axios from './axios';


export const getUserstRequest = async () => axios.get("/user")

export const createUsertRequest = async (user) => axios.post("/user", user)

export const updateUsertRequest = async (id, user) => axios.put(`/user/${id}`, user)

export const deleteUsertRequest = async (id) => axios.delete(`/user/${id}`)

export const getUsertRequest = async (id) => axios.get(`/user/${id}`)
