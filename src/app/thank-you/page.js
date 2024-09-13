import React from 'react'
import Link from 'next/link'

const ThankYou = () => {
  return (
    <>
        <main id='thank-you' className='py-80'>
            <div className='container'>
                <div className='flex justify-center flex-col items-center min-h-full'>
                    <h1 className='text-[36px] lg:text-[60px] font-bold text-greenMain leading-none mb-5 text-center'>¡Gracias por comunicarte con nosotros!</h1>
                    <p className='text-xl'>Nos pondremos en contacto con usted a la brevedad.</p>
                    <Link href={"/"} className='btn btn-primary mt-6'>Ir al inicio</Link>
                </div>
            </div>
        </main>  
    </>
  )
}

export default ThankYou