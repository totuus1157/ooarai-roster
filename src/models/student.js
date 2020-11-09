'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "名前は必ず入力してください。"
        }
      }
    },
    name_kana: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "名前（かな）は必ず入力してください。"
        }
      }
    },
    year: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "学年は必ず入力してください。"
        },
        isInt: {
          msg: "整数を入力してください。"
        },
        max: {
          args: [3],
          msg: "３以下の値が必要です。"
        },
        min: {
          args: [1],
          msg: "１以上の値が必要です。"
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "身長（cm）は必ず入力してください。"
        },
        isInt: {
          msg: "整数を入力してください。"
        },
        min: {
          args: [0],
          msg: "０以上の値が必要です。"
        }
      }
    },
    team: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "所属チーム名は必ず入力してください。"
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "担当名は必ず入力してください。"
        }
      }
    },
    leader: DataTypes.BOOLEAN,
    nickname: {
      type: DataTypes.STRING,
      validate: {
        isNull: {
          msg: "必要であれば入力してください。"
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
