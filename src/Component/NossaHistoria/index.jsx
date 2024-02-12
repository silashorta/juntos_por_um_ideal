import React from 'react'

function NossaHistoria() {
    return (
        <section className='flex flex-col gap-8 p-4 lg:p-16 bg-gray-200'>
            <h2 className='font-bebas-neue text-4xl text-dark-blue'>Nossa História</h2>
            <section className=''>
                <article className='flex flex-col md:flex-row gap-8'>
                    <h3 className='lg:w-1/2 text-5xl text-gray-600'>Tell the story of how your company came about</h3>
                    <p className='lg:w-1/2 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
                    Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta.
                    Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque.</p>
                </article>
            </section>
            <section className='flex flex-wrap gap-8 w-auto justify-between'>
                <img src="images/maos.jpg" alt="Imagem Nossa história" className='h-80 rounded'/>
                <img src="images/jiujitsu.jpg" alt="Imagem Nossa história" className='h-80 rounded'/>
                <img src="images/muaythai.jpg" alt="Imagem Nossa história" className='h-80 rounded'/>
                <img src="images/dancarina.jpg" alt="Imagem Nossa história" className='h-80 rounded'/>
            </section>
        </section>
    )
}

export default NossaHistoria
