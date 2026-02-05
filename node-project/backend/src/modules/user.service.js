const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const repo = require('./user.repository');

exports.create = async (data) => {
  data.password = await bcrypt.hash(data.password, 10);
  const user = await repo.create(data);

  return {
    token: jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )
  };
};

exports.update = (id, data) => repo.update(id, data);
exports.remove = (id) => repo.remove(id);
