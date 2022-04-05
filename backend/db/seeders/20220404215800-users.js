'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        displayName: 'Demo User',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password'),
        avatarUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        roleId: 2,
      },
      {
        displayName: 'Coder Dad',
        email: 'dad@coder.io',
        hashedPassword: bcrypt.hashSync('dadisawesome!'),
        avatarUrl: 'https://m.media-amazon.com/images/I/71SPIoQQxuL._AC_SX466_.jpg',
        roleId: 2,
      },
      {
        displayName: 'Super Mom',
        email: 'mom@super.io',
        hashedPassword: bcrypt.hashSync('momissuper!'),
        avatarUrl: 'https://media.newyorker.com/photos/5b23e1b240328426ed9a8b49/2:2/w_378,h_378,c_limit/Lane-Incredibles-2.jpg',
        roleId: 3,
      },
      {
        displayName: 'The Name is Dash',
        email: 'dash@kids.io',
        hashedPassword: bcrypt.hashSync('imthefastest!'),
        avatarUrl: 'https://cdn.costumewall.com/wp-content/uploads/2018/09/dash.jpg',
        roleId: 5,
      },
      {
        displayName: 'Monkey Boy',
        email: 'monkeyboy@kids.io',
        hashedPassword: bcrypt.hashSync('immonkeyking!'),
        avatarUrl: 'https://img.freepik.com/free-vector/monkey-king-mascot-design_26838-117.jpg',
        roleId: 5,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
