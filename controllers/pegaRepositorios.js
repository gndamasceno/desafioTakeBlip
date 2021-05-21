const fetch = require("node-fetch")

const getRepositorios = async () => {
    try {
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
        repositoriosEncontrados.sort(function (a, b) {
            return a.date - b.date;
        });
        let avatar = repositoriosEncontrados[0].owner.avatar_url
        const info = {
            listaRepositorios,
            avatar
        }
        //console.log(info)
        return info
    } catch (err) {
        console.error(err);
    }

}
const teste = async () => {
    const result = await getRepositorios();
    return result;
}
let resultado
(async () => {
    resultado = await teste()
})()
module.exports = app => {
    app.get('/atendimentos', (req, res) => {

        
        res.json(resultado)
    })
}
