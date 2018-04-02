'use strict';
module.exports = (sequelize, DataTypes) => {
  var Organization = sequelize.define('Organization', {
    orgId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
	    allowNull: false
    },
    orgName: DataTypes.STRING,
    orgAddress: DataTypes.STRING
  }, {});
  Organization.associate = function(models) {
    Organization.hasMany(models.user, {
        foreignKey: 'userId'
    })
  };
  return Organization;
};