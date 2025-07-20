import express from 'express';
import taskRoutes from './routes/taskRoutes.ts';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', taskRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});