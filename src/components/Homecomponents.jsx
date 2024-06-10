import {React, useState, useEffect, useRef} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import viteimg from '../../public/vite.svg';
import patternbg from '../../public/codioful.jpg'; 

const Homecomponents = () => {
    const [clickCount, setClickCount] = useState(0);
    const navigateTo = useNavigate();
    const data=[
      { "image": "https://dummyimage.com/640x360/000/a", "data": 1 },
      { "image": "https://dummyimage.com/640x360/000/a", "data": 3 },
      { "image": "https://dummyimage.com/640x360/000/a", "data": 4 },
      { "image": "https://dummyimage.com/640x360/000/a", "data": 22 },
      { "image": "https://dummyimage.com/640x360/000/a", "data": 4 },
      { "image": "https://dummyimage.com/640x360/000/a", "data": 5 },
      { "image": "https://dummyimage.com/640x360/000/a", "data": 6 },
      { "image": "https://dummyimage.com/640x360/000/a", "data": 3 },
      { "image": "https://dummyimage.com/640x360/000/a", "data": 24 },
      { "image": "https://dummyimage.com/640x360/000/a", "data": 6 },
      { "image": "https://dummyimage.com/640x360/000/a", "data": 4 },
      { "image": "https://dummyimage.com/640x360/000/a", "data": 4 }
    ];
    
    const ref = useRef(null);
    
    useEffect(() => {

      // const [data, setData] = useState([]);
      
   
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
    
      <section style={{ backgroundImage: `url(${patternbg})`}} class="text-Black block bg-opacity-100 bg-yellow-100 body-font">
  <div class="container px-5 py-24 mx-auto ">
    <div class="flex flex-wrap justify-center gap-8">
      { data.map((item, index) => (
        <div key={index} class="lg:w-1/4 md:w-1/2 p-4 w-full border-black border rounded-md">
          <Link to="/login" class="block relative h-48 rounded overflow-hidden" onClick={goto}>
            <img  alt="ecommerce" class="object-cover object-center w-full h-full block  hover:scale-110 " src={item.image}/>
          </Link>
          <div class="mt-4 flex-col bg-teal-300 p-2 rounded-lg ">
            <h2 class="text-grey-800 title-font text-lg font-medium">Alight Motion mod APK</h2>
            <div class='flex float-end -mt-4 h-full bg-white rounded-l-md rounded-bl-xl -mr-3'>
            <p class="mt-1 font-bold text-lg text-center w-[4rem]">{item.data}$</p>
            </div>
          </div>
        </div>
      )) }
    </div>
  </div>
</section>
    </>
  )
}

export default Homecomponents
