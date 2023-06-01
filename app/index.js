import express from 'express';
import mongoose from 'mongoose';
import router from './posts/PostsRouter.js';

const PORT = 5000;
const DB_URL = `mongodb+srv://${process.env.BLOG_EXPRESS_MONGO_USER}:${process.env.BLOG_EXPRESS_MONGO_PASS}@cluster0.cc0es3h.mongodb.net/?retryWrites=true&w=majority`;
const API_PATH = '/api';

const app = express();

app.use(express.json());
app.use(API_PATH, router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp()
