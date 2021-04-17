const { AuthenticationError } = require("apollo-server-errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerUser } = require("../../postgres/helper");
const { checkUserExists } = require("../../postgres/utils/check");

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
    },

    login: async (_, { email, password }) => {
        const data = await checkUserExists(email);
        const userData = data.rows[0]

        if(!userData) return undefined;

        const result = await bcrypt.compare(password, userData.password);
        if(!result) throw new AuthenticationError("Authentication error");

        const token = generateToken(userData);
        return { ...userData, token }
    }

}

const Query = {}

module.exports = { Mutation, Query }