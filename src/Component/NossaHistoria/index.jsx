import React from 'react';

function NossaHistoria() {
    return (
        <section className='flex flex-col gap-8 p-4 lg:p-16 bg-gray-200'>
            <h2 className='font-bebas-neue text-4xl text-dark-blue'>Nossa História</h2>
            <section className=''>
                <article className='flex flex-col md:flex-row gap-8'>
                    <h3 className='lg:w-1/2 text-5xl text-gray-600'>Como tudo começou</h3>
                    <p className='lg:w-1/2 text-lg'>Nossa história remonta ao ano de 2015, quando um grupo apaixonado de motociclistas, cientes das demandas e desafios enfrentados pela comunidade de motociclistas, decidiu unir forças para criar algo verdadeiramente significativo. Surgiu assim a ONG Mãos Solidárias. Movidos pelo espírito de solidariedade e pela vontade de fazer a diferença, esses visionários iniciaram uma jornada que moldaria o futuro do motociclismo em nosso país.</p>
                </article>
            </section>
            <section className='flex flex-wrap w-auto items-center justify-center'>
                <img src="images/maos.jpg" alt="Motociclistas unidos" className='w-80 h-80 object-cover rounded shadow-md'/>
                <img src="images/jiujitsu.jpg" alt="Projeto JiuJitsu" className='w-80 h-80 object-cover rounded shadow-md'/>
                <img src="images/muaythai.jpg" alt="Projeto Muay Thai" className='w-80 h-80 object-cover rounded shadow-md'/>
                <img src="images/dancarina.jpg" alt="Dançarina de rua" className='w-80 h-80 object-cover object-top rounded shadow-md'/>
            </section>
        </section>
    );
}

export default NossaHistoria;
