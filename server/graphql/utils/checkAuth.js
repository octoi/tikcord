require("dotenv").config();

const jwt = require("jsonwebtoken");
const { AuthenticationError } = require("apollo-server");

module.exports = (context) => {
    const authHeader = context.req.headers.authorization;

    if(!authHeader) throw new Error("Authorization error must be provided");

    const token = authHeader.split('Bearer ')[1];
 
    if(!token) throw new Error("Authentication must be 'Bearer [token]'");

    try {
        const user = jwt.verify(token, process.env.JWT_KEY);
        return user;
    } catch (error) {
        throw new AuthenticationError('Invalid/Expired token');
    }
}