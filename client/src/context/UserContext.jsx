import { createContext, useContext, useState } from 'react';

import * as userApi from '../api/user';



const UserContext = createContext()

export const useUser = () => {
  console.log(UserContext, '---------------->>>>')
  const context = useContext(UserContext)
  console.log(context, 'usando') 

  if (!context) {
    throw new Error("useUser must be used within an AuthProvider")
  }
  return context
}



export function UserProvider({ children }) {

  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      const res = await userApi.getUserstRequest()
      console.log(res.data);
      setUsers(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  const createUser = async (user) => {
    try {
      const a = await userApi.createUsertRequest(user)
      console.log(a);
    } catch (error) {
      console.log(error.response.data), 'error';
    }
  }

  const updateUser = async (uuid, user) => {
    try {
      await userApi.updateUsertRequest(uuid, user)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteUser = async (uuid) => {
    try {
      const res = await userApi.deleteUsertRequest(uuid)
      if (res.status === 204) setUsers(users.filter((user) => user.uuid !== uuid))
    } catch (error) {
      console.log(error);
    }
  }

  const getUser = async (uuid) => {
    try {
      const res = await userApi.getUsertRequest(uuid)
      return res.data
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <UserContext.Provider
      value={{
        users,
        getUsers,
        createUser,
        updateUser,
        deleteUser,
        getUser,
      }}
    >

      {children}

    </UserContext.Provider>
  )
}

export default UserContext