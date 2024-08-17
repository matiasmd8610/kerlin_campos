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
        className='sliderServices mt-3 !pb-10'
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true, type: "bullets" }}
    >
      <SwiperSlide className='bg-gray-100 rounded-md px-5 py-8 mt-[9rem] !h-auto'>
        <Image className='mt-[-8rem] rounded-lg h-[200px] object-cover' src={"/images/tecnologias_ultima_generacion.jpg"} alt="" width={500} height={200} />
        <h4 className='my-5 font-semibold text-center text-xl leading-6'>Tecnologías de última generación</h4>
        <p className='text-center text-base'>Trabajamos con tecnología de última generación para mejorar la eficiencia y el rendimiento.</p>
      </SwiperSlide>
      <SwiperSlide className='bg-gray-100 rounded-md px-5 py-8 mt-[9rem] !h-auto'>
        <Image className='mt-[-8rem] rounded-lg h-[200px] object-cover' src={"/images/gestion_integral.jpg"} alt="" width={500} height={200} />
        <h4 className='my-5 font-semibold text-center text-xl leading-6'>Gestión integral</h4>
        <p className='text-center text-base'>Brindamos gestión integral que puede incluir desde la contratación de personal hasta la administración diaria de la propiedad. Esto permite a los propietarios enfocarse en otras áreas mientras su propiedad es manejada de manera profesional y eficiente.</p>
      </SwiperSlide>
      <SwiperSlide>
        <h4 className='my-5 font-semibold text-center text-xl leading-6'>Servicios inmobiliarios rurales</h4>
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
    </Swiper>
  )
}

export default SliderServices