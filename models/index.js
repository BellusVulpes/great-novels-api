const Sequelize = require('sequelize')
const AuthorsModel = require('./authors')
const GenresModel = require('./genres')
const NovelsModel = require('./novels')
const GenreNovelsModel = require('./genreNovels')

const connection = new Sequelize('books', 'authors', 'Auth0r$!', {
  host: 'localhost', dialect: 'mysql'
})

const Authors = AuthorsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize)
const GenreNovels = GenreNovelsModel(connection, Sequelize)

Novels.belongsTo(Authors)
Authors.hasMany(Novels)

Novels.belongsToMany(Genres, { through: GenreNovels })
Genres.belongsToMany(Novels, { through: GenreNovels })

module.exports = {
  Authors,
  Genres,
  Novels,
  GenreNovels
}
