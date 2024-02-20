import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import Carroussel from './Carroussel'

function Depoimentos() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const images = [
        'images/depoimentos/5.mp4',
        'images/depoimentos/6.mp4',
        'images/depoimentos/7.mp4',
        'images/depoimentos/8.mp4'
    ]

    return (
        <motion.section
        id='depoimentos'
            ref={ref}
            animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
            transition={{ ease: "easeIn", duration: 1 }}
            className='flex flex-col'
        >
            <div className='w-screen overflow-hidden'>
                <Carroussel images={images} />
            </div>
        </motion.section>
    )
}

export default Depoimentos
