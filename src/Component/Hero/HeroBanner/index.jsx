import React from 'react'

import logo from '../../../../public/images/anr_logo.png'
function HeroBanner() {
  return (
    <section className='flex flex-col items-center justify-center p-8 lg:p-16 gap-14'>
      <h2 className='text-8xl text-white text-center font-bebas-neue'>Associação Nacional de Reabilitação</h2>
      <h2 className='text-9xl text-white text-center font-bebas-neue'>JUNTOS POR UM IDEAL</h2>
      <img src={logo} alt="" className='h-80' />
      <div className='flex flex-col md:flex-row gap-10'>
        <article className='lg:w-1/2 flex flex-col p-4 rounded gap-4 bg-stone-800 bg-opacity-40'>
          <h3 className='font-lilita-one text-gold uppercase text-3xl text-center text-white flex flex-col gap-8'>Nossa Missão</h3>
          <p className='font-varela-round text-white'>Na ONG Mãos Solidárias, nossa missão é apoiar motociclistas e suas comunidades locais, oferecendo serviços sociais essenciais e promovendo a segurança e o bem-estar dos motociclistas em toda a região. Estamos comprometidos em ser um recurso confiável e solidário para motociclistas em momentos de necessidade.</p>
        </article>
        <article className='lg:w-1/2 flex flex-col p-4 rounded gap-4 bg-stone-800 bg-opacity-40'>
          <h3 className='font-lilita-one text-gold uppercase text-3xl text-center text-white'>Por Que Existimos</h3>
          <p className='font-varela-round text-white'>Acreditamos no poder da solidariedade e da comunidade para fazer a diferença na vida das pessoas. Como motociclistas apaixonados, reconhecemos os desafios únicos enfrentados pela comunidade de motociclistas e estamos dedicados a fornecer apoio e assistência quando mais necessário. Estamos aqui para ajudar nossos companheiros motociclistas a superar dificuldades e construir um futuro mais seguro e próspero para todos.</p>
        </article>
      </div>
    </section>
  )
}

export default HeroBanner
