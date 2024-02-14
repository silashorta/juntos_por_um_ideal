import React from 'react'

import logo from '../../../../public/images/anr_logo.png'
function HeroBanner() {
  return (
    <section className='md:w-1/2 h-auto lg:h-screen flex flex-col items-center justify-center p-8 lg:p-16 gap-14'>
      <h2 className='text-5xl lg:text-7xl text-center font-lilita-one text-dark-blue'>Associação Nacional de Reabilitação</h2>
      <h2 className='text-7xl lg:text-8xl text-center font-archivo-black text-dark-gold'>JUNTOS POR UM IDEAL</h2>
{/*       <img src={logo} alt="" className='h-80' /> */}

    </section>
  )
}

export default HeroBanner
