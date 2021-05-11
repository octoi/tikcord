# TIKCORD
Unleash your creativity

> Redis Hackathon Project

<a href="https://youtu.be/dQw4w9WgXcQ">
Full explanation video
</a>

<br>

Tikcord is a social platform where users can register and upload their posts 📮 

<br>

## SETUP 👷‍♀️

You need node js, postgres sql, redis, npm

1. Run redis server from your terminal

```bash
redis-server
```

2. Setup database

You need a database named `tikcord`

```sql
CREATE DATABASE tikcord;
```

3. Setup server

   - env

     create an env file and fill it accordingly  with template

   - install dependencies

     ```bash
     npm install
     ```

   - run server

     ```bash
     node server.js
     ```

4. Setup client

   - env

     create an. env file 

     you need an api for this project get it from https://api.imgbb.com/

     ```bash
     SERVER_URL = SERVER_URL
     API_KEY = https://api.imgbb.com/
     ```

     because i'm an idiot so you have to fill api key in on more place 😅

     navigate to `client/utils/api` create a file named env.js

     ```javascript
     const API_KEY = "YOUR_API_KEY" // https://api.imgbb.com/
     export default API_KEY
     ```

   - install dependencies

     ```bash
     npm install
     ```

   - spin up 

     ```bash
     npm run dev
     ```

     

