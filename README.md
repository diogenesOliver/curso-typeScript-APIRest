<center>

# Movie API - Documentação



<img style="height: 30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
<img style="height: 30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
<img style="height: 30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
          

</center>
                  

<br>

- <a href='#desc'> Descrição </a>
- <a href='#dep'> Dependências </a>
- <a href='#inst'> Primeiros passos </a>
- <a href='#func'> Funcionalidades </a>

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

<br>

<h2 id='func'> Funcionalidades </h2>

- <a href='#create'> Criar </a>
- <a href='#busc'> Buscar </a>
- <a href='#'> Editar </a>
- <a href='#'> Remover </a>

<br>

<h2 id='create'> Criar </h2>

<p>
    Essa funcionalidade consiste em basicamente inserir um novo filme no banco de dados. Para executar essa funcionalidade é o preciso seguir um modelo de dados obrigatórios para retornar um status 200 (OK).
</p>

<br>

<p> Abaixo temos o Schema de dados obrigatórios: </p>

```ts
    {
        title: {type: String},
        rating: {type: Number},
        description: {type: String},
        director: {type: String},
        stars: {type: Array},
        poster: {stype: String}
    }
```

Após acessar a rota ``` /movie ``` com o método POST e em seguida inserir os dados obrigatórios como descrito acima, criamos um novo filme e inserimos no banco de dados.

Essa funcionalidade contém também alguns Middlwares que verificam se todos os dados foram preenchidos corretamente, caso contrário é exibido uma mensagem de erro com status 404.

<br>

<h2 id='busc'> Buscar </h2>

<p>
    A funcionalidade buscar consiste basicamente na possibilidade de encontrar um filme específico no banco de dados através do seu ID.
</p>

Temos a rota ` /movie/:id ` que é uma rota dinâmica, ao inserir o ID de algum filme no ` :id ` nos é retornado apenas o filme que contém aquele ID.

Caso o ID esteja errado ou não exista mais no banco de dados, nos é retornado uma mensagem avisando que aquele filme não pode ser econtrado.

<br>

<h2 id='edit'> Editar </h2>

<p>
    Essa funcionalidade consiste basicamente na possibilidade de editar um ou mais dados de um filme, como por exemplo mudar a descrição ou o título do filme.
</p>

Ao acessar a rota ` /movie/:id ` com o método ` PATCH ` podemos encontrar um filme no banco de dados especificando o seu ID e dessa forma atualizar os dados daquele filme sem modificar o ID.

<p>
    Caso o ID não possa ser encontrado é retornada uma mensagem de erro.
</p>

<br>

<h2 id='edit'> Remover </h2>

<p>
    Essa funcionalidade consiste basicamente na possibilidade de remover um filme do banco de dados.
</p>

Ao acessar a rota ` /movie/:id ` com método ` DELETE ` especificamos o ID de um filme e o mesmo será removido do banco de dados.

<p>
    Caso o ID não possa ser encontrado é retornada uma mensagem de erro nos informando que aquele filme não pode ser encontrado. Caso contrário é retornada uma mensagem de sucesso.
</p>

<br>

<h2> MongoDB <img style="height: 30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" /> </h2>

<p>
    Para integrar com essa API e salvar todos os dados foi utilizado o banco de dados MongoDB. Abaixo temos a função utilizada para conectar ao banco.
</p>

<br>

```js
    async function connect(){

        const dbUri = config.get<string>('dbUri')

        try{

            await mongoose.connect(dbUri)
            Logger.info('Sucesso ao conectar ao banco de dados!')

        }catch(e){
            Logger.error('Não foi possivel conectar ao Banco')
            Logger.error(`ERROR - ${e}`)
            process.exit(1)
        }

    }
```
<br>

<h2> Créditos </h2>

Como dito anteriormente essa API foi desenvolvida acompanhando o curso de introdução ao TypeScript do intrutos ` Matheus Battisti ` na plataforma `Udemy`.

