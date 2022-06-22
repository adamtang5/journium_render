'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
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
  }, {});
  Like.associate = function (models) {
    // many-to-1 relationship with User model
    Like.belongsTo(models.User, {
      foreignKey: 'userId',
    });

    // many-to-1 relationship with Story model
    Like.belongsTo(models.Story, {
      foreignKey: 'storyId',
    });
  };
  return Like;
};
