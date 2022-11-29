// Deconstruct the mongoose package.
const { connect, connection } = require('mongoose');

// Set up the connection string, giving both a deployed and locally run version options.
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialnetworkDB';

// Connect using connection string and required parameters.
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection to server.js
module.exports = connection;