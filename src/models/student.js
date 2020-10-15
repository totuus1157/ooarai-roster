'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    name_kana: DataTypes.STRING,
    year: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    team: DataTypes.STRING,
    role: DataTypes.STRING,
    leader: DataTypes.BOOLEAN,
    nickname: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
