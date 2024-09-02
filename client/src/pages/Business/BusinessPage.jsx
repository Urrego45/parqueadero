import { useEffect } from 'react';
import { useBusiness } from '../../context/BusinessContext';

import { OpenModal } from '../../components/OpenModal';

export default function Business() {
  const { getBusinesses, businesses } = useBusiness()

  useEffect(() => {
    getBusinesses()
  }, [])

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10 px-10">

      <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">

        <OpenModal action="Crear" form="negocios" />

        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>

          <input type="text" id="table-search-users" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
        </div>

      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre - Correo electronico
            </th>
            <th scope="col" className="px-6 py-3">
              Cedula
            </th>
            <th scope="col" className="px-6 py-3">
              Rol
            </th>
            <th scope="col" className="px-6 py-3">
              Estado
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>

          {users.map(user => (
            <tr key={user.uuid} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <div className="ps-3">
                  <div className="text-base font-semibold">{user.nombre_completo}</div>
                  <div className="font-normal text-gray-500">{user.correo}</div>
                </div>  
              </th>
              <td className="px-6 py-4">
                {user.cedula}
              </td>
              <td className="px-6 py-4">
                {user.rol}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> {user.estado}
                </div>
              </td>
              <td className="px-6 py-4">
                <OpenModal action="Editar" form="negocio" uuid={user.uuid} />

              </td>
            </tr>
              
            ))
          }

        </tbody>
      </table>
    
    </div>
  )
}
