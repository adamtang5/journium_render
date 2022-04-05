'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    videoUrl: DataTypes.STRING
  }, {});
  Story.associate = function(models) {
    // associations can be defined here
  };
  return Story;
};