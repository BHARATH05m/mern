const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const router = require('./Routers/egRouters');
dotenv.config();
const app = express();
app.use(express.json());
const PORT=process.env.PORT;
connectDB();
app.use(router);
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})