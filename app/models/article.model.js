module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("articles",{
        title : {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        },
        genre: {
            type: Sequelize.STRING
        },
        developer: {
            type: Sequelize.STRING
        },
        tamat: {
            type: Sequelize.STRING
        }
      
    });

    return Article;
};