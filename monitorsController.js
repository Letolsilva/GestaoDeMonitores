// let monitors = []; testando se as funçoes funcionavam - funcionaram!

// export function create(req, res) {
//   const { name, availableAt } = req.body;
//   const monitor = { name, availableAt };
//   monitors.push(monitor);

//   res.status(201).json({ message: 'Monitor cadastrado com sucesso!' });
// }

// export function getAll(req, res) {
//   res.json(monitors);
// }
import Monitor from './monitorModel.js';

export function create(req, res) {
  const { name, availableAt } = req.body;
  const monitor = new Monitor({ name, availableAt });

  monitor.save()
    .then(() => {
      res.status(201).json({ message: 'Monitor cadastrado com sucesso!' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Erro ao cadastrar o monitor' });
    });
}

export function getAll(req, res) {
  Monitor.find()
    .then((monitors) => {
      res.json(monitors);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Erro ao buscar os monitores' });
    });
}
