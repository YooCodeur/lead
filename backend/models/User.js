const mongoose = require('mongoose');

// Schéma mongoose pour les informations utilisateur
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  ownershipStatus: { type: String, required: true }, // Ajout du statut de propriétaire ou locataire
  heatingCount: { type: Number, required: true } // Ajout du nombre de chauffages
});

// Modèle mongoose basé sur le schéma
const User = mongoose.model('User', userSchema);

module.exports = User; // Exporter le modèle pour l'utiliser dans d'autres fichiers
