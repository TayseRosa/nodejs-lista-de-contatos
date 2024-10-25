<p align="center">
  <img src="https://brandslogos.com/wp-content/uploads/images/large/nodejs-logo.png" width="160">
</p>
<p align="center">
 NodeJS - Lista de contatos
</p>

<br>
<h1>Sobre o Projeto</h1>
<p>Projeto NodeJS - Lista de contatos:</p>
<p>Este projeto foi desenvolvido para praticar e consolidar os conhecimentos em Node.js, construindo uma aplicação de kista de contatos.</p>


<p>🛠️ Funcionalidades</p>

<ul>
    <li>Configuração do servidor do zero com Node.js</li>
    <li>Criação de rotas no express para atender diferentes endpoints</li>
    <li>Implementação de middlewares para tratamento de erros e validação</li>
    <li>Manipulação de arquivos</li>    
</ul>

<p>🚀 Tecnologias Utilizadas </p>
<ul>
    <li>Node.js para a criação do servidor</li>
    <li>Express como framework de roteamento</li>
</ul>
<br>

<br>
<h1>Configuração inicial do projeto</h1>
<p>Para configurar o projeto, basta seguir o passo abaixo:</p>

```
npm init
npm i express helmet
npm i -D @types/express @types/node tsx typescript
criar pasta ./src/server.ts
//arquivo de configuração typescript
npx tsc --init 
//No package.json:
  "dev":"node --import=tsx --watch ./src/server.ts"
//No ./src/server.ts
import express from "express";
import helmet from "helmet";
import router from "./routes";

const server = express();
server.use(helmet());
server.use(express.json())
server.use(express.urlencoded({ extended:true }))

server.use('/', router)

server.listen(3000, ()=>{
    console.log('Servidor rodando: https:localhost:3000/')
})

//Criar o arquivo das rotas em:
./src/routes/index.ts

import express from 'express'
const router = express.Router()

//rotas here...

export default router;
```
<br>

<h1>Minhas anotações.</h1>

---
<br>

<h1>Licença</h1>
<p>Esse projeto está sob a licença MIT.</p>
<br>
<p align="center">Feito com 💜 por Tayse Rosa</p>
