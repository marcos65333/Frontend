import React from 'react';
import './styles/showImages.css';

const ShowImages = ({ images }) => {
    // Convertir la cadena JSON en un arreglo de JavaScript
    const imageUrls = JSON.parse(images);

    return (
        <div className="showImages">
            {imageUrls && imageUrls.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Imagen ${index}`} className='img-show-feed' />
            ))}
        </div>
    );
};

export default ShowImages;
