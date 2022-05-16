const { Sequelize, DataTypes, Model, TableHints } = require("sequelize");
const argon2 = require('argon2');
class Task extends Model { }
class User extends Model { }
class Test extends Model { }
class Argument extends Model { }

async function createModel(sequelize, isForce) {
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

    Argument.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            type: {
                type: Sequelize.ENUM('Boolean', 'Number', 'String', 'Array'),
                defaultValue: "String",
            },
            value: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            isResult: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        },
        {
            sequelize,
            modelName: "Argument",
        }
    );

    Test.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: "Test",
        }
    );
    Task.hasMany(Test)
    Test.hasMany(Argument)
    await sequelize.sync({ force: isForce }).then(() => {
        console.log("Tables have been created");
    }).catch(err => console.log(err));
}


async function initUser(name, login, password, email) {
    pass = await argon2.hash(password)
    return await User.create({
        name: name,
        login: login,
        password: pass,
        email: email
    });
}


async function initTask(name, description, inputData, outputData, rating) {
    return await Task.create({
        name: name,
        description: description,
        inputData: inputData,
        outputData: outputData,
        rating: rating,
    });
}

async function initTest(task, name) {
    return await Test.create({ name: name, TaskId: task.id });
}

async function initArgument(test, name, type, value, isResult) {
    return await Argument.create({ name: name, type: type, value: value, TestId: test.id, isResult: isResult })
}

module.exports = { createModel, initTask, initUser, initTest, initArgument, User, Task, Test, Argument }
