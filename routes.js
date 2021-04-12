//Je récupère Express
const express = require('express');

//j'initialise mon router
const router = express.Router();

//je récupère mon module
const datamapper = require('./datamapper');

//je récupère mon JSON
const articlesTab = require('./data/article.json');


//Initialisation de la route de la page d'accueil
router.get('/', datamapper.accueil );

//pages articles
router.get('/article/:id', datamapper.focusArticle);

//affichage de l'index filtré par le type de categorie
router.get('/category/:categoryType', datamapper.categorie);

//J'exporte mon router
module.exports = router;