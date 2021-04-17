const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerUser } = require("../../postgres/helper");

const generateToken = (user) => {
    return jwt.sign({
        id: user.id,
        name: user.name,
        email: user.email
    }, process.env.JWT_KEY, { expiresIn: '2h' });
}

const Mutation = {
    register: async (_, { name, email, password, bio, profile }) => {
        password = await bcrypt.hash(password, 10);
        const registerData = await registerUser(name, email, password, bio, profile);
        
        const token = generateToken(registerData);
        return { ...registerData, token };
    }
}

const Query = {}

module.exports = { Mutation, Query }