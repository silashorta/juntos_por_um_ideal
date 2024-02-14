import React, { useRef } from 'react'

import { motion, useInView } from 'framer-motion'


function HeroBanner() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section
      ref={ref}
      className='md:w-1/2 h-auto lg:h-screen flex flex-col items-center justify-center p-8 lg:p-16 gap-14'>
      <motion.h2
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className='text-4xl lg:text-7xl text-center font-lilita-one text-dark-blue'>Associação Nacional de Reabilitação
      </motion.h2>
      <motion.h2
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className='text-6xl lg:text-8xl text-center font-archivo-black text-dark-gold'>JUNTOS POR UM IDEAL
      </motion.h2>
    </section>
  )
}

export default HeroBanner
