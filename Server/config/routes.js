const authRoutes = require('../routes/auth')
const guitarRoutes = require('../routes/guitar')

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  }),
  app.use('/auth', authRoutes),
  app.use('/guitar', guitarRoutes)
}
