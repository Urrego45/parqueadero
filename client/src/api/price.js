import axios from './axios';


export const getPriceRequest = async () => axios.get("/price")

export const getPricesRequest = async (uuid) => axios.get(`/price/${uuid}`)

export const createPriceRequest = async (price) => axios.post("/price", price)

export const updatePriceRequest = async (uuid, price) => axios.put(`/price/${uuid}`, price)

export const deletePriceRequest = async (uuid) => axios.delete(`/price/${uuid}`)
