const userHelper = require("./helpers/userHelper");
const postHelper = require("./helpers/postHelper");

module.exports = {
    ...userHelper,
    ...postHelper
}