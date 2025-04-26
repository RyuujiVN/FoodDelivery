const { WHITELIST_DOMAINs } = require("~/utils/constant")

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin)
      return callback(null, true)

    if (WHITELIST_DOMAINS.includes(origin))
      return callback(null, true)
    return callback(new Error('Not allowed by CORS'))
  },
  optionsSuccessStatus: 200,

  // Cho phép nhận cookie từ request
  credentials: true
}

export default corsOptions