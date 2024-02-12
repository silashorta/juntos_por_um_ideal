import React from 'react';
import Modal from 'react-modal';

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
          zIndex: 9999 // Define um z-index maior para o conteúdo do modal
        },
        heigth: '100vh'
      }}
    >
      <button onClick={onRequestClose}>Fechar Modal</button>
      <img src={`../../../public/images/primeira_acao_social/${imageUrl}`} alt="Imagem" className='m-auto h-full'/>
    </Modal>
  );
}

export default ImageModal;
