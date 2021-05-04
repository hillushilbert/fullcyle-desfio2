const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql');
const util = require('util');

const nomes = [
    "Margarida",
    "Josefa",
    "Maria",
    "Benedita",
    "Gustavo",
    "Rodrigo",
    "Fofão",
    "Bilú",
    "Sei lá",
    "Hoje tá difícil"
];

function conexao(){
    var conn = mysql.createConnection({
        host: "mysql",
        user: "desafio",
        password: "desafio",
        database: 'desafio'
    });
    
    conn.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
    
    return conn;
}

async function ler()
{
    // console.log('function ler');
    var conn = conexao();

    var resHtml = `<table border="1">
    <tr>
        <th>Id</th>
        <th>Nome</th>`;

    const query = util.promisify(conn.query).bind(conn);

    const rows = await query('SELECT * FROM people');
    // console.log(rows);
    const result = Object.values(JSON.parse(JSON.stringify(rows)));

    result.forEach(function(row,index){
        // console.debug(row.nome);
        resHtml += `<tr>
                        <td>${row.id}</td>
                        <td>${row.nome}</td>
                    </tr>`;
    });

    resHtml += `</tr></table>`;

    return resHtml;
}

async function salvar()
{

    // return new Promise((resolve, reject) => {
        
        var conn = conexao();

        const indice = Math.floor(Math.random() * 9) + 1;
        console.log(`Indice do nome do autor ${indice}`);  
        const author = nomes[indice];

        const query = util.promisify(conn.query).bind(conn);

        const rows = await query('INSERT INTO people (nome) values (?)', author);
        console.debug(rows);

        // conn.query('INSERT INTO people (nome) values (?)', author, (err, res) => {
        //     if(err) throw err;
    
        //     console.log('Last insert ID:', res.insertId);
        // });        


    // });

    
}

app.get('/', async (req, res) => {

    await salvar();

    var resHtml = `<h1>Full Cycle Rocks!</h1>
    <p>Lista de nomes dos autores está logo abaixo:</p>`;
    try{
        var leitura = await ler();
        resHtml += leitura;
    }catch(e){
        resHtml = '<h1>Erro ao realizar leitura no banco</h1>';
    }
    // console.log(leitura);
    res.send(resHtml); 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
