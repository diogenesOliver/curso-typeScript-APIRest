# API RestFul ( Documentação )

- <a href='#desc'> Descrição </a>
- <a href='#dep'> Dependências </a>
- <a href='#inst'> Primeiros passos </a>
- <a href='#'> Funcionalidades </a>

<h2 id='desc'> Descrição </h2>

<br>

<p>
    <strong> Movie API </strong> - Essa API foi desenvolvida através do curso de <strong> Introdução ao TypeScript </strong> do instrutor <strong> Matheus Battisti </strong> na plataforma Udemy.
</p>
<p>
    A API consiste basicamente na possibilidade criar filmes com título, descrição, numero de estrelas entre outras funcionalidades. Dessa maneira é possivel também remover, editar e buscar filmes através de seu ID. O banco de dados utilizado para integrar com essa API é MongoDB
</p>

<br>

<h2 id='dep'> Dependências </h2>

<br>

<p> Abaixo temos todas as dependências utilizada para a criação dessa API </p>

<br>

- express
- express-validator
- mongoose
- morgan
- winston
- config

<h3> Dev Dependencies </h3>

- typescript
- ts-node-dev
- @types/node
- @types/morgan
- @types/mongoose
- @types/express
- @types/config

<br>

<h2 id='inst'> Primeiros passos </h2>

- O primeiro passo para a criação API foi inicializar o `package.json` com `npm init -y`.

- Em seguida foi executada a instalação das dependências com `npm install` e a instalação das dependências de desenvolvimento com `npm install -D`

- Após todas as instalações e configurações utilizamos o comando `npm run dev` para rodar o servidor e concectar ao banco de dados.

<h2 id='func'> Funcionalidades </h2>


<h3> Create </h3>