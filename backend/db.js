const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://lead:Czxps7E0fLm1oUMp@clusterlead.kb3wpja.mongodb.net/lead?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
  .then(() => console.log('Successfully'))
  .catch((err) => console.error('Connection error', err));

module.exports = mongoose.connection;
