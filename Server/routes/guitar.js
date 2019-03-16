const express = require('express')
const authCheck = require('../config/auth-check')
const Guitar = require('../models/Guitar')
const guitarController = require('../controllers/guitar-controller')

const router = new express.Router()

function validateCreateForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  payload.price = parseFloat(payload.price)

  if (!payload || typeof payload.guitarModelName !== 'string' || payload.guitarModelName.length < 6) {
    isFormValid = false
    errors.guitarModelName = 'Model name must be at least 6 symbols.'
  }

  if (!payload || typeof payload.head !== 'string' || payload.head.length < 4) {
    isFormValid = false
    errors.head = 'Head must be at least 4 symbols.'
  }

  if (!payload || typeof payload.body !== 'string' || payload.body.length < 4) {
    isFormValid = false
    errors.body = 'Body must be at least 4 symbols.'
  }

  if (!payload || typeof payload.neck !== 'string' || payload.neck.length < 4) {
    isFormValid = false
    errors.neck = 'Model name must be at least 4 symbols.'
  }

  if (!payload || typeof payload.pickups !== 'string' || payload.pickups.length < 4) {
    isFormValid = false
    errors.pickups = 'Model name must be at least 4 symbols.'
  }

  if (!payload || !payload.price || payload.price < 0) {
    isFormValid = false
    errors.price = 'Price must be a positive number.'
  }

  if (!payload || typeof payload.image !== 'string' || !(payload.image.startsWith('https://') || payload.image.startsWith('http://')) || payload.image.length < 14) {
    isFormValid = false
    errors.image = 'Please enter valid Image URL. Image URL must be at least 14 symbols.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/create', authCheck, (req, res) => {
  const guitarObj = req.body
  if (req.user.roles.indexOf('Admin') > -1) {
    const validationResult = validateCreateForm(guitarObj)
    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    }

    Guitar
      .create(guitarObj)
      .then((createdGuitar) => {
        res.status(200).json({
          success: true,
          message: 'Guitar added successfully.',
          data: createdGuitar
        })
      })
      .catch((err) => {
        console.log(err)
        let message = 'Something went wrong :( Check the form for errors.'
        if (err.code === 11000) {
          message = 'Model with the given name already exists.'
        }
        return res.status(200).json({
          success: false,
          message: message
        })
      })
  } else {
    return res.status(200).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
})

router.get('/all', (req, res) => {
  Guitar
    .find()
    .then(guitars => {
      res.status(200).json(guitars)
    })
})

router.get('/details/:guitarId', guitarController.getById)

module.exports = router