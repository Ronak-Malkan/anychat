# ANYCHAT - A Real-Time Chat Application

## Overview

This real-time chat application enables users to send messages that are instantly broadcast to all other connected users. It utilizes Vue.js for the frontend and Node.js with WebSockets for the backend, ensuring seamless real-time communication. No database is used, hence no messages are stored.

## Features

- Real-time messaging between users.
- Broadcast messages to all connected clients except the message originator.
- Simple and intuitive user interface.
- Users can be identified by their name. Which they have to enter in an input field.
- If a user does not enter their name, they appear as Anonymous to other users.

## Prerequisites

Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 14 or later)
- [npm](https://npmjs.com/) (typically comes with Node.js)
- [Vue CLI](https://cli.vuejs.org/) (Install with `npm install -g @vue/cli`)

## Installation

### Clone the Repository

Clone the project repository to your local machine using the following command:

```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app
```

## Backend Setup

The backend uses Node.js and WebSocket to manage connections and message broadcasting:

1. Navigate to the backend directory:

```bash
cd chat-backend
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node server.js
```

This starts the backend server on http://localhost:8080, listening for WebSocket connections.

## Frontend Setup

The frontend is built with Vue.js, providing a user-friendly interface for the chat application:

1. Navigate to the frontend directory:

```bash
cd web
```

2. Install the dependencies:

```bash
npm install
```

3. Launch the Vue development server:

```bash
npm run serve
```

This will serve the frontend on http://localhost:8081 and automatically open it in your default web browser.

## Using the chat application:

To use the chat application:

1. Open the application: Navigate to http://localhost:8081 in your web browser.
2. Multiple Users: Open multiple tabs or different browsers at http://localhost:8081 to simulate multiple users.
3. Send Messages: Type your message into the input box and press Enter or click the Send button.

Observe that messages are instantly broadcast to all other open tabs except the one from which the message was sent.
