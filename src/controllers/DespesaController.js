import Categoria from '../models/Categoria';
import Despesa from '../models/Despesa';

class DespesaController {
  async index(req, res) {
    try {
      const despesas = await Despesa.findAll();
      return res.json(despesas);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  async despesaPorUsuario(req, res) {
    try {
      const { id } = req.params;
      const despesas = await Despesa.findAll({ where: { userId: id } });

      return res.json(despesas);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }
  async show(req, res) {
    try {
      const { id } = req.params;
      const despesa = await Despesa.findByPk(id);
      return res.json(despesa);
    } catch (err) {
      return res.json(500).json({ messagem: 'Internal server error.' });
    }
  }

  async create(req, res) {
    try {
      const { id, categoria_id } = req.params;
      const { descricao, valor, momento } = req.body;
      await Despesa.create({
        descricao,
        valor,
        momento,
        userId: id,
        categoriaId: categoria_id,
      });
      res.status(201).json({ descricao, valor, momento, id, categoria_id });
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao, momento } = req.body;
      const despesa = await Despesa.findByPk(id);
      await despesa.update({ nome, descricao, momento }, { where: { id: id } });
      res.status(200).json({ message: `Categoria Atualizada.` });
    } catch (err) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      await Despesa.destroy({ where: { id: id } });
      return res.json({ message: `Categoria deletada.` });
    } catch (err) {
      return res.json(500).json({ messagem: 'Internal server error.' });
    }
  }
}

export default new DespesaController();
