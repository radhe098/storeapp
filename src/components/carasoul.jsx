import {React, useEffect} from 'react';
import SmoothScroll from 'smooth-scroll';
import {motion} from 'framer-motion';

const Carasoul = () => {
  useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 500,
      speedAsDuration: true,
    });
  }, []);

  const scroll = new SmoothScroll();

// Scroll to a specific element
 


// "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
// 



  const ecom = [
    {
      "carsoulImageImg":"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      "title": "Casacomfort Luno 4 Seater Fabric LHS L Shape Sofa Set 4-Person Sofa",
      "category": "SUV",
      "price": "$30,000"
    },
    {
      "carsoulImageImg": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
      "title": "FurniCraft Contemporary Wooden Dining Table Set with 6 Chairs",
      "category": "Sedan",
      "price": "$25,000"
    },
    {
      "carsoulImageImg": "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?k=6&m=1185953092&s=612x612&w=0&h=SNiShskOfwQ7Sys5TX0eb5eBxHobktWUfZGrox5LMyk=",
      "title": "HomeDecor Luxury King Size Bed with Storage and LED Lights",
      "category": "Truck",
      "price": "$35,000"
    },
    {
      "carsoulImageImg":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "title": "Convertible Deluxe Recliner Chair with Massage Function and Cup Holder",
      "category": "Convertible",
      "price": "$40,000"
    },
    {
      "carsoulImageImg": "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
      "title": "Stylish Coupe Coffee Table Set with Tempered Glass Top",
      "category": "Coupe",
      "price": "$27,000"
    }
  ];



  return (
    <>
       <section className=" bg-gray-900 body-font flex-col justify-center p-8 overflow-auto">
        <div style={{ flex:"0 0 0 4000px"}} className="flex justify-between gap-48 mx-12 px-5 py-4 h-[32rem] w-[5000px] overflow-x-auto no-scrollbar">
      
            {ecom.map((item, index) => (
              <div key={index} className=" flex-row flex  justify-center">
                <div className="w-full md:w-1/2 p-4">
       <img src={item.carsoulImageImg} alt="image" />  
      </div>
      <div className="w-full md:w-1/2 p-4 text-white">
                  <h2 className="sm:text-3xl text-2xl title-font font-medium mt-4 mb-4">{item.title}</h2>
                  <div className="flex justify-between gap-2">
                    <h1 className="text-md inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 font-medium tracking-widest">CATEGORY</h1>
                    <h1 className="text-md font-medium py-1 px-2">{item.category}</h1>
                  </div>
                  <div className="flex justify-between mt-4 gap-6">
                    <h1 className="text-md inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 font-medium tracking-widest">Price</h1>
                    <h1 className="text-md font-medium py-1 px-2">{item.price}</h1>
                  </div>
                  <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                    <a className="text-indigo-400 inline-flex items-center">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            ))}
    
        </div>
        <div style={{ flex:"0 0 0 4000px"}} className="flex-row flex justify-around gap-48 mx-12 px-5 h-[rem] w-[5000px] overflow-x-auto no-scrollbar">
      
            {ecom.map((item, index) => (
              <div key={index} className=" flex-row flex  ">
                <div className="w-full md:w-1/2 p-4">
       <img src={item.carsoulImageImg} alt="" />  
      </div>
      <div className="w-full md:w-1/2 p-4 text-white">
                  <h2 className="sm:text-3xl text-2xl title-font font-medium mt-4 mb-4">{item.title}</h2>
                  <div className="flex justify-between gap-2">
                    <h1 className="text-md inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 font-medium tracking-widest">CATEGORY</h1>
                    <h1 className="text-md font-medium py-1 px-2">{item.category}</h1>
                  </div>
                  <div className="flex justify-between mt-4 gap-6">
                    <h1 className="text-md inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 font-medium tracking-widest">Price</h1>
                    <h1 className="text-md font-medium py-1 px-2">{item.price}</h1>
                  </div>
                  <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                    <a className="text-indigo-400 inline-flex items-center">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            ))}
    
        </div>
      </section>
    </>
  )
}

export default Carasoul;