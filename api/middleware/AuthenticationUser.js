const { hashSync } = require('bcrypt')
const {sign, verify} =require('jsonwebtoken') 
const {hash, copare, hashSync} =require ('bycript')

require("dotenv").config()
function createToken(user) {
    return sign({
        email: user.emailAdd,
        userPass: user.userPass
    },
    process.env.SELECT_KEY,
    {
        expiration: '1h'
    }
    )    
}

// function verifyAToken(req, res, next){
    // const token =req.headers["authorizarion"]
// }

module.exports =(
    createToken
)