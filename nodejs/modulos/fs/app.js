//importando o modulo fs (file system)
const fs = require('fs');

//lendo um arquivo de forma assincrona
fs.readFile('exemplo.txt', 'utf8', (erro, dados) => {
    //tratando o erro
    if (erro) {
        //adicionando o erro no console
        console.error('Erro ao ler o arquivo:', erro);
        //retornando para não executar o console .log abaixo
        return;
    }
    //se nao houver erro, exibe o conteudo do arquivo
    console.log('Conteudo do arquivo:', dados);
});
//imprimindo uma mensagem antes da leitura do arquivo
console.log('Esa mnsagem aparece primeiro.');