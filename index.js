const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const swagger = require('swagger-ui-express')
const routers = require('./server/routers')
const swaggerJson = require('./swagger')

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

module.exports = router;
/*export default app;*/