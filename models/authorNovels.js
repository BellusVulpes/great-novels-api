const authorNovels = (connection, Sequelize) => {
  return connection.define('authorNovels', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    authorId: { type: Sequelize.INTEGER, foreignKey: true },
    genreId: {type: Sequelize.INTEGER, foreignKey: true },
    novelId: { type: Sequelize.INTEGER, foreignKey: true },
  }, { paranoid: true })
}

module.exports = authorNovels
