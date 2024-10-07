'use client'
import Gallery from '@/components/Gallery';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

const Campos = () => {
  
  // const [modalActive, setModalactive] = useState(false);
  
  // const openModal = (id) => {
  //   setModalactive(!modalActive);
  // }

  const images100agricola = [
    { src: '/images/100agricola/100agricola_01.jpg', thumb: '/images/100agricola/100agricola_01.jpg' },
    { src: '/images/100agricola/100agricola_02.jpg', thumb: '/images/100agricola/100agricola_02.jpg' },
    { src: '/images/100agricola/100agricola_03.jpg', thumb: '/images/100agricola/100agricola_03.jpg' },
    { src: '/images/100agricola/100agricola_04.jpg', thumb: '/images/100agricola/100agricola_04.jpg' },
    { src: '/images/100agricola/100agricola_05.jpg', thumb: '/images/100agricola/100agricola_05.jpg' }
  ];

  const imagesZarate = [
    { src: '/images/zarate/zarate_01.jpg', thumb: '/images/zarate/zarate_01.jpg' },
    { src: '/images/zarate/zarate_02.jpg', thumb: '/images/zarate/zarate_02.jpg' },
    { src: '/images/zarate/zarate_03.jpg', thumb: '/images/zarate/zarate_03.jpg' },
    { src: '/images/zarate/zarate_04.jpg', thumb: '/images/zarate/zarate_04.jpg' },
    { src: '/images/zarate/zarate_05.jpg', thumb: '/images/zarate/zarate_05.jpg' },
    { src: '/images/zarate/zarate_06.jpg', thumb: '/images/zarate/zarate_06.jpg' },
    { src: '/images/zarate/zarate_07.jpg', thumb: '/images/zarate/zarate_07.jpg' },
    { src: '/images/zarate/zarate_08.jpg', thumb: '/images/zarate/zarate_08.jpg' },
    { src: '/images/zarate/zarate_10.jpg', thumb: '/images/zarate/zarate_10.jpg' },
    { src: '/images/zarate/zarate_11.jpg', thumb: '/images/zarate/zarate_11.jpg' },
    { src: '/images/zarate/zarate_12.jpg', thumb: '/images/zarate/zarate_12.jpg' }
  ];

  const imagesVictoria = [
    { src: '/images/victoria/victoria_01.jpg', thumb: '/images/victoria/victoria_01.jpg' },
    { src: '/images/victoria/victoria_02.jpg', thumb: '/images/victoria/victoria_02.jpg' },
    { src: '/images/victoria/victoria_03.jpg', thumb: '/images/victoria/victoria_03.jpg' },
    { src: '/images/victoria/victoria_04.jpg', thumb: '/images/victoria/victoria_04.jpg' },
    { src: '/images/victoria/victoria_05.jpg', thumb: '/images/victoria/victoria_05.jpg' },
    { src: '/images/victoria/victoria_06.jpg', thumb: '/images/victoria/victoria_06.jpg' },
    { src: '/images/victoria/victoria_07.jpg', thumb: '/images/victoria/victoria_07.jpg' },
    { src: '/images/victoria/victoria_08.jpg', thumb: '/images/victoria/victoria_08.jpg' },
    { src: '/images/victoria/victoria_09.jpg', thumb: '/images/victoria/victoria_09.jpg' },
    { src: '/images/victoria/victoria_10.jpg', thumb: '/images/victoria/victoria_10.jpg' },
    { src: '/images/victoria/victoria_11.jpg', thumb: '/images/victoria/victoria_11.jpg' },
    { src: '/images/victoria/victoria_12.jpg', thumb: '/images/victoria/victoria_12.jpg' },
    { src: '/images/victoria/victoria_13.jpg', thumb: '/images/victoria/victoria_13.jpg' },
    { src: '/images/victoria/victoria_14.jpg', thumb: '/images/victoria/victoria_14.jpg' },
    { src: '/images/victoria/victoria_15.jpg', thumb: '/images/victoria/victoria_15.jpg' },
    { src: '/images/victoria/victoria_16.jpg', thumb: '/images/victoria/victoria_16.jpg' },
    { src: '/images/victoria/victoria_17.jpg', thumb: '/images/victoria/victoria_17.jpg' },
    { src: '/images/victoria/victoria_18.jpg', thumb: '/images/victoria/victoria_18.jpg' },
    { src: '/images/victoria/victoria_19.jpg', thumb: '/images/victoria/victoria_19.jpg' },
    { src: '/images/victoria/victoria_20.jpg', thumb: '/images/victoria/victoria_20.jpg' },
  ];

  const imagesNuevaEsperanza = [
    { src: '/images/nueva_esperanza/nueva_esperanza_01.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_01.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_02.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_02.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_03.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_03.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_04.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_04.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_05.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_05.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_06.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_06.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_07.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_07.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_08.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_08.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_09.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_09.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_10.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_10.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_11.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_11.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_12.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_12.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_13.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_13.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_14.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_14.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_15.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_15.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_16.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_16.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_17.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_17.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_18.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_18.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_19.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_19.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_20.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_20.jpg' },
  ];

  const imagesElNochero = [
    { src: '/images/el_nochero/el_nochero_01.jpg', thumb: '/images/el_nochero/el_nochero_01.jpg' },
    { src: '/images/el_nochero/el_nochero_02.jpg', thumb: '/images/el_nochero/el_nochero_02.jpg' },
    { src: '/images/el_nochero/el_nochero_03.jpg', thumb: '/images/el_nochero/el_nochero_03.jpg' },
    { src: '/images/el_nochero/el_nochero_04.jpg', thumb: '/images/el_nochero/el_nochero_04.jpg' },
    { src: '/images/el_nochero/el_nochero_05.jpg', thumb: '/images/el_nochero/el_nochero_05.jpg' },
    { src: '/images/el_nochero/el_nochero_06.jpg', thumb: '/images/el_nochero/el_nochero_06.jpg' },
    { src: '/images/el_nochero/el_nochero_07.jpg', thumb: '/images/el_nochero/el_nochero_07.jpg' },
    { src: '/images/el_nochero/el_nochero_08.jpg', thumb: '/images/el_nochero/el_nochero_08.jpg' },
    { src: '/images/el_nochero/el_nochero_09.jpg', thumb: '/images/el_nochero/el_nochero_09.jpg' },
    { src: '/images/el_nochero/el_nochero_10.jpg', thumb: '/images/el_nochero/el_nochero_10.jpg' },
    { src: '/images/el_nochero/el_nochero_11.jpg', thumb: '/images/el_nochero/el_nochero_11.jpg' },
    { src: '/images/el_nochero/el_nochero_12.jpg', thumb: '/images/el_nochero/el_nochero_12.jpg' },
    { src: '/images/el_nochero/el_nochero_13.jpg', thumb: '/images/el_nochero/el_nochero_13.jpg' },
    { src: '/images/el_nochero/el_nochero_14.jpg', thumb: '/images/el_nochero/el_nochero_14.jpg' },
    { src: '/images/el_nochero/el_nochero_15.jpg', thumb: '/images/el_nochero/el_nochero_15.jpg' },
    { src: '/images/el_nochero/el_nochero_16.jpg', thumb: '/images/el_nochero/el_nochero_16.jpg' },
    { src: '/images/el_nochero/el_nochero_17.jpg', thumb: '/images/el_nochero/el_nochero_17.jpg' }
  ];

  const imagesFortinElPatria = [
    { src: '/images/fortin_el_patria/fortin_el_patria_01.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_01.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_02.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_02.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_03.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_03.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_04.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_04.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_05.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_05.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_06.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_06.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_07.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_07.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_08.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_08.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_09.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_09.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_10.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_10.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_11.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_11.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_12.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_12.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_13.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_13.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_14.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_14.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_15.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_15.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_16.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_16.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_17.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_17.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_18.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_18.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_19.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_19.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_20.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_20.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_21.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_21.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_22.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_22.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_23.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_23.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_24.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_24.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_25.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_25.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_26.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_26.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_27.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_27.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_28.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_28.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_29.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_29.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_30.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_30.jpg' }
  ];

  const imagesLujan = [
    { src: '/images/lujan/lujan_01.jpg', thumb: '/images/lujan/lujan_01.jpg' },
    { src: '/images/lujan/lujan_02.jpg', thumb: '/images/lujan/lujan_02.jpg' },
    { src: '/images/lujan/lujan_03.jpg', thumb: '/images/lujan/lujan_03.jpg' },
    { src: '/images/lujan/lujan_04.jpg', thumb: '/images/lujan/lujan_04.jpg' },
    { src: '/images/lujan/lujan_05.jpg', thumb: '/images/lujan/lujan_05.jpg' },
    { src: '/images/lujan/lujan_06.jpg', thumb: '/images/lujan/lujan_06.jpg' },
    { src: '/images/lujan/lujan_07.jpg', thumb: '/images/lujan/lujan_07.jpg' },
    { src: '/images/lujan/lujan_08.jpg', thumb: '/images/lujan/lujan_08.jpg' },
    { src: '/images/lujan/lujan_09.jpg', thumb: '/images/lujan/lujan_09.jpg' },
    { src: '/images/lujan/lujan_10.jpg', thumb: '/images/lujan/lujan_10.jpg' },
    { src: '/images/lujan/lujan_11.jpg', thumb: '/images/lujan/lujan_11.jpg' },
    { src: '/images/lujan/lujan_12.jpg', thumb: '/images/lujan/lujan_12.jpg' },
    { src: '/images/lujan/lujan_13.jpg', thumb: '/images/lujan/lujan_13.jpg' },
    { src: '/images/lujan/lujan_14.jpg', thumb: '/images/lujan/lujan_14.jpg' },
    { src: '/images/lujan/lujan_15.jpg', thumb: '/images/lujan/lujan_15.jpg' },
    { src: '/images/lujan/lujan_16.jpg', thumb: '/images/lujan/lujan_16.jpg' },
    { src: '/images/lujan/lujan_17.jpg', thumb: '/images/lujan/lujan_17.jpg' },
    { src: '/images/lujan/lujan_18.jpg', thumb: '/images/lujan/lujan_18.jpg' },
    { src: '/images/lujan/lujan_19.jpg', thumb: '/images/lujan/lujan_19.jpg' },
    { src: '/images/lujan/lujan_20.jpg', thumb: '/images/lujan/lujan_20.jpg' }
  ];

  const imagesRojas = [
    { src: '/images/rojas/rojas_01.jpg', thumb: '/images/rojas/rojas_01.jpg' },
    { src: '/images/rojas/rojas_02.jpg', thumb: '/images/rojas/rojas_02.jpg' },
    { src: '/images/rojas/rojas_03.jpg', thumb: '/images/rojas/rojas_03.jpg' },
    { src: '/images/rojas/rojas_04.jpg', thumb: '/images/rojas/rojas_04.jpg' },
    { src: '/images/rojas/rojas_05.jpg', thumb: '/images/rojas/rojas_05.jpg' }
  ];

  const imagesCampoMixto = [
    { src: '/images/campo_mixto/campo_mixto_01.jpg', thumb: '/images/campo_mixto/campo_mixto_01.jpg' },
    { src: '/images/campo_mixto/campo_mixto_02.jpg', thumb: '/images/campo_mixto/campo_mixto_02.jpg' },
    { src: '/images/campo_mixto/campo_mixto_03.jpg', thumb: '/images/campo_mixto/campo_mixto_03.jpg' },
    { src: '/images/campo_mixto/campo_mixto_04.jpg', thumb: '/images/campo_mixto/campo_mixto_04.jpg' },
    { src: '/images/campo_mixto/campo_mixto_05.jpg', thumb: '/images/campo_mixto/campo_mixto_05.jpg' },
    { src: '/images/campo_mixto/campo_mixto_06.jpg', thumb: '/images/campo_mixto/campo_mixto_06.jpg' },
    { src: '/images/campo_mixto/campo_mixto_07.jpg', thumb: '/images/campo_mixto/campo_mixto_07.jpg' },
    { src: '/images/campo_mixto/campo_mixto_08.jpg', thumb: '/images/campo_mixto/campo_mixto_08.jpg' },
    { src: '/images/campo_mixto/campo_mixto_09.jpg', thumb: '/images/campo_mixto/campo_mixto_09.jpg' },
    { src: '/images/campo_mixto/campo_mixto_10.jpg', thumb: '/images/campo_mixto/campo_mixto_10.jpg' },
    { src: '/images/campo_mixto/campo_mixto_11.jpg', thumb: '/images/campo_mixto/campo_mixto_11.jpg' },
    { src: '/images/campo_mixto/campo_mixto_12.jpg', thumb: '/images/campo_mixto/campo_mixto_12.jpg' },
    { src: '/images/campo_mixto/campo_mixto_13.jpg', thumb: '/images/campo_mixto/campo_mixto_13.jpg' },
    { src: '/images/campo_mixto/campo_mixto_14.jpg', thumb: '/images/campo_mixto/campo_mixto_14.jpg' },
    { src: '/images/campo_mixto/campo_mixto_15.jpg', thumb: '/images/campo_mixto/campo_mixto_15.jpg' },
    { src: '/images/campo_mixto/campo_mixto_16.jpg', thumb: '/images/campo_mixto/campo_mixto_16.jpg' },
    { src: '/images/campo_mixto/campo_mixto_17.jpg', thumb: '/images/campo_mixto/campo_mixto_17.jpg' },
    { src: '/images/campo_mixto/campo_mixto_18.jpg', thumb: '/images/campo_mixto/campo_mixto_18.jpg' },
    { src: '/images/campo_mixto/campo_mixto_19.jpg', thumb: '/images/campo_mixto/campo_mixto_19.jpg' },
    { src: '/images/campo_mixto/campo_mixto_20.jpg', thumb: '/images/campo_mixto/campo_mixto_20.jpg' }
  ];
  
  return (
    <main id='main' className='fields'>
      <section className='hero-section relative bg-[url("/images/hero_campos_bg.jpg")] h-[200px] lg:h-[260px] bg-no-repeat bg-cover flex items-center bg-bottom text-white'>
          <div className='container relative z-10'>
            <h1 className='text-[30px] lg:text-[40px] uppercase text-center leftBorder'>Nuestros Campos</h1>
          </div>
      </section>

      <div className='bg-blue-100 py-5'>
        <div className='container'>
          <p className='text-sm'><strong>Nota importante:</strong> Toda la información y medidas provistas son aproximadas y deberán ratificarse con la documentación pertinente y no compromete contractualmente a nuestra empresa. Los gastos (expensas, gastos) expresados refieren a la última información recabada y deberán confirmarse. Fotografías no vinculantes ni contractuales.</p>
        </div>
      </div>

      <section id='fields' className='pt-0 lg:pt-8 pb-0'>

        {/* Campo 100% Agrícola: Begin */}
        <div className='field' id='100-agricola'>
          <div className='container'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-[4rem]'>
              <div>
                <h2 className='leftBorder text-[24px] lg:text-[28px] mb-10 uppercase'>Campo 100% Agrícola</h2>
                <p className='flex lg:items-center mb-1 text-xl'>
                  <svg className='icon mr-2 w-5 h-5 shrink-0 translate-y-[0.5rem] lg:translate-y-0' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                  </svg>
                  San Nicolas De Los Arroyos | San Nicolas | Interior Buenos Aires
                </p>
                <Link className="font-semibold underline ml-6 text-base text-blueMain" href={"https://www.google.com/maps/search/?api=1&query=-33.3023181,-60.2688949"} target='_blank'>Ver en Google Maps</Link>
                {/* <button className="font-semibold underline ml-6 text-base text-blueMain"  type="button" onClick={() => openModal("100-agricola")}>Ver en Google Maps</button> */}
                <div className='flex items-center mt-5'>
                  <span className='bg-green-300 rounded-md px-3 py-1 grid place-items-center text-[11px] uppercase mr-3 font-bold'>Venta</span>
                  <span className='text-2xl font-bold'>USD 375.000</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Información general</h4>
                  <span className='block'><strong>Condición:</strong> Excelente</span>
                  {/* <span className='block'><strong>Antigüedad:</strong> A estrenar</span> */}
                  <span><strong>Superficie:</strong> 50 HAS</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <h4 className='text-base font-bold mb-2 uppercase underline'>Descripción</h4>
                <p>El campo es 100% agricola, ubicado a 2km del pavimento (ex ruta 21, actualmente Avenida Illia), acceso en muy buen estado. No cuenta con mejoras, salvo alambrado perimetral en muy buen estado.</p>
              </div>
              <div>
                <Gallery images={images100agricola} />
              </div>
            </div>
          </div>
        </div>
        {/* Campo 100% Agrícola: End */}

        {/* Zarate: Begin */}
        <div className='field' id='zarate'>
          <div className='container'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-[4rem]'>
              <div className='fieldInfo'>
                <h2 className='leftBorder text-[24px] lg:text-[28px] mb-10 uppercase'>Campo 100% agrícola</h2>
                <p className='flex items-center mb-2'>
                  <svg className='icon mr-2 w-5 h-5' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                  </svg>
                  Lima | Zarate | G.B.A. Zona Norte
                </p>
                <Link className="font-semibold underline ml-6 text-base text-blueMain" href={"https://www.google.com/maps/search/?api=1&query=-34.0447565,-59.1961093"} target='_blank'>Ver en Google Maps</Link>
                <div className='flex items-center mt-5'>
                  <span className='bg-green-300 rounded-md px-3 py-1 grid place-items-center text-[11px] uppercase mr-3 font-bold'>Venta</span>
                  <span className='text-2xl font-bold'>USD 15.000.000</span>
                </div>               
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Superficies y medidas</h4>
                  <span><strong>Superficie:</strong> 1470 HAS</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <h4 className='text-base font-bold mb-2 uppercase underline'>Descripción</h4>
                <p>Excelente campo agrícola ubicado en Zarate. El campo ha sido sistematizado para optimizar el uso del terreno, que se divide en siete ambientes con distintos potenciales agrícolas. Predominan las lomas, con suelos profundos y bien drenados ideales para cultivos como trigo, soja y maíz, seguidos de medias lomas, hondonadas, áreas de monte natural, tendidos y vías de escurrimiento, además de un bañado cerca del Río Areco, lo que le otorga una gran versatilidad productiva.</p>
                {/* <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <h4 className='text-base font-bold mb-2 uppercase underline'>Servicios</h4>
                <ul className='services'>
                  <li>Electricidad</li>
                </ul> */}
              </div>
              <div>
                <Gallery images={imagesZarate} />
                {/* <iframe className='mt-12 border-4 border-blueMain' width="100%" height="400" src="https://www.youtube.com/embed/XDdpHSRwC4A?si=1ZJXWRvVROrgB6yk" title="Zarate video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
              </div>
            </div>
          </div>
        </div>
        {/* Zarate: End */}

        {/* Victoria, Entre Rios: Begin */}
        <div className='field' id='victoria'>
          <div className='container'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-[4rem]'>
              <div className='fieldInfo'>
                <h2 className='leftBorder text-[24px] lg:text-[28px] mb-10 uppercase'>Campo Ganadero</h2>
                <p className='flex items-center mb-2'>
                  <svg className='icon mr-2 w-5 h-5' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                  </svg>
                  Victoria | Entre Rios | Argentina
                </p>
                <Link className="font-semibold underline ml-6 text-base text-blueMain" href={"https://www.google.com/maps/place/32%C2%B037'57.9%22S+60%C2%B008'30.5%22W/@-32.6327523,-60.1418019,698m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-32.6327523!4d-60.1418019?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"} target='_blank'>Ver en Google Maps</Link>
                <div className='flex items-center mt-5'>
                  <span className='bg-green-300 rounded-md px-3 py-1 grid place-items-center text-[11px] uppercase mr-3 font-bold'>Venta</span>
                  <span className='text-2xl font-bold'>USD 15.000.000</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                {/* <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Información general</h4>
                  <span className='block'><strong>Precio HA u$s:</strong> 1500</span>
                  <span className='block'><strong>Costas Santafesinas:</strong> 20 min en lancha rápida</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' /> */}
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Superficies y medidas</h4>
                  <span className='block'><strong>Superficie:</strong> 1000 HAS</span>
                  <span className='block'><strong>Incultas:</strong> 1500 HAS</span>
                  <span className='block'><strong>Pasto Natural:</strong> 8500 HAS</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <h4 className='text-base font-bold mb-2 uppercase underline'>Descripción</h4>
                <p>Este excepcional campo de 2.500 ha, con mejoras de primer nivel, cuenta con 24 km de terraplenes, 25 km de caminos internos y 45 km de canales de drenaje. Dispone de 2 estaciones de bombeo, corrales equipados con balanza electrónica, casa para puestero y galpón en construcción de 50x25 m. La planta de silo tiene capacidad de 480 tn y sistema de descarga al barco. Un alteo de 2 ha garantiza refugio seguro ante crecidas. Además, incluye una pista de aterrizaje, cobertura celular en todo el predio, y habilitación SENASA para exportación de carne. Ideal para engorde, cría y recría, con acceso por río incluso en épocas de sequía.</p>
              </div>
              <div>
                <Gallery images={imagesVictoria} />
              </div>
            </div>
          </div>
        </div>
        {/* Victoria, Entre Rios: End */}

        {/* Nueva Esperanza: Begin */}
        <div className='field' id='nueva-esperanza'>
          <div className='container'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-[4rem]'>
              <div className='fieldInfo'>
                <h2 className='leftBorder text-[24px] lg:text-[28px] mb-10 uppercase'>Campo Mixto</h2>
                <p className='flex items-center mb-2'>
                  <svg className='icon mr-2 w-5 h-5' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                  </svg>
                  Pellegrini | Santiago Del Estero | Argentina
                </p>
                <Link className="font-semibold underline ml-6 text-base text-blueMain" href={"https://www.google.com/maps/search/?api=1&query=-26.1993333,-64.239096"} target='_blank'>Ver en Google Maps</Link>
                <div className='flex items-center mt-5'>
                  <span className='bg-green-300 rounded-md px-3 py-1 grid place-items-center text-[11px] uppercase mr-3 font-bold'>Venta</span>
                  <span className='text-2xl font-bold'>USD 15.318.600</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                {/* <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Información general</h4>
                  <span className='block'><strong>Precio HA u$s:</strong> 2200</span>
                  <span className='block'><strong>Ruta provincial:</strong> 4:4 Km</span>
                  <span className='block'><strong>Nueva Esperanza:</strong> 30 Km</span>
                  <span className='block'><strong>7 de abril (RN 34):</strong> 60 Km</span>
                  <span className='block'><strong>San Miguel de Tucumán:</strong> 150 Km</span>
                  <span className='block'><strong>Ciudad de Santiago del Estero:</strong> 240 Km</span>
                  <span className='block'><strong>Ciudad de Salta:</strong> 300 Km</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' /> */}
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Superficies y medidas</h4>
                  <span className='block'><strong>Superficie:</strong> 6963 HAS</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <h4 className='text-base font-bold mb-2 uppercase underline'>Descripción</h4>
                <p>Este campo de 3.606 ha, ideal para agricultura y ganadería, está completamente alambrado con 7 hilos y cuenta con picadas perimetrales e internas. Incluye una casa en excelente estado con 3 habitaciones, cocina, comedor y baño. La propiedad se abastece de luz solar y dispone de un aljibe de 30.000 litros para consumo humano y un tanque de 25.000 litros apto para uso animal y fumigación. Con cultivos de soja, maíz, poroto negro y poroto mung en la campaña 2018/2019, su promedio anual de precipitaciones es de 700-800 mm, lo que lo convierte en una excelente opción para producción agrícola.</p>
                {/* <span className='block'>MEJORAS</span>
                <ul className='services mb-5'>
                  <li>El campo está totalmente alambrado con 7 hilos (nuevo).</li>
                  <li>Cortinas de monte natural.</li>
                  <li>Picadas perimetrales e internas.</li>
                  <li>Casa con 3 Habitaciones, 1 baño, cocina y comedor (muy buen estado)</li>
                  <li>Luz por energía solar (tendido eléctrico a 2 Kms)</li>
                  <li>Aljibe para consumo Humano (30.000 litros)</li>
                  <li>Tanque de agua apta para consumo animal y fumigar (25.000 litros)</li>
                </ul>
                <span className='block'>APTITUD</span>
                <p>El campo tiene 3.606 ha desmontadas y en agricultura. El resto es monte abierto.</p>
                <span>Campaña 2018/2019:</span>
                <ul className='services mb-5'>
                  <li>Soja: 1391 ha.</li>
                  <li>Maíz: 1.683 ha.</li>
                  <li>Poroto negro: 431 ha.</li>
                  <li>Poroto mung: 100 ha.</li>
                </ul>
                <span className='block'>PRECIPITACIÓN ANUAL PROMEDIO: 700-800 mm</span> */}
              </div>
              <div>
                <Gallery images={imagesNuevaEsperanza} />
              </div>
            </div>
          </div>
        </div>
        {/* Nueva Esperanza: End */}

        {/* El Nochero: Begin */}
        <div className='field' id='el-nochero'>
          <div className='container'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-[4rem]'>
              <div className='fieldInfo'>
                <h2 className='leftBorder text-[24px] lg:text-[28px] mb-10 uppercase'>Campo Mixto</h2>
                <p className='flex items-center mb-2'>
                  <svg className='icon mr-2 w-5 h-5' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                  </svg>
                  9 De Julio | Santa Fe | Argentina
                </p>
                <Link className="font-semibold underline ml-6 text-base text-blueMain" href={"https://www.google.com/maps/search/?api=1&query=-28.2312607917,-61.5204701551"} target='_blank'>Ver en Google Maps</Link>
                <div className='flex items-center mt-5'>
                  <span className='bg-green-300 rounded-md px-3 py-1 grid place-items-center text-[11px] uppercase mr-3 font-bold'>Venta</span>
                  <span className='text-2xl font-bold'>USD 18.000.000</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                {/* <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Información general</h4>
                  <span className='block'><strong>Precio HA u$s:</strong> 600</span>
                  <span className='block'><strong>Asfalto:</strong> 16 Km</span>
                  <span className='block'><strong>Tostado:</strong> 140 Km</span>
                  <span className='block'><strong>Ciudad de Santa Fé:</strong> 470 Km</span>
                  <span className='block'><strong>Ciudad Autónoma de Buenos Aires:</strong> 920 Km</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' /> */}
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Superficies y medidas</h4>
                  <span className='block'><strong>Superficie:</strong> 3000 HAS</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <h4 className='text-base font-bold mb-2 uppercase underline'>Descripción</h4>
                <p>Esta estancia de gran extensión cuenta con alambrados perimetrales en su mayoría en estado aceptable, complementados por tramos de alambrado eléctrico y postes listos para finalizar el cerco. Dispone de una casa principal en buenas condiciones, un pequeño puesto, galpón de herramientas y maquinarias, además de una casa para puestero en el suroeste. Incluye corrales, manga, balanza, bañadero, bebederos y molinos, con un eficiente sistema de represas para acumular agua en épocas de lluvias importantes. Con aptitud ganadera y agrícola, la estancia cuenta con 8.000 ha de monte, ideal para silvicultura, y áreas para cultivo de algodón, maíz, sorgo y girasol. Su capacidad ganadera actual es de 1 animal cada 3 ha, con potencial de mejora. La precipitación anual es de 700-1000 mm, ideal para la cría de vacunos y cultivos en menor escala.</p>
              </div>
              <div>
                <Gallery images={imagesElNochero} />
              </div>
            </div>
          </div>
        </div>
        {/* El Nochero: End */}

        {/* Fortin El Patria: Begin */}
        <div className='field' id='fortin-el-patria'>
          <div className='container'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-[4rem]'>
              <div className='fieldInfo'>
                <h2 className='leftBorder text-[24px] lg:text-[28px] mb-10 uppercase'>Campo Mixto</h2>
                <p className='flex items-center mb-2'>
                  <svg className='icon mr-2 w-5 h-5' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                  </svg>
                  Fortin El Patria | Dupuy | San Luis
                </p>
                <Link className="font-semibold underline ml-6 text-base text-blueMain" href={"https://www.google.com/maps/search/?api=1&query=-34.7710294,-65.522684"} target='_blank'>Ver en Google Maps</Link>
                <div className='flex items-center mt-5'>
                  <span className='bg-green-300 rounded-md px-3 py-1 grid place-items-center text-[11px] uppercase mr-3 font-bold'>Venta</span>
                  <span className='text-2xl font-bold'>USD 14.841.450</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                {/* <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Información general</h4>
                  <span className='block'><strong>Precio HA u$s:</strong> 1950</span>
                  <span className='block'><strong>Sobre ruta:</strong> 12 y 27</span>
                  <span className='block'><strong>Fotin El Patria:</strong> 5 km</span>
                  <span className='block'><strong>Buena Esperanza:</strong> 28 km</span>
                  <span className='block'><strong>Rio Cuarto:</strong> 270 km</span>
                  <span className='block'><strong>Rosario:</strong> 600 km</span>
                  <span className='block'><strong>Buenos Aires:</strong> 720 km</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' /> */}
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Superficies y medidas</h4>
                  <span className='block'><strong>Superficie:</strong> 7611 HAS</span>
                  <span className='block'><strong>Agrícolas:</strong> 3500 HAS</span>
                  <span className='block'><strong>Ganaderas:</strong> 3300 HAS</span>
                  <span className='block'><strong>Monte Alto:</strong> 800 HAS</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <h4 className='text-base font-bold mb-2 uppercase underline'>Descripción</h4>
                {/* <span className='block'>MEJORAS</span>
                <ul className='services mb-5'>
                  <li>Casco con casa principal de 450 m2</li>
                  <li>Casa de encargado, casa de peones y galpones</li>
                  <li>Servicios: teléfono de línea, Internet, luz eléctrica de alta tensión con transformador de 24 Kwa</li>
                  <li>El campo se encuentra dividido en 27 potreros y posee 15 molinos con sus correspondientes tanques y bebederos.</li>
                  <li>Distancia al agua de 1 a 4 m en la superficie agrícola</li>
                  <li>Agua dulce apta también para el consumo humano. Posibilidad de riego</li>
                  <li>Instalaciones para feedlot</li>
                  <li>2 mangas (con balanza para 3000 kg)</li>
                </ul>
                <span className='block uppercase'>Aptitud:</span> */}
                <p>Este campo agrícola-ganadero, con una extensión dividida en 27 potreros, cuenta con una casa principal de 450 m², casa para encargado, vivienda para peones y amplios galpones. Equipado con servicios como teléfono, Internet y electricidad de alta tensión con transformador de 24 Kwa, ofrece excelentes condiciones para la producción. Posee 15 molinos con tanques y bebederos, agua dulce apta para consumo humano y la posibilidad de riego. El campo alberga instalaciones para feedlot y 2 mangas con balanza para 3000 kg. Con capacidad para 6.000 cabezas de ganado y 1.500 vientres, es ideal para cultivos de girasol, maíz, sorgo, centeno, y pasturas para ganadería como llorón y digitaria.</p>
              </div>
              <div>
                <Gallery images={imagesFortinElPatria} />
                {/* <iframe className='mt-12 border-4 border-blueMain' width="100%" height="400" src="https://www.youtube.com/embed/JqV9X0H6TCY?si=d2eW8cJisKReeOUR" title="El Fortin Patria video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
              </div>
            </div>
          </div>
        </div>
        {/* Fortin El Patria: End */}

        {/* Lujan: Begin */}
        <div className='field' id='lujan'>
          <div className='container'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-[4rem]'>
              <div className='fieldInfo'>
                <h2 className='leftBorder text-[24px] lg:text-[28px] mb-10 uppercase'>Campo Mixto</h2>
                <p className='flex items-center mb-2'>
                  <svg className='icon mr-2 w-5 h-5' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                  </svg>
                  Lujan | G.B.A. Zona Oeste | Argentina
                </p>
                <Link className="font-semibold underline ml-6 text-base text-blueMain" href={"https://www.google.com/maps/search/?api=1&query=-34.5798993,-59.1858183"} target='_blank'>Ver en Google Maps</Link>
                <div className='flex items-center mt-5'>
                  <span className='bg-green-300 rounded-md px-3 py-1 grid place-items-center text-[11px] uppercase mr-3 font-bold'>Venta</span>
                  <span className='text-2xl font-bold'>USD 25.000.000</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                {/* <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Información general</h4>
                  <span className='block'><strong>Precio HA u$s:</strong> 28506.27</span>
                  <span className='block'><strong>Basílica de Luján: </strong> 8 km</span>
                  <span className='block'><strong>Buenos Aires:</strong> 75 km</span>
                  <span className='block'><strong>Sobre Rutas Nacionales n°:</strong> 7 y 5</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' /> */}
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Superficies y medidas</h4>
                  <span className='block'><strong>Superficie:</strong> 877 HAS</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <h4 className='text-base font-bold mb-2 uppercase underline'>Descripción</h4>
                {/* <span className='block'>MEJORAS</span> */}
                <p>La Estancia Santa Elena, diseñada en 1943 por el arquitecto holandés Van Brant, se asemeja a un castillo anglo-normando y está ubicada sobre una colina, brindando vistas espectaculares de los jardines y el paisaje circundante. La casa principal, construida con los mejores materiales, cuenta con 15 habitaciones y amplias áreas sociales que se conectan a una terraza de 329 m² con vistas al parque de ciervos. Además, cuenta con caballerizas, capilla de estilo Art Nouveau con vitraux únicos, y jardines de 14 hectáreas con senderos, glorietas, y fauna exótica. Las 400 ha de bosque, con más de 300 especies de árboles, se complementan con un sistema de siete lagunas interconectadas. El Río Luján serpentea por la propiedad, ofreciendo oportunidades recreativas. La estancia es ideal para eventos sociales y empresariales, y cuenta con áreas para agricultura y ganadería.</p>
              </div>
              <div>
                <Gallery images={imagesLujan} />
                {/* <iframe className='mt-12 border-4 border-blueMain' width="100%" height="400" src="https://www.youtube.com/embed/WMXQkLBcbh4?si=UEkzKp24VIP0t7I_" title="El Fortin Patria video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
              </div>
            </div>
          </div>
        </div>
        {/* Lujan: End */}

        {/* Rojas: Begin */}
        <div className='field' id='rojas'>
          <div className='container'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-[4rem]'>
              <div className='fieldInfo'>
                <h2 className='leftBorder text-[24px] lg:text-[28px] mb-10 uppercase'>Rojas</h2>
                <p className='flex items-center mb-2'>
                  <svg className='icon mr-2 w-5 h-5' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                  </svg>
                  Rojas | Interior Buenos Aires | Argentina
                </p>
                <Link className="font-semibold underline ml-6 text-base text-blueMain" href={"https://www.google.com/maps/search/?api=1&query=-34.197698,-60.7338035"} target='_blank'>Ver en Google Maps</Link>
                <div className='flex items-center mt-5'>
                  <span className='bg-green-300 rounded-md px-3 py-1 grid place-items-center text-[11px] uppercase mr-3 font-bold'>Venta</span>
                  <span className='text-2xl font-bold'>USD 14.900.000</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Superficies y medidas</h4>
                  <span className='block'><strong>Superficie:</strong> 1600 HAS</span>
                </div>
              </div>
              <div>
                <Gallery images={imagesRojas} />
              </div>
            </div>
          </div>
        </div>
        {/* Rojas: End */}

        {/* Campo Mixto: Begin */}
        <div className='field' id='campo-mixto'>
          <div className='container'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-[4rem]'>
              <div className='fieldInfo'>
                <h2 className='leftBorder text-[24px] lg:text-[28px] mb-10 uppercase'>Campo Mixto de 1400 HAS</h2>
                <p className='flex items-center mb-2'>
                  <svg className='icon mr-2 w-5 h-5' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                  </svg>
                  Baradero | Interior Buenos Aires | Argentina
                </p>
                <Link className="font-semibold underline ml-6 text-base text-blueMain" href={"https://www.google.com/maps/search/?api=1&query=-33.812014,-59.50464"} target='_blank'>Ver en Google Maps</Link>
                <div className='flex items-center mt-5'>
                  <span className='bg-green-300 rounded-md px-3 py-1 grid place-items-center text-[11px] uppercase mr-3 font-bold'>Venta</span>
                  <span className='text-2xl font-bold'>USD 20.600.000</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                {/* <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Información general</h4>
                  <span className='block'><strong>Ambientes:</strong> 6</span>
                  <span className='block'><strong>Dormitorios:</strong> 5</span>
                  <span className='block'><strong>Baños:</strong> 3</span>
                  <span className='block'><strong>Piso:</strong> 1</span>
                  <span className='block'><strong>Antigüedad:</strong> 20 años</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' /> */}
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Superficies y medidas</h4>
                  <span className='block'><strong>Superficie:</strong> 1377 HAS</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <h4 className='text-base font-bold mb-2 uppercase underline'>Descripción</h4>
                <p>Este excelente campo mixto de 1.370 hectáreas, ubicado a solo 120 km de Ciudad Autónoma de Buenos Aires, combina una óptima distribución entre actividades agrícolas y ganaderas. Con suelos aptos para cultivos como soja, trigo y girasol, y ganadería sobre pasturas artificiales, ofrece gran versatilidad productiva. La propiedad cuenta con un casco principal de 300 m², que incluye 3 dormitorios en suite, un amplio living comedor, cocina y galería, además de una casa de huéspedes con 2 suites, una gran piscina de 14 x 7 m, casa para encargados y un galpón. Dispone de electricidad, agua potable, pavimento y acceso directo a la carretera. Con ambientes que incluyen cocina, comedor diario, y parrilla, este campo es ideal tanto para la producción como para disfrutar de la naturaleza. Además, posee áreas ganaderas con opciones de forestación y apoyo ganadero.</p>
              </div>
              <div>
                <Gallery images={imagesCampoMixto} />
              </div>
            </div>
          </div>
        </div>
        {/* Campo Mixto: End */}

      </section>

      <a href="https://wa.me/5493364110404?text=¡Hola!%20Quisiera%20recibir%20más%20información%20sobre" target="_blank" className="whatsapp-button w-15 h-15 rounded-full bg-whatsapp block fixed bottom-5 left-5 bg-whatsapp flex p-3 z-40 hover:bg-green-700 transition-all duration-300 animate-bounce">
          <svg className="w-10 h-10" height="100" fill="#fff" viewBox="-23 -21 682 682.66669" width="100" xmlns="http://www.w3.org/2000/svg">
            <path d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0" />
          </svg>
        </a>
        <a href="#main" className="back-to-top border-2 block w-12 h-12 flex fixed right-5 bottom-5 items-center justify-center rounded-full bg-white border-2 border-blueMain z-50">
          <svg className="w-6 h-6" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 2L6.293 1.293L7 0.585999L7.707 1.293L7 2ZM8 17C8 17.2652 7.89464 17.5196 7.70711 17.7071C7.51957 17.8946 7.26522 18 7 18C6.73478 18 6.48043 17.8946 6.29289 17.7071C6.10536 17.5196 6 17.2652 6 17H8ZM0.292999 7.293L6.293 1.293L7.707 2.707L1.707 8.707L0.292999 7.293ZM7.707 1.293L13.707 7.293L12.293 8.707L6.293 2.707L7.707 1.293ZM8 2V17H6V2H8Z" fill="black"/>
          </svg>
        </a>
    </main>
  )
}

export default Campos