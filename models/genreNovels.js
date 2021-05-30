const genreNovels = (connection, Sequelize) => {
  return connection.define('authorNovels', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    genreId: { type: Sequelize.INTEGER, foreignKey: true },
    novelId: { type: Sequelize.INTEGER, foreignKey: true },
  }, { paranoid: true })
}

module.exports = genreNovels
