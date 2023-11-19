import Monitor from './monitorModel.js';

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

// export async function checkMonitorAvailability(gradeReference) {

//   try {
//     const monitors = await Monitor.find();

//     for (const timeSlot of gradeReference) {
//       let verifier = true

//       for (const monitor of monitors) {
//         if(!monitor.gradeReference.includes(timeSlot)){
//           verifier = false
//         }
//       }

//       if (!verifier || monitors.length == 0){
//         return false
//       }
//     }

//     return true

//   } catch (error) {
//     console.error('Erro ao verificar disponibilidade do monitor:', error);
//     return false;
//   }
// }


export async function checkMonitorAvailability(gradeReference) {
  try {
    const monitors = await Monitor.find();

    for (const timeSlot of gradeReference) {
      let verifier = false;

      for (const monitor of monitors) {
        if (monitor.gradeReference.includes(timeSlot)) {
          verifier = true;
          break;
        }
      }

      if (!verifier || monitors.length == 0) {
        return false;
      }
    }

    return true;
  } catch (error) {
    console.error('Erro ao verificar disponibilidade do monitor:', error);
    return false;
  }
}


