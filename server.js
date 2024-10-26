const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const clients = new Set();

wss.on('connection', (ws) => {
  clients.add(ws);
  console.log('New client connected.');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    const receivedMessage = JSON.parse(message);
    if(receivedMessage.sender === "") receivedMessage.sender = "Anonymous";
    // Broadcast message to all connected clients
    clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(receivedMessage));
      }
    });
  });

  ws.on('close', () => {
    clients.delete(ws);
    console.log('Client disconnected.');
  });
});

// Basic route for the server
app.get('/', (req, res) => {
  res.send('WebSocket server is running');
});

// Start the server
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});