//importando o modulo os (operating system)
const os = require('os');

//exibindo informacoes do sistema operacional
//exibindo a arquietura do sistema
console.log('Arquitetura do sistema:', os.arch());
//exibindo a quantidaded de CPU's
console.log('Quantidade de CPUs:', os.cpus().length);
//exibindoo o total de memoria em bytes 
console.log('Memória total (bytes):', os.totalmem());
//exibindo a memoria livre em bytes 
console.log('Memória livre (bytes):', os.freemem());
//exibindo o sistema operacional
console.log(os.platform());