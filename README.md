<p align="center">
<img src="https://github.com/RafaelaPapale/projeto-sistema-chamados/blob/main/logo_readme.png" height="300" width="300" >
</p>
<p align="center">Figura 1 - Logo do projeto</p>


<p>A aplicação em questão se trata de um sistema de cadastro de chamados, sendo estes dos mais variados tipos, como atendimento, suporte, visitas técnicas, etc..</p>

<p>O projeto foi desenvolvido para a disciplina de Engenharia de Software-C214 com a finalidade de colocar em prática os conceitos que nos foram apresentados durante o curso. </p>

### ❗ Requisitos do projeto

- [x] Orientação a objetos (React)
- [x] Realizar um CRUD
- [x] Permanência de dados (MongoDB Atlas)
- [x] Ferramenta de controle de versão (Github)
- [x] Gerenciamento de dependências (npm)
- [x] Testes de unidade
- [x] Testes Mock
- [x] CI (Github Actions)
- [x] Arquitetura (React)

### 💻 Funcionalidades
#### Usuário:
- Cadastrar usuário
- Autenticar usuário
- Editar usuário

#### Customers (Cliente):
- Cadastrar cliente
- Listar todos os clientes

#### Chamados:
- Cadastrar chamado
- Listar os chamados do usuário
- Listar o chamado pelo ID
- Editar chamado

### 🚀 Começando
Para obter uma cópia do projeto a fim de operá-lo/testá-lo de sua máquina,clone o repositório em uma pasta na sua máquina:
```
$ git clone https://github.com/RafaelaPapale/projeto-sistema-chamados.git
```
### 📋 Pré-requisitos para execução
- IDE para execução de códigos Javascript, HTML e CSS (ex: Visual Studio Code)
- React v17.0
- npm 

### 🔧 Instalação e execução
- [Instale node.js](https://nodejs.org/en/)

- Ativação do gerenciamento de dependências:
<p>O projeto foi dividido em duas pastas: BackEnd e FrontEnd.</p>
<p>Para que o projeto funcione corretamente é preciso entrar no diretório de cada uma das pastas, instalar as bibliotecas e executar.</p>
<p>Abaixo será explicado o passo a passo de como fazer.</p>

- BackEnd
<p>Após clonar, garanta que o terminal esteja no diretório da pasta principal do projeto.
Depois disso, entre no diretório  "backEnd" através da linha de comando:</p>

```
cd backEnd
```
<p>Estando no diretório backEnd, insira o seguinte comando para instalar as bibliotecas:</p>

```
npm install
```

**Execução:**
<p>Depois de instalar as bibliotecas,  execute o comando a seguir para subir o backEnd>:</p>

```
npm start
```

- FrontEnd
<p>Após executar o backEnd, abra um novo terminal e garanta que o terminal esteja no diretório da pasta principal do projeto.
Depois disso, entre no diretório "frontEnd" através da linha de comando:</p>
```
cd frontEnd
```
<p>Estando no diretório frontEnd, insira o seguinte comando para instalar as bibliotecas:</p>

```
npm install
```

**Execução:**
<p>Depois de instalar as bibliotecas,  execute o comando a seguir para subir o frontEnd e ter acesso a aplicação:</p>

```
npm start
```

<p>Agora basta apenas acessar seu localhost na porta 5000 e ter sua experiância com a aplicação!</p>

### ⚙️ Executando os testes
A implementação dos testes de unidade e mock foram feitas utilizando o framework de teste para Node.js chamado Jest e foram implementadas os casos de teste para back-end.

**Para execução dos testes via terminal:**

**1°)** Garanta que o terminal esteja aberto no diretório 'backend' do projeto;

**2°)** Nela deve ser executado o seguinte comando:
```
 npm test
```

### 📦 Desenvolvimento
  A estrutura de pastas foi feita para atender ao formato esperado pelo React e Node, assim, a estrutura da interface foi colocada na raiz do projeto (arquivos estáticos na pasta Static e arquivos html em Templates). Os demais arquivos foram organizados conforme seu tipo (main e test).
  Abaixo segue um esboço da estrutura usada:
  
  📂Projeto-Sistemas-Chamados/
      
      📂backEnd/
          📂mockTest/
              chamados.test.js
              customers.test.js
              users.test.js
              📂objects/
                  chamados_objects.js
                  customers_objects.js
                  users_objects.js
          📂src/
              📂application/
                  📂utils/
                      constants.js
                      utils.js
                      validationChamados.js
                      validationCustomers.js
                      validationUsers.js
                  📂validation/
                      📂chamados/
                          create.js
                          getById.js
                          getByUser.js
                          index.js
                          update.js
                      📂customers/
                          create.js
                          index.js
                      📂users/
                          auth.js
                          create.js
                          index.js
                          update.js
                  chamados.js
                  customers.js
                  users.js
              📂infraestructure/
                  database.js
                  rest_server.js
              📂port/
                  📂chamados/
                      chamadosAPI.js
                      chamadasRepo.js
                  📂customers/
                      customersAPI.js
                      customersRepo.js
                  📂users/
                      usersAPI.js
                      usersRepo.js
          📂unitTest/
              generateUuid.test.js
              responseStatus.test.js
              validationChamados.test.js
              validationCustomers.test.js
              validationUsers.test.js
              📂objects/
                  chamados_objects.js
                  customers_objects.js
                  users_objects.js
          server.js
          package.json
          package-lock.json

        📂frontEnd/
            📂public/
            favicon.ico
            index.html
            logo192.png
            logo512.png
            manifest.json
            robots.txt
            📂src/
                📂assets/
                  avatar.png
                  cover.png
                  logo.png
                📂components/
                    📂Header/
                      index.js
                      style.css
                    📂Modal/
                      modal.js
                      style.css
                    📂Title/
                      index.js
                      style.css
                📂contexts/
                    auth.js
                📂pages/
                    📂Chamado/
                        index.js
                        style.css
                    📂Customers/
                        index.js
                        style.css
                    📂Dashboard/
                        index.js
                        style.css
                    📂Profile/
                        index.js
                        style.css
                    📂SignIn/
                        index.js
                        style.css
                    📂SignUp/
                        index.js
                        style.css
                📂routes/
                  index.js
                  Route.js
                📂services/
                  config.js
                  chamados.js
                  user.js
                  customers.js
              App.js
              index.css
              index.js
          .gitignore
          package-lock.json
          package.json
          README.md
      .gitignore
      LICENSE
      logo_readme.png
      README.md
                  
  
  O front-end da aplicação foi feito em React, utilizando de JavaScript, CSS e HTML. O back-end foi desenvolvido em Node.js. 

  Os testes de unidade e mock foram desenvolvidos para o back-end apenas.


### 🛠️ Construído com

**IDE**: [Visual Studio Code](https://code.visualstudio.com/)

**Linguagens**: [ReactJS](https://pt-br.reactjs.org/), [Html, CSS e Javascript](https://www.devmedia.com.br/primeiros-passos-no-html5-javascript-e-css3/25647)

**Gerenciamento de dependências**: [npm](https://www.npmjs.com/)

**Controle de versões**: [GitHub](https://github.com/)

**Framework de teste**: [JestJs](https://jestjs.io/pt-BR/)

**Integração Contínua**: [GitHub Actions](https://github.com/features/actions)

**Armazenamento de dados**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2-dbterms?utm_source=google&utm_campaign=gs_americas_brazil_search_core_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624308&adgroup=115749705983&gclid=EAIaIQobChMIyJWU05Te9AIVlIaRCh34mgKNEAAYASAAEgJ0yfD_BwE)

### 📌 Versão
O GitHub foi usado para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/RafaelaPapale/projeto-sistema-chamados/tags).

## ✒️ Autores

* **Rafaela de Moraes Papale** - [Rafaela](https://github.com/RafaelaPapale)
* **Douglas Tavares Martins** - [Douglas](https://github.com/tavares-douglas)

### 📄 Licença
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://badges.mit-license.org/)

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.txt](https://github.com/SinaraPimenta/Projeto_C214_Armazem_MS/blob/main/LICENSE.txt) para detalhes.

[![CI-Projeto-SistemasChamados](https://github.com/RafaelaPapale/projeto-sistema-chamados/actions/workflows/node.js.yml)](https://github.com/RafaelaPapale/projeto-sistema-chamados/blob/main/.github/workflows/node.js.yml)