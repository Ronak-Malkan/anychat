<template>
  <div id="app">
    <div class="name-input">
      <input v-model="senderName" placeholder="Enter your name"/>
    </div>
    <div class="chat-container">
      <div class="messages">
        <div v-for="(message, index) in messages" :key="index">
          <div class="message" :class="{ 'my-message': message.sender === 'You' }">
            <div class="sender">{{ message.sender }}</div>
            <div class="message-content">{{ message.message }}</div>
          </div>
        </div>
      </div>
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: "",
      ws: null,
      senderName: ""
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage) {
        let messageData = {
          message: this.newMessage,
          sender: this.senderName
        };
        this.ws.send(JSON.stringify(messageData));
        this.messages.push({ message: this.newMessage, sender: 'You' });
        this.newMessage = '';
      }
    }
  },
  mounted() {
    this.ws = new WebSocket('ws://localhost:8000');
    this.ws.onmessage = (event) => {
      console.log(event.data);
      const receivedMessage = JSON.parse(event.data);
      this.messages.push(receivedMessage);
    };

    this.ws.onclose = () => {
      console.log('WebSocket connection closed');
    };
  }

};
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.chat-container {
  width: 500px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.messages {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;
}

.message {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #e1ffc7;
  text-align: left;
  position: relative;
}

.my-message {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: right;
  position: relative;
  background-color: #d1e7ff;
}

.sender {
  font-size: 0.8em;
  color: #555;
  margin-bottom: 5px;
  margin-right: 5px
}

.message-content {
  font-size: 1em;
}

input {
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.name-input {
  margin-top: 10px;
  margin-bottom: 20px;
  width: 250px;
  max-width: 500px;
}

.name-input input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}
</style>

