import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blueMain py-5'>
        <div className="container">
            <p className='text-center text-white'>&copy; {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer