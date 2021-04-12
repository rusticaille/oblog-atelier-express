//je récupère mon JSON
const articlesTab = require('./data/article.json');

const datamapper = {
accueil: (req, res) => {
    res.render('index', {
    articlesTab});
  },

focusArticle:  (req, res) => {
    const articleIdParam = req.params.id;
    //console.log(articleIdParam);
    const article = articlesTab.find(articleToFind => articleToFind.id == articleIdParam);
    //console.log(article);
     if(article){
         res.render('article', {
            article});
     }else {
        res.status(404).send('connais pas cet article !');
     }
    },

categorie: (req, res) => {
    const categoryParam = req.params.categoryType;
    const articleByCategory = articlesTab.filter(articleToFind => articleToFind.category.toLowerCase() == categoryParam);
    console.log(articlesTab);
    console.log(articleByCategory);

    if(articleByCategory){
        res.render('index', {articlesTab : articleByCategory});
    }else {
        res.status(404).send('connais pas cette catégorie !');
     }
    }

}

module.exports = datamapper; 