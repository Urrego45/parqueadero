import { Button, Checkbox, Label, TextInput, Modal, Select } from "flowbite-react";

import { useForm } from 'react-hook-form';
import { useBusiness } from '../../context/BusinessContext';
import { useEffect } from "react";

export function BusinessFormModal(props) {
  const { register, handleSubmit, setValue } = useForm()
  const { getBusiness, createBusiness, updateBusiness } = useBusiness()

  useEffect((() => {

    async function loadBusiness () {
      if (props.uuid) {
        const business = await getBusiness(props.uuid)
        console.log(business)

        setValue('nombre', business[0].nombre)
        setValue('direccion', business[0].direccion)
        setValue('telefono', business[0].telefono)
      }
    }
    loadBusiness()
  }), [])


  const onSubmit = handleSubmit( async (data) => {
    console.log(data);
    if (props.uuid) {
      console.log('actualizar')
      await updateBusiness(props.uuid, data)
    } else {
      await createBusiness(data)
    }

    // window.location.replace('/users');
    // // setReload(true)
    // // navigate('/users')
  })

  // nombre
  // direccion
  // telefono

  return (
    <>
      <Modal.Header>Registrar negocios</Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit} className="flex max-w-md flex-col gap-4">

          <div className="grid grid-flow-col justify-stretch space-x-4">
            <div className="">
              <Label htmlFor="name" value="Nombre completo" />
              <TextInput {... register('nombre')} id="name" type="text" required shadow />
            </div>

            <div className="">
              <Label htmlFor="address" value="Dirección" />
              <TextInput {... register('direccion')} id="address" type="text" required shadow />
            </div>
          </div>

          <div className="grid grid-flow-col justify-stretch space-x-4">
            <div>
              <Label htmlFor="tel" value="Teléfono" />
              <TextInput {... register('telefono')} id="tel" type="text" required shadow />
            </div>
          </div>

          <Button type="submit">Registrar nuevo negocio</Button>

        </form>
      </Modal.Body>
    </>
  )
}