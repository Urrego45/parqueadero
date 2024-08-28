import axios from './axios';


export const getParkedsRequest = async () => axios.get("/parked")

export const getParkedRequest = async (uuid) => axios.get(`/parked/${uuid}`)

export const createParkedRequest = async (parked) => axios.post("/parked", parked)

export const updateParkedRequest = async (uuid, parked) => axios.put(`/parked/${uuid}`, parked)

export const deleteParkedRequest = async (uuid) => axios.delete(`/parked/${uuid}`)
