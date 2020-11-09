'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    name_kana: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    year: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
        isInt: true,
        max: 3,
        min: 1
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
        isInt: true,
        min: 0
      }
    },
    team: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    leader: DataTypes.BOOLEAN,
    nickname: {
      type: DataTypes.STRING,
      validate: {
        isNull: true
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
