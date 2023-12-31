const {sign, verify} =require('jsonwebtoken') 
require("dotenv").config()
function createToken(user) {
    return sign({
        email: user.emailAdd,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiredIn: '1h'
    }
    )    
}
// function verifyAToken(req, res, next){
    // const token =req.headers["authorizarion"]
// }

function verifyAToken(req, res, next){
    /*
    To prevent undefined error, place ?. before your property.
    */
   try{
        // Retrieve token from req.headers
        console.log("Get token from req.headers['authorization']");
        const token = req.headers["authorization"]
        console.log(token);
        next()
   }catch(e){
        res.json({
            status: res.statusCode,
            msg: e.message
        })
   }
}
module.exports =(
    createToken,
    verifyAToken
)   