import { Button, Checkbox, Label, TextInput, Modal, Select } from "flowbite-react";

import { useForm } from 'react-hook-form';
import { useUser } from '../../context/UserContext';
import { useNavigate, } from 'react-router-dom';
import { useEffect } from "react";

import { roles } from '../../constants/User';

export function UserModal(props) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { createUser, updateUser, getUser } = useUser()
  const navigate = useNavigate()

  
  useEffect((() => {

    async function loadUser () {
      if (props.uuid) {
        const user = await getUser(props.uuid)
      }
    }
    loadUser()
  }), [])

  const onSubmit = handleSubmit( async (data) => {
    console.log(data);
    if (props.uuid) {
      await updateUser(props.uuid, data)
    } else {
      await createUser(data)
    }

    navigate('/users')
  })

  return (
    <>
      <Modal.Header>Registrar Usuario</Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit} className="flex max-w-md flex-col gap-4">

          <div className="grid grid-flow-col justify-stretch space-x-4">
            <div className="">
              <Label htmlFor="name" value="Nombre completo" />
              <TextInput id="name" type="text" required shadow />
            </div>

            <div className="">
              <Label htmlFor="email" value="Correo electronico" />
              <TextInput id="email" type="email" placeholder="name@flowbite.com" required shadow />
            </div>
          </div>

          <div className="grid grid-flow-col justify-stretch space-x-4">
            <div className="">
              <Label htmlFor="tel" value="Teléfono" />
              <TextInput id="tel" type="text" required shadow />
            </div>

            <div className="">
              <Label htmlFor="cel" value="Cédula" />
              <TextInput id="cel" type="text" required shadow />
            </div>
          </div>


          <div className="grid grid-flow-col justify-stretch space-x-4">
            <div className="block">
              <Label htmlFor="password" value="Contraseña" />
              <TextInput id="password" type="password" required shadow />
            </div>

            <div className="block">
              <Label htmlFor="repeat-password" value="Repetir contraseña" />
              <TextInput id="repeat-password" type="password" required shadow />
            </div>
          </div>

          <div className="grid grid-flow-col justify-stretch space-x-4">
            <div className="">
              <Select>
                <option value={0}>{roles[0]}</option>
                <option value={1}>{roles[1]}</option>
                <option value={2}>{roles[2]}</option>
              </Select>
            </div>
          </div>


          <Button type="submit">Register new account</Button>

        </form>
      </Modal.Body>
    </>

    
  )
}

