const mongoose = require("mongoose");
//const uriRo = `mongodb+srv://rodrigobarglia:93dw5ig21hBhJQPs@cluster0-ycigw.mongodb.net/myTineraryApp?retryWrites=true&w=majority`;
const config = require('./config')
const uriRo = config.database
class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(uriRo, { useNewUrlParser: true })
      .then(() => {
        console.log("Database connection successful");
      })
      .catch(err => {
        console.error("Database connection error");
      });
  }
}

module.exports = new Database();
