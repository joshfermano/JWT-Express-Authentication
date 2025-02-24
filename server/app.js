import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
