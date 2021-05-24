const Sequelize = require('sequelize')
const AuthorsModel = require('./authors')
const GenresModel = require('./genres')
const NovelsModel = require('./novels')
const AuthorNovelsModel = require('./authorNovels')

const connection = new Sequelize('candies', 'candies', 'C4nd13$!', {
  host: 'localhost', dialect: 'mysql'
})

const Authors = AuthorsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize)
const AuthorNovels = AuthorNovelsModel(connection, Sequelize)

Novels.belongsTo(Authors).through(AuthorNovels)
Authors.hasMany(Novels).through(AuthorNovels)
Novels.hasMany(Genres).through(AuthorNovels)
Genres.hasMany(Novels).through(AuthorNovels)

module.exports = {
  Authors,
  Genres,
  Novels,
  AuthorNovels
}
