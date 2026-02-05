const service = require('./user.service');

exports.create = async (req) => service.create(req.body);
exports.me = async (req) => req.user;
exports.update = async (req) =>
  service.update(req.user.id, req.body);
exports.remove = async (req) =>
  service.remove(req.user.id);
