require('dotenv').config();
const PORT = process.env.PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;

module.exports = {
  PORT,
  SESSION_SECRET,
}