'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Organizations', {
      orgId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      orgName: {
        type: Sequelize.STRING
      },
      orgAddress: {
        type: Sequelize.STRING
      },
      userId: {
	      type: Sequelize.INTEGER
      },
      // ERROR: Cannot read property 'toString' of undefined, when running db:migrate
      // userId: {
      //   foreignKey: true,
      //   references: {
      //     model: 'Users',
      //     key: 'userId'
      //   }
      // },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Organizations');
  }
};