import Grade from './gradeModel.js';

export function createGrade(req,res) {

  Grade.insertMany(req.body.Grade)
    .then(() =>{
      res.status(201).json({ message: 'Grade cadastrada com sucesso!' });

    }).catch((error) => {
      res.status(500).json({ error: 'Erro ao cadastrar a grade: ' + error });
    });
}

export function getAllGrades(req, res) {
  Grade.find()
    .then((grades) => {
      res.json(grades);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Erro ao buscar as grades' });
    });
}
