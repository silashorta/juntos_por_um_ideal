import React from 'react'

import logo from '../../../../public/images/anr_logo.png'
function HeroBanner() {
  return (
    <section className='flex flex-col items-center justify-center p-8 lg:p-16 gap-14'>
      <h2 className='text-7xl text-white text-center font-lilita-one text-gold'>Associação Nacional de Reabilitação</h2>
      <h2 className='text-8xl text-white text-center font-archivo-black text-amber-200'>JUNTOS POR UM IDEAL</h2>
{/*       <img src={logo} alt="" className='h-80' /> */}

    </section>
  )
}

export default HeroBanner
