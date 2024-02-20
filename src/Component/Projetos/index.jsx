import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ImageModal from '../Modal/Modal';
import { motion, useInView } from 'framer-motion';

function Projetos() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const [acaoSocialModalIsOpen, setAcaoSocialModalIsOpen] = useState(false);
  const [jiujitsuModalIsOpen, setJiujitsuModalIsOpen] = useState(false);
  const [kickboxingModalIsOpen, setkickBoxingModalIsOpen] = useState(false);
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
      image17: '17.jpg',
      image18: '18.jpg'
    },
    videos: {
      video2: '2.mp4',
      video3: '3.mp4',
      video4: '4.mp4',
      video5: '5.mp4'
    }
  }];

  const jiujitsu = [{
    images: {
      image1: '1.jpg',
      image5: '2.jpg',
      image6: '3.jpg',
      image7: '4.jpg',
      image8: '5.jpg',
      image9: '6.jpg',
      image10: '7.jpg',
      image11: '9.jpg',
      image12: '10.jpg',
      image13: '11.jpg'
    },
  }]

  const kickboxing = [{
    images: {
      image1: '1.jpg',
      image5: '2.jpg',
      image6: '3.jpg'
    }
  }]

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setAcaoSocialModalIsOpen(true);
  };

  const openJiujitsuModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setJiujitsuModalIsOpen(true);
  };

  const openKickBoxingModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setkickBoxingModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setAcaoSocialModalIsOpen(false);
    setJiujitsuModalIsOpen(false);
    setkickBoxingModalIsOpen(false)
  };

  return (
    <motion.section
    id='projetos'
    ref={ref}
    animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
    transition={{ ease: "easeIn", duration: 1 }}
    className='max-w-screen px-4 py-8 lg:p-16 flex flex-col gap-4 bg-stone-50'>
      <h2 className='font-bebas-neue text-4xl text-dark-blue'>Projetos</h2>
      <div className='flex flex-col gap-16'>
        <motion.section
          className='flex flex-col gap-4'>
          <h3 className='text-3xl text-gold font-bold font-outfit'>Primeira Ação Social</h3>
          <article className='flex flex-col lg:flex-row'>
            {/* Carrossel para vídeos */}
            <div className='lg:w-1/2 h-auto'>
              <div className='bg-zinc-200 p-4 rounded h-full flex'>
                <Swiper pagination={true} controller={true} modules={[Pagination]} className="mySwiper pointer">
                  {acaoSocial[0].videos && Object.values(acaoSocial[0].videos).map((video, i) => (
                    <SwiperSlide key={i} className='h-full flex justify-center items-center' >
                      <video controls className='w-full max-h-80 rounded' >
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
              <div className='bg-zinc-200 p-4 rounded h-full flex flex-wrap overflow-y-scroll gap-2'>
                {acaoSocial[0].images && Object.values(acaoSocial[0].images).map((imagem, i) => (
                  <img key={i} src={`images/primeira_acao_social/${imagem}`} alt={`Imagem ${i + 1}`}
                    className='w-36 h-36 object-cover flex gap-4 rounded m-auto cursor-pointer'
                    onClick={() => openModal(`images/primeira_acao_social/${imagem}`)} style={{ width: '' }} />
                ))}
              </div>
            </div>
          </article>
          {/* Modal para exibir a imagem */}
          <ImageModal isOpen={acaoSocialModalIsOpen} imageUrl={selectedImage} onRequestClose={closeModal} className='' />
        </motion.section>


        <motion.section
          className='flex flex-col gap-4'>
          <h3 className='text-3xl text-gold font-bold font-outfit'>Projeto JiuJitsu</h3>
          <article className='flex flex-col lg:flex-row gap-4'>
            {/* Carrossel para imagens */}
            <div className='h-96 lg:h-auto '>
              <div className='bg-zinc-200 p-4 rounded h-full flex flex-wrap overflow-y-scroll gap-2'>
                {jiujitsu[0].images && Object.values(jiujitsu[0].images).map((imagem, i) => (
                  <img key={i} src={`images/projeto_jiujitsu/${imagem}`} alt={`Imagem ${i + 1}`}
                    className='w-36 h-36 object-cover object-center flex gap-4 rounded m-auto cursor-pointer'
                    onClick={() => openJiujitsuModal(`images/projeto_jiujitsu/${imagem}`)} style={{ width: '' }} />
                ))}
              </div>
            </div>
          </article>
          {/* Modal para exibir a imagem */}
          <ImageModal isOpen={jiujitsuModalIsOpen} imageUrl={selectedImage} onRequestClose={closeModal} className='' />
        </motion.section>


        <motion.section
          className='flex flex-col gap-4'>
          <h3 className='text-3xl text-gold font-bold font-outfit'>Projeto KickBoxing</h3>
          <article className='flex flex-col lg:flex-row gap-4'>
            {/* Carrossel para imagens */}
            <div className='lg:h-auto w-full'>
              <div className='bg-zinc-200 p-4 rounded h-full flex flex-wrap gap-2 overflow-y-scroll'>
                {kickboxing[0].images && Object.values(kickboxing[0].images).map((imagem, i) => (
                  <img key={i} src={`images/projeto_kickboxing/${imagem}`} alt={`Imagem ${i + 1}`}
                    className='w-40 h-40 object-cover object-top flex gap-4 rounded m-auto cursor-pointer'
                    onClick={() => openKickBoxingModal(`images/projeto_kickboxing/${imagem}`)} style={{ width: '' }} />
                ))}
              </div>
            </div>
          </article>
          {/* Modal para exibir a imagem */}
          <ImageModal isOpen={kickboxingModalIsOpen} imageUrl={selectedImage} onRequestClose={closeModal} className='' />
        </motion.section>
      </div>
    </motion.section>
  );
}

export default Projetos;
