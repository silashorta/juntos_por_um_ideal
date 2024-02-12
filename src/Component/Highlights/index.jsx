import React from 'react'
import CountUp from 'react-countup';

function Highlights() {
    return (
        <section className='flex flex-col lg:flex-row p-4 lg:p-16 justify-between gap-8'>
            <div className='lg:w-1/2 flex flex-col gap-8'>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-5xl text-gray-600'>Highlight achievements by the numbers</h3>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat possimus, enim provident nostrum doloremque, doloribus quidem, nesciunt blanditiis sit sed similique. Quaerat beatae inventore nihil. Repellat nemo animi dignissimos.</p>
                </div>
                <div className='flex flex-col gap-16'>
                    <div className='flex flex justify-around'>
                        <div className='lg:w-1/2'>
                            <div className='text-5xl font-bold font-outfit text-dark-gold'>
                                <CountUp end={500} duration={5} />+
                            </div>
                            <div className='text-base text-dark-blue'>Projects completed</div>
                        </div>
                        <div className='lg:w-1/2'>
                            <div className='text-5xl font-bold font-outfit text-dark-gold'>
                                <CountUp end={200} duration={5} />%
                            </div>
                            <div className='text-base text-dark-blue'>Year on year growth</div>
                        </div>
                    </div>
                    <div className='flex flex justify-around'>
                        <div className='lg:w-1/2'>
                            <div className='text-5xl font-bold font-outfit text-dark-gold'>
                                $<CountUp end={50} duration={5} />m
                            </div>
                            <div className='text-base text-dark-blue'>Funded</div>
                        </div>
                        <div className='lg:w-1/2'>
                            <div className='text-5xl font-bold font-outfit text-dark-gold'>
                            <CountUp end={10} duration={5} />k
                            </div>
                            <div className='text-base text-dark-blue'>Downloads</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <img src="" alt="imagem highlights" className='' />
            </div>
        </section>
    )
}

export default Highlights
