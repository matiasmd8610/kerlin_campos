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
      <SwiperSlide className='bg-gray-100 rounded-md px-6 py-8 mt-[9rem] !h-auto'>
        <Image className='mt-[-8rem] rounded-lg h-[180px] object-cover' src={"/images/tecnologias_ultima_generacion.jpg"} alt="" width={500} height={200} />
        <h4 className='my-5 font-bold text-center text-xl leading-6'>Tecnologías de última generación</h4>
        <p className='text-center text-base'>Trabajamos con tecnología de última generación para mejorar la eficiencia y el rendimiento.</p>
      </SwiperSlide>
      <SwiperSlide className='bg-gray-100 rounded-md px-6 py-8 mt-[9rem] !h-auto'>
        <Image className='mt-[-8rem] rounded-lg h-[180px] object-cover' src={"/images/gestion_integral.jpg"} alt="" width={500} height={200} />
        <h4 className='my-5 font-bold text-center text-xl leading-6'>Gestión integral</h4>
        <p className='text-center text-base'>Brindamos gestión integral que puede incluir desde la contratación de personal hasta la administración diaria de la propiedad. Esto permite a los propietarios enfocarse en otras áreas mientras su propiedad es manejada de manera profesional y eficiente.</p>
      </SwiperSlide>
      <SwiperSlide className='bg-gray-100 rounded-md px-6 py-8 mt-[9rem] !h-auto'>
        <Image className='mt-[-8rem] rounded-lg h-[180px] object-cover' src={"/images/servicios_inmobiliarios_rurales.jpg"} alt="" width={500} height={200} />
        <h4 className='my-5 font-bold text-center text-xl leading-6'>Servicios inmobiliarios rurales</h4>
        <p className='text-center text-base'>Somos una empresa de servicios inmobiliarios rurales con el valor agregado de desarrollar proyectos productivos a medida de nuestros clientes.</p>
      </SwiperSlide>
      <SwiperSlide className='bg-gray-100 rounded-md px-6 py-8 mt-[9rem] !h-auto'>
        <Image className='mt-[-8rem] rounded-lg h-[180px] object-cover' src={"/images/soluciones_personalizadas.jpg"} alt="" width={500} height={200} />
        <h4 className='my-5 font-bold text-center text-xl leading-6'>Soluciones personalizadas</h4>
        <p className='text-center text-base'>Nuestras soluciones personalizadas se adaptan a las necesidades y objetivos específicos del cliente, garantizando que el desarrollo de la propiedad se alinee con sus expectativas y metas a largo plazo.</p>
      </SwiperSlide>
      <SwiperSlide className='bg-gray-100 rounded-md px-6 py-8 mt-[9rem] !h-auto'>
        <Image className='mt-[-8rem] rounded-lg h-[180px] object-cover' src={"/images/calidad_y_potencial_tierras.jpg"} alt="" width={500} height={200} />
        <h4 className='my-5 font-bold text-center text-xl leading-6'>Calidad y potencial de las tierras</h4>
        <p className='text-center text-base'>Tenemos la capacidad de evaluar la calidad y potencial de las tierras, asesorando sobre los cultivos o actividades agropecuarias</p>
      </SwiperSlide>
    </Swiper>
  )
}

export default SliderServices