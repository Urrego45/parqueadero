import axios from './axios';


export const getSettingsVehiculeRequest = async () => axios.get("/setting-vehicule")

export const createSettingsVehiculeRequest = async (setting) => axios.post("/setting-vehicule", setting)

export const updateSettingsVehiculeRequest = async (uuid, setting) => axios.put(`/setting-vehicule/${uuid}`, setting)

export const deleteSettingsVehiculeRequest = async (uuid) => axios.delete(`/setting-vehicule/${uuid}`)
