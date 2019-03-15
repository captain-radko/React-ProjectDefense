const authRoutes = require('../routes/auth')
const guitarRoutes = require('../routes/guitar')

module.exports = (app) => {
  app.use('/auth', authRoutes),
  app.use('/guitar', guitarRoutes)
}
