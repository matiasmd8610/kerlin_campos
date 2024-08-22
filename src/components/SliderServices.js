 "use client";
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const SliderServices = () => {
  return (
    <Swiper
        className='sliderServices !pb-10'
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true, type: "bullets" }}
        breakpoints={{
          // when window width is >= 640px
          768: {
            slidesPerView: 2
          },
          // when window width is >= 768px
          1200: {
            slidesPerView: 4
          },
        }}
    >
      <SwiperSlide className='bg-gray-100 rounded-md px-7 py-8 mt-[9rem] !h-auto'>
        <Image className='mt-[-8rem] rounded-lg h-[180px] object-cover' src={"/images/compra_venta.jpg"} alt="" width={500} height={200} />
        <h4 className='my-5 font-bold text-center text-xl leading-6 uppercase border-b-2 border-greenMain pb-3'>Compra/Venta</h4>
        <span className='font-semibold text-center inline-block mb-5 italic leading-6 text-blueMain'>Más que Asesoramiento, un Viaje Juntos</span>
        <p className='text-base'>En el viaje de comprar o vender tu campo, somos tus compañeros de ruta. Te ofrecemos un asesoramiento completo, desde el principio hasta la firma final, siempre con la meta de ir un paso más allá de lo que esperas.</p>
      </SwiperSlide>
      <SwiperSlide className='bg-gray-100 rounded-md px-6 py-8 mt-[9rem] !h-auto'>
        <Image className='mt-[-8rem] rounded-lg h-[180px] object-cover' src={"/images/gestion_integral.jpg"} alt="" width={500} height={200} />
        <h4 className='my-5 font-bold text-center text-xl leading-6 uppercase border-b-2 border-greenMain pb-3'>Tasaciones</h4>
        <span className='font-semibold text-center inline-block mb-5 italic leading-6 text-blueMain'>Tasaciones que hablan el idioma del Futuro</span>
        <p className='text-base'>Con ojos en el cielo y pies en la tierra, nuestras tasaciones usan lo último en tecnología satelital. Te damos números que cuentan la verdad, para que sepas el valor real de tu campo y puedas planear con confianza.</p>
      </SwiperSlide>
      <SwiperSlide className='bg-gray-100 rounded-md px-6 py-8 mt-[9rem] !h-auto'>
        <Image className='mt-[-8rem] rounded-lg h-[180px] object-cover' src={"/images/servicios_inmobiliarios_rurales.jpg"} alt="" width={500} height={200} />
        <h4 className='my-5 font-bold text-center text-xl leading-6 uppercase border-b-2 border-greenMain pb-3'>Divisiones</h4>
        <span className='font-semibold text-center inline-block mb-5 italic leading-6 text-blueMain'>Subdivisiones que suman, no que dividen</span>
        <p className='text-base'>Cuando es tiempo de dividir para multiplicar, estamos ahí. Manejamos subdivisiones y particiones familiares con un tacto que solo la experiencia da, asegurando que todos salgan contentos y en paz.</p>
      </SwiperSlide>
      <SwiperSlide className='bg-gray-100 rounded-md px-6 py-8 mt-[9rem] !h-auto'>
        <Image className='mt-[-8rem] rounded-lg h-[180px] object-cover' src={"/images/soluciones_personalizadas.jpg"} alt="" width={500} height={200} />
        <h4 className='my-5 font-bold text-center text-xl leading-6 uppercase border-b-2 border-greenMain pb-3'>Consultoria</h4>
        <span className='font-semibold text-center inline-block mb-5 italic leading-6 text-blueMain'>Asesoramiento que Abre Caminos</span>
        <p className='text-base'>Te ofrecemos un asesoramiento que toca todos los puntos clave, dándote una visión 360° para que tu decisión sobre terrenos rurales sea tan clara como el agua de manantial.</p>
      </SwiperSlide>
    </Swiper>
  )
}

export default SliderServices