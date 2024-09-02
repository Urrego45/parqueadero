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

        setValue('nombre_completo', business[0].nombre_completo)
        setValue('correo', business[0].correo)
        setValue('telefono', business[0].telefono)
        setValue('cedula', business[0].cedula)
        setValue('rol', business[0].rol)
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

  return (
    <>
      <Modal.Header>Registrar negocios</Modal.Header>
      <Modal.Body>
        <p>formulario negocios</p>
      </Modal.Body>
    </>
  )
}