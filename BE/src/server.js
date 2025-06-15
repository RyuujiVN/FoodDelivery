import express from 'express';
import exitHook from 'async-exit-hook';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import corsOptions from './configs/corsConfig.js';
import APIs_V1 from './routes/v1/admin/index.js';
import { CLOSE_DB, CONNECT_DB, GET_DB } from './configs/databaseConfig.js';
import errorHandlingMiddleware from './middlewares/errorHandlingMiddleware';
import env from './configs/environment.js';

const START_SERVER = () => {
  const app = express()
  const port = env.PORT || 8017

  // options for the swagger UI
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Food Delivery API',
        version: '1.0.0',
        description: 'API cho web Food Delivery'
      },
      servers: [
        {
          url: `http://localhost:8017`,
          description: 'Local Development'
        }
      ]
    },
    apis: ['./src/**/*.js']
  }

  const specs = swaggerJsdoc(options);

  // Fix Cache from disk from ExpressJS
  app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store')
    next()
  });

  // cors
  app.use(cors(corsOptions));

  // cookie
  app.use(cookieParser());

  // setup swagger UI
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

  // parse application/json
  app.use(bodyParser.json());

  // Route Admin
  app.use('/admin/api/v1', APIs_V1)

  // Middleware for error handling
  app.use(errorHandlingMiddleware)

  app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
  })

  exitHook(() => {
    CLOSE_DB();
    console.log('Closed MongoDB...')
  })
}

(async () => {
  try {
    // Connect to database
    await CONNECT_DB()
    console.log('Connected to MongoDB...')
    // Start server
    console.log('Starting server...')
    START_SERVER()
  } catch (error) {
    console.error('Error starting server:', error)
    process.exit(0)
  }
})()