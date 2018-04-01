const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize_database', 'sequelize_username', 'sequelize_password', {
	host: 'localhost',
	dialect: 'mysql' //,
	// operatorsAliases: false,


});

// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});