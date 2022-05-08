const { Sequelize, DataTypes, Model, TableHints } = require("sequelize");
const argon2 = require('argon2');
class Task extends Model { }
class User extends Model { }

function connectDB() {
  const sequelize = new Sequelize("tasks", "0I0akel", "123", {
    host: "localhost",
    dialect: "postgres",
  });
  try {
    sequelize.authenticate();
    console.log("Соединение с БД было успешно установлено");
    return sequelize;
  } catch (e) {
    console.log("Невозможно выполнить подключение к БД: ", e);
    return null;
  }
}

async function hash(password) {
  return argon2.hash(password)
}

async function createModel(sequelize) {
  // sequelize.drop();
  // console.log(sequelize);
  Task.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      inputData: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      outputData: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Task",
    }
  );

  Task.sync();
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      login: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.sync();
  let pass2 = await argon2.hash("9090")
  // User.create({
  //   name: "Semen",
  //   login: "jija099",
  //   password: pass2,
  //   email: "jij@gmail.com"
  // });
  

  //     Task.create({
  //     name: "A - B",
  //     description: "Найдите разность двух целых чисел",
  //     inputData: "Два числа типа int",
  //     outputData: "Возрат одного числа int",
  //     rating: 3
  // })
  //   Task.create({
  //     name: "A + B",
  //     description: "Найдите сумму двух целых чисел",
  //     inputData: "Два числа типа int",
  //     outputData: "Возрат одного числа int",
  //     rating: 1,
  //   });
  //   Task.create({
  //     name: "A * B",
  //     description: "Найдите произведение двух целых чисел",
  //     inputData: "Два числа типа int",
  //     outputData: "Возрат одного числа int",
  //     rating: 10,
  //   });
  //   Task.create({
  //     name: "A / B",
  //     description: "Найдите частное двух целых чисел",
  //     inputData: "Два числа типа int",
  //     outputData: "Возрат одного числа int",
  //     rating: 6,
  //   });
  //   Task.create({
  //     name: "Дискриминант квадратного уравнения",
  //     description:
  //       "Найдите дискриминант двадратного уравнения, зная его коэффициенты",
  //     inputData: "Три числа типа int",
  //     outputData: "Возрат одного числа int",
  //     rating: 9,
  //   });
  //   Task.create({
  //     name: "Площадь треугольника",
  //     description: "Используя теорему Горнера, найдите площадь треугольника",
  //     inputData: "Три числа типа int",
  //     outputData: "Возрат одного числа int",
  //     rating: 8,
  //   });
  //   Task.create({
  //     name: "Простое?",
  //     description: "Выясните, является ли число простым",
  //     inputData: "Одно числа типа int",
  //     outputData: "True/False типа boolean",
  //     rating: 4,
  //   });
}


var sequelize = null;

(async () => {
  sequelize = connectDB()
  await createModel(sequelize);
})()



module.exports = { sequelize, Task, User };
