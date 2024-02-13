import React from 'react';
import Modal from 'react-modal';

import { IoMdClose } from "react-icons/io";


function ImageModal({ isOpen, imageUrl, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={{
        overlay: {
          zIndex: 9999 // Define um z-index maior para o overlay do modal
        },
        content: {
          zIndex: 9999, // Define um z-index maior para o conteúdo do modal
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <button onClick={onRequestClose} className='absolute top-4 right-4 text-red-600 bg-slate-100 rounded-lg p-1'><IoMdClose /></button>
      <img src={`${imageUrl}`} alt="Imagem" style={{ maxWidth: '100%' }} />
    </Modal>
  );
}

export default ImageModal;
