import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer id='footer' className='bg-[url("/images/footer_bg.jpg")] bg-no-repeat bg-cover relative bg-fixed relative'>
        <div className="container relative z-10">
          <div className='footer-top py-14 grid lg:grid-cols-2'>
            <div className='footer-topLeft flex justify-center items-center flex-col'>
              <Image src={"/images/logo_kerlin_rounded.png"} alt="logo Kerlin" width={150} height={150} />
              <p className='text-white mt-10 mb-5'>Visitá nuestras redes</p>
              <div className='social-links flex gap-4 items-center mb-10 lg:mb-0'>
                <Link className='block w-10 h-10 rounded-full bg-blueMain flex items-center justify-center' href={"#"}>
                  <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z" fill="#fff"/>
                  </svg>
                </Link>
                <Link className='block w-10 h-10 rounded-full bg-blueMain flex items-center justify-center' href={"#"}>
                  <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.46 2C20.69 2.35 19.86 2.58 19 2.69C19.88 2.16 20.56 1.32 20.88 0.31C20.05 0.81 19.13 1.16 18.16 1.36C17.37 0.5 16.26 0 15 0C12.65 0 10.73 1.92 10.73 4.29C10.73 4.63 10.77 4.96 10.84 5.27C7.28001 5.09 4.11001 3.38 2.00001 0.79C1.63001 1.42 1.42001 2.16 1.42001 2.94C1.42001 4.43 2.17001 5.75 3.33001 6.5C2.62001 6.5 1.96001 6.3 1.38001 6V6.03C1.38001 8.11 2.86001 9.85 4.82001 10.24C4.19085 10.4129 3.53005 10.4369 2.89001 10.31C3.16162 11.1625 3.69355 11.9084 4.41103 12.4429C5.1285 12.9775 5.99546 13.2737 6.89001 13.29C5.37368 14.4905 3.49402 15.1394 1.56001 15.13C1.22001 15.13 0.880009 15.11 0.540009 15.07C2.44001 16.29 4.70001 17 7.12001 17C15 17 19.33 10.46 19.33 4.79C19.33 4.6 19.33 4.42 19.32 4.23C20.16 3.63 20.88 2.87 21.46 2Z" fill="#fff"/>
                  </svg>
                </Link>
                <Link className='block w-10 h-10 rounded-full bg-blueMain flex items-center justify-center' href={"#"}>
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z" fill="#fff"/>
                  </svg>
                </Link>
                <Link className='block w-10 h-10 rounded-full bg-blueMain flex items-center justify-center' href={"#"}>
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6 2.82C11.9166 2.03953 11.5399 1.0374 11.54 0H8.45V12.4C8.42667 13.0712 8.14352 13.7071 7.66031 14.1735C7.1771 14.6399 6.5316 14.9004 5.86 14.9C4.44 14.9 3.26 13.74 3.26 12.3C3.26 10.58 4.92 9.29 6.63 9.82V6.66C3.18 6.2 0.160004 8.88 0.160004 12.3C0.160004 15.63 2.92 18 5.85 18C8.99 18 11.54 15.45 11.54 12.3V6.01C12.793 6.90985 14.2974 7.39265 15.84 7.39V4.3C15.84 4.3 13.96 4.39 12.6 2.82Z" fill="#fff"/>
                  </svg>
                </Link>
                <Link className='block w-10 h-10 rounded-full bg-blueMain flex items-center justify-center' href={"#"}>
                  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.94 1.99999C4.93974 2.53043 4.72877 3.03903 4.35351 3.41391C3.97825 3.7888 3.46944 3.99926 2.939 3.99899C2.40857 3.99873 1.89997 3.78776 1.52508 3.4125C1.1502 3.03724 0.939737 2.52843 0.940003 1.99799C0.940268 1.46756 1.15124 0.958958 1.5265 0.584072C1.90176 0.209187 2.41057 -0.00127205 2.941 -0.00100683C3.47144 -0.000741613 3.98004 0.210226 4.35492 0.585487C4.72981 0.960747 4.94027 1.46956 4.94 1.99999ZM5 5.47999H1V18H5V5.47999ZM11.32 5.47999H7.34V18H11.28V11.43C11.28 7.76999 16.05 7.42999 16.05 11.43V18H20V10.07C20 3.89999 12.94 4.12999 11.28 7.15999L11.32 5.47999Z" fill="#fff"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className='footer-topRight flex items-center flex-col'>
              <h3 className='text-white mb-[60px]'>Dejanos tu consulta</h3>
              <form className='w-full lg:w-[550px]' action='phpmailer.php'>
                <div className='form-group mb-6'>
                  <input className='p-3 px-4 w-full rounded-lg text-base focus:bg-gray-100 focus:outline-none focus:outline-2 focus:outline-blue-600 focus:outline-offset-0 transition-all' type='text' name='name' id='name' placeholder='Nombre y Apellido*' />
                </div>
                <div className='form-group mb-6'>
                  <input className='p-3 px-4 w-full rounded-lg text-base' type='tel' name='telephone' id='telephone' placeholder='Teléfono' />
                </div>
                <div className='form-group mb-6'>
                  <input className='p-3 px-4 w-full rounded-lg text-base' type='email' name='email' id='email' placeholder='E-mail' />
                </div>
                <div className='form-group mb-8'>
                  <textarea name='comment' id='comment' placeholder='Ingrese su mensaje aquí' className='p-3 px-4 w-full rounded-lg text-base h-[150px]'></textarea>
                </div>
                <button type='submit' id='send' name='send' value={"Enviar"} className='btn btn-secondary'>
                  Enviar
                  <svg className="icon" width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4417 12.3334V7.66669H0.0349997L0 5.32169H10.4417V0.666687L16.275 6.50002L10.4417 12.3334Z" fill="#20396f"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='footer-bottom bg-blueMain py-4 relative z-20'>
          <div className='container'>
            <p className='text-center text-white text-sm mb-1'>Matriculado Responsable: Beatriz Kerlin - Matricula 1023</p>
            <p className='text-center text-white text-sm'>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer