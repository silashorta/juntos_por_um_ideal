import React from 'react'
import HeroBanner from './HeroBanner'

import fotoHero from '../../../public/images/Designsemnome.png'
import logo from '../../../public/images/anr_logo.png'

function Hero() {
    return (
        <section>
            <div className='h-full min-h-auto flex flex-col lg:flex-row justify-start gap-8'
                style={{ backgroundImage: `url(${fotoHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <HeroBanner />
            </div>
            <div className='flex flex-col md:flex-row'>
        <article className='lg:w-1/2 flex flex-col p-4 lg:p-16 gap-4 bg-stone-400 bg-opacity-40'>
          <h3 className='font-lilita-one text-dark-blue  text-3xl text-center text-white flex flex-col gap-8'>Nossa Missão</h3>
          <p className='font-varela-round text-gray-900'>Na ONG Mãos Solidárias, nossa missão é apoiar motociclistas e suas comunidades locais, oferecendo serviços sociais essenciais e promovendo a segurança e o bem-estar dos motociclistas em toda a região. Estamos comprometidos em ser um recurso confiável e solidário para motociclistas em momentos de necessidade.</p>
        </article>
        <article className='lg:w-1/2 flex flex-col p-4 lg:p-16 rounded gap-4 bg-stone-400 bg-opacity-40'>
          <h3 className='font-lilita-one text-dark-blue  text-3xl text-center text-white'>Por Que Existimos</h3>
          <p className='font-varela-round text-gray-900'>Acreditamos no poder da solidariedade e da comunidade para fazer a diferença na vida das pessoas. Como motociclistas apaixonados, reconhecemos os desafios únicos enfrentados pela comunidade de motociclistas e estamos dedicados a fornecer apoio e assistência quando mais necessário. Estamos aqui para ajudar nossos companheiros motociclistas a superar dificuldades e construir um futuro mais seguro e próspero para todos.</p>
        </article>
      </div>
        </section>
    )
}

export default Hero
