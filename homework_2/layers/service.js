// Business logic
const model = require('./model');

function getUser() {
  const user = model.getUser();
  return {
    message: `Hello, ${user.name}!`,
    time: new Date().toISOString()
  };
}

function createUser(data) {
  console.log(data)
  return data;
}

module.exports = { getUser, createUser };