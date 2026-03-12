const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.mongodb_url);
    console.log("Connected with database");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectdb;