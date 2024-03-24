import { useNavigate } from 'react-router-dom'
import React from 'react'

const Header = () => {
    const Tonavigate = useNavigate()
    const gotohome=()=>{
        Tonavigate('/')
    }
    const gotologin=()=>{
        Tonavigate('/login')
    }
    
    const gotodata=()=>{
        Tonavigate('/login')
    }
    
  return (
    <>

<header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a onClick={gotohome} class="mr-5 hover:text-white cursor-pointer" >Home</a>
      <a onClick={gotologin} class="mr-5 hover:text-white cursor-pointer">Login</a>
      <a onClick={gotodata} class="mr-5 hover:text-white cursor-pointer">Third Link</a>
      <a class="hover:text-white cursor-pointer">Fourth Link</a>
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
      <img className='border-black rounded-full w-24' src="/public/infi.png" alt="" />
        
      <span class="ml-3 text-xl xl:block lg:hidden">Tailblocks</span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</header>
    </>
  )
}

export default Header
