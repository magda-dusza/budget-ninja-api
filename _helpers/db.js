const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test");
mongoose.Promise = global.Promise;

module.exports = {
  User: require("../users/users.model")
};
