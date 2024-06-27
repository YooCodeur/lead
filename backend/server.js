const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // Importer la connexion à MongoDB depuis db.js
const User = require('./models/User'); // Importer le modèle User

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Inclure les routes de l'API
app.use('/api/form-submit', require('./api/form-submit'));

