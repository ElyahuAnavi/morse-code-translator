// src/server.ts
import express from 'express';
import bodyParser from 'body-parser';
import { RegisterRoutes } from './routes/routes'; // Adjusted to relative path
import swaggerUi from 'swagger-ui-express';
import { vars } from './config/vars';

const app = express();
const port = vars.port || 3000;

app.use(bodyParser.json());

RegisterRoutes(app);

import swaggerDocument from '../dist/swagger.json';
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err: any, req: express.Request, res: express.Response) => {
  res.status(err.status || 500).json({
    message: err.message,
    error: err,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Swagger docs are available at http://localhost:${port}/docs`);
});
