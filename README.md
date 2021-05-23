<h1 align="center">Bem vindo para o meu desafio técnico da TakeBlip 👋</h1>
<p>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> O desafio proposto foi a criação de um contato inteligente, onde eu deveria criar um fluxo conversacional utilizando a plataforma da TakeBlip e uma API que realize a integração da API pública do giThub com esse fluxo.
## Sobre o projeto
> O objetivo da API é retornar os 5 repositórios criados em C# mais antigos do github da Take, ordenados de forma crescente pela data de criação.
A API foi publicada utilizando o serviço Heroku.
O contato inteligente(Bot) se encontra na pasta FLOW deste repositório.
#### ✨ (Para acessar a informação requerida, é necessário realizar uma requisição do tipo GET para: https://desafio-blip.herokuapp.com/)

## Processo de criação
<p>
Após tomar ciência da proposta do desafio técnico, separei o desafio em dois problemas, construir o fluxo do contato inteligente e montar a API que realizaria a integração com a API do gitHub.
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
Durante esses estudos, desenvolvi a primeira versão da API. Após, conferi as opções sugeridas para publicar a API na proposta do desafio e escolhi  utilizar o heroku como ferramenta.
</p>
<p>
Para aprender a publicar minha aplicação no heroku eu realizei o tutorial "Getting Started on Heroku with Node.js", disponibilizado pelo heroku. 
Então busquei publicar o meu projeto, mas encontrei dificuldades.
Nesse momento eu pedi ajuda para o meu mentor na PodCodar para me ajudar, após discutirmos encontramos os erros.
Os erros eram alguns detalhes no código, estavam no package.json e no index.js, e tive alguns problemas com a manipulação de remotes no git.
</p>
<p>
Com a API publicada, busquei produzir o carousel que faltava no fluxo. 
Ainda com a ajuda do meu mentor, coloquei um select em um conteúdo dinâmico no fluxo mostrando informações de um dos repositórios retornados, através de uma requisição para minha API e um script.
</p>
<p>
Posteriormente, utilizei a documentação disponibilizada pela take e consultas no fórum para desenvolver o carousel esperado, e terminei a parte do fluxo do contato inteligente.
</p>
<p>
Deste modo, refatorei o código e enviei para o repositório uma versão da minha API que retornava os 5 repositórios mais antigos da Take mas percebi que essa não era a ação esperada pela API.
</p
<p>
 Após fazer as correções necessárias, para a API devolver os 5 repositórios de C# mais antigos da take, realizei modificações no código para deixá-lo claro, criei funções e variáveis mais semânticas e comentei o objetivo das funções, e enviei a versão final do desafio. 
</p>

## Autor

👤 **Giuliano Neves Damasceno**

* Github: [@https:\/\/github.com\/gndamasceno](https://github.com/https:\/\/github.com\/gndamasceno)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/giuliano-neves-damasceno\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/giuliano-neves-damasceno\/)

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
