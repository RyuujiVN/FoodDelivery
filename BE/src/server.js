import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import corsOptions from '~/configs/corsConfig.js';
import 'dotenv/config'

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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})