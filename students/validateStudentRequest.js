import { checkMonitorAvailability } from '../monitors/monitorsController.js'; 
import { createStudent } from './studentController.js';

export default function validateStudentRequest(request, response) {
  const { name, day,  gradeReference } = request.body;
  checkMonitorAvailability(day,gradeReference)
    .then((available) => {
      //console.log("available", available);
      if (available) {
        createStudent(request, response); // Chama a função para cadastrar o aluno
      } else {
        response.status(400).json({ error: 'Monitor lotado para este dia e horário.' });
      }
    })
    .catch((error) => {
      response.status(500).json({ error: 'Erro ao verificar disponibilidade do monitor: ' + error });
    });
}

// export default function validateStudentRequest(request, response) {
//   createStudent(request, response);
// }