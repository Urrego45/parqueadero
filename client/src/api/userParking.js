import axios from './axios';

export const getUserParkingRequest = async () => axios.get("/user-parking")

export const createUserParkingRequest = async (userParking) => axios.post("/user-parking", userParking)

export const updateUserParkingRequest = async (uuid, userParking) => axios.put(`/user-parking/${uuid}`, userParking)

export const deleteUserParkingRequest = async (uuid) => axios.delete(`/user-parking/${uuid}`)
