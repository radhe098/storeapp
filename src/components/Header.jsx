import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {React, useRef} from 'react'

const Header = () => {
  const scrollRef = useRef(null);
  

  const handleScroll = () => {
    window.scrollTo({
      top: 2455,
      behavior: 'smooth',
    });
  };

  const Tonavigate = useNavigate()
  const gotohome = () => {
    Tonavigate('/')
  }
  const gotologin = () => {
    Tonavigate('/login')
  }

  const gotodata = () => {
    Tonavigate('/login')
  }

  return (
    <>

      <header class="text-gray-400 bg-gray-900 body-font">
        <div class="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav class="flex lg:w-2/5 flex-wrap items-center justify-start text-base md:ml-auto">
            <a onClick={gotohome} class="mr-5 hover:text-white cursor-pointer" >Home</a>
            <a onClick={gotologin} class="mr-5 hover:text-white cursor-pointer">Login</a>
            <a onClick={gotodata} class="mr-5 hover:text-white cursor-pointer">Third Link</a>
            <a class="hover:text-white cursor-pointer">Fourth Link</a>
          </nav>
          <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
            <span class="pacifico-regular  ml-3 text-xl xl:block lg:hidden">Sample store App</span>
          </a>
          <motion.div whileTap={{ scale: 0.85 }} class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button onClick={handleScroll} class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base text-yellow-200 mt-4 md:mt-0">Deals of the day
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14m-7-7l7 7 7-7" />
              </svg>
            </button>
          </motion.div>
        </div>
      </header>
    </>
  )
}

export default Header
