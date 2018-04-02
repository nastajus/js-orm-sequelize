'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [{
			firstName: 'Philip',
			lastName: 'Fry',
			email: 'pfry@pexpress.com'
		},
		{
			firstName: 'Samantha',
			lastName: 'Carter',
			email: 'samc@airforce.gov'
		},
		{
			firstName: 'Teal\'c',
			lastName: null,
			email: 'tealc@airforce.gov'
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};