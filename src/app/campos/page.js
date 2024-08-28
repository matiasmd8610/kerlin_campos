'use client'
import Gallery from '@/components/Gallery';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

const Campos = () => {
  
  const [modalActive, setModalactive] = useState(false);
  
  const openModal = (id) => {
    setModalactive(!modalActive);
  }

  const imagesLasMellizas = [
    { src: 'images/las-mellizas/las_mellizas_01.jpg', thumb: 'images/las-mellizas/las_mellizas_01.jpg' },
    { src: 'images/las-mellizas/las_mellizas_02.jpg', thumb: 'images/las-mellizas/las_mellizas_02.jpg' },
    { src: 'images/las-mellizas/las_mellizas_03.jpg', thumb: 'images/las-mellizas/las_mellizas_03.jpg' },
    { src: 'images/las-mellizas/las_mellizas_04.jpg', thumb: 'images/las-mellizas/las_mellizas_04.jpg' },
    { src: 'images/las-mellizas/las_mellizas_05.jpg', thumb: 'images/las-mellizas/las_mellizas_05.jpg' }
  ];

  // const images2 = [
  //   { src: 'images/marketing_digital.jpg', thumb: 'images/marketing_digital.jpg' },
  //   { src: 'images/hero_bg.jpg', thumb: 'images/hero_bg.jpg' },
  // ];
  
  return (
    <main id='main' className='fields'>
        <section className='hero-section relative bg-[url("/images/hero_campos_bg.jpg")] h-[200px] lg:h-[260px] bg-no-repeat bg-cover flex items-center bg-bottom text-white'>
            <div className='container relative z-10'>
              <h1 className='text-[30px] lg:text-[40px] uppercase text-center leftBorder'>Nuestros Campos</h1>
            </div>
        </section>

        <section id='fields'>
          {/* Las Mellizas: Begin */}
          <div className='field' id='las-mellizas'>
            <div className='container'>
              <div className='grid lg:grid-cols-2 gap-10 lg:gap-[5rem]'>
                <div>
                  <h2 className='leftBorder text-[28px] mb-10 uppercase'>Las Mellizas</h2>
                  <p className='flex lg:items-center mb-1 text-xl'>
                    <svg className='icon mr-2 w-5 h-5 shrink-0 translate-y-[0.5rem] lg:translate-y-0' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                    </svg>
                    San Nicolas De Los Arroyos | San Nicolas | Interior Buenos Aires
                  </p>
                  <Link className="font-semibold underline ml-6 text-base text-blueMain" href={"https://www.google.com/maps/search/?api=1&query=-33.3023181,-60.2688949"} target='_blank'>Ver en Google Maps</Link>
                  {/* <button className="font-semibold underline ml-6 text-base text-blueMain"  type="button" onClick={() => openModal("las-mellizas")}>Ver en Google Maps</button> */}
                  <div className='flex items-center mt-5'>
                    <span className='bg-green-300 rounded-md px-3 py-1 grid place-items-center text-[11px] uppercase mr-3 font-bold'>Venta</span>
                    <span className='text-2xl font-bold'>USD 375.000</span>
                  </div>
                  <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                  <div>
                    <h4 className='text-base font-bold mb-2 uppercase underline'>Información general</h4>
                    <span className='block'><strong>Condición:</strong> Excelente</span>
                    <span className='block'><strong>Antigüedad:</strong> A estrenar</span>
                    <span><strong>Superficie:</strong> 500000.0 HA</span>
                  </div>
                  <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Descripción</h4>
                  <p>Cuartel primero de campaña, señalado con el número nueve, compuesta su superficie de cincuenta hectáreas, sesenta y dos áreas, veinte centiareas y treinta decímetros cuadrados.</p>
                  <p>El campo es 100% agricola, ubicado a 2km del pavimento (ex ruta 21, actualmente Avenida Illia), acceso en muy buen estado. No cuenta con mejoras, salvo alambrado perimetral en muy buen estado.</p>
                </div>
                <div>
                  <Gallery images={imagesLasMellizas} />
                  {/* <iframe className='mt-10' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3334.6308955883137!2d-60.2688949!3d-33.3023181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDE4JzA4LjQiUyA2MMKwMTYnMDguMCJX!5e0!3m2!1ses-419!2sar!4v1724617503194!5m2!1ses-419!2sar" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
              </div>
            </div>

            <div className={`modal-las-mellizas ${modalActive ? "block" : "hidden"}`}>
              <p>Modal</p>
            </div>
          </div>
          {/* Las Mellizas; End */}

          {/* Campo 2: Begin */}
          {/* <div className='field mt-10' id='campo-02'>
            <div className='container'>
              <div className='grid lg:grid-cols-2 gap-[5rem]'>
                <div>
                  <h2 className='leftBorder text-[30px] mb-10 uppercase'>Campo 2</h2>
                  <p className='flex items-center mb-2'>
                    <svg className='icon mr-2 w-5 h-5' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                    </svg>
                    San Nicolas De Los Arroyos | San Nicolas | Interior Buenos Aires
                  </p>
                  <button className="font-semibold underline ml-6"  type="button" onClick={() => openModal("las-mellizas")}>Ver en Google Maps</button>
                  <hr className='border-0 h-0.5 bg-blueMain w-full my-5' />
                </div>
                <div>
                  <Gallery images={images2} />
                </div>
              </div>
            </div>

            <div className={`modal-las-mellizas ${modalActive ? "block" : "hidden"}`}>
              <p>Modal</p>
            </div>
          </div> */}
          {/* Campo2: End */}
        </section>
    </main>
  )
}

export default Campos