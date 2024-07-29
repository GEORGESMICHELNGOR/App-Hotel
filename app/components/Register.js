"use client";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Assurez-vous d'importer useRouter


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialiser useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password
    };

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        router.push('/accueil');  // Redirection vers la page "accueil"
      } else {
        console.error('Erreur lors de l\'inscription:', result.message || 'Erreur inconnue');
        alert('Erreur lors de l\'inscription. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error.message || 'Erreur inconnue');
      alert('Une erreur s\'est produite. Veuillez réessayer.');
    }
  };

  return (
    <div>
      <div className="flex space-x-8 items-center justify-center pb-12">
        <Link className='text-ellipsis -500 transition duration-300 hover:scale-110 top-0 z-50 shadow-lg font-bold' href="/">Accueil</Link>
        <Link className='text-ellipsis -500 transition duration-300 hover:scale-110 top-0 z-50 shadow-lg font-bold' href="/Login">Connexion</Link>
        <Link className='text-ellipsis transition duration-300 hover:scale-110 top-0 z-50 shadow-lg font-bold' href="/register">Inscription</Link>
        <Link className='text-ellipsis transition duration-300 hover:scale-110 top-0 z-50 shadow-lg font-bold' href="/reservation">Chambre</Link>
        <Link className='text-ellipsis transition duration-300 hover:scale-110 top-0 z-50 shadow-lg font-bold' href="/activite">Activite</Link>
      </div>

      <div className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl mb-4">S'enregister</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Nom d'Utilisateur</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Mot de Passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </form>
      </div>
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
                <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="/Reservation" className="text-gray-400 hover:text-white">Reservation</a></li>
                <li><a href="/C" className="text-gray-400 hover:text-white">Chambre</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <h2 className="text-2xl font-bold mb-4">Suivez-Nous</h2>
              <div className="flex justify-center md:justify-end space-x-4">
                <div className='space-x-4 flex items-center justify-center pb-32'>
                  <Link href='https://www.facebook.com/georges.ndene.5'><i className="fa-brands fa-facebook text-white" aria-hidden='true'></i></Link>
                  <Link href='https://www.instagram.com/georgesndene/'><i className="fa-brands fa-instagram text-white" aria-hidden='true'></i></Link>
                  <Link href='https://www.linkedin.com/in/georges-michel-ngor-ndene-aab584293/'><i className="fa-brands fa-linkedin text-white" aria-hidden='true'></i></Link>
                  <Link href='https://github.com/GEORGESMICHELNGOR/'><i className="fa-brands fa-github text-white" aria-hidden='true'></i></Link>
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
  );
};

export default Register;
