'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255],
      },
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      }
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' },
    },
  }, {});
  Story.associate = function (models) {
    // many-to-1 relationship with User model
    Story.belongsTo(models.User, { foreignKey: 'userId' });

    // 1-to-many relationship with Comment model
    Story.hasMany(models.Comment, {
      foreignKey: 'storyId',
      onDelete: 'cascade',
      hooks: true,
    });

    // 1-to-many relationship with Like model
    Story.hasMany(models.Like, {
      foreignKey: 'storyId',
      onDelete: 'cascade',
      hooks: true,
    });

    // many-to-many relationship with User model through Like model
    Story.belongsToMany(models.User, {
      through: 'Like',
      otherKey: 'userId',
      foreignKey: 'storyId',
    });
  };
  return Story;
};
