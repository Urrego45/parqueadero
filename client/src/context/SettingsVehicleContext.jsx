import { createContext, useContext, useState } from 'react';

import * as settingsVehicleApi from '../api/settingsVehicles';


export const SettingsVehicleContext = createContext()

export const useSettingsVehicle = () => {
  const context = useContext(SettingsVehicleContext)

  if (!context) {
    throw new Error("useSettingsVehicle must be used within an AuthProvider")
  }
  return context
}

export function SettingVehicleProvider({ children }) {
  const [settingsVehicle, setSettingsVehicle] = useState([])

  const getSettingsVehicle = async () => {
    try {
      const res = await settingsVehicleApi.getSettingsVehiculeRequest()
      setSettingsVehicle(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getSettingVehicle = async (uuid) => {
    try {
      const res = await settingsVehicleApi.getSettingVehiculeRequest(uuid)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const createSettingVehicle = async (settingsVehicle) => {
    try {
      await settingsVehicleApi.createSettingsVehiculeRequest(settingsVehicle)
    } catch (error) {
      console.log(error)
    }
  }

  const updateSettingVehicle = async (uuid, settingsVehicle) => {
    try {
      await settingsVehicleApi.updateSettingsVehiculeRequest(uuid, settingsVehicle)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteSettingVehicle = async (uuid) => {
    try {
      const res = await settingsVehicleApi.deleteSettingsVehiculeRequest(uuid)
      if (res.status === 204) setSettingsVehicle(settingsVehicle.filter((settings) => settings.uuid !== uuid))
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <SettingsVehicleContext.Provider
     value={{
      settingsVehicle,
      getSettingsVehicle,
      getSettingVehicle,
      createSettingVehicle,
      updateSettingVehicle,
      deleteSettingVehicle
     }}
    >
      { children }
    </SettingsVehicleContext.Provider>
  )


}
