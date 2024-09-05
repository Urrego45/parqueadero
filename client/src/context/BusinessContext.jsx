import { createContext, useContext, useState } from 'react'

import * as businessApi from '../api/business'


export const BusinessContext = createContext()

export const useBusiness = () => {
  console.log(BusinessContext)
  const context = useContext(BusinessContext)
  console.log(context)

  if (!context) {
    throw new Error("useBusiness must be used within an AuthProvider")
  }

  return context
}

export function BusinessProvider({ children }) {

  const [businesses, setBusinesses] = useState([])

  const getBusinesses = async () => {
    try {
      const res = await businessApi.getBusinessesRequest()
      setBusinesses(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getBusiness = async (uuid) => {
    try {
      const res = await businessApi.getBusinessRequest(uuid)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const createBusiness = async (business) => {
    try {
      await businessApi.createBusinessRequest(business)
    } catch (error) {
      console.log(error)
    }
  }

  const updateBusiness = async (uuid, business) => {
    try {
      await businessApi.updateBusinessRequest(uuid, business)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteBusiness = async (uuid) => {
    try {
      const res = await businessApi.deleteBusinessRequest(uuid)
      if (res.status === 204) setBusinesses(businesses.filter((business) => business.uuid != uuid))
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <BusinessContext.Provider
      value={{
        businesses,
        getBusinesses,
        getBusiness,
        createBusiness,
        updateBusiness,
        deleteBusiness,
      }}
    >

      {children}

    </BusinessContext.Provider>
  )
}
