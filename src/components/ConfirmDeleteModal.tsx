import type { FC } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface ConfirmDeleteModalProp {
  deleteSubject: string;
  open: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmDeleteModal: FC<ConfirmDeleteModalProp> = (props) => {
  const { open, deleteSubject, onConfirm, onClose } = props;
  return (
    <>
      <Modal isOpen={open}>
        <ModalHeader
          toggle={onClose}
        >{`Confirm Delete ${deleteSubject}`}</ModalHeader>
        <ModalBody>
          {`Are you sure you want to delete this ${deleteSubject}`}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={onConfirm}>
            Confirm Delete
          </Button>{" "}
          <Button color="secondary" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ConfirmDeleteModal;
