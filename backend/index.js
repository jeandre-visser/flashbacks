import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';
dotenv.config();

// Run the app
const app = express();


app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Use express middleware to connect to application
// Every route inside postRoutes will start with /posts
app.use('/posts', postRoutes);

const CONNECTION_URL = process.env.REACT_APP_CONNECTION_URL;

const PORT = process.env.REACT_APP_PORT || 8080;

// Connect to database using mongoose
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running at port: ${PORT}`)))
  .catch((err) => console.log(err.message));