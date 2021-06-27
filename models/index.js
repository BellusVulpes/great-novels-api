const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const AuthorsModel = require('./authors')
const GenresModel = require('./genres')
const NovelsModel = require('./novels')
const GenreNovelsModel = require('./genreNovels')

const environment = process.env.NODE_ENV || 'development'

const {
  username, password, database, host, dialect
} = allConfigs[environment]

const connection = new Sequelize(database, username, password, { host, dialect })

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
  GenreNovels,
  Sequelize,
}
