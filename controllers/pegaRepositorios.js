const fetch = require("node-fetch")

module.exports = app => {
    app.get('/', async (req, res) => {

        const resultado = await getRepositorios();

        res.json(resultado)
    })
}

const getRepositorios = async () => {
    const url = "https://api.github.com/users/takenet/repos?per_page=100"
    const response = await fetch(url);
    const repositoriosEncontrados = await response.json();

    const avatar = repositoriosEncontrados[0].owner.avatar_url;

    const listaRepositoriosEmCSharp = pegaRepositoriosCriadosEmCSharp(repositoriosEncontrados);
    // não retorna o repositório Blip.Api.Template.K8s porque a language dele não está definida na propriedade language
    const listaRepositoriosEmCSharpOrdenadosPelaData = sortRepositoriosPelaDataDeCriacao(
        listaRepositoriosEmCSharp)
    const listaRepositorios = listaRepositoriosEmCSharpOrdenadosPelaData.slice(0, 5)
    const info = {
        listaRepositorios,
        avatar
    }

    return info;
}

function sortRepositoriosPelaDataDeCriacao(repositorios) {
    repositorios.sort(function (a, b) {
        return a.date - b.date;
    })
    return repositorios;
}

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


