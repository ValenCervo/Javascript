module.exports = {

  gerarMensagemLogin: (login, senha) => {
    let acesso;

    if (login == "Valentina" && senha == "17032009") {
      acesso = "liberado";
    } else {
      acesso = "negado";
    }
    return `Olá, ${login}! Seu acesso foi ${acesso}.`;
  }
};
