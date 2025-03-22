const mongoose = require('mongoose')

const AnimalSchema = new mongoose.Schema({
    name: String,
    species: String,
    status: String,
    habitat: String,
    description: String,
    image: String
})

module.exports = mongoose.model("Animal", AnimalSchema)