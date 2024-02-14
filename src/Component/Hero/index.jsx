import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import HeroBanner from './HeroBanner';
import fotoHero from '../../../public/images/hero_image.jpg';

function Hero() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <section ref={ref} className=''>
            <div className='h-full min-h-96 flex flex-col lg:flex-row justify-start gap-8'
                style={{ backgroundImage: `url(${fotoHero})`, backgroundSize: 'cover', backgroundPosition: 'right' }}>
                <div className='hidden md:block'>
                    <HeroBanner />
                </div>
            </div>
            <div className='md:hidden'>
                <HeroBanner />
            </div>
            <motion.div
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className='flex flex-col md:flex-row '>
                <motion.article
                ref={ref}
                    animate={{ x: isInView ? 0 : -100}}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='lg:w-1/2 flex flex-col px-4 py-8 lg:p-16 gap-4 bg-stone-300 bg-opacity-40'>
                    <h3 className='font-lilita-one text-gold  text-3xl text-center flex flex-col gap-8'>Nossa Missão</h3>
                    <p className='font-varela-round text-gray-900 text-lg'>Na ONG Mãos Solidárias, nossa missão é apoiar motociclistas e suas comunidades locais, oferecendo serviços sociais essenciais e promovendo a segurança e o bem-estar dos motociclistas em toda a região. Estamos comprometidos em ser um recurso confiável e solidário para motociclistas em momentos de necessidade.</p>
                </motion.article>
                <motion.article 
                animate={{ x: isInView ? 0 : 100 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className='lg:w-1/2 flex flex-col px-4 py-8 lg:p-16 rounded gap-4 bg-stone-300 bg-opacity-40'>
                    <h3 className='font-lilita-one text-gold  text-3xl text-center'>Por Que Existimos</h3>
                    <p className='font-varela-round text-gray-900 text-lg'>Acreditamos no poder da solidariedade e da comunidade para fazer a diferença na vida das pessoas. Como motociclistas apaixonados, reconhecemos os desafios únicos enfrentados pela comunidade de motociclistas e estamos dedicados a fornecer apoio e assistência quando mais necessário. Estamos aqui para ajudar nossos companheiros motociclistas a superar dificuldades e construir um futuro mais seguro e próspero para todos.</p>
                </motion.article>
            </motion.div>
        </section>
    )
}

export default Hero;
