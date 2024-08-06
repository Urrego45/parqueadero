import axios from './axios';


export const getParkedRequest = async () => axios.get("/parked")

export const createParkedRequest = async (parked) => axios.post("/parked", parked)

export const updateParkedRequest = async (uuid, parked) => axios.put(`/parked/${uuid}`, parked)

export const deleteParkedRequest = async (uuid) => axios.delete(`/parked/${uuid}`)
