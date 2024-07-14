const jwt = require('jsonwebtoken');

const JWT_SECRET = "hamdanrazaisalsokhanarman"

// Get the user from JWT and add id to req object
const fetchuser = (req, res, next) => {
    // Get token from 'req.header' -> header name is 'auth-token'
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send("Please authenticate using valid token");
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send("Please authenticate using valid token");
    }
}


module.exports = fetchuser;