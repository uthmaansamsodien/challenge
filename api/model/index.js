const Users = require('./Users')
const Orders = require('./Orders')
const Books = require('./Books')
const BookAuthors = require('./BookAurthors')
//export all objects
module.exports = {
    users: new Users(),
}