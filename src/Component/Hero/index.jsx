import React from 'react'
import HeroBanner from './HeroBanner'

import fotoHero from '../../../public/images/Designsemnome.png'
import logo from '../../../public/images/anr_logo.png'

function Hero() {
    return (
        <section>
            <div className='h-full min-h-screen flex flex-col lg:flex-row justify-start gap-8'
                style={{ backgroundImage: `url(${fotoHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <HeroBanner />
            </div>
        </section>
    )
}

export default Hero
