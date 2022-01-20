const mongoose = require('mongoose');

const connection = async () => {
  const db = await mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
  });
  return db;
};

module.exports = connection;
