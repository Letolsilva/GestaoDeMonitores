// import express from 'express'; foi teste
// import routes from './routes.js';

// const app = express();
// const PORT = 3000;

// app.use(express.json());
// app.use('/api', routes);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from 'express';
import routes from './routes.js';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost/criar_Banco_de_Dados', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}`);
});

