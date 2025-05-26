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

function updateUser(data) {
  console.log(data)
  return data;
}

function deleteUser(id) {
  console.log(`User deleted: ${id}`);
}

module.exports = { getUser, createUser, updateUser, deleteUser };