//listagem monitor
fetch('http://localhost:3000/api/monitors')  
  .then(response => response.json())
  .then(data => {
    const monitorListDiv = document.getElementById('monitorList');
    
    monitorListDiv.innerHTML = "";

    data.forEach(monitor => {
      const monitorItem = document.createElement('div');
      monitorItem.innerHTML = `<strong>Nome:</strong> ${monitor.name} - <strong>Referências de Grade:</strong> ${monitor.gradeReference.join(', ')}`;
      monitorListDiv.appendChild(monitorItem);
    });
  })
  .catch(error => {
    console.error('Erro ao obter os monitores disponíveis:', error);
  });

//listagem alunos
fetch('http://localhost:3000/api/students')  
  .then(response => response.json())
  .then(data => {
    const studentsListDiv = document.getElementById('studentList');
    
    studentsListDiv.innerHTML = "";

    data.forEach(student => {
      const studentItem = document.createElement('div');
      studentItem.innerHTML = `<strong>Nome:</strong> ${student.name}- <strong>Date:</strong> ${student.date}  - <strong>Referências de Grade:</strong> ${student.gradeReference.join(', ')}`;
      studentsListDiv.appendChild(studentItem);
    });
  })
  .catch(error => {
    console.error('Erro ao obter os estudantes disponíveis:', error);
  });

//listagem grade
fetch('http://localhost:3000/api/grades')  
  .then(response => response.json())
  .then(data => {
    const gradesListDiv = document.getElementById('gradeList');
    
    gradesListDiv.innerHTML = "";

    data.forEach(grade => {
      const gradeItem = document.createElement('div');
      gradeItem.innerHTML = `<strong>ID:</strong> ${grade._id}- <strong>Descrição:</strong> ${grade.description}`;
      gradesListDiv.appendChild(gradeItem);
    });
  })
  .catch(error => {
    console.error('Erro ao obter as grade disponíveis:', error);
  });
