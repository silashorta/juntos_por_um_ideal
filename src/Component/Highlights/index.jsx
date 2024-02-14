import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'
import CountUp from 'react-countup';

function Highlights() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <section
            ref={ref}
            className='flex flex-col lg:flex-row px-4 py-8 lg:p-16 justify-between gap-8'>
            <div className='lg:w-1/2 flex flex-col gap-8'>
                <div className='flex flex-col gap-4'>
                    <motion.h3
                        animate={{ x: isInView ? 0 : 100 }}
                        transition={{ ease: "easeOut", duration: .5 }}
                        className='text-5xl text-gray-600'>Realizações em Destaque
                    </motion.h3>
                    <motion.p
                        animate={{ opacity: isInView ? 1 : 0 }}
                        transition={{ ease: "easeOut", duration: .5 }}
                        className='text-lg'>Nossa organização tem se destacado ao longo dos anos por suas conquistas notáveis, refletindo nosso compromisso com a comunidade de motociclistas e seu bem-estar. Aqui estão alguns dos nossos marcos mais significativos:
                    </motion.p>
                </div>
                <div className='flex flex-col gap-16'>
                    <div className='flex justify-around'>
                        <motion.div
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ ease: "circInOut", duration: 1 }}
                            className='lg:w-1/2'>
                            <div className='text-5xl font-bold font-outfit text-dark-gold'>
                                <CountUp end={500} duration={5} />+
                            </div>
                            <div className='text-base text-dark-blue'>Projects completed</div>
                        </motion.div>
                        <motion.div
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ ease: "circInOut", duration: 1.5 }}
                            className='lg:w-1/2'>
                            <div className='text-5xl font-bold font-outfit text-dark-gold'>
                                <CountUp end={200} duration={5} />%
                            </div>
                            <div className='text-base text-dark-blue'>Year on year growth</div>
                        </motion.div>
                    </div>
                    <div className='flex justify-around'>
                        <motion.div
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ ease: "circInOut", duration: 2 }}
                            className='lg:w-1/2'>
                            <div className='text-5xl font-bold font-outfit text-dark-gold'>
                                $<CountUp end={50} duration={5} />m
                            </div>
                            <div className='text-base text-dark-blue'>Funded</div>
                        </motion.div>
                        <motion.div
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ ease: "circInOut", duration: 2.5 }}
                            className='lg:w-1/2'>
                            <div className='text-5xl font-bold font-outfit text-dark-gold'>
                                <CountUp end={10} duration={5} />k
                            </div>
                            <div className='text-base text-dark-blue'>Downloads</div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/2'>
                <img src="images/pessoas-no-escritorio-durante-um-dia-de-trabalho.jpg" alt="Motociclistas unidos" className='w-full h-auto object-cover rounded shadow-md' />
            </div>
        </section>
    )
}

export default Highlights
