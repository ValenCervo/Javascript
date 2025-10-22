const { camisetas } = require("./siteController");

module.exports = {

    produtos: (req, res) => {
    res.sendFile('produtos.html', { root: './views'});
    },

    camisetas: (req, res) => {
    res.sendFile('camisetas.html', { root: './views'});
    }
};

 
