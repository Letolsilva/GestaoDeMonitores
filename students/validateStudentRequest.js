import { checkMonitorAvailability } from '../monitors/monitorsController.js'; 
import { countStudents, createStudent } from './studentController.js';

function checkForDuplicates(array) {
  return new Set(array).size !== array.length
}

export default function validateStudentRequest(request, response) {

  const {date,  gradeReference } = request.body;

  if (checkForDuplicates(request.body.date) || checkForDuplicates(request.body.gradeReference)){
    response.status(400).json({ error: 'Valores de entrada duplicados' });
    return
  }

  checkMonitorAvailability(gradeReference)
    .then( available => {

      countStudents(date).then(underLimit =>{

        if (available && underLimit) {
          createStudent(request, response); // Chama a função para cadastrar o aluno
        } else if (!available) {
          console.log(underLimit);
          response.status(400).json({ error: 'Sem monitores disponíveis para algum dos dias ou horários.' });
        }else if (!underLimit){
          response.status(400).json({ error: 'Laboratório lotado em algum dos dias ou horários' });
        }
        else{
          response.status(400).json({ error: 'Erro inesperado' });
        }

      })
    })
    .catch((error) => {
      response.status(500).json({ error: 'Erro ao verificar disponibilidade do monitor: ' + error });
    });
}