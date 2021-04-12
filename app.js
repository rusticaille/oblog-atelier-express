//on charge express
const express = require('express');
const app = express();
// on charge ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//on charge le fichier json
const articlesTab = require('./data/article.json');

// on charge  les fichiers statiques
app.use(express.static('static'));

// je récupère mes routes
const router = require('./routes');
app.use(router);

// on écoute le port
const port = app.listen(3020);
//console.log(port);