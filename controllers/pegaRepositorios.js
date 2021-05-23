const fetch = require("node-fetch")

module.exports = app => {
    app.get('/', async (req, res) => {

        const resultado = await getRepositorios();

        res.json(resultado)
    })
}
/*
    Função responsável por fazer uma requisição ao GitHub API com o objetivo de pegar todos os repositórios
    da takenet e retornar os 5 repositórios mais antigos que foram escritos em C#, ordenados de forma 
    crescente pela data de criação.
*/
const getRepositorios = async () => {
    const url = "https://api.github.com/users/takenet/repos?per_page=100"
    const response = await fetch(url);
    const repositoriosEncontrados = await response.json();

    const avatar = repositoriosEncontrados[0].owner.avatar_url;

    const listaRepositoriosEmCSharp = pegaRepositoriosCriadosEmCSharp(repositoriosEncontrados);
    // Não retorna o repositório Blip.Api.Template.K8s porque a propriedade language dele não está definida 
    // como C#
    const listaRepositoriosEmCSharpOrdenadosPelaData = sortRepositoriosPelaDataDeCriacao(
        listaRepositoriosEmCSharp)
    const listaRepositorios = listaRepositoriosEmCSharpOrdenadosPelaData.slice(0, 5)
    const info = {
        listaRepositorios,
        avatar
    }

    return info;
}
/*
    Função rebece uma lista de repositórios que tem o parâmetro date, do tipo Date, e retorna
    essa lista ordenada de forma crescente pela data de criação.
    Importante: parâmetro date do repositório, precisa ser do tipo Date para funcionar.
*/
function sortRepositoriosPelaDataDeCriacao(repositorios) {
    repositorios.sort(function (a, b) {
        return a.date - b.date;
    })
    return repositorios;
}
/*
    Função que recebe repositórios de uma requisição da gitHub API e retorna uma lista de
    repositórios que foram desenvolvidos com a linguagem C#, com as informações que serão utilizadas
    pela aplicação já filtradas, no caso, o nome, a descrição e a data de criação do repositório. 
*/
function pegaRepositoriosCriadosEmCSharp(repositorios) {
    let index = 0,
        listaRepositorios = [];
    repositorios.forEach(repositorio => {
        if (repositorio.language == "C#") {
            listaRepositorios[index++] = {
                nome: repositorio.name,
                descricao: repositorio.description,
                date: new Date(repositorio.created_at)
            }
        }
    });
    return listaRepositorios;
}


