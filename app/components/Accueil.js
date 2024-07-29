'use client'; // Ajoute ceci en haut du fichier


import React from 'react';
import Link from 'next/link';
import { useState } from 'react';



const images = [
    '/path/to/Image1.jpg',
    '/path/to/Image2.jpg',
    '/path/to/Image3.jpg',
    '/path/to/image3.jpg',
    '/path/to/Image2.jpg',
    '/path/to/Image1.jpg',
    '/path/to/Image2.jpg',
    '/path/to/Image3.jpg',
    '/path/to/Image31.jpg',
    // Ajoutez d'autres chemins d'image ici
  ];
  
  const ImageCarousel = () => {
    const [currentImage, setCurrentImage] = useState(0);
  };
    const nextImage = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };


 const AccueilPage = () => {
    return (
        <div className='style={{ transform: `translateX(-${currentIndex * 100}%)` }}>'>
              <div className='logo  justify-normal bg-black'>
                                <h3 className='text-white text-2xl font-bold'>Le Palmier</h3>
                                </div>
            <nav className="">
                <div className="">
                    <div className="flex items-center justify-center  bg-black h-16 ">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/">
                                </Link>
      
       </div>
        <div>
         </div>

             <div className='bg-black'>           
            <div className=" ">
            <div className="flex space-x-8 justify-center pb-12 text-white bg-black">
            <Link className='text-ellipsis  -500 transition duration-300 hover:scale-110 top-0 z-50  shadow-lg  font-bold' href="/">Accueil</Link>

             <Link className='text-ellipsis  -500 transition duration-300 hover:scale-110 top-0 z-50  shadow-lg  font-bold' href="/Login">Connexion</Link>
                <Link className='text-ellipsis transition duration-300 hover:scale-110 top-0 z-50  shadow-lg font-bold'  href="/register">Inscription</Link>
                 <Link className='text-ellipsis transition duration-300 hover:scale-110 top-0 z-50  shadow-lg font-bold '  href="/reservation">Chambre</Link>
                <Link  className='text-ellipsis transition duration-300 hover:scale-110 top-0 z-50  shadow-lg font-bold ' href="/activite">Activite</Link>
               
                </div>
               </div>
               </div>   
             </div>
             </div>
           </div>
            </nav>
          <div className='style={{ transform: `translateX(-${currentIndex * 100}%)` }}>'>
          <div className="relative min-h-screen bg-cover bg-center transform transition duration-500 hover:scale-10 bg-[url('https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_1280.jpg')] duration-2">
      <div className="absolute inset-0  opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center min-h-screen text-white text-center">
        <div className="p-4 -50 rounded-lg">
         
        </div>
      </div>
     
        </div>
        </div>
        <div>
          <div className='columns-2 style={{ transform: `translateX(-${currentIndex * 100}%)` }}> '>
        <div className="animate-fadeIn p-8 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4 transform transition duration-500 hover:scale-105 hover:shadow-lg">
       <h1 className="text-2xl font-bold text-gray-900">Le Palmier</h1>
    
      <p className="text-gray-700">
        Bienvenue à l'hôtel Le Palmier près de la mer, un havre de paix et de luxe situé à quelques pas de la plage. Profitez de nos chambres confortables, de notre service exceptionnel et de la beauté naturelle qui vous entoure.
      </p>
     
    </div>
    <div className="animate-fadeIn p-8 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4 transform transition duration-500 hover:scale-105 hover:shadow-lg">
  <h1 className="text-2xl font-bold text-gray-900">Le Palmier </h1>
     
   <p className="text-gray-700">
   Découvrez le charme de l'hôtel  un sanctuaire de tranquillité et de confort niché au cœur d'un paysage pittoresque. Réveillez-vous au son des vagues et détendez-vous dans nos chambres élégantes et accueillantes. .

      </p>
     
    </div>
        </div>
        </div>
        <div className=''>
            <div className=''>
            <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Hotel Booking</h2>
            <p>123 Main Street, Anytown, USA</p>
            <p>Email: contact@hotelbooking.com</p>
            <p>Phone: +221 33 45678 90</p>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Hotel Booking. All rights reserved.</p>
        </div>
      </div>
    </footer>
    <div>

    <footer className="bg-black text-white py-8 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Hotel Le Palmier</h2>
            <p>123 Palmarin, Fatick, Senegal</p>
            <p>Email: lepalmier123@.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li><a href="/Accueil" className="text-gray-400 hover:text-white">Accueil</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white"> About </a></li>
              <li><a href="/Reservation" className="text-gray-400 hover:text-white">Reservation</a></li>
              <li><a href="/C" className="text-gray-400 hover:text-white">Chambre</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h2 className="text-2xl font-bold mb-4">Suivez-Nous</h2>
            <div className="flex justify-center md:justify-end space-x-4">
            <div className='space-x-4  flex items-center justify-center   pb-32 '>
            <Link href='https://www.facebook.com/georges.ndene.5'>
     <i className="fa-brands fa-facebook text-white" aria-hidden='true'></i>
    </Link>
    <Link href='https://www.instagram.com/georgesndene/'>
     <i className="fa-brands fa-instagram text-white" aria-hidden='true'></i>
    </Link>
    <Link href='https://www.linkedin.com/in/georges-michel-ngor-ndene-aab584293/'>
      <i className="fa-brands fa-linkedin text-white" aria-hidden='true'></i>
    </Link>
    <Link href='https://github.com/GEORGESMICHELNGOR/'>
      <i className="fa-brands fa-github text-white" aria-hidden='true'></i>
    </Link>
            </div> 
              
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Hotel Booking. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
            </div>
        </div>

        </div>

       
    );
};
export default AccueilPage;