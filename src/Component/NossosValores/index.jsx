import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'

import { FaUsers, FaRegHandshake } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";

function NossosValores() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    // Array de objetos contendo as informações de cada valor
    const valores = [
        {
            icon: <FaUsers style={{ fontSize: '40px' }} />,
            title: 'Compromisso com a Comunidade e Solidariedade',
            description: 'Estamos comprometidos em fortalecer a comunidade de motociclistas através da solidariedade e cooperação mútua.'
        },
        {
            icon: <FaRegHandshake style={{ fontSize: '40px' }} />,
            title: 'Respeito e Apoio Mútuo',
            description: 'Valorizamos a diversidade e promovemos um ambiente de respeito e apoio dentro da comunidade de motociclistas.'
        },
        {
            icon: <IoMdHappy style={{ fontSize: '40px' }} />,
            title: 'Promover Segurança e Bem-Estar',
            description: 'Priorizamos a segurança dos motociclistas, promovendo práticas seguras de pilotagem e fornecendo recursos educacionais.'
        }
    ];

    return (
        <section
            key={ref}
            id='nossos-valores'
            className='overflow-hidden flex flex-col px-4 py-8 lg:p-16 gap-8'>
            <motion.h2
                key={ref}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                className='font-bebas-neue text-4xl text-dark-blue'>Nossos Valores
            </motion.h2>
            <div className='flex flex-col gap-6 text-center'>
                <motion.h3
                    key={ref}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ ease: "easeIn", duration: 0.5 }}
                    className='text-5xl text-gray-600'>O que valorizamos
                </motion.h3>
                <p className='text-lg'>Nossos valores são a base de tudo o que fazemos. Eles representam os princípios pelos quais vivemos e orientam todas as nossas ações e decisões:</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
                {/* Mapeando os valores e renderizando dinamicamente */}
                {valores.map((valor, index) => (
                    <div
                        ref={ref}
                        key={index} className='flex flex-col text-center gap-2'>
                        <hr className=''></hr>
                        <motion.div
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ ease: "easeIn", duration: 1 }}
                            className='h-full m-auto text-dark-blue'>{valor.icon}</motion.div>
                        <motion.h3
                            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.75 }}
                            transition={{ ease: "easeIn", duration: 0.5 }}
                            className='h-full font-archivo-black text-dark-blue'>{valor.title}</motion.h3>
                        <motion.p
                            animate={{ y: isInView ? 0 : 10, opacity: isInView ? 1 : 0 }}
                            transition={{ ease: "easeIn", duration: 1 }}
                            className='h-full font-varela-round text-lg'>{valor.description}</motion.p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default NossosValores;
