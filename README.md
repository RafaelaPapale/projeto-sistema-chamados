<p align="center">
<img src="https://github.com/RafaelaPapale/projeto-sistema-chamados/blob/main/logo_readme.png" height="300" width="300" >
</p>
<p align="center">Figura 1 - Logo do projeto</p>


<p>A aplicação em questão se trata de um sistema de cadastro de chamados, sendo estes dos mais variados tipos, como atendimento, suporte, visitas técnicas, etc..</p>

<p>O projeto foi desenvolvido para a disciplina de Engenharia de Software-C214 com a finalidade de colocar em prática os conceitos que nos foram apresentados durante o curso. </p>

### ❗ Requisitos do projeto

- [x] Orientação a objetos (React)
- [x] Realizar um CRUD completo
- [x] Permanência de dados (Google Firebase)
- [x] Ferramenta de controle de versão (Github)
- [x] Gerenciamento de dependências (npm)
- [x] Testes de unidade
- [x] Testes Mock
- [x] CI (Github Actions)
<!-- - [x] 2 Padrões de projeto (Mediator e Singleton) -->
- [x] Arquitetura (React)

### 💻 Funcionalidades
#### Usuário:
- Cadastrar chamado
- Buscar chamado
- Editar chamado
- Excluir chamado


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
- [Instale node.js](https://nodejs.org/en/) :
```
npm install -g create-react-app
```
- Ativação do gerenciamento de dependências:
<p>Após a instalação, garanta que o terminal esteja no diretório da pasta principal do projeto. Para instalar as bibliotecas empregadas no projeto é necessário inserir o comando:</p>
```
npm install -g yarn
```
- Execução:
<p>Para execução do servidor do projeto e acesso a API: </p>
```
npm start run
```
<p>Agora basta apenas acessar seu localhost na porta 8000 e ter sua experiância com a aplicação!</p>

<!-- ### ⚙️ Executando os testes
A implementação dos testes de unidade  foi feita utilizando o framework de teste para React chamado ... e foram implementadas os seguintes casos de teste: App.test.js, setupTests.js.

**Para execução dos testes via uma IDE, basta executar o arquivo que contém os testes.**

**Para execução dos testes via terminal:**

**1°)** Garanta que o terminal esteja aberto na pasta do projeto;

**2°)** Execute o comando a seguir especificando o caminho até os diretórios contendo os testes os testes: npm test -->

  
<!-- ### Lista de testes implementados com seus respectivos objetivos:

**Na classe ...**:

- **test_...**: ...

... -->




### 📦 Desenvolvimento
  A estrutura de pastas foi feita para atender ao formato esperado pelo React, assim, a estrutura da interface foi colocada na raiz do projeto (arquivos estáticos na pasta Static e arquivos html em Templates). Os demais arquivos foram organizados conforme seu tipo (main e test).
  Abaixo segue um esboço da estrutura usada:
  
  📂Projeto-Sistemas-Chamados/

      App.js
      index.js
      setupTests.js
      📂src/
          📂assets/
            avatar.png
            cover.png
            logo.png
          📂components/
            📂Header/
              index.js
            📂Modal/
              modal.js
            📂Title/
              index.js
          📂contexts/
            auth.js
          📂pages/
            📂Customers/
              index.js
            📂Dashboard/
              index.js
            📂New/
              index.js
            📂Profile/
              index.js
            📂SignIn/
              index.js
            📂SignUp/
              index.js
          📂routes/
            index.js
            Route.js
          📂services/
            firebaseConnection.js
                  
  
  O front-end da aplicação foi feito em React, utilizando de JavaScript, CSS e HTML. O back-end foi desenvolvido em JavaScript. 

  Os testes de unidade foram desenvolvidos para o back-end apenas.


### 🛠️ Construído com

**IDE**: [Visual Studio Code](https://code.visualstudio.com/)

**Linguagens**: [ReactJS](https://pt-br.reactjs.org/), [Html, CSS e Javascript](https://www.devmedia.com.br/primeiros-passos-no-html5-javascript-e-css3/25647)

**Gerenciamento de dependências**: [npm](https://www.npmjs.com/)

**Controle de versões**: [GitHub](https://github.com/)

**Framework de teste**: [JestJs](https://jestjs.io/pt-BR/)

**Integração Contínua**: [GitHub Actions](https://github.com/features/actions)

**Armazenamento de dados**: [Google Firebase](https://firebase.google.com/?hl=pt)


<!-- **Principais bibliotecas utilizadas**: 

 ... -->


### 📌 Versão
O GitHub foi usado para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/RafaelaPapale/projeto-sistema-chamados/tags).

## ✒️ Autores

* **Rafaela de Moraes Papale** - [Rafaela](https://github.com/RafaelaPapale)
* **Douglas Tavares Martins** - [Douglas](https://github.com/tavares-douglas)

### 📄 Licença
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://badges.mit-license.org/)

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.txt](https://github.com/SinaraPimenta/Projeto_C214_Armazem_MS/blob/main/LICENSE.txt) para detalhes.
