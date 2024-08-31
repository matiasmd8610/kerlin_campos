import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <main id='page404'>
            <div className='flex justify-center flex-col items-center min-h-full'>
                <h1 className='text-[60px] lg:text-[140px] font-bold text-greenMain'>404</h1>
                <p className='text-xl'>Ops! Esta página no pudo ser encontrada</p>
                <Link href={"/"} className='btn btn-primary mt-6'>Ir al inciio</Link>
            </div>
        </main>  
    </div>
  )
}

export default NotFound