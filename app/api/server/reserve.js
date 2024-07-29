// api/reserve.js
import { MongoClient } from 'mongodb';

const uri = "votre_url_mongodb";
const client = new MongoClient(uri);

async function reserveRoom(req, res) {
  if (req.method === 'POST') {
    const { roomId, startDate, endDate, numberOfRooms } = req.body;

    try {
      await client.connect();
      const database = client.db('hotel');
      const reservations = database.collection('reservations');

      // Vérifier les chevauchements
      const overlappingReservations = await reservations.find({
        roomId,
        $or: [
          { startDate: { $lt: new Date(endDate) }, endDate: { $gt: new Date(startDate) } },
        ],
      }).toArray();

      if (overlappingReservations.length > 0) {
        res.status(400).json({ message: 'Cette période est déjà réservée' });
        return;
      }

      const reservation = {
        roomId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        numberOfRooms,
      };

      const result = await reservations.insertOne(reservation);

      res.status(200).json({ message: 'Réservation réussie', id: result.insertedId });
    } catch (error) {
      console.error('Erreur lors de la réservation:', error);
      res.status(500).json({ message: 'Erreur lors de la réservation' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}

export default reserveRoom;
