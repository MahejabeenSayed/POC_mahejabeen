import React, { useRef, useEffect, useState } from "react";
import "./Modal.scss";
import Button from "../Button/Button";


const Modal = ({
  isOpen,
  hasCloseBtn = true,
  onClose,
  onConfirm,
  children
}) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleConfirmModal = () => {
    if(onConfirm) {
      onConfirm()
    }
        setModalOpen(false);

  }
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        onClose()
      }
    }
  }, [isModalOpen]);

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal">
      
      <div>
        {children}

        </div>
      <div className="actions">
        <Button variant="primary-blue" onClick={handleConfirmModal}>
          Yes
        </Button>

        {hasCloseBtn && ( <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        )}
      </div>
    </dialog>
  );
};

export default Modal;