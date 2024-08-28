import { createContext, useContext, useState } from 'react';

import * as priceApi from '../api/price';



const PriceContext = createContext()

export const usePrice = () => {
  const context = useContext(PriceContext)

  if (!context) {
    throw new Error("usePrice must be used within an AuthProvider")
  }
  return context
}


export function PriceProvider({ children }) {
  const [prices, setPrices] = useState([])

  const getPrices = async () => {
    try {
      const res = await priceApi.getPricesRequest()
      setPrices(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getPrice = async (uuid) => {
    try {
      const res = await priceApi.getPriceRequest(uuid)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const createPrice = async (price) => {
    try {
      await priceApi.createPriceRequest(price)
    } catch (error) {
      console.log(error)
    }
  }

  const updatePrice = async (uuid, price) => {
    try {
      await priceApi.updatePriceRequest(uuid, price)
    } catch (error) {
      console.log(error)
    }
  }

  const deletePrice = async (uuid) => {
    try {
      const res = await priceApi.deletePriceRequest(uuid)
      if (res.status === 204) setPrices(prices.filter((price) => price.uuid !== uuid))
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <PriceContext.Provider
      value={{
        prices,
        getPrices,
        getPrice,
        createPrice,
        updatePrice,
        deletePrice,
      }}
    >
      { children }
    </PriceContext.Provider>
  )


}