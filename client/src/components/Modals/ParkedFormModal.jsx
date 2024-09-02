import { Button, Checkbox, Label, TextInput, Modal, Select } from "flowbite-react";

import { useForm } from 'react-hook-form';
import { useParked } from '../../context/ParkedContext';
import { useEffect } from "react";

export function ParkedFormModal(props) {
  return (
    <>
      <Modal.Header>Registrar parqueadero</Modal.Header>
      <Modal.Body>
        <p>formulario parqueadero</p>
      </Modal.Body>
    </>
  )
}