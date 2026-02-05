module.exports = async (req, reply) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) throw new Error();

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await repo.findById(payload.id);
  } catch {
    reply.code(401).send({ error: 'Não autorizado' });
  }
};
