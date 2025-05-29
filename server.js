const express = require('express');
const RED = require('node-red');

// Créer une application Express
const app = express();
const server = require('http').createServer(app);

// Créer un runtime Node-RED
const settings = {
  httpAdminRoot: '/admin',
  httpNodeRoot: '/',
  userDir: './user-data/',
  functionGlobalContext: { }
};
RED.init(server, settings);

// Configure l'interface d'administration de Node-RED
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

// Démarre le serveur
server.listen(process.env.PORT || 3000, () => {
  console.log('Node-RED is running');
});

// Lance Node-RED
RED.start();
