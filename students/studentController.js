import Student from './studentModel.js';

export function createStudent(req, res) {
  const { name, day, gradeReference } = req.body;

  const student = new Student({
    name,
    day,
    gradeReference
  });

  student.save()
    .then(() => {
      res.status(201).json({ message: 'Aluno cadastrado com sucesso!' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Erro ao cadastrar o aluno: ' + error });
    });
}

export function getAllStudents(req, res) {
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Erro ao buscar os alunos' });
    });
}
