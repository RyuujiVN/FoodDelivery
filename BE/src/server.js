import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import corsOptions from '~/configs/corsConfig.js';
import APIs_V1 from '~/routes/v1/admin/index.js';
import 'dotenv/config'

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

  app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
  })
}

(async () => {
  try {
    // Start server
    console.log('Starting server...')
    START_SERVER()
  } catch (error) {
    console.error('Error starting server:', error)
    process.exit(0)
  }
}
)()