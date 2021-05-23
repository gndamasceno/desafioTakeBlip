<h1 align="center">Bem vindo para o meu desafio técnico da TakeBlip 👋</h1>
<p>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> O desafio proposto foi a criação de um contato inteligente, onde eu deveria criar um fluxo conversacional utilizando a plataforma da TakeBlip e uma API que realize a integração da API pública do github com esse fluxo.

## Sobre o projeto

> O objetivo da API é retornar os 5 repositórios criados em C# mais antigos do github da Take, ordenados de forma crescente pela data de criação.
> A API foi publicada utilizando o serviço Heroku.
> O contato inteligente(Bot) se encontra na pasta FLOW deste repositório.

#### ✨ (Para acessar a informação requerida, é necessário realizar uma requisição do tipo GET para: https://desafio-blip.herokuapp.com/)

## Processo de criação

<p>
Após tomar ciência da proposta do desafio técnico, separei-o em dois problemas, construir o fluxo conversacional do contato inteligente e montar a API que realizaria a integração da API do gitHub com o fluxo.
</p>
<p>
Eu escolhi desenvolver primeiro o fluxo do contato inteligente, para isso, eu estudei uma parte do curso "Criando chatbots com a plataforma BLiP", disponibilizado pela Take, e tirei algumas dúvidas pontuais pelo google, caindo geralmente no fórum da TakeBlip.
</p>
<p>
Após montar a base do fluxo do chatbot, faltando apenas o carousel do desafio, comecei a desenvolver a API.
</p>
<p>
Para desenvolver a API assisti o curso "Rest com NodeJS: API com Express e MySQL" da alura e estudei a documentação da API pública do gitHub para fazer a integração com minha API.
</p>
<p>
Durante esses estudos, desenvolvi a primeira versão da API. Após, conferi as opções sugeridas para publicar a API na proposta do desafio e escolhi utilizar o heroku como ferramenta.
</p>
<p>
Para aprender a publicar minha aplicação no heroku eu realizei o tutorial "Getting Started on Heroku with Node.js", disponibilizado pelo heroku. 
Então busquei publicar o meu projeto, mas encontrei dificuldades.
Nesse momento eu pedi orientação do meu mentor na PodCodar e, após discutirmos sobre os problemas, encontramos as soluções.
Os problemas eram alguns detalhes no código, que estavam no package.json e no index.js, e, também, algumas dificuldades com a manipulação de remotes no git.
</p>
<p>
Com a API publicada, busquei produzir o carousel que faltava no fluxo. 
Ainda com a orientação do meu mentor, coloquei um select em um conteúdo dinâmico no fluxo mostrando informações de um dos repositórios retornados, através de uma requisição para minha API e um script.
</p>
<p>
Posteriormente, utilizei a documentação disponibilizada pela take e consultas no fórum para desenvolver o carousel esperado, desta forma, terminei a parte do fluxo do contato inteligente.
</p>
<p>
Deste modo, refatorei o código e enviei para o repositório uma versão da minha API que retornava os 5 repositórios mais antigos da Take mas percebi que essa não era a ação esperada pela API.
</p>
<p>
Após fazer as correções necessárias, para a API devolver os 5 repositórios de C# mais antigos da take, realizei modificações no código para deixá-lo mais claro, criei funções e variáveis mais semânticas e comentei o objetivo das funções, e enviei a versão final do desafio. 
</p>

## Considerações

A PodCodar é uma rede de ensino voltada ao posicionamento profissional nas áreas de TI, eu entrei na comunidade em fevereiro e iniciei meu primeiro ciclo como mentorando
no início de Abril.
Estou grato pela oportunidade e achei bem proveitoso conhecer melhor a empresa, seus valores e os assuntos estudados durante a realização do desafio.

## Executando o projeto

```bash
#### Para executar a API localmente

# Clone este repositório
$ git clone https://github.com/gndamasceno/desafioTakeBlip.git

# Entre no diretório "desafioTakeBlip"
$ cd desafioTakeBlip

# Instala as dependências e executa aplicação
$ npm start

# O servidor inciará na porta:5000 - acesse http://localhost:5000

#### Publicar API no heroku

# Clone este repositório
$ git clone https://github.com/gndamasceno/desafioTakeBlip.git

# Entre no diretório "desafioTakeBlip"
$ cd desafioTakeBlip

# Siga os passos de "deploy-your-application-to-heroku"
$ https://devcenter.heroku.com/articles/deploying-nodejs#deploy-your-application-to-heroku

#ps: O comando -git push heroku main pode não funcionar,
#    execute -git push heroku master caso o primeiro falhe.

#### Executar contato inteligente

# Clone este repositório
$ git clone https://github.com/gndamasceno/desafioTakeBlip.git

# Entre no diretório "desafioTakeBlip"
$ cd desafioTakeBlip

# Entre no diretório FLOW
$ cd FLOW

# Importe o arquivo desafiotakeblip.json desse repositório no builder da plataforma da TakeBlip.
$ https://help.blip.ai/hc/pt-br/articles/360059353133-Como-importar-o-fluxo-de-um-bot-no-Builder

```

## Autor

👤 **Giuliano Neves Damasceno**

- Github: [@https:\/\/github.com\/gndamasceno](https://github.com/https://github.com/gndamasceno)
- LinkedIn: [@https:\/\/www.linkedin.com\/in\/giuliano-neves-damasceno\/](https://linkedin.com/in/https://www.linkedin.com/in/giuliano-neves-damasceno/)

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
