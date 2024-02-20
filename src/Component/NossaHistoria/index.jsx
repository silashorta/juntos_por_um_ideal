import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';

const images = {
    image1: '1.jpg',
    image3: '3.jpg',
    image5: '5.jpg',

};

function NossaHistoria() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <section
            className='max-w-full flex flex-col gap-8 px-4 py-8 lg:p-16 bg-gray-200'>
            <motion.h2
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className='font-bebas-neue text-4xl text-dark-blue'>Nossa História</motion.h2>
            <motion.section
                className=''>
                <article className='flex flex-col lg:flex-row gap-8'>
                    <motion.h3
                        ref={ref}
                        animate={{ y: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                        transition={{ ease: "easeOut", duration: 1 }}
                        className='lg:w-1/2 text-5xl text-gray-600'>Como tudo começou
                    </motion.h3>
                    <motion.p
                        ref={ref}
                        animate={{ y: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                        transition={{ ease: "easeOut", duration: 1 }}
                        className='lg:w-1/2 text-lg'>Nossa história remonta ao ano de 2015, quando um grupo apaixonado de motociclistas, cientes das demandas e desafios enfrentados pela comunidade de motociclistas, decidiu unir forças para criar algo verdadeiramente significativo. Surgiu assim a ONG Mãos Solidárias. Movidos pelo espírito de solidariedade e pela vontade de fazer a diferença, esses visionários iniciaram uma jornada que moldaria o futuro do motociclismo em nosso país.
                    </motion.p>
                </article>
            </motion.section>
{/*             <section className='bg-red-500'>
                <Swiper
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper overflow-hidden">
                    {Object.values(images).map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={`images/obra/${image}`} alt="" className='w-full object-cover' style={{ height: '36rem' }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section> */}
        </section>
    );
}

export default NossaHistoria;
