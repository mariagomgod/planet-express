import { useEffect } from 'react';
import './Carousel.sass';

export default function Carousel() {

    const preload = imageUrl => {
        const img = document.createElement('img'); // crea un elemento img HTML.
        img.style.display = 'none'; // mantenemos la imagen oculta, ya que lo que queremos 
        // es forzar al navegador que se descargue las imágenes sin visualizarlas.
        img.src = imageUrl; // indicamos la imagen a descargar.
        document.body.appendChild(img); // introducimos en el body el elemento img, 
        //para conseguir que la imagen indicada se descargue y se quede almacenada en caché.
        setTimeout(() => { // después de 2 seg quitamos el elemento img que se incrustó.
            document.body.removeChild(img);
        }, 2000);
    };

    const imageUrls = Array.from(Array(10).keys())
        .map(index => `../images/image${index + 1}.jpg`);

    useEffect(() => {
        imageUrls.forEach(preload);
    }, [imageUrls]);

    let currentImage = 0;

    setInterval(() => {
        if (currentImage === imageUrls.length) {
            currentImage = 0;
        }
        document.getElementById("carousel").style.backgroundImage = `url(${imageUrls[currentImage++]})`;
    }
    , 7000);

    return (
        <div id="carousel">
            <h2>Tu paquete, nuestra misión</h2>
        </div>
    )
}