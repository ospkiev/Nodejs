// Business logic
const model = require('./model');

function getUser() {
  const user = model.getUser();
  return {
    message: `Hello, ${user.name}!`,
    time: new Date().toISOString()
  };
}

module.exports = { getUser };