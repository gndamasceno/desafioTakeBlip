/**
    * All input variables needs to be passed as function param;
    * Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);
    * Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);
 **/

function run(respostaString) {
    const respostaRepositoriosAPI = JSON.parse(respostaString)
    //Tratando resposta da API
    //Avatar
    const avatar = respostaRepositoriosAPI.avatar
    //Repositórios
    let repositoriosTakeblip = [],
        index = 0;
    respostaRepositoriosAPI.listaRepositorios.forEach(repositorio => {
        repositoriosTakeblip[index++] = {
            nome: repositorio.nome,
            descricao: repositorio.descricao
        }
    });
    //Criação do Carousel
    content = {
        itemType: "application/vnd.lime.document-select+json",
        items: [
            {
                header: {
                    type: "application/vnd.lime.media-link+json",
                    value: {
                        title: `${repositoriosTakeblip[0].nome}`,
                        text: `${repositoriosTakeblip[0].descricao}`,
                        type: "image/jpeg",
                        uri: `${avatar}`
                    }
                }
            },
            {
                header: {
                    type: "application/vnd.lime.media-link+json",
                    value: {
                        title: `${repositoriosTakeblip[1].nome}`,
                        text: `${repositoriosTakeblip[1].descricao}`,
                        type: "image/jpeg",
                        uri: `${avatar}`
                    }
                }
            },
            {
                header: {
                    type: "application/vnd.lime.media-link+json",
                    value: {
                        title: `${repositoriosTakeblip[2].nome}`,
                        text: `${repositoriosTakeblip[2].descricao}`,
                        type: "image/jpeg",
                        uri: `${avatar}`
                    }
                }
            },
            {
                header: {
                    type: "application/vnd.lime.media-link+json",
                    value: {
                        title: `${repositoriosTakeblip[3].nome}`,
                        text: `${repositoriosTakeblip[3].descricao}`,
                        type: "image/jpeg",
                        uri: `${avatar}`
                    }
                }
            },
            {
                header: {
                    type: "application/vnd.lime.media-link+json",
                    value: {
                        title: `${repositoriosTakeblip[4].nome}`,
                        text: `${repositoriosTakeblip[4].descricao}`,
                        type: "image/jpeg",
                        uri: `${avatar}`
                    }
                }
            }
        ]
    }
    return content; //Return value will be saved as "Return value variable" field name
}
