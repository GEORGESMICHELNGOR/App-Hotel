'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Composant de la page d'inscription
const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation des données côté client
        if (!username || !email || !password) {
            setError('Tous les champs doivent être remplis.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Email invalide.');
            return;
        }

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('Inscription réussie !');
                setUsername('');
                setEmail('');
                setPassword('');
                setError('');
            } else {
                setError(data.message || 'Erreur lors de l\'inscription.');
            }
        } catch (error) {
            setError('Erreur de réseau. Veuillez réessayer plus tard.');
            console.error(error);
        }
    };

    return (
      
             
             
          <div className='' >        
        <div className=" ">
        <div className="flex space-x-8 justify-center pb-12">

        <Link className='text-ellipsis  -500 transition duration-300 hover:scale-110 top-0 z-50  shadow-lg  font-bold' href="/">Accueil</Link>
<Link className='text-ellipsis  -500 transition duration-300 hover:scale-110 top-0 z-50  shadow-lg  font-bold' href="/Login">Connexion</Link>
   <Link className='text-ellipsis transition duration-300 hover:scale-110 top-0 z-50  shadow-lg font-bold'  href="/register">Inscription</Link>
    <Link className='text-ellipsis transition duration-300 hover:scale-110 top-0 z-50  shadow-lg font-bold '  href="/reservation">Chambre</Link>
   <Link  className='text-ellipsis transition duration-300 hover:scale-110 top-0 z-50  shadow-lg font-bold ' href="/activite">Activite</Link>
  
   </div>
               </div>
            <h6 className='text-center  items-center justify-center  bg-gray-100'>Inscription</h6>
            
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <form onSubmit={handleSubmit}>
                <div className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'>
                    <label>Nom d'utilisateur:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'>
                    <label>Mot de passe:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className='text-center'>S'inscrire</button>
            </form>
            
        </div>
        
        <div className=''>
       

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
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
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
    
    );
};

export default SignupPage;
