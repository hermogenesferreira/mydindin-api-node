import Meta from '../models/Meta';

class MetaController {
  async index(req, res) {
    try {
      const metas = await Meta.findAll();
      return res.json(metas);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  async metasPorUsuario(req, res) {
    try {
      const { id } = req.params;
      const metas = await Meta.findAll({ where: { userId: id } });
      return res.json(metas);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const meta = await Meta.findByPk(id);
      return res.json(meta);
    } catch (err) {
      return res.json(500).json({ messagem: 'Internal server error.' });
    }
  }

  async create(req, res) {
    try {
      const { id } = req.params;
      const { valor, descricao } = req.body;
      await Meta.create({ valor, descricao, userId: id });
      res.status(201).json({ valor, descricao, id });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { descricao, valor } = req.body;
      const meta = await Meta.findByPk(id);
      await meta.update({ descricao, valor }, { where: { id: id } });
      res.status(200).json({ message: `Receita Atualizada.` });
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      await Meta.destroy({ where: { id: id } });
      return res.json({ message: `Receita deletada.` });
    } catch (err) {
      return res.json(500).json({ messagem: 'Internal server error.' });
    }
  }
}

export default new MetaController();
