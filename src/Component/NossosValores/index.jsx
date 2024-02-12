import React from 'react'

function NossosValores() {
    return (
        <section className='flex flex-col p-4 lg:p-16 gap-20'>
            <h2 className='font-bebas-neue text-4xl text-dark-blue'>Nosso Valores</h2>
            <div className='flex flex-col gap-6 text-center'>
                <h3 className='text-5xl text-gray-600'>Emphasize what's important to your company</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
                <div className='flex flex-col text-center gap-2'>
                    <div>icone</div>
                    <h3>Value One</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dignissimos sapiente quidem tenetur consequuntur accusantium, molestias, corrupti fugiat quisquam ullam dolore voluptatem voluptates illo recusandae a itaque rem similique at.</p>
                </div>
                <div className='flex flex-col text-center gap-2'>
                    <div>icone</div>
                    <h3>Value Two</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dignissimos sapiente quidem tenetur consequuntur accusantium, molestias, corrupti fugiat quisquam ullam dolore voluptatem voluptates illo recusandae a itaque rem similique at.</p>
                </div>
                <div className='flex flex-col text-center gap-2'>
                    <div>icone</div>
                    <h3>Value Three</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dignissimos sapiente quidem tenetur consequuntur accusantium, molestias, corrupti fugiat quisquam ullam dolore voluptatem voluptates illo recusandae a itaque rem similique at.</p>
                </div>
            </div>
        </section>
    )
}

export default NossosValores
