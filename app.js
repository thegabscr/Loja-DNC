const express = require('express')
const app = express()
const port = 3000

const cors = require('cors');

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.get('/produtos', (req, res) => {

    const produtos = [
        {
            urlImagem: "https://electrolux.vtexassets.com/arquivos/ids/218331/Robot_Vacuum_ERB10_Perspective_Electrolux_1000x1000-principal.jpg?v=637826060998670000",
            nomeProduto: "Robo  aspirador",
            preco: "R$ 12,00"
        },
        {
            urlImagem:"https://down-br.img.susercontent.com/file/94b279bdc99f96033fb35150828a1bb3",
            nomeProduto: "Robô Transformers",
            preco: "R$ 24,00"
        },
        {
            urlImagem:"https://www.g3automation.com.br/wp-content/uploads/2021/02/Cartesiano-3-Eixos-02.02.21-com-sombra-redux.png",
            nomeProduto: "Robô cartesiano",
            preco: "R$ 240,00"
        },
        {
            urlImagem:"https://mectrol.com.br/imgcache/2150/1000x/uploads/2150/product/photo_5f6a4edd28456.jpg.webp",
            nomeProduto: "Robô delta",
            preco: "R$ 245,00"
        },
        
    ]

  res.send(produtos)
})

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`)
})
