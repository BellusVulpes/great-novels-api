const Sequelize = require('sequelize')
const AuthorsModel = require('./authors')
const GenresModel = require('./genres')
const NovelsModel = require('./novels')

const connection = new Sequelize('candies', 'candies', 'C4nd13$!', {
  host: 'localhost', dialect: 'mysql'
})

const Authors = AuthorsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize)

Novels.belongsTo(Authors).through(authorNovels)
Authors.hasMany(Novels).through(authorNovels)
Novels.hasMany(Genres).through(authorNovels)
Genres.hasMany(Novels).through(authorNovels)

module.exports = {
  Authors,
  Genres,
  Novels,
}
