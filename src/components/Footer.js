'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {

  useEffect(() => {
    AOS.init({
      once: true,
      // disable: "phone",
      duration: 300,
      // easing: "ease-out-cubic",
    });
  }, []);

  return (
    <footer id='footer' className='bg-[url("/images/footer_bg.jpg")] bg-no-repeat bg-cover relative bg-fixed relative'>
        <div className="container relative z-10">
          <div className='footer-top py-14 grid lg:grid-cols-2'>
            <div className='footer-topLeft flex justify-center items-center flex-col'>
              <Image src={"/images/logo_kerlin_campos_rounded.png"} alt="logo Kerlin Campos" width={150} height={150} data-aos="flip-up" />
              <p className='text-white mt-10 mb-6' data-aos="fade-up">Visitá nuestras redes</p>
              <div className='social-links flex gap-4 items-center mb-10 lg:mb-0' data-aos="fade-up">
                <Link className='w-10 h-10 rounded-full bg-greenMain hover:bg-greenDark flex items-center justify-center transition-all' href={"https://www.facebook.com/kerlinbienesraices/"} target='_blank'>
                  <svg aria-label='Facebook' width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z" fill="#fff"/>
                  </svg>
                </Link>
                <Link className='w-10 h-10 rounded-full bg-greenMain hover:bg-greenDark flex items-center justify-center transition-all' href={"https://www.instagram.com/kerlinbienesraices/"} target='_blank'>
                <svg aria-label='Instagram' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" fill="#fff"/>
                  </svg>
                </Link>
                <Link className='w-10 h-10 rounded-full bg-greenMain hover:bg-greenDark flex items-center justify-center transition-all' href={"https://www.youtube.com/channel/UCO_9kE0eTwwPHhsSEK-htsw"} target='_blank'>
                  <svg aria-label='Youtube' width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z" fill="#fff"/>
                  </svg>
                </Link>
                <Link className='w-10 h-10 rounded-full bg-greenMain hover:bg-greenDark flex items-center justify-center transition-all' href={"https://www.youtube.com/channel/UCO_9kE0eTwwPHhsSEK-htsw"} target='_blank'>
                  <svg aria-label='TikTok' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6 2.82C11.9166 2.03953 11.5399 1.0374 11.54 0H8.45V12.4C8.42667 13.0712 8.14352 13.7071 7.66031 14.1735C7.1771 14.6399 6.5316 14.9004 5.86 14.9C4.44 14.9 3.26 13.74 3.26 12.3C3.26 10.58 4.92 9.29 6.63 9.82V6.66C3.18 6.2 0.160004 8.88 0.160004 12.3C0.160004 15.63 2.92 18 5.85 18C8.99 18 11.54 15.45 11.54 12.3V6.01C12.793 6.90985 14.2974 7.39265 15.84 7.39V4.3C15.84 4.3 13.96 4.39 12.6 2.82Z" fill="#fff"/>
                  </svg>
                </Link>
                <Link className='w-10 h-10 rounded-full bg-greenMain hover:bg-greenDark flex items-center justify-center transition-all' href={"https://www.linkedin.com/in/beatriz-kerlin"} target='_blank'>
                  <svg aria-label='Linkedin' width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.94 1.99999C4.93974 2.53043 4.72877 3.03903 4.35351 3.41391C3.97825 3.7888 3.46944 3.99926 2.939 3.99899C2.40857 3.99873 1.89997 3.78776 1.52508 3.4125C1.1502 3.03724 0.939737 2.52843 0.940003 1.99799C0.940268 1.46756 1.15124 0.958958 1.5265 0.584072C1.90176 0.209187 2.41057 -0.00127205 2.941 -0.00100683C3.47144 -0.000741613 3.98004 0.210226 4.35492 0.585487C4.72981 0.960747 4.94027 1.46956 4.94 1.99999ZM5 5.47999H1V18H5V5.47999ZM11.32 5.47999H7.34V18H11.28V11.43C11.28 7.76999 16.05 7.42999 16.05 11.43V18H20V10.07C20 3.89999 12.94 4.12999 11.28 7.15999L11.32 5.47999Z" fill="#fff"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className='footer-topRight flex items-center flex-col'>
              <h3 className='text-white mb-[60px]' data-aos="fade-up">Dejanos tu consulta</h3>
              <form className='w-full lg:w-[550px]' action='sendmail.php' data-aos="fade-up">
                <div className='form-group mb-6'>
                  <input className='p-3 px-4 w-full rounded-lg text-base focus:outline-none focus:outline-[3px] focus:outline-greenMain focus:outline-offset-0 transition-all' type='text' name='name' id='name' placeholder='Nombre y Apellido' />
                </div>
                <div className='form-group mb-6'>
                  <input className='p-3 px-4 w-full rounded-lg text-base focus:outline-none focus:outline-[3px] focus:outline-greenMain focus:outline-offset-0 transition-all' type='tel' name='telephone' id='telephone' placeholder='Teléfono' />
                </div>
                <div className='form-group mb-6'>
                  <input className='p-3 px-4 w-full rounded-lg text-base focus:outline-none focus:outline-[3px] focus:outline-greenMain focus:outline-offset-0 transition-all' type='email' name='email' id='email' placeholder='E-mail' />
                </div>
                <div className='form-group mb-8'>
                  <textarea name='comment' id='comment' placeholder='Ingrese su mensaje aquí' className='p-3 px-4 w-full rounded-lg text-base h-[150px] focus:outline-none focus:outline-[3px] focus:outline-greenMain focus:outline-offset-0 transition-all'></textarea>
                </div>
                <button type='submit' id='send' name='send' value={"Enviar"} className='btn btn-secondary' data-aos="fade-up">
                  Enviar
                  <svg className="icon" width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4417 12.3334V7.66669H0.0349997L0 5.32169H10.4417V0.666687L16.275 6.50002L10.4417 12.3334Z" fill="#0b9444" />
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