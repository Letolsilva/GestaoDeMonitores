import Monitor from './monitorModel.js';
import Student from '../students/studentModel.js';

export function createMonitor(req,res) {
  const {name, gradeReference} = req.body;
  const monitor = new Monitor({name, gradeReference });

  monitor.save()
    .then(() => {

      res.status(201).json({ message: 'Monitor cadastrado com sucesso!' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Erro ao cadastrar o monitor: ' + error });
    });
}

export function getAllMonitors(req, res) {
  Monitor.find()
    .then((monitors) => {
      res.json(monitors);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Erro ao buscar os monitores' });
    });
}

export async function checkMonitorAvailability(day, gradeReference) {
  try {
    const monitors = await Monitor.find();

    for (const monitor of monitors) {
      for (const timeSlot of monitor.gradeReference) {
        if (gradeReference.includes(timeSlot)) {  // Horário encontrado no  monitor
          const studentsCount = await Student.countDocuments({ gradeReference: timeSlot });
          if (studentsCount < 8) { // Horário disponível
            return true;
          }else{
            return false; //monitor lotado
          }
        }
      }
    }
    return false;// Não encontrou nenhum horário disponível
  } catch (error) {
    console.error('Erro ao verificar disponibilidade do monitor:', error);
    return false;
  }
}

