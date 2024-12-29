const jwt = require('jsonwebtoken');
const jason_secret_key = "48a0d93893cd6f784478246cf66a76e710f14cc6177512330ceab0a90fc4dfd6";

const authenticatingJasontoken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, jason_secret_key, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }
        req.user = user;
        next();
    });
};

module.exports = authenticatingJasontoken;