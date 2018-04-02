'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Organizations', [{
        orgName: 'Stargate Command',
        orgAddress: "Cheyenne Mountain, El Paso County, Colorado"
      },{
        orgName: 'Planet Express',
        orgAddress: 'New New York (3000 A.D.)'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Organizations', null, {});
  }
};
