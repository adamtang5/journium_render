'use strict';

const story = require("./story");

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' },
    },
    storyId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Stories' },
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {});
  Comment.associate = function (models) {
    // many-to-1 relationship with User model
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
    });

    // many-to-1 relationship with Story model
    Comment.belongsTo(models.Story, {
      foreignKey: 'storyId',
    });
  };
  return Comment;
};
