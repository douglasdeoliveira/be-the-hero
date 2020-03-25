const connection = require('../database/connection');

module.exports = {
  async store(req, res) {
    try {
      const { id } = req.body;

      const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

      if (!ong) {
        throw new Error('No ong found with this ID');
      }

      return res.json(ong);
    } catch (error) {
      return res.status(400).json({ error, message: error.message });
    }
  },
};
