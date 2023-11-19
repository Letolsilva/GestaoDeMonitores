 //Salvando no banco de dados 
function submitForm(studentData) {
  const apiUrl = 'http://localhost:3000/api/students';

  axios.post(apiUrl, studentData)
      .then(response => {
          alert('Estudante cadastrado com sucesso!');
          clearForm();
      })
      .catch(error => {
          alert('Erro ao cadastrar estudante: ' + error.response.data.error);
      });
}

//Salva em um array para ser possivel editar ou excluir
let salvaStudents = []
function addStudent() {
  const name = document.getElementById('name').value;
  const rawDate = document.getElementById('date').value;
  const gradeReference = document.getElementById('gradeReference').value.split(',');

  if (!rawDate || isNaN(new Date(rawDate))) {
    alert('Data inválida!');
    return;
  }

  const formattedDate = new Date(rawDate).toISOString();

  const studentData = {
      name,
      date: [formattedDate],
      gradeReference: gradeReference.map(reference => Number(reference.trim()))
  }; 

  salvaStudents.push(studentData);
  
}

//Mostra o popUp e chama as funções
function showPopup(studentData, index) {
  const popupContent = document.getElementById('popup-content');
  popupContent.innerHTML = `
      <strong>Nome:</strong> ${studentData.name} - 
      <strong>Data:</strong> ${studentData.date} - 
      <strong>Referências de Grade:</strong> ${studentData.gradeReference.join(', ')}
      <p class="warning-message">Após cadastrar, não será mais possível editar ou excluir.</p>
      <button onclick="removeStudent(${index})">Remover </button>
      <button onclick="cadastrarStudent()">Cadastrar</button>
      <button type="button" onclick="closePopup()">Fechar</button>
  `;

  const popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function cadastrarStudent() {
  const latestStudentIndex = salvaStudents.length - 1;
  const latestStudentData = salvaStudents[latestStudentIndex];
  submitForm(latestStudentData);
  closePopup(); 
}

// function editStudent(index) {
//   const name = document.getElementById('name').value;
//   const rawDate = document.getElementById('date').value;
//   const gradeReference = document.getElementById('gradeReference').value.split(',');

//   if (!rawDate || isNaN(new Date(rawDate))) {
//       alert('Data inválida!');
//       return;
//   }

//   const formattedDate = new Date(rawDate).toISOString();

//   const novoStudent = {
//       name,
//       date: [formattedDate],
//       gradeReference: gradeReference.map(reference => Number(reference.trim()))
//   };

//   salvaStudents[index] = novoStudent;
//   alert('Estudante editado com sucesso!');
//    showPopup(novoStudent, index);
//   clearForm();
// }

function removeStudent(index) {
  salvaStudents.splice(index, 1);
  alert('Estudante removido com sucesso!');
  clearForm();
  console.log(salvaStudents);
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('gradeReference').value = '';
}

function getCurrentDate() {
  const today = new Date();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;

  const currentDate = today.getFullYear() + '-' + month + '-' + day;
  return currentDate;
}





