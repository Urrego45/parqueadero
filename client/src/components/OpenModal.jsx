import { Button, Modal } from "flowbite-react";
import { useState } from "react";

import { UserFormModal } from './Modals/UserFormModal';

import { BusinessFormModal } from './Modals/BusinessFormModal';
import { ParkedFormModal } from './Modals/ParkedFormModal';
import { ParkingFormModal } from './Modals/ParkingFormModal';
import { PriceFormModal } from './Modals/PriceFormModal';
import { SettingsVehicleFormModal } from './Modals/SettingsVehicleFormModal';


export function OpenModal(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="flex flex-wrap gap-4">
      <Button onClick={() => setOpen(true)}>{props.action} {props.form}</Button>
    </div>

    <Modal
      show={open}
      position={'center'}
      onClose={() => setOpen(false)}
    >
      {props.form === 'usuario' ? <UserFormModal uuid={props.uuid} /> : null}

      {props.form === 'negocios' ? <BusinessFormModal uuid={props.uuid} /> : null}
      {props.form === 'usuario' ? <ParkedFormModal uuid={props.uuid} /> : null}
      {props.form === 'usuario' ? <ParkingFormModal uuid={props.uuid} /> : null}
      {props.form === 'precio' ? <PriceFormModal uuid={props.uuid} /> : null}
      {props.form === 'ajuste vehiculo' ? <SettingsVehicleFormModal uuid={props.uuid} /> : null}

    </Modal>
    


    </>
  )
}

