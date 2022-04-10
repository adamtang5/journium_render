'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
      },
    },
  },
    {
      defaultScope: {
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
    });
  Role.associate = function (models) {
    // 1-to-many relationship with User model
    Role.hasMany(models.User, {
      foreignKey: 'roleId',
    });
  };
  return Role;
};
