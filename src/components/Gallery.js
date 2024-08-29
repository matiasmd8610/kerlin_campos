import React from 'react'
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Image from 'next/image';

const Gallery = ({images}) => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className='gallery relative h-[260px] lg:h-[400px] w-full'>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgZoom]}
                elementClassNames="gallery-wrapper"
            >
                {images.map((image, index) => (
                    <a key={index} href={image.src} className='gallery-item absolute h-full w-full block overflow-hidden border-4 border-blueMain'>
                        <span className='icon-magnifyingGlass absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] bg-white flex items-center justify-center w-[80px] h-[80px] rounded-full z-50'>
                            <svg className='w-10 h-10' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.5 6.00002C10.5 6.59097 10.3836 7.17613 10.1574 7.72209C9.9313 8.26806 9.59983 8.76414 9.18197 9.182C8.76411 9.59986 8.26803 9.93133 7.72206 10.1575C7.1761 10.3836 6.59094 10.5 5.99999 10.5C5.40904 10.5 4.82388 10.3836 4.27791 10.1575C3.73195 9.93133 3.23587 9.59986 2.81801 9.182C2.40014 8.76414 2.06868 8.26806 1.84253 7.72209C1.61638 7.17613 1.49999 6.59097 1.49999 6.00002C1.49999 4.80654 1.97409 3.66195 2.81801 2.81804C3.66192 1.97413 4.80651 1.50002 5.99999 1.50002C7.19346 1.50002 8.33806 1.97413 9.18197 2.81804C10.0259 3.66195 10.5 4.80654 10.5 6.00002ZM9.67999 10.74C8.47437 11.676 6.95736 12.1173 5.43779 11.9742C3.91822 11.831 2.51033 11.1141 1.50074 9.96942C0.491143 8.82473 -0.0442603 7.33832 0.0035238 5.81277C0.0513079 4.28722 0.678687 2.83723 1.75794 1.75797C2.8372 0.678718 4.28719 0.0513384 5.81274 0.00355432C7.33829 -0.0442298 8.8247 0.491174 9.96939 1.50077C11.1141 2.51036 11.831 3.91825 11.9741 5.43782C12.1173 6.95739 11.676 8.4744 10.74 9.68002L13.53 12.47C13.6037 12.5387 13.6628 12.6215 13.7038 12.7135C13.7448 12.8055 13.7668 12.9048 13.7686 13.0055C13.7704 13.1062 13.7518 13.2062 13.7141 13.2996C13.6764 13.393 13.6202 13.4778 13.549 13.5491C13.4778 13.6203 13.393 13.6764 13.2996 13.7141C13.2062 13.7519 13.1062 13.7704 13.0055 13.7686C12.9048 13.7668 12.8054 13.7448 12.7135 13.7038C12.6215 13.6628 12.5387 13.6037 12.47 13.53L9.67999 10.74Z" fill="#20396f"/>
                            </svg>
                        </span>
                        <Image src={image.thumb} alt={`Imágen ${index+1}`} width={1000} height={600} className='w-full h-full object-cover hover:scale-125 transition-all' />
                    </a>
                ))}
            </LightGallery>
        </div>
    )
}

export default Gallery