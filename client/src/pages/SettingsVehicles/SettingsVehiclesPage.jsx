import { useEffect } from 'react';
import { Button } from "flowbite-react";

import { useSettingsVehicle } from '../../context/SettingsVehicleContext';

import { OpenModal } from '../../components/OpenModal';

export default function SettingsVehicles() {
  const { getSettingsVehicle, settingsVehicle, deleteSettingVehicle } = useSettingsVehicle()

  useEffect(() => {
    getSettingsVehicle()
  }, [])

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10 px-10">

      <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">

        <OpenModal action="Crear" form="ajuste vehiculo" />

        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>

          <input type="text" id="table-search-businesses" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
        </div>

      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Parqueadero
            </th>
            <th scope="col" className="px-6 py-3">
              Tipo de Vehiculo
            </th>
            <th scope="col" className="px-6 py-3">
              Cupos
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>

          {settingsVehicle.map(settings => (
            <tr key={settings.uuid} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">
                {settings.parqueadero}
              </td>
              <td className="px-6 py-4">
                {settings.tipo_vehiculo}
              </td>
              <td className="px-6 py-4">
                {settings.cupos}
              </td>
              <td className="px-6 py-4">
                <OpenModal action="Editar" form="ajuste vehiculo" uuid={settings.uuid} />
              </td>
              <td className="px-6 py-4">
                <Button onClick={() => deleteSettingVehicle(settings.uuid)}>Eliminar</Button>
              </td>

            </tr>
              
            ))
          }

        </tbody>
      </table>
    
    </div>
  )
}

