const models = require('../models')

const getAllAuthors = async (request, response) => {
  try {
    const authors = await models.Authors.findAll()

    return response.send(authors)
  } catch (error) {
    return response.status(500).send('Unable to retrieve author list')
  }
}

const getAuthorById = async (request, response) => {
  try {
    const { id } = request.params

    const author = await models.Authors.findOne({
      where: { id },
      include: [{ model: models.Novels } && { model: models.Genres }]
    })

    return author ? response.send(author) : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve author')
  }
}

module.exports = {
  getAllAuthors,
  getAuthorById,
}
