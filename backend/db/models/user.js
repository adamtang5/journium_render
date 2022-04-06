'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 256],
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60],
      },
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        }
      }
    },
    avatarUrl: {
      type: DataTypes.STRING,
      validate: {
        isUrl(value) {
          if (Validator.isNotUrl(value)) {
            throw new Error('URL for image must be a valid URL.');
          }
        }
      }
    },
    roleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Roles' },
    },
  },
    {
      defaultScope: {
        attributes: {
          exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
        },
      },
      scopes: {
        currentUser: {
          attributes: {
            exclude: ['hashedPassword'],
          },
        },
        loginUser: {
          attributes: {},
        },
      },
    }
  );

  User.prototype.toSafeObject = function () {  // remember, this cannot be an arrow function
    const { id, displayName, email } = this; // context will be the User instance
    return { id, displayName, email };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ email, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        email,
      },
    });

    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ email, password, displayName, avatarUrl, roleId }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      email,
      hashedPassword,
      displayName,
      avatarUrl,
      roleId,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  User.associate = function (models) {
    // 1-to-many relationship with Role model
    User.belongsTo(models.Role, {
      foreignKey: 'roleId',
    });

    // many-to-1 relationship with Story model
    User.hasMany(models.Story, {
      foreignKey: 'userId',
      onDelete: 'cascade',
      hooks: true,
    })
  };
  return User;
};
