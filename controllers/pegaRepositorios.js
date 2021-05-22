const fetch = require("node-fetch")

module.exports = app => {
    app.get('/', async (req, res) => {

        const resultado = await getRepositorios();

        res.json(resultado)
    })
}

const getRepositorios = async () => {
    const url = "https://api.github.com/search/repositories?q=user:takenet created:<2014-03-01"
    const response = await fetch(url);
    if (response.status >= 400) {
        throw new Error("Bad response from server");
    }
    const result = await response.json();
    //order repos by date
    const repositoriosEncontrados = result.items;
    let listaRepositorios = [],
        index = 0
    repositoriosEncontrados.forEach((repositorio) => {
        listaRepositorios[index++] = {
            nome: repositorio.name,
            descricao: repositorio.description,
            date: new Date(repositorio.created_at)
        }
    });
    listaRepositorios = ordenaPelaData(listaRepositorios)
    let avatar = repositoriosEncontrados[0].owner.avatar_url
    const info = {
        listaRepositorios,
        avatar
    }

    return info
}
const ordenaPelaData = (lista) => {
    lista.sort(function (a, b) {
        return a.date - b.date;
    });
    return lista;
}




