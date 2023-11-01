require("dotenv").config();
const { sign } = require('jsonwebtoken');

function generateToken(id) {
  const options = {
    expiresIn: 1h,
    algorithm: 'RS256'
  }
};
const API_KEY = process.env.API_KEY;


function authenticateUser(req, res) {
    return new Promise((resolve, reject) => {
        let token = req.headers.authorization
        token = token.split(" ")[1]

        if (!token) {
            reject("No token provided");
        }

        if (token !== API_KEY) {
            reject("Invalid token");
        }

        resolve();
    })
}


module.exports = {
    authenticateUser
}