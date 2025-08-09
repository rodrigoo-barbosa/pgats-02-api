const users = require('../models/userModel');

function findUserByUsername(username) {
  return users.find(u => u.username === username);
}

function registerUser({ username, password, isFavored }) {
  if (findUserByUsername(username)) {
    return { error: 'Usuário já existe.' };
  }
  const user = { username, password, isFavored: !!isFavored, balance: 10000 };
  users.push(user);
  return { user };
}

function loginUser({ username, password }) {
  const user = findUserByUsername(username);
  if (!user || user.password !== password) {
    return { error: 'Usuário ou senha inválidos.' };
  }
  return { user };
}

function getAllUsers() {
  return users.map(({ password, ...rest }) => rest);
}

module.exports = { findUserByUsername, registerUser, loginUser, getAllUsers };
