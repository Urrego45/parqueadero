import axios from './axios';


export const getBusinessesRequest = async () => axios.get("/business")

export const getBusinessRequest = async (uuid) => axios.get(`/business/${uuid}`)

export const createBusinessRequest = async (business) => axios.post("/business", business)

export const updateBusinessRequest = async (uuid, business) => axios.put(`/business/${uuid}`, business)

export const deleteBusinessRequest = async (uuid) => axios.delete(`/business/${uuid}`)
