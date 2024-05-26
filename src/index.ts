import express from 'express';
import bodyParser from 'body-parser';
import { RegisterRoutes } from './routes/routes';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../dist/swagger.json';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

RegisterRoutes(app);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(err.status || 500).json({
        message: err.message,
        error: err
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Swagger docs are available at http://localhost:${port}/docs`);
});
