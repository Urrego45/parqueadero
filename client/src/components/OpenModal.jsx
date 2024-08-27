import { Button, Modal } from "flowbite-react";
import { useState } from "react";

import { UserFormModal } from './Modals/UserFormModal';


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

    </Modal>
    


    </>
  )
}

