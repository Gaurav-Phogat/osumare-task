import express from 'express';
import router from './routers/task.router.js';
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());

app.use("/api/task/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});