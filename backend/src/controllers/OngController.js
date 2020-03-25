const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    try {
      const ongs = await connection('ongs').select('*');

      return res.json(ongs);
    } catch (error) {
      return res.status(400).json({ error, message: error.message });
    }
  },

  async store(req, res) {
    try {
      const { name, email, whatsapp, city, uf } = req.body;

      const id = crypto.randomBytes(4).toString('HEX');

      await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
      });

      return res.json({ id });
    } catch (error) {
      return res.status(400).json({ error, message: error.message });
    }
  },
};
