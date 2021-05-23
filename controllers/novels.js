const models = require('../models')

const getAllNovels = async (request, response) => {
  try {
    const novels = await models.Novels.findAll({
      include: [{ model: models.Authors } && { meodel: models.Genres }]
    })

    return response.send(novels)
  } catch (error) {
    return response.status(500).send('Unable to retrieve novels list')
  }
}

const getNovelById = async (request, response) => {
  try {
    const { id } = request.params

    const novel = await models.Novels.findOne({
      where: { id },
      include: [{ model: models.Authors } && { model: models.Genres }]
    })

    return novel ? response.send(novel) : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve novel')
  }
}

module.exports = {
  getAllNovels,
  getNovelById,
}
