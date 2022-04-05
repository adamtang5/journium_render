'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      { name: 'Staff' },
      { name: 'Student' },
      { name: 'Spouse' },
      { name: 'Partner' },
      { name: 'Child' },
      { name: 'Dependent' },
      { name: 'Pet' },
      { name: 'Relative' },
      { name: 'Friend' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
