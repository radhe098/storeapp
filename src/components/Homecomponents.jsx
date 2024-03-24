import {React, useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import viteimg from '../../public/vite.svg';
const Homecomponents = () => {
    const [clickCount, setClickCount] = useState(0);
    const navigateTo = useNavigate();
    useEffect(() => {
   
        const redirects = ['/login', '/','/okbro'];
    const redirectPath = redirects[Math.min(clickCount, redirects.length - 1)];
    if (clickCount === 1) {
        navigateTo('/login');
      } else if (clickCount === 2) {
        navigateTo('/');
      }
       else if (clickCount === 4) {
        navigateTo('/okbro');
      }
      console.log(clickCount)
    } 
, [clickCount, navigateTo]);
const goto =() =>{
    setClickCount(prevCount => prevCount + 1);
}

  return (
    <>
      <section class="text-Black bg-green-200 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div  class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link to="/login" class="block relative h-48 rounded overflow-hidden" onClick={goto}>
          <img  alt="ecommerce" class="object-cover object-center w-full h-full block" src={viteimg}/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-grey-800 title-font text-lg font-medium">Alight Motion mod APK</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-grey-800 title-font text-lg font-medium">Alight Motion mod APK</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-grey-800 title-font text-lg font-medium">Alight Motion mod APK</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-grey-800 title-font text-lg font-medium">TAlight Motion mod APK</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-grey-800 title-font text-lg font-medium">Alight Motion mod APK</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-grey-800 title-font text-lg font-medium">Alight Motion mod APK</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-grey-800 title-font text-lg font-medium">Alight Motion mod APK</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-grey-800 title-font text-lg font-medium">Alight Motion mod APK</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Homecomponents
