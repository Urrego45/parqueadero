import { createContext, useContext, useState } from 'react';

import * as parkingApi from '../api/parking';


export const ParkingContext = createContext()

export const useParking = () => {
  const context = useContext(ParkingContext)

  if (!context) {
    throw new Error("useParking must be used within an AuthProvider")
  }
  return context
}

export function ParkingProvider({ children }) {
  const [parkings, setParkings] = useState([])

  const getParkings = async () => {
    try {
      const res = await parkingApi.getParkingsRequest()
      setParkings(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getParking = async (uuid) => {
    try {
      const res = await parkingApi.getParkingRequest(uuid)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const createParking = async (parking) => {
    try {
      await parkingApi.createParkingRequest(parking)
    } catch (error) {
      console.log(error)
    }
  }

  const updateParking = async (uuid, parking) => {
    try {
      await parkingApi.updateParkingRequest(uuid, parking)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteParking = async (uuid) => {
    try {
      const res = await parkingApi.deleteParkingRequest(uuid)
      if (res.status === 204) setParkings(parkings.filter((parking) => parking.uuid !== uuid))
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <ParkingContext.Provider
      value={{
        parkings,
        getParkings,
        getParking,
        createParking,
        updateParking,
        deleteParking
      }}
    >

      { children }
    </ParkingContext.Provider>
  )

}

