import { Button, Checkbox, Label, TextInput, Modal, Select } from "flowbite-react";

import { useForm } from 'react-hook-form';
import { useSettingsVehicle } from '../../context/SettingsVehicleContext';
import { useEffect } from "react";

export function BusinessFormModal(props) {
  return (
    <>
      <Modal.Header>Registrar settings</Modal.Header>
      <Modal.Body>
        <p>formulario settings</p>
      </Modal.Body>
    </>
  )
}