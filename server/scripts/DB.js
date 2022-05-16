const { Sequelize} = require("sequelize");
const service = require('./initDataBase.js')
async function connectDB() {
  const sequelize = new Sequelize("tasks", "0I0akel", "123", {
    host: "localhost",
    dialect: "postgres",
  });
  try {
    await sequelize.authenticate();
    console.log("Соединение с БД было успешно установлено");
    return sequelize;
  } catch (e) {
    console.log("Невозможно выполнить подключение к БД: ", e);
    return null;
  }
}
async function initDB()  {
  await service.initUser('Alexander','amogus3000','123456','aboba@aaa.com')
  await service.initUser('Semen','jija099','9090','jij@gmail.com')
  await service.initUser('Alex','Alexander','123456','alex@gmail.com')

  let task1 = await service.initTask('A + B','Найдите сумму двух целых чисел','Два числа типа int','Возрат одного числа int',1)
  //тесты для task1.
  let test11 = await service.initTest(task1, 'test1')
  let arg111 = await service.initArgument(test11,'a',"Number",3,false)
  let arg112 = await service.initArgument(test11,'b',"Number",9,false)
  let arg113 = await service.initArgument(test11,'a+b',"Number",12,true)
  let test12 = await service.initTest(task1, 'test2')
  let arg121 = await service.initArgument(test12,'a',"Number",-3,false)
  let arg122 = await service.initArgument(test12,'b',"Number",90,false)
  let arg123 = await service.initArgument(test12,'a+b',"Number",87,true)
  let test13 = await service.initTest(task1, 'test3')
  let arg131 = await service.initArgument(test13,'a',"Number",100,false)
  let arg132 = await service.initArgument(test13,'b',"Number",10000,false)
  let arg133 = await service.initArgument(test13,'a+b',"Number",10100,true)
  let task2 = await service.initTask('A * B','Найдите произведение двух целых чисел','Два числа типа int','Возрат одного числа int',10)
  let test21 = await service.initTest(task2, 'test1')
  let arg211 = await service.initArgument(test21,'a',"Number",3,false)
  let arg212 = await service.initArgument(test21,'b',"Number",9,false)
  let arg213 = await service.initArgument(test21,'a*b',"Number",27,true)
  let test22 = await service.initTest(task2, 'test2')
  let arg221 = await service.initArgument(test22,'a',"Number",-3,false)
  let arg222 = await service.initArgument(test22,'b',"Number",90,false)
  let arg223 = await service.initArgument(test22,'a*b',"Number",-270,true)
  let test23 = await service.initTest(task2, 'test3')
  let arg231 = await service.initArgument(test23,'a',"Number",100,false)
  let arg232 = await service.initArgument(test23,'b',"Number",10000,false)
  let arg233 = await service.initArgument(test23,'a*b',"Number",1000000,true)
  let task3 = await service.initTask('A / B','Найдите частное двух целых чисел','Два числа типа int','Возрат одного числа int',6)
  let test31 = await service.initTest(task3, 'test1')
  let arg311 = await service.initArgument(test31,'a',"Number",9,false)
  let arg312 = await service.initArgument(test31,'b',"Number",3,false)
  let arg313 = await service.initArgument(test31,'a/b',"Number",3,true)
  let test32 = await service.initTest(task3, 'test2')
  let arg321 = await service.initArgument(test32,'a',"Number",90,false)
  let arg322 = await service.initArgument(test32,'b',"Number",-3,false)
  let arg323 = await service.initArgument(test32,'a/b',"Number",-30,true)
  let test33 = await service.initTest(task3, 'test3')
  let arg331 = await service.initArgument(test33,'a',"Number",100000,false)
  let arg332 = await service.initArgument(test33,'b',"Number",10000,false)
  let arg333 = await service.initArgument(test33,'a/b',"Number",10,true)
  let task4 = await service.initTask('A - B','Найдите разность двух целых чисел','Два числа типа int','Возрат одного числа int',3)
  let test41 = await service.initTest(task4, 'test1')
  let arg411 = await service.initArgument(test41,'a',"Number",9,false)
  let arg412 = await service.initArgument(test41,'b',"Number",3,false)
  let arg413 = await service.initArgument(test41,'a-b',"Number",6,true)
  let test42 = await service.initTest(task4, 'test2')
  let arg421 = await service.initArgument(test42,'a',"Number",90,false)
  let arg422 = await service.initArgument(test42,'b',"Number",-3,false)
  let arg423 = await service.initArgument(test42,'a-b',"Number",93,true)
  let test43 = await service.initTest(task4, 'test3')
  let arg431 = await service.initArgument(test43,'a',"Number",100000,false)
  let arg432 = await service.initArgument(test43,'b',"Number",10000,false)
  let arg433 = await service.initArgument(test43,'a-b',"Number",90000,true)
  let task5 = await service.initTask('Дискриминант квадратного уравнения',
  'Найдите дискриминант квадратного уравнения, зная его коэффициенты','Три числа типа int','Возрат одного числа int',9)
  let test51 = await service.initTest(task5, 'test1')
  let arg511 = await service.initArgument(test51,'a',"Number",2,false)
  let arg512 = await service.initArgument(test51,'b',"Number",10,false)
  let arg513 = await service.initArgument(test51,'с',"Number",3,false)
  let arg514 = await service.initArgument(test51,'b*b - 4*a*c',"Number",76,true)
  let test52 = await service.initTest(task5, 'test2')
  let arg521 = await service.initArgument(test52,'a',"Number",3,false)
  let arg522 = await service.initArgument(test52,'b',"Number",-8,false)
  let arg523 = await service.initArgument(test52,'с',"Number",-10,false)
  let arg524 = await service.initArgument(test52,'b*b - 4*a*c',"Number",184,true)
  let test53 = await service.initTest(task5, 'test3')
  let arg531 = await service.initArgument(test53,'a',"Number",-12,false)
  let arg532 = await service.initArgument(test53,'b',"Number",23,false)
  let arg533 = await service.initArgument(test53,'с',"Number",-7,false)
  let arg534 = await service.initArgument(test53,'b*b - 4*a*c',"Number",193,true)
  let task6 = await service.initTask('Простое?','Выясните, является ли число простым','Одно числа типа int','True/False типа boolean',4)
  let test61 = await service.initTest(task6, 'test1')
  let arg611 = await service.initArgument(test61,'a',"Number",101,false)
  let arg612 = await service.initArgument(test61,'isPrime',"Boolean",'true',true)
  let test62 = await service.initTest(task6, 'test2')
  let arg621 = await service.initArgument(test62,'a',"Number",100697,false)
  let arg622 = await service.initArgument(test62,'isPrime',"Boolean",'false',true)
  let test63 = await service.initTest(task6, 'test3')
  let arg631 = await service.initArgument(test63,'a',"Number",997,false)
  let arg632 = await service.initArgument(test63,'isPrime',"Boolean",'true',true)
}

(async() => {
  var sequelize = await connectDB()
  let isForce = false;
  await service.createModel(sequelize, isForce);
  if(isForce) await initDB();
})()


