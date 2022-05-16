const message = "Не все тесты были пройдены или синтаксис функции неверный";

function prepareCode(code) {
    return '(' + code.replaceAll('"', '\'').replaceAll('\n', '') + ')';
}

function parseArgument(argument) {
    switch (argument.dataValues.type) {
        case 'String':
            return argument.dataValues.value;
            break;
        case 'Number':
            return Number.parseInt(argument.dataValues.value, 10);
            break;
        case 'Boolean':
            if (argument.dataValues.value == 'true') return true;
            return false;
            break;
        case 'Array':
            break;
    }
}

async function testCode(code, taskId, User, Test, Argument) {
    let myFunc = await eval(prepareCode(code));
    let tests = await Test.findAll({
        where: {
            TaskId: taskId
        }
    });
    for(let i = 0; i < tests.length; i++) {
        let arguments = await Argument.findAll({
            where: {
                TestId: tests[i].dataValues.id,
                isResult: false,
            }
        })
        
        let result = await Argument.findAll({
            where: {
                TestId: tests[i].dataValues.id,
                isResult: true,
            }
        })
        if (result.length != 1) return -1;
        let testResult = null;

        switch (arguments.length) {
            case 1:
                testResult = myFunc(parseArgument(arguments[0]))
                if (testResult != parseArgument(result[0])) return message;
                break;
            case 2:
                testResult = myFunc(parseArgument(arguments[0]), parseArgument(arguments[1]))
                if (testResult != parseArgument(result[0])) return message;
                break;
            case 3:
                testResult = myFunc(parseArgument(arguments[0]), parseArgument(arguments[1]), parseArgument(arguments[2]))
                if (testResult != parseArgument(result[0])) return message;
                break;
        }
    }
    return 0;
}

module.exports = { prepareCode, testCode }