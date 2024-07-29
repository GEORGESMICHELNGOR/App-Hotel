"use client"; // Ajoutez ceci en haut du fichier
import Link from 'next/link';
import { useState } from 'react';



function RoomCard({ room }) {
  const [message, setMessage] = useState('');

  const handleReserve = () => {
    setMessage('Réservation réussie');
    setTimeout(() => setMessage(''), 7000); // Efface le message après 3 secondes
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="rounded-lg shadow-lg transition-transform transform hover:scale-105" src={room.image} alt="Room image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{room.title}</div>
        <p className="text-gray-700 text-base">{room.description}</p>
        <p className="text-lg">Prix: {room.price} €</p>
        <button
          onClick={handleReserve}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Réserver
        </button>
        {message && <p className="text-green-500 mt-2">{message}</p>}
      </div>
    </div>
  );
}




export default function ReservationPage() {


 

  const rooms = [
    {
      id: 1,
      title: "Luxury Suite",
      description: "A luxurious suite with a beautiful view.",
      price: 250,
      image: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg"
    },
    {
      id: 2,
      title: "Cozy Room",
      description: "A cozy room for a comfortable stay.",
      price: 150,
      image: "https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg"
    },
    
    {
      id: 2,
      title: "Cozy Room",
      description: "A cozy room for a comfortable stay.",
      price: 150,
      image: "https://cdn.pixabay.com/photo/2020/02/01/06/12/upholstery-4809588_1280.jpg"
    },
    
    {
      id: 2,
      title: "Cozy Room",
      description: "A cozy room for a comfortable stay.",
      price: 150,
      image: "https://cdn.pixabay.com/photo/2020/12/24/19/10/hotel-room-5858068_1280.jpg"
    },
    
    {
      id: 2,
      title: "Cozy Room",
      description: "A cozy room for a comfortable stay.",
      price: 150,
      image: "https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416063_1280.jpg"
    },
    {
      id: 2,
      title: "Cozy Room",
      description: "A cozy room for a comfortable stay.",
      price: 150,
      image: "https://cdn.pixabay.com/photo/2024/04/01/14/09/room-8669028_1280.jpg"
    },
    {
      id: 2,
      title: "Cozy Room",
      description: "A cozy room for a comfortable stay.",
      price: 150,
      image: "https://cdn.pixabay.com/photo/2015/01/16/08/54/motel-601218_1280.jpg"
    },
    {
      id: 2,
      title: "Cozy Room",
      description: "A cozy room for a comfortable stay.",
      price: 150,
      image: "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg"
    },
    {
      id: 2,
      title: "",
      description: "A cozy room for a comfortable stay.",
      price: 150,
      image: "https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_1280.jpg"
    },
    {
      id: 2,
      title: "Cozy Room",
      description: "A cozy room for a comfortable stay.",
      price: 150,
      image: "https://cdn.pixabay.com/photo/2024/04/21/01/27/ai-generated-8709663_1280.png"
    },
    {
      id: 2,
      title: "Cozy Room",
      description: "A cozy room for a comfortable stay.",
      price: 150,
      image: "https://cdn.pixabay.com/photo/2023/09/09/06/34/bedroom-8242523_1280.jpg"
    },
    {
      id: 2,
      title: "Cozy Room",
      description: "A cozy room for a comfortable stay.",
      price: 150,
      image: "https://cdn.pixabay.com/photo/2017/03/10/10/08/room-boy-2132349_1280.jpg"
    },
    {
      id: 2,
      title: "Cozy Room",
      description: "A cozy room for a comfortable stay.",
      price: 150,
      image: "https://cdn.pixabay.com/photo/2023/09/09/06/34/bedroom-8242523_1280.jpg"
    },
    {
      id: 2,
      title: "Cozy Room",
      description: "A cozy room for a comfortable stay.",
      price: 150,
      image: "https://cdn.pixabay.com/photo/2016/11/08/09/48/bedroom-1807837_1280.jpg"
    },
    {
      id: 2,
      title: "Cozy Room",
      description: "A cozy room for a comfortable stay.",
      price: 150,
      image: "https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg"
    },
    {
      id: 2,
      title: "Cozy Room",
      description: "A cozy room for a comfortable stay.",
      price: 150,
      image: "https://cdn.pixabay.com/photo/2021/12/22/16/57/room-6887944_1280.jpg"
    },
    {
      id: 2,
      title: "Cozy Room",
      description: "A cozy room for a comfortable stay.",
      price: 150,
      image: "https://cdn.pixabay.com/photo/2017/01/28/08/13/master-bedroom-2014865_1280.jpg"
    },
    {
      id: 2,
      title: "Cozy Room",
      description: "A cozy room for a comfortable stay.",
      price: 150,
      image: "https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_1280.jpg"
    },
    
  ];

  return (

       <div className='bg-black text-white'>
        <div className='pb-12 text-white'>
           
       <div className=" flex space-x-8 justify-center pb-12">
       <div className="flex space-x-8 justify-center pb-12">
       <Link className='text-ellipsis  -500 transition duration-300 hover:scale-110 top-0 z-50  shadow-lg  font-bold' href="/">Accueil</Link>

<Link className='text-white  -500 transition duration-300 hover:scale-110 top-0 z-50  shadow-lg  font-bold' href="/Login">Connexion</Link>
   <Link className='text-white transition duration-300 hover:scale-110 top-0 z-50  shadow-lg font-bold'  href="/register">Inscription</Link>
    <Link className='text-white transition duration-300 hover:scale-110 top-0 z-50  shadow-lg font-bold '  href="/reservation">Chambre</Link>
   <Link  className='text-white transition duration-300 hover:scale-110 top-0 z-50  shadow-lg font-bold ' href="/activite">Activite</Link>
  
   </div>
                </div>
                <div className="container mx-auto px-4 py-8 overflow-hidden w-full text-white">
      <h1 className="text-4xl font-bold mb-8 text-white">Nos Chambres</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white     ">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
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

    <footer className="bg-black text-white py-8">
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
                <Link href='https://www.facebook.com/georges.ndene.5'><i className="fa-brands fa-facebook text-white " aria-hidden='true'></i></Link>
                <Link href='https://www.instagram.com/georgesndene/'><i className="fa-brands fa-instagram text-white" aria-hidden='true'></i></Link>
                <Link href='https://www.linkedin.com/in/georges-michel-ngor-ndene-aab584293/'><i className="fa-brands fa-linkedin text-white" aria-hidden='true'></i></Link>
                <Link href='https://github.com/GEORGESMICHELNGOR/'> <i className="fa-brands fa-github text-white" aria-hidden='true'></i></Link>
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
    </div>
  );
}
