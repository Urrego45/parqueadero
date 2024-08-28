import { createContext, useContext, useState } from 'react';

import * as parkedApi from '../api/parked';

const ParkedContext = createContext()

export const useParked = () => {
  const context = useContext(ParkedContext)

  if (!context) {
    throw new Error("useUser must be used within an AuthProvider")
  }

  return context
}


export function ParkedProvider({ children }) {
  const [parkeds, setParkeds] = useState({})

  const getParkeds = async () => {
    try {
      const res = await parkedApi.getParkedsRequest()
      setParkeds(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getParked = async () => {
    try {
      const res = await parkedApi.getParkedRequest()
      return res
    } catch (error) {
      console.log(error)
    }
  }

  const createParked = async (parked) => {
    try {
      await parkedApi.createParkedRequest(parked)
    } catch (error) {
      console.log(error)
    }
  }

  const updateParked = async (uuid, parked) => {
    try {
      await parkedApi.updateParkedRequest(uuid, parked)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteParked = async (uuid) => {
    try {
      const res = await parkedApi.deleteParkedRequest(uuid)
      if (res.status === 204) setParkeds(parkeds.filter((parked) => parked.uuid !== uuid))
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <ParkedContext.Provider
      value={{
        parkeds,
        getParkeds,
        getParked,
        createParked,
        updateParked,
        deleteParked
      }}
    >

      {children}

    </ParkedContext.Provider>
  )

}
