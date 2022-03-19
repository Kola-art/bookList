import React from 'react';
import '../../styles/modal.css'

const Modal = ({modal, setModal, addModal, setAddModal}) => {
  let modalClass = ['modal'];

  const showModal = () => {
    modalClass.push('show'); 
    setTimeout(() => {
      modalClass.pop('show');
      setModal(false)
    },2000);
  }

  if(modal) {
    showModal();
  }
    
  return (
    <div className={modalClass.join(' ')}>
      <span>Succes!</span>
    </div>
  )
}
export default Modal;