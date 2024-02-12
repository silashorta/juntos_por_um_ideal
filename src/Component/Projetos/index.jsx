import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ImageModal from '../Modal/Modal';

function Projetos() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const acaoSocial = [{
    images: {
      image1: '1.jpg',
      image5: '5.jpg',
      image6: '6.jpg',
      image7: '7.jpg',
      image8: '8.jpg',
      image9: '9.jpg',
      image10: '10.jpg',
      image11: '11.jpg',
      image12: '12.jpg',
      image13: '13.jpg',
      image14: '14.jpg',
      image16: '16.jpg',
      image17: '17.jpg'
    },
    videos: {
      video2: '2.mp4',
      video3: '3.mp4',
      video4: '4.mp4',
    }
  }];

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setModalIsOpen(false);
  };

  return (
    <section className='p-4 lg:p-16 flex flex-col gap-4'>
      <h2 className='font-bebas-neue text-4xl text-dark-blue'>Projetos</h2>
      <h3 className='text-3xl text-gold font-bold font-outfit'>Primeira Ação Social</h3>
      <article className='flex flex-col lg:flex-row gap-4'>
        {/* Carrossel para vídeos */}
        <div className='lg:w-1/2 h-auto mr-4'>
          <div className='bg-zinc-100 p-4 rounded h-full flex'>
            <Swiper pagination={true} controller={true} modules={[Pagination]} className="mySwiper pointer">
              {acaoSocial[0].videos && Object.values(acaoSocial[0].videos).map((video, i) => (
                <SwiperSlide key={i} className='h-full flex justify-center items-center' >
                  <video controls className='w-5/6 max-h-80' >
                    <source src={`images/primeira_acao_social/${video}`} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Carrossel para imagens */}
        <div className='lg:w-1/2 h-96 '>
          <div className='bg-zinc-100 p-4 rounded h-full flex flex-wrap overflow-y-scroll'>
            {acaoSocial[0].images && Object.values(acaoSocial[0].images).map((imagem, i) => (
              <img key={i} src={`images/primeira_acao_social/${imagem}`} alt={`Imagem ${i + 1}`} className='mt-4 m-auto rounded max-w-full cursor-pointer' onClick={() => openModal(`../../../public/images/primeira_acao_social/${imagem}`)} />
            ))}
          </div>
        </div>
      </article>
      {/* Modal para exibir a imagem */}
      <ImageModal isOpen={modalIsOpen} imageUrl={selectedImage} onRequestClose={closeModal} />
    </section>
  );
}

export default Projetos;
