'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'example@example.com',
      password: '123456',
      firstName: 'HoiCCGiLam',
      lastName: 'Thoi Ma', 
      address: 'HaNoi',
      gender: 1,
      typeRole: 'ROLE',
      keyRole: 'R1',

      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
