import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import swagger from 'swagger-ui-express';
import routers from './server/routers';
import swaggerJson from './swagger';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('short'));

app.use('/api/v2/', routers);
app.use('/docs/v2/', swagger.serve, swagger.setup(swaggerJson));

app.use((request, response) => {
  response.status(404).send({
    status: 404,
    error: 'Not Found !',
  });
});

app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
});

export default app;