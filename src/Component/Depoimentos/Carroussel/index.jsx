import React, { useState } from 'react';

import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";



const Carroussel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousSlide = () => {
        const newIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
    };

    return (
        <div className='flex flex-col gap-8 p-4'>
            <h2 className='font-bebas-neue text-4xl text-dark-blue'>Depoimentos</h2>
            <p>Explore os depoimentos inspiradores de quem conhece e faz acontecer o nosso trabalho.</p>
            <div className="flex justify-center gap-4 bg-gray-100">
                <button onClick={goToPreviousSlide}><MdNavigateBefore className='bg-gray-300 rounded-full text-2xl'/></button>
                <video src={images[currentImageIndex]} controls className='w-5/6 h-screen object-contain'></video>
                <button onClick={goToNextSlide}><MdNavigateNext className='bg-gray-300 rounded-full text-2xl'/></button>
            </div>
        </div>
    );
};

export default Carroussel;
