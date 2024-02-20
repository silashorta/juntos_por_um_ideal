import React from 'react'
import logo from '../../../public/images/anr_logo.png'

import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

function Footer() {
    return (
        <section className='flex flex-col gap-8 p-4 lg:p-16 bg-gray-900 text-white'>
            <div className='flex flex-col lg:flex-row gap-8 justify-between'>
                <div className='flex flex-col gap-4'>
                    <img src={logo} alt="" className='h-20 w-20' />
                    <h4>Associação Nacional de Reabilitação JUNTOS POR UM IDEAL</h4>
                    <small>CNPJ:  39.325.877/ 0001-98</small>
                    <small>Avenida Monsenhor Félix, nº 409, Irajá, RJ</small>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.752133422329!2d-43.328099525818224!3d-22.848658135793965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997cb23a3adb2b%3A0x330508a9acf1eb25!2sAv.%20Monsenhor%20F%C3%A9lix%2C%20409%20-%20Iraj%C3%A1%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021361-131!5e0!3m2!1spt-BR!2sbr!4v1707504644021!5m2!1spt-BR!2sbr" width="" height="" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <nav className='flex lg:flex-col justify-center gap-4 text-sm'>
                    <a href="">Nossa História</a>
                    <a href="">Parceiros</a>
                    <a href="">Nossos Valores</a>
                    <a href="">Projetos</a>
                </nav>
                <nav className='flex lg:flex-col justify-center gap-8'>
                    <FaInstagram className='text-3xl'/>
                    <FaFacebookF className='text-3xl'/>
                </nav>
            </div>
            <div>

            </div>
            <hr />
            <div className='text-center'>
                <small>Desenvolvido por</small>
            </div>
        </section>
    )
}

export default Footer
