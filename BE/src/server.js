import express from 'express';
import exitHook from 'async-exit-hook';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import corsOptions from '~/configs/corsConfig.js';
import 'dotenv/config'
import APIs_V1 from '~/routes/v1/admin/index.js';
import { CLOSE_DB, CONNECT_DB, GET_DB } from '~/configs/databaseConfig.js';
import errorHandlingMiddleware from '~/middleware/errorHandlingMiddleware';

const START_SERVER = () => {
  const app = express()
  const port = process.env.PORT || 3000

  // cors
  app.use(cors(corsOptions));

  // cookie
  app.use(cookieParser());


  // parse application/json
  app.use(bodyParser.json());

  // Fix Cache from disk from ExpressJS
  app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store')
    next()
  });

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
}
)()