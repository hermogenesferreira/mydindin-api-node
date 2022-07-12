import Categoria from '../models/Categoria';

class CategoriaController {
  async index(req, res) {
    try {
      const categorias = await Categoria.findAll();
      return res.json(categorias);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const categoria = await Categoria.findByPk(id);
      return res.json(categoria);
    } catch (err) {
      return res.json(500).json({ messagem: 'Internal server error.' });
    }
  }

  async create(req, res) {
    try {
      const categoria = req.body;
      await Categoria.create(req.body);
      res.status(201).json(categoria);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao } = req.body;
      const categoria = await Categoria.findByPk(id);
      await categoria.update({ nome, descricao }, { where: { id: id } });
      res.status(200).json({ message: `Categoria Atualizada.` });
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      await Categoria.destroy({ where: { id: id } });
      return res.json({ message: `Categoria deletada.` });
    } catch (err) {
      return res.json(500).json({ messagem: 'Internal server error.' });
    }
  }
}

export default new CategoriaController();
