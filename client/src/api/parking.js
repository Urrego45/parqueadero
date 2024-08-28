import axios from './axios';


export const getParkingsRequest = async () => axios.get("/parking")

export const getParkingRequest = async (uuid) => axios.get(`/parking/${uuid}`)

export const createParkingRequest = async (parking) => axios.post("/parking", parking)

export const updateParkingRequest = async (uuid, parking) => axios.put(`/parking/${uuid}`, parking)

export const deleteParkingRequest = async (uuid) => axios.delete(`/parking/${uuid}`)
