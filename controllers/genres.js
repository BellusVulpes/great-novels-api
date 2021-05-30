const models = require('../models')

const getAllGenres = async (request, response) => {
  try {
    const genres = await models.Genres.findAll()

    return response.send(genres)
  } catch (error) {
    return response.status(500).send('Unable to retrieve genres list')
  }
}

const getGenreById = async (request, response) => {
  try {
    const { id } = request.params

    const genre = await models.Genres.findOne({
      where: { id },
      include: [{
        model: models.Novels,
        as: 'Novels',
        include: [{
          model: models.Authors,
          as: 'Author',
        }]
      }]
    })

    return genre ? response.send(genre) : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve genre')
  }
}

module.exports = {
  getAllGenres,
  getGenreById,
}
