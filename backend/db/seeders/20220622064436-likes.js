'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Likes', [
      { userId: 2, storyId: 1, },
      { userId: 2, storyId: 2, },
      { userId: 3, storyId: 1, },
      { userId: 3, storyId: 2, },
      { userId: 2, storyId: 3, },
      { userId: 3, storyId: 3, },
      { userId: 3, storyId: 4, },
      { userId: 2, storyId: 4, },
      { userId: 2, storyId: 5, },
      { userId: 3, storyId: 6, },
      { userId: 1, storyId: 5, },
      { userId: 1, storyId: 6, },
      { userId: 1, storyId: 7, },
      { userId: 1, storyId: 8, },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Likes', null, {});
  }
};
