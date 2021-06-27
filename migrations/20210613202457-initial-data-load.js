'use strict'

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.bulkInsert('genres', [
      { name: 'Fiction' },
      { name: 'Historical Fiction' },
      { name: 'French Literature' },
      { name: 'Adventure' },
      { name: 'African Literature' },
      { name: 'Drama' },
      { name: 'Plays' },
      { name: 'War' },
      { name: 'Russian Literature' },
      { name: 'Horror' },
      { name: 'Fantasy' },
      { name: 'Gothic' },
      { name: 'Mystery' },
      { name: 'Crime' },
      { name: 'Thriller' },
      { name: 'Science Fiction' },
      { name: 'Dystopia' },
      { name: 'Time Travel' },
    ])

    await queryInterface.bulkInsert('authors', [
      { nameFirst: 'Bram', nameLast: 'Stoker' },
      { nameFirst: 'Oscar', nameLast: 'Wilde' },
      { nameFirst: 'Alice', nameLast: 'Walker' },
      { nameFirst: 'Leo', nameLast: 'Tolstoy' },
      { nameFirst: 'Charles', nameLast: 'Dickens' },
      { nameFirst: 'Arthur', nameLast: 'Miller' },
      { nameFirst: 'Alexander', nameLast: 'Dumas' },
      { nameFirst: 'Arthur', nameLast: 'Conan Doyle' },
      { nameFirst: 'Robert', nameLast: 'Louis Stevenson' },
      { nameFirst: 'Agatha', nameLast: 'Christie' },
      { nameFirst: 'Chinua', nameLast: 'Achebe' },
      { nameFirst: 'Fyodor', nameLast: 'Dostoyevsky' },
      { nameFirst: 'George', nameLast: 'Orwell' },
      { nameFirst: 'H.G.', nameLast: 'Wells' },
      { nameFirst: 'Ray', nameLast: 'Bradbury' },
    ])

    await queryInterface.bulkInsert('novels', [
      { title: 'A Tale of Two Cities', authorId: 5 },
      { title: 'Animal Farm', authorId: 13 },
      { title: 'Crime and Punishment', authorId: 12 },
      { title: 'Dracula', authorId: 1 },
      { title: 'Fahrenheit 451', authorId: 15 },
      { title: 'Murder on the Orient Express', authorId: 10 },
      { title: 'The Color Purple', authorId: 3 },
      { title: 'The Crucible', authorId: 6 },
      { title: 'The Hound of Baskervilles', authorId: 8 },
      { title: 'The Picture of Dorian Gray', authorId: 2 },
      { title: 'The Strange Case of Dr. Jekyll and Mr. Hyde', authorId: 9 },
      { title: 'The Three Musketeers', authorId: 7 },
      { title: 'The Time Machine', authorId: 14 },
      { title: 'Things Fall Apart', authorId: 11 },
      { title: 'War and Peace', authorId: 4 },
    ])

    return queryInterface.bulkInsert('genreNovels', [
      { novelId: 6, genreId: 1 },
      { novelId: 6, genreId: 13 },
      { novelId: 12, genreId: 1 },
      { novelId: 12, genreId: 2 },
      { novelId: 12, genreId: 4 },
      { novelId: 12, genreId: 3 },
      { novelId: 4, genreId: 1 },
      { novelId: 4, genreId: 10 },
      { novelId: 4, genreId: 11 },
      { novelId: 10, genreId: 1 },
      { novelId: 10, genreId: 10 },
      { novelId: 10, genreId: 11 },
      { novelId: 10, genreId: 12 },
      { novelId: 7, genreId: 1 },
      { novelId: 7, genreId: 2 },
      { novelId: 15, genreId: 1 },
      { novelId: 15, genreId: 2 },
      { novelId: 15, genreId: 8 },
      { novelId: 15, genreId: 9 },
      { novelId: 1, genreId: 1 },
      { novelId: 1, genreId: 2 },
      { novelId: 8, genreId: 1 },
      { novelId: 8, genreId: 2 },
      { novelId: 8, genreId: 6 },
      { novelId: 8, genreId: 7 },
      { novelId: 9, genreId: 1 },
      { novelId: 9, genreId: 13 },
      { novelId: 9, genreId: 14 },
      { novelId: 9, genreId: 15 },
      { novelId: 11, genreId: 1 },
      { novelId: 11, genreId: 13 },
      { novelId: 11, genreId: 16 },
      { novelId: 11, genreId: 10 },
      { novelId: 3, genreId: 1 },
      { novelId: 3, genreId: 9 },
      { novelId: 3, genreId: 13 },
      { novelId: 5, genreId: 1 },
      { novelId: 5, genreId: 16 },
      { novelId: 5, genreId: 17 },
      { novelId: 2, genreId: 1 },
      { novelId: 2, genreId: 16 },
      { novelId: 2, genreId: 17 },
      { novelId: 13, genreId: 1 },
      { novelId: 13, genreId: 16 },
      { novelId: 13, genreId: 18 },
      { novelId: 14, genreId: 1 },
      { novelId: 14, genreId: 2 },
      { novelId: 14, genreId: 5 },
    ])
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.bulkDelete('genreNovels')
    await queryInterface.bulkDelete('novels')
    await queryInterface.bulkDelete('genres')

    return queryInterface.bulkDelete('authors')
  }
}
