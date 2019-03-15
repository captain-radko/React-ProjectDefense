const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let guitarSchema = new mongoose.Schema({
    guitarModelName: { type: String, required: REQUIRED_VALIDATION_MESSAGE},
    price: { type: Number, required: REQUIRED_VALIDATION_MESSAGE },
    body: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
    head: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
    neck: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
    image: {type: String, required: REQUIRED_VALIDATION_MESSAGE},
    pickups: { type: String, required: REQUIRED_VALIDATION_MESSAGE }
})

let Guitar = mongoose.model('Guitar', guitarSchema)

module.exports = Guitar