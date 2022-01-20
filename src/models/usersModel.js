const mongoose = require('mongoose');
const connection = require('./mongoose');

const createUser = async (name, age) => {
  await connection();
  const User = await mongoose.model('users', {
    name: { type: String },
    age: { type: Number },
  });

  const createdUser = await new User({ name, age });
  createdUser.save();
  return createdUser;
};

module.exports = {
  createUser,
};
