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
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' },
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    videoUrl: {
      type: DataTypes.STRING,
    },
  }, {});
  Story.associate = function (models) {
    // 1-to-many relationship with User model
    Story.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Story;
};
