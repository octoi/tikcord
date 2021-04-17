const bcrypt = require("bcrypt");
const { registerUser } = require("../../postgres/helper");

const Mutation = {
    register: async (_, { name, email, password }) => {
        password = await bcrypt.hash(password, 10);
        const registerData = await registerUser(name, email, password);
        return registerData;
    }
}

const Query = {}

module.exports = { Mutation, Query }