// pages/api/reserve.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { roomId, startDate, endDate, numberOfRooms } = req.body;
  
      // Logique de réservation, par exemple, sauvegarder dans une base de données
      // Pour l'exemple, on retourne simplement un message de confirmation
  
      res.status(200).json({ message: 'Réservation confirmée avec paiement à l\'arrivée' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
   
    
    }
  }
  
  