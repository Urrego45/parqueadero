import { Button, Checkbox, Label, TextInput, Modal, Select } from "flowbite-react";

import { useForm } from 'react-hook-form';
import { useParking } from '../../context/ParkingContext';
import { useEffect } from "react";

export function ParkingFormModal(props) {
  return (
    <>
      <Modal.Header>Registrar parking</Modal.Header>
      <Modal.Body>
        <p>formulario parking</p>
      </Modal.Body>
    </>
  )
}