import { Button, Checkbox, Label, TextInput, Modal, Select } from "flowbite-react";

import { useForm } from 'react-hook-form';
import { usePrice } from '../../context/PriceContext';
import { useEffect } from "react";

export function PriceFormModal(props) {
  return (
    <>
      <Modal.Header>Registrar precio</Modal.Header>
      <Modal.Body>
        <p>formulario precio</p>
      </Modal.Body>
    </>
  )
}