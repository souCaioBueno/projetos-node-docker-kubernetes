const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.create = (data) => prisma.user.create({ data });
exports.update = (id, data) =>
  prisma.user.update({ where: { id }, data });
exports.remove = (id) =>
  prisma.user.delete({ where: { id } });
exports.findById = (id) =>
  prisma.user.findUnique({ where: { id } });
