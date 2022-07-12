import Receita from '../models/Receita';

class ReceitaController {
  async index(req, res) {
    try {
      const receitas = await Receita.findAll();
      return res.json(receitas);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  async receitaPorUsuario(req, res) {
    try {
      const { id } = req.params;
      const receitas = await Receita.findAll({ where: { userId: id } });
      return res.json(receitas);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const receita = await Receita.findByPk(id);
      return res.json(receita);
    } catch (err) {
      return res.json(500).json({ messagem: 'Internal server error.' });
    }
  }

  async create(req, res) {
    try {
      const { id } = req.params;
      const { descricao, valor } = req.body;
      await Receita.create({ descricao, valor, userId: id });
      res.status(201).json({ valor, descricao, id });
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { descricao, valor } = req.body;
      const receita = await Receita.findByPk(id);
      await receita.update({ descricao, valor }, { where: { id: id } });
      res.status(200).json({ message: `Receita Atualizada.` });
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      await Receita.destroy({ where: { id: id } });
      return res.json({ message: `Receita deletada.` });
    } catch (err) {
      return res.json(500).json({ messagem: 'Internal server error.' });
    }
  }
}

export default new ReceitaController();
