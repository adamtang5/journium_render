'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Likes', [
      { userId: 2, storyId: 1, createdAt: '2022-06-22T06:44:36Z', updatedAt: '2022-06-22T06:44:36Z', },
      { userId: 2, storyId: 2, createdAt: '2022-06-22T06:44:36Z', updatedAt: '2022-06-22T06:44:36Z', },
      { userId: 3, storyId: 1, createdAt: '2022-06-22T06:44:36Z', updatedAt: '2022-06-22T06:44:36Z', },
      { userId: 3, storyId: 2, createdAt: '2022-06-22T06:44:36Z', updatedAt: '2022-06-22T06:44:36Z', },
      { userId: 2, storyId: 3, createdAt: '2022-06-22T06:44:36Z', updatedAt: '2022-06-22T06:44:36Z', },
      { userId: 3, storyId: 3, createdAt: '2022-06-22T06:44:36Z', updatedAt: '2022-06-22T06:44:36Z', },
      { userId: 3, storyId: 4, createdAt: '2022-06-22T06:44:36Z', updatedAt: '2022-06-22T06:44:36Z', },
      { userId: 2, storyId: 4, createdAt: '2022-06-22T06:44:36Z', updatedAt: '2022-06-22T06:44:36Z', },
      { userId: 2, storyId: 5, createdAt: '2022-06-22T06:44:36Z', updatedAt: '2022-06-22T06:44:36Z', },
      { userId: 3, storyId: 6, createdAt: '2022-06-22T06:44:36Z', updatedAt: '2022-06-22T06:44:36Z', },
      { userId: 1, storyId: 5, createdAt: '2022-06-22T06:44:36Z', updatedAt: '2022-06-22T06:44:36Z', },
      { userId: 1, storyId: 6, createdAt: '2022-06-22T06:44:36Z', updatedAt: '2022-06-22T06:44:36Z', },
      { userId: 1, storyId: 7, createdAt: '2022-06-22T06:44:36Z', updatedAt: '2022-06-22T06:44:36Z', },
      { userId: 1, storyId: 8, createdAt: '2022-06-22T06:44:36Z', updatedAt: '2022-06-22T06:44:36Z', },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Likes', null, {});
  }
};
