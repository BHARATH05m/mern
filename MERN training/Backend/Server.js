const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const router = require('./Routers/egRouters');
const todoRoute = require('./Routers/todoRouters');

dotenv.config();

const app = express(); 
app.use(cors());       

app.use(express.json());
const PORT = process.env.PORT;

connectDB();

app.use(router);
app.use('/todo', todoRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
