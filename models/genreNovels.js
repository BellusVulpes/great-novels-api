const GenreNovels = (connection, Sequelize, Genres, Novels) => {
  return connection.define('genreNovels', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    genreId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: Genres, key: 'id' } },
    novelId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: Novels, key: 'id' } },
  }, { paranoid: true })
}

module.exports = GenreNovels
