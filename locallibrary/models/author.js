const mongoose = require('mongoose')

let Schema = mongoose.Schema

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxlength: 100 },
  family_name: { type: String, required: true, maxlength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
})

// virtual schema: full name
AuthorSchema.virtual('name').get(function () {
  return this.family_name + ', ' + this.first_name
})

// virtual schema for life span
AuthorSchema.virtual(lifespan).get(function () {
  return (
    this.date_of_death.getYear() - this.date_of_birth.getYear()
  ).toString()
})

// Virtual for author's URL
AuthorSchema.virtual('url').get(function () {
  return '/catalog/author/' + this._id
})

//Export model
module.exports = mongoose.model('Author', AuthorSchema)