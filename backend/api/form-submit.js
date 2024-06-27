const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../db'); // Chemin mis à jour pour correspondre à la nouvelle structure
const User = require('../models/User'); // Chemin mis à jour pour correspondre à la nouvelle structure

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Route pour recevoir les données du formulaire
app.post('/api/form-submit', (req, res) => {
  const formData = req.body;

  // Créer une nouvelle instance de User avec les données du formulaire
  const newUser = new User({
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    address: formData.address,
    ownershipStatus: formData.ownershipStatus,
    heatingCount: formData.heatingCount
  });

  // Sauvegarder l'utilisateur dans la base de données MongoDB
  newUser.save()
    .then(() => {
      res.json({ message: 'Données reçues et enregistrées avec succès!' });
    })
    .catch(err => {
      res.status(500).json({ error: 'Erreur serveur lors de l\'enregistrement des données' });
    });
});

module.exports = app;
