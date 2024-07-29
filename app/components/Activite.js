import Image from 'next/image'
import Head from 'next/head';



import Link from 'next/link';

export default function Activities() {
  const activities = [
    {
      title: "Randonnée en montagne",
      description: "Découvrez les magnifiques paysages de montagne avec nos randonnées guidées.",
      imageUrl: "/Image4.jpg",
    },
    {
      title: "Cours de cuisine",
      description: "Participez à nos cours de cuisine et apprenez à préparer des plats locaux délicieux.",
      imageUrl: "/cuisine.jpg",
    },
    {
      title: "Spa et bien-être",
      description: "Détendez-vous et revitalisez-vous avec nos services de spa et bien-être.",
      imageUrl: "/spa.jpg",
    },
  ];

  return (

    <div className='bg-black'>
    <div className="container mx-auto px-4 py-8">
       <div className="flex space-x-8 justify-center pb-12">
       <Link className='text-white   -500 transition duration-300 hover:scale-110 top-0 z-50  shadow-lg  font-bold' href="/">Accueil</Link>

<Link className='text-white  -500 transition duration-300 hover:scale-110 top-0 z-50  shadow-lg  font-bold' href="/Login">Connexion</Link>
   <Link className='text-white transition duration-300 hover:scale-110 top-0 z-50  shadow-lg font-bold'  href="/register">Inscription</Link>
    <Link className='text-white transition duration-300 hover:scale-110 top-0 z-50  shadow-lg font-bold '  href="/reservation">Chambre</Link>
   <Link  className='text-white transition duration-300 hover:scale-110 top-0 z-50  shadow-lg font-bold ' href="/activite">Activite</Link>
  
   </div>
      <h1 className="text-4xl font-bold mb-8 text-white">Nos Activités</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        {activities.map((activity, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-lg">
            <Image src={activity.imageUrl} alt={activity.title} width={400} height={300} className="w-full" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2 text-white">{activity.title}</h2>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
      <>
      <Head>
        <title>Ma L'environnement de L'hotel</title>
        <meta name="description" content="Page avec une vidéo YouTube intégrée" />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold ">Ma L'environnement de L'hotel</h1>
        <div className="video-container mt-4 w-full h-auto "  autoPlay loop muted>
        <iframe width="1000" height="500" src="https://www.youtube.com/embed/gWDOH_BSWJk?si=cU6VJaSlxIa1zvrS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </>
   
   <div >

   </div>
   <div className=''>
            <div className=''>
            <footer className=" text-white py-8">
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

    <footer className=" text-white py-8">
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
