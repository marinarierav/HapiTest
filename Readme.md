Previous:
1. Install ActiveMQ (5min) https://activemq.apache.org/getting-started
2. Run "activemq console"
3. Watch ActiveMQ queues: Connect to http://localhost:8161/admin/

Run:
Create a single message to the queue:
node node/app.js POST 3001

Listen for messages in the queue:
node node/app.js GET 3000

Documentation on activeMQ REST:
https://activemq.apache.org/rest