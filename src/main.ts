import './style.css'

// 7dz
// let input 
// do {
// input = prompt ('введите число') as string
// }while (input?.length<1)
// const shift = +(prompt ('на сколько разрядов сдвинуть число?')as string)
// let newNumber = ''
// for (let i=shift;i<input.length;i++){
// newNumber += input[i]
// }
// for (let i=shift-1;i>=0;i--) {
// newNumber += input [i]   
// }
// alert (newNumber)

// 2pz
// let num = 1000
// let i = 0
// do { num/=2
// i++
// } while (num > 50)
// console.log ('num=',num, 'i=',i)

// dz10
// let userConfirmGht
// let userConfirmSht
// let userConfirmEqls
// let N0 = 51
// let N1 = 100
// alert ('загадать число от 0 до 100')
// do {
//   let userConfirmGht = confirm (`Ваше число больше ${N0} и меньше ${N1}?`)
// if (userConfirmGht) {
// N0 = N1/2 
// N1 = N0 + N1/2 
// }
// else {
// N1 = N0 
// N0 /= 2 
// }
// }while(N0!=N1)
// alert ('Ваше число ${N0}')

// Функции
// function имя(параметры, через запятую) {
//     /тело, код функции/
//   }

// let local = 'глобальная переменная'
//  function showMessage(local:any) {
//     local = 'локальная переменная'
//     console.log( 'Всем привет!' )
// return local
//   }
//   console.log(local)
//   console.log(showMessage(local))

function showMessage(from: string, text: any, devider = ':') { // параметры: from, text
  console.log(from + devider + '' + text);
}
showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)

// Параметр – это переменная, указанная в круглых скобках в объявлении функции.
// Аргумент – это значение, которое передаётся функции при её вызове.

// Функция должна делать только то, что явно подразумевается её названием. 
// И это должно быть одним действием.
// Два независимых действия обычно подразумевают две функции, 
// даже если предполагается, что они будут вызываться вместе 
// (в этом случае мы можем создать третью функцию, которая будет их вызывать).

// function checkAge(age) {
//       return (age > 18) || confirm('Родители разрешили?');
//     } 

// function getSum(a:number, b=0, c=0, d=0, e=0) {
// return a+b+c+d+e
// }

// function getUserValues(text){
// return (prompt) (text)   
// }
// function min(a,b) {
//  if (a<b){
//  return a
//  }
//  else {return b 
// }
// }
// let a = getUserValues('первое число')
// let b = getUserValues('второе число')
// console.log (min(a,b))

// function getUserValues(text){
//     let temp = +(prompt(text) as string)   
//     return temp
// }
// function pow(chislo,stepen) {
//     return chislo**stepen
// }
// let a = getUserValues('введите число')
// let b = getUserValues('степень')
// console.log(pow(a,b))

var nothing
console.log(nothing)

nothing = 2

const sayHi = function () {
  console.log("Привет")
}
// alert(sayHi)

let sayH = () => alert("Hello!");
// sayH();

// Функции – это значения. Они могут быть присвоены, скопированы или объявлены в любом месте кода.
// Если функция объявлена как отдельная инструкция в основном потоке кода, то это “Function Declaration”.
// Если функция была создана как часть выражения, то это “Function Expression”.
// Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.
// Функции, объявленные при помощи Function Expression, создаются только когда поток выполнения 
// достигает их.

//стрелочные функции
// Они бывают двух типов:

// Без фигурных скобок: (...args) => expression – 
// правая сторона выражения: функция вычисляет его и возвращает результат. 
// Скобки можно не ставить, если аргумент только один: n => n * 2.
// С фигурными скобками: (...args) => { body } – 
// скобки позволяют нам писать несколько инструкций внутри функции, 
// но при этом необходимо явно вызывать return, чтобы вернуть значение.


// let func123 = (arg1, arg2, ...argN) => expression;
// let func123 = function (arg1,arg, ...argN) {
//   return expression
// }

// let sum
// sum = (a: number, b: number) => a + b
// sum = (a: number, b: number) => {
//   let s = a + b
//   return s
// }

// Всего существует 8 типов данных:

// number для целых и вещественных чисел,
// bigint для работы с целыми числами произвольной длины,
// string для строк,
// boolean для логических значений истинности или ложности: true/false,
// null – тип с единственным значением null, т.е. «пустое значение» или «значение не существует»,
// undefined – тип с единственным значением undefined, т.е. «значение не задано»,
// object и symbol – сложные структуры данных и уникальные идентификаторы; их мы ещё не изучили.
// Оператор typeof возвращает тип значения переменной.

let varFromServer = '' || 0 || 'not'

// Значения null и undefined особенные: они равны == только друг другу, но не равны ничему ещё.

/**
 * Возвращает x, возведённое в n-ную степень.
 * В случае, если n не целое или отрицательное, результат NaN
 * 
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */
function pow(x: number, n: number) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;
  return x ** n
}

pow(2, 2)

//Объекты
//Создание пустого объекта
const user = {} as any //синтаксис "литерал объекта"
const user1 = new Object() //синтаксис "конструктор объекта"

user.age = 18
user['two words'] = 'ok'
user[18] = 18
user['two words'] = 'not'
console.log(user['18'])

const car = {
  wheels: 4,
  engine: 'v8',
  hp: 200,
  'two words': 'yes',
} as any
let horsePowers = 'hP'
console.log(car[horsePowers])
delete car['two words']
car.wheels = 5
console.log(car)

// let user = {
//   name: "John",
//   age: 30
// };

// let key = prompt("Что вы хотите узнать о пользователе?", "name");

// // доступ к свойству через переменную
// alert( user[key] ); // John (если ввели "name")

// function makeUser(name:string, age:number) {
//   return {
//     name: name,
//     age, //имя переменной ставновится свойством, а ее значение - значением
//     // ...другие свойства
//   };
// }

// let user2 = makeUser("John", 30);
// console.log(user2)

// function showMessage1() {
//   console.log('Всем привет!');
// }
// showMessage1()

// function CurrTimeAndSeconds(hours, minutes, seconds) {
//   let TimeInSeconds = hours * 3600 + minutes * 60 + seconds
//   let AboutSeconds = +(prompt('на сколько увеличить время в секундах') as string)
//   let NewTimeInSeconds = TimeInSeconds + AboutSeconds
//   let hours2 = Math.floor(NewTimeInSeconds / 3600)
//   let minutes2 = Math.floor((NewTimeInSeconds - (hours2 * 3600)) / 60)
//   let seconds2 = Math.floor(NewTimeInSeconds%60)
//   let NewCurrentTime = `${hours2}:${minutes2}:${seconds2}`
//   // return NewCurrentTime;
//   console.log(NewCurrentTime)
// }

// CurrTimeAndSeconds(12,10,15)
// console.log(CurrTimeAndSeconds(12,10,15))

// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// и следующие функции для работы с этим объ-ектом.
// 1 Функция сложения 2-х объектов-дробей.
// 2 Функция вычитания 2-х объектов-дробей.
// 3 Функция умножения 2-х объектов-дробей.
// 4 Функция деления 2-х объектов-дробей.
// 5 Функция сокращения объекта-дроби.




const fraction1 = {
  numerator: 2,
  denominator: 5,
}

const fraction2 = {
  numerator: 2,
  denominator: 8,
}

console.log(`${fraction1.numerator}/${fraction1.denominator} and ${fraction2.numerator}/${fraction2.denominator}`)

function maxDenominator(f: any) {
  const min = f.numerator < f.denominator ? f.numerator : f.denominator
  for (let i = min; i > 1; i--) {
    if (f.numerator % i == 0 && f.denominator % i == 0)
      return i
  }
  return 1
}
function fractionReduction(f: any) {
  const denominator = maxDenominator(f)
  f.numerator /= denominator
  f.denominator /= denominator
  return f
}

function fractionSubstraction(f1: any, f2: any) {
  const ajusted = fractionAjust(f1, f2)
  const sub = {
    numerator: ajusted.f1.numerator - ajusted.f2.numerator,
    denominator: f1.denominator,
  }
  return fractionReduction(sub)
}

function fractionAjust(f1: any, f2: any) {
  const f1D = f1.denominator
  const f2D = f2.denominator
  f1.numerator *= f2D
  f1.denominator *= f2D
  f2.numerator *= f1D
  f2.denominator *= f1D
  return { f1, f2 }
}

function fractionMultiplication(f1: any, f2: any) {
  const mult = {
    numerator: f1.numerator * f2.numerator,
    denominator: f1.denominator * f2.denominator,
  }
  return fractionReduction(mult)
}

function fractionDivision(f1: any, f2: any) {
  const div = {
    numerator: f1.numerator * f2.denominator,
    donominator: f1.denominator * f2.numerator,
  }
  return fractionReduction(div)
}

function fractionSum(f1: any, f2: any) {
  const ajusted = fractionAjust(f1, f2)
  const sum = {
    numerator: ajusted.f1.numerator + ajusted.f2.numerator,
    denominator: ajusted.f1.denominator
  }
  return fractionReduction(sum)
}

const sumResult = fractionSum(fraction1, fraction2)
const subResult = fractionSubstraction(fraction1, fraction2)
const multResult = fractionMultiplication(fraction1, fraction2)
const divResult = fractionDivision(fraction1, fraction2)
console.log(`sum = ${sumResult.numerator}/ ${sumResult.denominator}`)
console.log(`sub = ${subResult.numerator}/ ${subResult.denominator}`)
console.log(`mult = ${multResult.numerator}/ ${multResult.denominator}`)
console.log(`div = ${divResult.numerator}/ ${divResult.denominator}`)

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

const newUser = {} as any
newUser.name = 'John'
newUser.surname = 'Smith'
newUser.name = 'Pete'
delete newUser.name

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
const obj1 = { a: 1 }
const obj2 = { a: 1 }
console.log('obj1 === obj2', obj1 === obj2)

function isEmpty(obj: any) {

}

//Два одинаковых объекта никогда не будут равны

// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: '160$',
  Pete: 130
} as any

let salariesSum = 0
for (let key in salaries) {
  salariesSum += parseFloat(salaries[key])
}
console.log(salariesSum)

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
function multiplyNumeric(obj: any) {
  for (let key in obj) {
    if (typeof (obj[key]) == 'number')
      obj[key] *= 2
  }
}
multiplyNumeric(salaries)
console.log(salaries)

// object+function
// let currentTime = {
// hours:11,
// minutes:47,
// seconds:50,    
// }
// function currTime(time:any) {
//   return `${time.hours}:${time.minutes}:${time.seconds}`
// }
// function addMinutes(time:any, minutes:number) {
//   let hours = time.hours
//   let newMinutes = time.minutes + minutes
//   if (newMinutes>59) {
//     hours += Math.floor(newMinutes/60)
//     newMinutes %= 60 
//   }
//   return {
//     hours:hours,
//     minutes:newMinutes,
//     seconds:time.seconds,    
//   }
// }
// console.log(currTime(currentTime))
// const minutes = +(prompt('Input minutes to add') as string)
// console.log(currTime(addMinutes(currentTime, minutes)))

let messageStr = "Привет!";
let phraseStr = messageStr;

console.log(`messageStr`, messageStr)
console.log('phraseStr', phraseStr)
phraseStr += 'User!'
console.log(`messageStr`, messageStr)
console.log('phraseStr', phraseStr)

// Два объекта равны только в том случае, если это один и тот же объект.

let mainUser = {
  name: "John",
  age: 30,
  work: {
    salari: 100
  }
} as any

let clone = {} as any; // новый пустой объект

// давайте скопируем все свойства user в него
//1 способ клонирования объектов.Копирование свойств объекта в цикле
// for (let key in mainUser) {
//   if (typeof(mainUser[key])=='object') {
//     clone[key] = {}
//     for (let innerKey in mainUser) {
//      clone [key][innerKey] = mainUser[key][innerKey] 
//     }
// } else {
//   clone[key] = user[key]
// }
// }
// 2 Spred оператор (развертывание)
clone = { ...mainUser, work: { ...mainUser.work } }
//  3 Object.assign
// clone = Object.assign ({}, mainUser, {work: {...mainUser.work}})
//  Для плоских объектов доступны 2 варианта записи
//  Object.assign(clone,mainUser)
//  clone = Object.assign({},mainUser)
//  4 Преобразование в JSON (строка) и назад в объект. Не надо думать о вложенности,
//  но теряются Symbol и методы
// clone = JSON.parse(JSON.stringify(mainUser))
//  5 structedClone().Выдает ошибку, если в объекте присутствует метод
// clone  = structuredClone(mainUser)

// теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete"; // изменим в нём данные
console.log(clone)
clone.work.salari = 200
console.log(mainUser.name); // все ещё John в первоначальном объекте
console.log(clone.name) //уже Pete
console.log(clone.work.salari)

// type News = {
//   h1: string,
//   image: string,
//   text: string,
//   paragraph: string,
//   tags?: [string],

// }

// const news: Array<News> = [
//   {
//     h1: 'getafe',
//     image: 'getafe1.jpg',
//     text: '23',
//     paragraph: '23',
//     tags: ['la-liga']

//   }
// ]

// for (let el of news) {
//   el.paragraph = el.text.split('\n')[0]
//   document.write(`${el.h1}`)
//   if (el.tags) {
//     for (let tag of el.tags) {
//       document.write(`${tags}`)
//     }
//   }
// }
// console.log(news)

const userObj = {
  address: {}
} as any // пользователь без свойства "address"
// Мы не можем использовать ?. для записи т.к. опциональная цепочка ?. не имеет смысла в левой части присваивания.
// userObj?.adress.street = 'roz' //Левая часть выражения присваивания не может быть обращением к нему
// Так создаются сложные объекты необходимой конфигурации
let street //может быть, а может и не быть
if (street && userObj.address) {
  userObj.address.street = 'roz'
} else if (street && !userObj.address) {
  userObj.address = {}
  userObj.address.street = 'roz'
}

// console.log(userObj.address.street) // Ошибка!

console.log(user.address ? user.address.street : undefined) // развернутая запись
console.log(userObj.address?.street) // сокращенная запись 

// fetch ('http://jservice.io/api/random?count=1').
//   then((response) => {
//     return response.json()
//   })
// .then((data) =>{
//   console.log(data)
//  data =[]
//  console.log(data[0]?.category?.id)
// })

// console.log(JSON.stringify(news))

// let user = null;
// user?.name = "John"; // Ошибка, не работает
// то же самое что написать undefined = "John"

// obj?.prop – возвращает obj.prop если obj существует, в противном случае undefined.
// obj?.[prop] – возвращает obj[prop] если obj существует, в противном случае undefined.
// obj.method?.() – вызывает obj.method(), если obj.method существует, в противном случае возвращает undefined.

// Мы должны использовать ?. осторожно, только там, где по логике кода допустимо,
//  что левая часть не существует. Чтобы он не скрывал от нас ошибки программирования, если они возникнут.
// Number ('12') тоже самое +'12'

let billion = 1000000000 //1 миллиард, буквально: 1 и 9 нулей
let billion1 = 1e9
console.log(billion == billion1)

// 1e3 = 1 * 1000
// 1.23e6 = 1.23 * 1000000

// 1 делится на 1 с 3 нулями
// 1e-3 = 1 / 1000 (=0.001)

// 1.23 делится на 1 с 6 нулями
// 1.23e-6 = 1.23 / 1000000 (=0.00000123)

// Шестнадцатеричные, двоичные и восьмеричные числа
// 0x - префикс для записи в шестнадцатиричной системе счисления
console.log('oxf5', 0xff)//255

// 0b - префикс для записи в двоичной системе счисления
console.log('ob10010', 0b10010)

// 0o - префикс для записи в восьмиричной системе счисления
console.log('0o377', 0o377)

// base может варьироваться от 2 до 36 (по умолчанию 10)
console.log('255..toString', 255..toString(2))
console.log('255..toString', 255..toString(8))
console.log('255..toString', 255..toString(16))

// Округление
// Одна из часто используемых операций при работе с числами – это округление.

// В JavaScript есть несколько встроенных функций для работы с округлением:

// Math.floor
// Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
console.log('Math.floor(3.1)', Math.floor(3.1))

// Math.ceil
// Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.
console.log('Math.ceil(3.1)', Math.ceil(3.1))

// Math.round
// Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.
console.log('Math.round(3.1)', Math.round(3.1))


// Math.trunc (не поддерживается в Internet Explorer)
// Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1.
console.log('Math.trunc(3.1)', Math.trunc(3.1))

// Округление до n-го знака
// 1 способ
// Умножить и разделить.
// Например, чтобы округлить число до второго знака после запятой, 
// мы можем умножить число на 100, вызвать функцию округления и разделить обратно.

console.log('Math.floor(1.243456* 100) / 100 ', Math.floor(1.243456 * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

// 2 способ
// Метод toFixed(n) округляет число до n знаков после запятой 
// и возвращает строковое представление результата.
console.log('1.234656.toFixed(2)', 1.234656.toFixed(2))//1.24
console.log('90..toFixed(2)', 90..toFixed(2))//90.00
console.log('90000.00.toLocaleString', 90000.00.toLocaleString('ru-RU'))//'90 000'

// Потеря точности
console.log(0.1.toFixed(20)) //// 0.10000000000000000555

// Можно ли обойти проблему? 
// Конечно, наиболее надёжный способ — это округлить результат используя метод toFixed(n):

// console.log('0.1+0.2',0.1+0.2)//0.30000000000000004
console.log('+(0.1+0.2).toFixed(2)', +(0.1 + 0.2).toFixed(2))

// Проверка: isFinite и isNaN


// Infinity (и -Infinity) — особенное численное значение, которое ведёт себя в точности как математическая бесконечность ∞.
// NaN представляет ошибку.
// Эти числовые значения принадлежат типу number, но они не являются «обычными» числами, поэтому есть функции для их проверки:

// isNaN(value) преобразует значение в число и проверяет является ли оно NaN:

// alert( isNaN(NaN) );  true
// alert( isNaN("str") );  true
// Значение NaN уникально тем, что оно не является равным ничему другому, даже самому себе:

// alert('NaN === NaN', NaN === NaN ); false

// Методы Number.isNaN и Number.isFinite – это более «строгие» версии функций isNaN и isFinite. 
// Они не преобразуют аргумент в число, а наоборот – первым делом проверяют,
// является ли аргумент числом (принадлежит ли он к типу number).
// Не стоит считать Number.isNaN и Number.isFinite более «корректными» версиями функций isNaN и isFinite. 
// Это дополняющие друг-друга инструменты для разных задач.

// Сравнение Object.is
// Существует специальный метод Object.is, который сравнивает значения 
// примерно как ===, но более надёжен в двух особых ситуациях:

// Работает с NaN: 
console.log('Object.is(NaN, NaN) === true', Object.is(NaN, NaN) === true) //здесь он хорош.
// Значения 0 и -0 разные: 
console.log('Object.is(0, -0) === false', Object.is(0, -0) === false)
// это редко используется, но технически эти значения разные.
// Во всех других случаях Object.is(a, b) идентичен a === b.

// parseInt и parseFloat

console.log(parseInt('0xff', 16)) //255

// Math.random()
// Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)

// Math.max(a, b, c...) / Math.min(a, b, c...)
// Возвращает наибольшее/наименьшее число из перечисленных аргументов.

//Правильное округление 6.35
console.log(6.35.toFixed(20)); // 6.34999999999999964473
console.log(Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

//случайное число
function randomInt(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min)
}
//случайное число в выровненной верятностью появления
function randomInteger(min: any, max: any) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

console.log(randomInteger(1, 3));

console.log('Math.min(1,1,5,7,8,15,47,32)', Math.min(1, 1, 5, 7, 8, 15, 47, 32))
console.log('Math.max(1,1,5,7,8,15,47,32)', Math.max(1, 1, 5, 7, 8, 15, 47, 32))
console.log('Math.max(..[1,1,5,7,8,15,47,32])', Math.max(...[1, 1, 5, 7, 8, 15, 47, 32])) //Можем развернуть массив используя spread оператор

// 10. Заросите у пользователя целое число и выведите в ответ, четное число или нет. 
// В задании используйте логические операторы, не надо использовать if или switch.

// let numFromUser = +(prompt('Введите целое число') as string)
// const evenOdd = (numFromUser%2==0 && 'четное') || 'не четное'
// console.log(evenOdd)

let guestList = `Guests:
 * John
 * Pete
 * Mary
`

console.log(guestList)

console.log(`My\n`.length) // 3 (\ - один спецсимвол)

// let testStr = `Hello`;

// получаем первый символ
// alert( testStr[0] ); // H
// alert( testStr(0) ); // H

// получаем последний символ
// alert( testStr[testStr.length - 1] ); // o
// alert( testStr.at(-1) ); // o

for (let char of "Hello") {
  console.log(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
}



//testStr[0] = 'h'; // ошибка, разрешено только чтение
//console.log( testStr[0] ); // не работает

let testStr = 'Hi Alex'
testStr = testStr[0].toLowerCase() + testStr.slice(1, 5) + testStr[5].toUpperCase + testStr.slice(6) //заменяем строку
console.log(testStr)

// alert('Interface'.toUpperCase()); // INTERFACE
// alert('Interface'.toLowerCase()); // interface

// Поиск подстроки

// Первый метод — str.indexOf(substr, pos).

// Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, 
// на которой располагается совпадение, либо -1 при отсутствии совпадений.

let TestStr = 'Widget with id';

console.log(TestStr.indexOf('Widget')); // 0, потому что подстрока 'Widget' найдена в начале
console.log(TestStr.indexOf('widget')); // -1, совпадений нет, поиск чувствителен к регистру

console.log(TestStr.indexOf("id")); // 1, подстрока "id" найдена на позиции 1 (..idget with id)

// let index = 0
// while (true) {
//  index = testStr.indexOf("id",index)
//  if (index !=-1) {
// console.log('Подстрока "id" найдена на позиции', index)
//  index++ 
//  } else {
// break
//  }
// }

// Также есть похожий метод str.lastIndexOf(substr, position), который ищет с конца строки к её началу.

// Он используется тогда, когда нужно получить самое последнее вхождение: перед концом строки 
// или начинающееся до (включительно) определённой позиции.

console.log('testStr.lastIndexOf("id")', testStr.lastIndexOf("id"))

// includes, startsWith, endsWith

console.log("Widget with id".includes("Widget")); // true

console.log("Hello".includes("Bye")); // false

console.log("Widget".startsWith("Wid")); // true, "Wid" — начало "Widget"
console.log("Widget".endsWith("get")); // true, "get" — окончание "Widget

console.log("Widget".endsWith("get") ? 'Строка "Widget" заканчивается на подстроку "get"' : 'Строка "Widget" не заканчивается на строку "get"')

// Получение подстроки

// достаточно запомнить slice
// str.slice(start [, end])
// Возвращает часть строки от start до (не включая) end.

console.log('"Widget with id".slice(7)', testStr.slice(7))

// str.substring(start [, end])
// Возвращает часть строки между start и end (не включая) end.

// Это — почти то же, что и slice, но можно задавать start больше end.
// Если start больше end, то метод substring сработает так, как если бы аргументы были поменяны местами.

// str.substr(start [, length])
// Возвращает часть строки от start длины length.

// В противоположность предыдущим методам, этот позволяет указать длину вместо конечной позиции

console.log('z > Z', 'z' > 'Z')
console.log("z".codePointAt(0)) // 122
console.log("Z".codePointAt(0)) // 90
console.log(String.fromCodePoint(128555)); //😫
console.log('😫.lenght')//2

let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
console.log(str);
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

// Вызов str.localeCompare(str2) возвращает число, которое показывает, какая строка больше в соответствии с правилами языка:

// Отрицательное число, если str меньше str2.
// Положительное число, если str больше str2.
// 0, если строки равны.

console.log('Österreich' > 'Zealand') // true.Сравнение по кодам символа
console.log('Österreich'.localeCompare('Zealand')); // -1. Сравнение по положению в алфавите

//Методы replace и replaceAll возвращают новую строку
str = "Ослик Иа-Иа посмотрел на виадук"
console.log(str.replace('Иа', 'юю'))//меняет только первое совпадение

//метод split(simb) разбивает строку на массив строку по символу-разделителю simb
console.log(str.split(''))
//метод join(simb) соединяет массив в строку символом-разделителем simb
console.log(str.split('').join('_'))
console.log([0, 1, 2, 3, 5, 5].join('_'))

str.trim()// — убирает пробелы в начале и конце строки.
console.log('"     s  t  r     ".(trim)', "        s     t           r      ".trim())

// str.repeat(n) — повторяет строку n раз.
console.log('"abc".repeat(3)', "abc".repeat(3))

// Написать функцию, которая принимает 2 строки и сравнивает их длину. 
// Функция возвращает 1, если в первой строке больше символов, чем во второй; 
// -1 – если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.

function compare(a: any, b: any) {
  if (a.lenght > b.lenght)
    return 1;
  else if (a.lenght < b.lenght)
    return -1;
  else
    return 0
}

// Массивы
// Существует два варианта синтаксиса для создания пустого массива:
let arr = new Array()
console.log(arr)
arr = new Array(12, 15, 35)
console.log(arr)
arr = new Array(10) //Если указать только одно число, то создастся пустой массив на n элементов
console.log('Array(10)', arr)
arr = []
console.log('[]', arr)
// Элементы массива нумеруются, начиная с нуля
// Мы можем получить элемент, указав его номер в квадратных скобках
let fruits = ["Яблоко", "Апельсин", "Слива"];

console.log(fruits[0]); // Яблоко
console.log(fruits[1]); // Апельсин
console.log(fruits[2]); // Слива
//Также работает метод at()

// console.log('fruits.at(1)',fruits.at(1))
//В отличии от строк, мы можем заменить элемент
fruits[2] = 'Груша' // теперь ["Яблоко", "Апельсин", "Груша"]

//...Или добавить новый к существующему массиву 
fruits[3] = 'Лимон' //теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]


//Для добавления элементов в массив существуют специальные методы. По индексу обычно не добавляют
//Если надо добавить элементов в конец массива можем использовать один из вариантов:
fruits.push('Слива')
fruits[fruits.length] = 'Слива'

//Общее число элементов массива содержится в его свойстве length:
console.log(fruits)// ["Яблоко", "Апельсин", "Слива","Груша", "Лимон", "Слива"];
console.log(fruits.length) // 6

//Массивы ведут себя также как объекты в плане того, что значения хранятся по ссылку
const fruits2 = fruits //Сохранили в переменную fruits2 ссылку на массив переменной fruits
fruits2.push('Банан')
console.log(fruits) //в массив переменной fruits добавили еще один элемент

//console.log([]==[])//всегда false, потому что ссылки разные

console.log('{}.toString()', {}.toString()) //[object Object]
console.log('[1,2,[3,4],function(){}, {}].toString()', [1, 2, [3, 4], function () { }, {}])

const arr3 = [1, 'dasd', [1, 2, ['ftsrad', 43]], [12, 35]]
console.log("arr3", arr3)
//Самый простой способ сделать сложный массив, состоящий из примитивов плоским
console.log("arr3.split(',')", arr3.toString().split(','))
fruits.length = 3 //Изменили количество элементов в массиве. Все, что не вошли - исчезли
fruits.length = 7 //Если увеличить длину массива, появятся новые индексы, но элементы будут пустые
console.log('fruits', fruits) //(3) ["Яблоко", "Апельсин", "Груша"]

//fruits.lengt = -1.Ошибка. Длина массива не может быть меньше 0.

//Методы pop/push, shift/unshift
// Эффективность
// Методы push/pop выполняются быстро, а методы shift/unshift – медленно.
//pop и shift удаляют первый(shift) и последний(pop) элемент и возвращают его значение

function pop(arr: any[]) {
  const el = arr[arr.length - 1] //читаем последний элемент
  arr.length = arr.length - 1 //удаляем последний элемент
  return el                   //возвращаем последний элемент
}

function shift(arr: any[]) {
  const el = arr[0]     //читаем последний элемент
  arr = arr.slice(1)   //удаляем последний элемент
  return el             //возвращаем последний элемент
}

//push и unshift добавляют элементы в начало(unshift) или конец(push) массива и возвращают новую длину массива

function push(arr: any[], elements: any[]) {
  arr = [...arr, ...elements]
  return arr.length
}

function unshift(arr: any[], elements: any[]) {
  arr = [...arr, ...elements]
  return arr.length
}


//Если мы работаем с массивом, как с обычным объектом.
//  Способы оптимизации, используемые для массивов, в этом случае не подходят, 
//  поэтому они будут отключены и никакой выгоды не принесут.

// Варианты неправильного применения массива:

// Добавление нечислового свойства, например: arr.test = 5.
// Создание «дыр», например: добавление arr[0], затем arr[1000] (между ними ничего нет).
// Заполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.
// Массив следует считать особой структурой, позволяющей работать с упорядоченными данными. 
// Для этого массивы предоставляют специальные методы. Массивы тщательно настроены в движках JavaScript для работы 
// с однотипными упорядоченными данными, поэтому, пожалуйста, используйте их именно в таких случаях. 
// Если вам нужны произвольные ключи, вполне возможно, лучше подойдёт обычный объект {}.

// Перебор элементов
// Одним из самых старых способов перебора элементов массива является цикл for по цифровым индексам:

arr = ["Яблоко", "Апельсин", "Груша"];
console.log('классический цикл for', arr)
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Но для массивов возможен и другой вариант цикла, for..of:

fruits = ["Яблоко", "Апельсин", "Слива"];

// проходит по значениям. Нет доступа к индексам
console.log('for..of', fruits)
for (let fruit of fruits) {
  console.log(fruit);
}
// Цикл for..of не предоставляет доступа к номеру текущего элемента, только к его значению, но в большинстве случаев этого достаточно. А также это короче.

// Технически, так как массив является объектом, можно использовать и вариант for..in:

arr = ["Яблоко", "Апельсин", "Груша"];

for (let key in arr) {
  console.log('arr[key] ', arr[key]); // Яблоко, Апельсин, Груша
}
// Но на самом деле это – плохая идея. Существуют скрытые недостатки этого способа:

// Цикл for..in выполняет перебор всех свойств объекта, а не только цифровых.

// В браузере и других программных средах также существуют так называемые «псевдомассивы» – объекты, которые выглядят, как массив. То есть, у них есть свойство length и индексы, но они также могут иметь дополнительные нечисловые свойства и методы, которые нам обычно не нужны. Тем не менее, цикл for..in выведет и их. Поэтому, если нам приходится иметь дело с объектами, похожими на массив, такие «лишние» свойства могут стать проблемой.

// Цикл for..in оптимизирован под произвольные объекты, не массивы, и поэтому в 10-100 раз медленнее. Увеличение скорости выполнения может иметь значение только при возникновении узких мест. Но мы всё же должны представлять разницу.

// В общем, не следует использовать цикл for..in для массивов.

//Многомерные массивы
// Массивы могут содержать элементы, которые тоже являются массивами. 
// Это можно использовать для создания многомерных массивов, например, для хранения матриц:

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][1]); // 5, центральный элемент


console.log('fruits', fruits)
arr = [...fruits] //Копируем массив 
fruits.push('Кокос')
console.log('fruits', fruits)
console.log('arr', arr) //arr не изменился

// pz2 - 2
// Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необ-
// ходимое количество и куплен или нет. Написать несколько функ-
// ций для работы с таким массивом.
// 1 Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
//  2 Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необ-
// ходимо увеличивать количество в существующей покупке,
// а не добавлять новую.
// 3 Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.
const purchase = [
  {
    name: 'a',
    count: 10,
    purchased: true,
  },
  {
    name: 'b',
    count: 5,
    purchased: false,
  },
  {
    name: 'c',
    count: 3,
    purchased: true,
  },
  {
    name: 'd',
    count: 1,
    purchased: true,
  },
]
const purchasedol = document.querySelector('.purchase')
const showPurchaseButton = document.querySelector('.showPurchase')
const addPurchaseButton = document.querySelector('.addPurchase')
const setPurchasedButton = document.querySelector('.setPurchased')

function showPurchase() {
  if (purchasedol) {
    purchasedol.innerHTML = ``
  }
  for (let el of purchase) {
    if (!el.purchased) {
      if (purchasedol) {
        purchasedol.innerHTML += `<li>${el.name} необходимо купить ${el.count} штук </li>`
      }
    }
  }
  for (let el of purchase) {
    if (el.purchased) {
      if (purchasedol) {
        purchasedol.innerHTML += `<li>${el.name} куплено ${el.count} штук </li>`
      }
    }
  }
}

function addPurchase() {
  const name = prompt('Введите название покупки') as string
  const count = +(prompt('Введите количество') as string)
  let find = false
  for (let el of purchase) {
    if (el.name == name) {
      find = true
      el.count += count
    }
  }
  if (!find) {
    purchase.push({
      name,
      count,
      purchased: false
    })
  }
  showPurchase()
}
function setPurchased() {
  const name = prompt('Введите название покупки')
  for (let el of purchase) {
    if (el.name == name) {
      el.purchased = true;
    }
    showPurchase()
  }
}

showPurchaseButton?.addEventListener('click', showPurchase)
addPurchaseButton?.addEventListener('click', addPurchase)
setPurchasedButton?.addEventListener('click', setPurchased)

// Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() 
// в тегах <p></p>, добавив в открывающий тег атрибут style со всеми сти-лями, перечисленными в массиве.

const styleRed = [
  {
    name: 'color',
    value: 'red',
  },
  {
    name: 'text-decoration',
    value: 'underline'
  },
]
const styleGreen = [
  {
    name: 'color',
    value: 'green',
  },
  {
    name: 'font-size',
    value: '20px'
  },
]

const printTextDiv = document.querySelector('.print.Text')

function printText(style: any[], text: string) {
  let styleStr = ''
  for (let el of style) {
    styleStr += `${el.name}:${el.value};`
  }
  if (printTextDiv) {
    printTextDiv.innerHTML += `<p style= ${styleStr} </p>`
  }
}
printText(styleRed, 'Хетафе ');
printText(styleGreen, 'Мадрид ');

const rectangle = {
  x: 10,
  y1: 18,
  x2: 16,
  y2: 0
}

function getRectWidth(rectangle: any) {
  return rectangle.x2 - rectangle.x1
}
function getRectHeight(rectangle: any) {
  return rectangle.y1 - rectangle.y2
}

function getRectArea(rectangle: any) {
  return getRectWidth(rectangle) * getRectHeight(rectangle)
}
function getRectperimeter(rectangle: any) {
  return getRectWidth(rectangle) * 2 + getRectHeight(rectangle) * 2
}


// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, 
// количества и цены за единицу товара. Написать следующие функции.
// 1.Распечатка чека на экран.
// 2.Подсчет общей суммы покупки.
// 3.Получение самой дорогой покупки в чеке.
// 4.Подсчет средней стоимости одного товара в чеке.

const check = [
  {
    product: 'bread',
    count: '3',
    price: '50',
  },
  {
    product: 'milk',
    count: '2',
    price: '70',
  },
  {
    product: 'cheese',
    count: '2',
    price: '180',
  },
]

function showCheck(arr: any[]) {
  console.log(arr)
}
showCheck(check)


function getSum(arr: any[]) {
  let sum = 0
  for (let el of arr) {
    sum += el.count * parseFloat(el.price)
  }
  return sum
}
console.log(getSum(check))

function maxPurchase(arr: any[]) {
  let res = [...arr];
  let maxCost = 0;
  for (const product of res) {
    let cost = product.price * product.count
    if (cost > maxCost) {
      maxCost = cost;
    }
  }
  return maxCost;
}

console.log(maxPurchase(check))

function averagePurchase(arr: any[]) {
  let res = [...arr];
  let averagePurch = 0
  let sum = 0
  for (const product of res) {
    sum += product.price * product.count;
  }

  return (sum / res.length).toFixed(2);
}
console.log(averagePurchase(check));

// Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и
// названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним.
// 1 Вывод на экран всех аудиторий.
// 2 Вывод на экран аудиторий для указанного факультета.
// 3 Вывод на экран только тех аудиторий, которые подходят для
// переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.
// 4 Функция сортировки аудиторий по количеству мест.
// 5Функция сортировки аудиторий по названию (по алфавиту).


const audience = [
  {
    name: 'yandex',
    count: 2,
    faculty: 'html',
  },
  {
    name: 'mail',
    count: 12,
    faculty: '1c',
  },
  {
    name: 'rambler',
    count: 18,
    faculty: 'mysql',
  }
]
function showAudience(arr: any[]) {
  console.log(arr)
}
showAudience(audience)

// function showAudienceForFaculty(arr: any[]) {
//   let faculty = prompt('Введите название факультета') as string
//   const auditories = [] as any
//   for (let el of arr) {
//     if (el.faculty == faculty) {
//       auditories.push(el)
//     }
//   }
//   return auditories
// }
// console.log(showAudienceForFaculty(audience));

// function showAudienceForGroup(arr: any[]) {
//   let students = +(prompt('Введите количество студентов') as string)
//   const group = [] as any
//   for (let el of arr) {
//     if (el.count > students) {
//       group.push(el)
//     }
//   }
//   return group
// }
// console.log(showAudienceForGroup(audience))

function sortByCount(arr: any) {
  audience.sort((a, b) => a.count - b.count)
  return [...audience]
}
console.log(sortByCount(audience))
function sortByAlfabet(arr: any) {
  audience.sort((a, b) => a.name.localeCompare(b.name))
  return [...audience]
}
console.log(sortByAlfabet(audience))


// 1 Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков.
//номер идентификатора символа в строке
const string1 = 'k234jas2s'
function GetCount(arr: any[]) {
  const letter = 0
  const numb = 0
  const sign = 0
  for (let el of string1) {


  }
}

//Создать еще один массив из 5 случайных чисел и написать
// следующие функции. Функция принимает 2 массива и возвращает новый массив, 
// в котором собраны все элементы из двух массивов без повторений.
// const arr1 = [1, 1, 2, 3, 5, 8, 7, 9, 10, 7]
// const arr2 = [5, 1, 6, 3, 2]

// function getUnicArray(a: any[], b: any[]) {
//   const arr = [] as any
//   for (let el of a) {
//     if (!arr.includes(el)) arr.push(el)
//   }
//   for (let el of b) {
//     //for(let i=0;i<arr.lenght;i++)
//     //console.log('arr[+i+],arr[i]')
//     if (!arr.includes(el)) arr.push(el)
//   }
//   return arr
// }
// console.log(getUnicArray(arr1, arr2))

for (let asd of ['a', 'b', 'c', 'f', 'g']) {
  if (asd == 'c') {
    console.log('встретили символ "c" и перешли на новую интерацию, игнорирую все следующие строки тела цикла')
    continue
  }
  if (asd == 'f')
    console.log('встретили символ "f" и вышли из цикла, следующие символы не попадут в переменную char')
  break
  console.log('asd', asd)
}

//как работает includes в массиве 
const arrIncludes = (arr: any[], findEl: any) => {
  for (let el of arr) {
    if (el === findEl) return true
  }
  return false
}
console.log(arrIncludes(arr, '1'))

//как работает includes в строке 
const strIncludes = (str: string, subStr: string) => {
  for (let i = 0; i <= (str.length - subStr.length); i++) {
    if (str.slice(i, i + subStr.length) === subStr) return true
  }
  return false
}
console.log(strIncludes('strxcsdasd', 'xcs'))

function powRecursive(x: number, n: number): number {
  // Условие выхода
  if (n == 1) {
    return x;
  } else {
    console.log('x =', x, 'n =', n)
    // Рекурсивная функция вызывает сама себя, пока не сработает условие выхода
    return x * powRecursive(x, n - 1); //2 * 2 * 2 
  }
}
console.log(powRecursive(2, 5)); // 8

//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// три варианта решения:

// С использованием цикла. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии. Пример работы вашей функции:

function sumTo(n: number) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(100))

function sumTo2(n: number): number {
  return n == 0 ? n : n + sumTo2(n - 1)
}
function sumTo3(n: number) {
  return n * (n + 1) / 2;
}
console.log(sumTo(100)); // 5050


function reverseNumber(n: number, i: number = String(n).length - 1): any {
  if (i == 0) {
    return String(n)[i]
  }
  return +(String(n)[i] + reverseNumber(n, --i))
}

console.log(reverseNumber(12354))

//Методы массивов

let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
  { id: 4, name: "Вася" }
];

let mapResult = users.map(el => el.id + '' + el.name)//массив строк
console.log(mapResult)

// Функция добавления нового элемента в массив по указанному индексу.

let arr4 = [3, 6, 7, 2, 5, 5, 7, 3, 6, 4]
function addElement(arr: any, index: any, value: any) {
  arr.splice(index, 0, value)
}
addElement(arr4, 0, 6)
console.log('arr', arr4)
// Функция удаления элемента из массива по указанному индексу
function delElement(arr: any, index: any) {
  return arr.splice(index, 1)
}
delElement(arr4, 3)
console.log('arr', arr4)

// Функция принимает 2 массива и возвращает новый массив,в котором собраны общие элементы (то есть элементы,
// которые встречаются и в первом и во втором массивах) без повторений.
let arr02 = [5, 1, 6, 3, 2]
function getNewUniqueArray(arr1: any[], arr2: any[]) {
  let arr = [] as any[]
  arr1.forEach(el => {
    if (!arr.includes(el) && arr2.includes(el)) {
      arr.push(el)
    }
  })
  return arr
}
console.log(getNewUniqueArray(arr4, arr02))

//Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, 
// которых нет во втором массиве
function newMassive(arr1: any[], arr2: any[]) {
  let unique = arr1.filter((item) => arr2.indexOf(item) == -1)
  return unique
}
console.log(arr02)
console.log(arr4)
console.log(newMassive(arr4, arr02))

let company = {
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
  development: {
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

// Функция для подсчёта суммы зарплат
function sumSalaries(department: any) {
  if (Array.isArray(department)) {
    const sum = department.reduce((prev, current) => prev + current.salary, 0); // сумма зарплат массива
    return sum
  } else {
    let sum = 0
    console.log(department, sum)
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
    }
    console.log('Сумма по подразделениям', department, sum)
    return sum
  }
}
console.log(sumSalaries(company)) // 6700

const student1 = { name: 'dasa', age: 35, askQuestion() { alert('da') } }
const student2 = { name: 'rasa', age: 31, askQuestion() { alert('net') } }

console.log(student1)
console.log(student2)

type Student = {
  name: string,
  age: number,
  askQuestion: Function
}

function Student(this: any, name: string, age: number) {
  this.name = name
  this.age = age
  this.askQuestion = function (text: any) { alert(text) }
}

// const student3 = new Student('Max', 15) 
// console.log(Student)

class Student1 {
  name = ''
  age = 0
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  askQuestion = function (text: string) { alert(text) }
}
const student5 = new Student1('Petr', 54)
console.log(student5)


//4-2 Реализовать PrintMachine
// ■ размера шрифта;
// ■ цвета шрифта;
// ■ семейства шрифта;
// ■ метода print(), который принимает текст и печатает его
// соответствующим шрифтом с помощью document.write().
// Создать объект такого класса и продемонстрировать работу
// метода.
class PrintMachine {
  size = 14
  color = 'red'
  font = 'Arial'
  tag = 'p'
  constructor(size: number, color: string, font: string, tag: string = 'p') {
    this.size = size
    this.color = color
    this.font = font
    this.tag = tag
  }
  print(text: string) {
    // @ts-ignore
    document.body.innerHTML += (`<${this.tag} style="font-size:${this.size}px; color: ${this.color}; font-family:${this.font}">${text}</${this.tag}>`)
  }
}
console.log(PrintMachine)

function PM(size: number, color: string, font: string, tag: string = 'p'): any {
  return function print(text: string) {
    document.write(`<${tag} style="font-size:${size}; color: ${color}; font-family:${font}">${text}</${tag}>`)

    const rPA14 = PM(14, 'red', 'Arial')
    rPA14('sfdsfsdfwerwersdf sdfds fsdfs')

    const bHT16 = PM(16, 'blue', 'Tahoma', 'h1')
    bHT16('sdfsdfjwiooiwe nkuhyiuo hfsd')

    const redParagraphArial14 = new PrintMachine(14, 'red', 'Arial')
    const blueHeaderTahoma16 = new PrintMachine(16, 'blue', 'Tahoma', 'h1')

    blueHeaderTahoma16.tag = 'h2'
    blueHeaderTahoma16.print('sdfhsdkjfhsdk kjh ksjfdh sdk')
    redParagraphArial14.print('fsddsfdsfsd')
  }
}


;[0, 1, 2].forEach((el) => {
  console.log(el)
})
function forEach(arr: any[], fn: Function) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr)
  }
}
forEach([0, 1, 2], ((el: any, i: any) => {
  console.log(el, i)
}))

function User(name: any) {
  // this = {};  (неявно)

  // добавляет свойства к this
  // this.name = name;
  // this.isAdmin = false;

  // return this;  (неявно)
}

//Prototype 
let animal = {
  eats: true,
  eat() {
    console.log('am-am-am')
  },
  walk() {
    console.log('top-top')
  }
} as any
let rabbit = {
  jumps: true,
  __proto__: animal,
  walk() {
    console.log('jump-jump')
  }
} as any
let longEar = {
  earLength: 10,
  __proto__: rabbit
} as any

//rabbit.__proto__ = animal; // (*)

// теперь мы можем найти оба свойства в rabbit:
console.log('rabbit.eats', rabbit.eats) // true (**)
console.log('rabbit.jump', rabbit.jumps) // true
rabbit.eat()
rabbit.walk()
console.log('rabbit', rabbit)
console.log('longEar', longEar)
longEar.eat()

// Object.keys возвращает только собственные ключи
console.log(Object.keys(longEar)); // jumps

// for..in проходит и по своим, и по унаследованным ключам
for (let prop in longEar) console.log(prop); // jumps, затем eats

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Собственное свойство: ${prop}`); // Our: jumps
  } else {
    console.log(`Унаследованное свойство: ${prop}`); // Inherited: eats
  }
}

let user0 = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name,] = value.split(" ")[0]
    this.surname = value.split(" ")[1]
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
} as any

let admin = {
  __proto__: user0,
  isAdmin: true
} as any
console.log({ ...admin })
console.log(admin.fullName) // John Smith (*)

// срабатывает сеттер!
admin.fullName = "Alice Cooper" // (**)
console.log(admin.name) // Alice
console.log(admin.surname) // Cooperl
console.log(admin)

animal = {
  eats: true
}

const Rabbit = (function (this: any, name: string) {
  this.name = name
}) as any

// Не перезаписываем Rabbit.prototype полностью, а добавляем к нему свойство
Rabbit.prototype.jumps = true
// Прототип по умолчанию сохраняется, и мы всё ещё имеем доступ к Rabbit.prototype.constructor

let defaultRabbit = new Rabbit('Dooglas') // наследует от {constructor: Rabbit}

console.log(rabbit.constructor == Rabbit) // true (свойство получено из прототипа)


let rabbit2 = new defaultRabbit.constructor("Black Rabbit")
console.log('rabbit2', rabbit2)
// Это удобно, когда у нас есть объект, но мы не знаем, какой конструктор использовался для его создания 
// (например, он мог быть взят из сторонней библиотеки), а нам необходимо создать ещё один такой объект.

Rabbit.prototype = animal

let newAnimal = {
  breath: true
}
rabbit = new Rabbit("White Rabbit") //  rabbit.__proto__ == animal
Rabbit.prototype = newAnimal
let newRabbit = new Rabbit("mr Black")
let superNewRabbit = new newRabbit.constructor("New")
console.log('superNewRabbit', superNewRabbit)
console.log('rabbit', rabbit) // true
console.log('rabbit.eats', rabbit.eats) // true
console.log('newRabbit', newRabbit) //undefined
console.log('newRabbit.eats', newRabbit.eats) //undefined 
console.log('newRabbit.breath', newRabbit.breath) // true

console.log(new String('Валенсия'))

let obj = {}
console.log(obj)
// console.log(obj.__proto__ === Object.prototype) // true
// obj.toString === obj.__proto__.toString === Object.prototype.toString

//Заимствование у прототипов
//Например, если мы создаём объект, похожий на массив 
// (псевдомассив), мы можем скопировать некоторые методы из Array в этот объект.

const arrayLikeobj: any = {
  0: "Hello",
  1: "world!",
  length: 2,
}

arrayLikeobj.__proto__.join = Array.prototype.join

console.log(arrayLikeobj.join(',')) // Hello,world!

arrayLikeobj.__proto__ = Array.prototype
arrayLikeobj.push('New')
console.log(arrayLikeobj.join(','))//Hello,world!,New!
console.log(arrayLikeobj)

//Заимствование методов – гибкий способ, позволяющий смешивать функциональность разных объектов по необходимости.

//синтаксис "class"

// class MyClass {
// методы класса
//   constructor() { ... }
//   method1() { ... }
//   method2() { ... }
//   method3() { ... }
//   ...
// }

// class newUser1 {
//   constructor(name) { this.name = name; }
//   sayHi() { alert(this.name); }
// }

class emptyClass {

}
console.log(emptyClass)

class MyClass {
  prop = 'value' // свойство
  constructor() { // конструктор
    // ...
  }
  method() { } // метод
  get something() { return } // геттер (должен обязательно возвращать значение)
  set something(val) { } // сеттер (должен быть ровно один параметр)
  [Symbol.iterator]() { } // метод с вычисляемым именем (здесь - символом)
  // ...
}

//4 Написать функцию, которая считает сумму цифр числа

function sumNumber(s: number): number {
  let ss = s.toString()
  if (ss.length == 1) {
    return s
  } else {
    return +ss[0] + sumNumber(+ss.slice(1))
  }
}
console.log(sumNumber(8751))

//Наследование классов

class Animal {
  speed
  name
  constructor(name: string) {
    this.speed = 0
    this.name = name
  }
  run(speed: number) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит неподвижно.`);
  }
}

animal = new Animal("Мой питомец")

class RabbitClass extends Animal {
  maxSpeed
  constructor(name: string, maxSpeed: number) {
    super(name)
    this.maxSpeed = maxSpeed
  }

  hide() {
    console.log(`${this.name} прячется!`)

  }
  stop() {
    super.stop(); // вызываем родительский метод stop
    this.hide(); // и затем hide
  }
}

rabbit = new RabbitClass("Белый кролик", 15)

console.log(rabbit)
rabbit.run(5) // Белый кролик бежит со скоростью 5.
rabbit.hide() // Белый кролик прячется!

class Animal1 extends Animal {
  name = 'animal';
  //1 место для аргументов
  //2 место для конструктора 
}


class Rabbit1 extends Animal {
  //генерируется для классов-потомков, у которых нет своего конструктора
  //constructor(...args) {
  //super(...args); 
  //this доступен на этой строке, поэтому в конструкторе родителя будет обращение к его собственному this.name
  name = 'rabbit';
}

// console.log(new Animal1()); // animal
// console.log(new Rabbit1()); // rabbit


let testObj = {
  a: 10,
  b: 18,
  showA() {
    console.log('this', this)
    console.log('this == testObj', this == testObj)
    console.log('this.a', this.a)
    console.log('this.b', this.b)
    console.log('this.a + this.b', this.a + this.b)
  }
}

testObj.showA()

function showThisCoords(this: any) {
  console.log('this', this)
  if (this) console.log(`(${this.x},${this.y})`)
}

showThisCoords()

const coord1 = {
  x: 0,
  y: 1,
  sc: showThisCoords
}
const coord2 = { x: 10, y: -1, sc: showThisCoords }
const coord3 = {
  x: 1000,
  y: 152,
  sc: showThisCoords
}
const coord4 = {
  x: 540,
  y: 81,
  sc: showThisCoords
}
coord1.sc()
coord2.sc()
coord3.sc()
coord4.sc()

// Итого
// Чтобы унаследовать от класса: class Child extends Parent:
//   При этом Child.prototype.__proto__ будет равен Parent.prototype, так что методы будут унаследованы.
// При переопределении конструктора:
//   Обязателен вызов конструктора родителя super() в конструкторе Child до обращения к this.
// При переопределении другого метода:
//   Мы можем вызвать super.method() в методе Child для обращения к методу родителя Parent.
// Внутренние детали:
//   Методы запоминают свой объект во внутреннем свойстве[[HomeObject]].Благодаря этому работает super, он в его прототипе ищет родительские методы.
// Работает только для методов записаных как method() {}
// Не работает для для методов записаных как method: function() {}
// Поэтому копировать метод, использующий super, между разными объектами небезопасно.
//     Также:
//   У функций-стрелок нет своего this и super, поэтому они «прозрачно» встраиваются во внешний контекст.
// ?Статические свойства и методы
// Мы также можем присвоить метод самому классу.Такие методы называются статическими.
// В объявление класса они добавляются с помощью ключевого слова static, например:
class StaticUser {
  static staticMethod() {
    console.log(this === StaticUser)
  }
}
StaticUser.staticMethod() // true
// Это фактически то же самое, что присвоить метод напрямую как свойство функции:
class StaticUser2 {
}
// StaticUser2.staticMethod = function () 
// {
//     console.log(this === StaticUser2)
// }
// StaticUser2.staticMethod()
// Статические свойства
// Новая возможность
// Эта возможность была добавлена в язык недавно.Примеры работают в последнем Chrome.
// Статические свойства также возможны, они выглядят как свойства класса, но с static в начале:
let Article = /** @class */ (() => {
  class Article {
  }
  Object.defineProperty(Article, "publisher", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "Илья Кантор"
  })
  return Article
})()
// console.log(Article.publisher) // Илья Кантор
// Это то же самое, что и прямое присваивание Article:
// Article.publisher = "Илья Кантор"

// class Book {
//     constructor(title) {
//         Object.defineProperty(this, "title", {
//             enumerable: true,
//             configurable: true,
//             writable: true,
//             value: void 0

//         })
//         this.title = title
//         Book.count++
//     }
//     static getCount() {
//         return `На полке ${this.count} книги`
//     }
//     static burnBookByTitle(title, arr) {
//         const index = arr.findIndex(el => el.title == title)
//         arr[index].burn()
//         arr.splice(index, 1)
//     }
//     burn() {
//         Book.count--
//     }
// }
//     Object.defineProperty(Book, "count", {
//         enumerable: true,
//         configurable: true,
//         writable: true,
//         value: 0
//     })
//     return Book;
// })()
// const shelter = [
//     new Book('1'),
//     new Book('2'),
//     new Book('3'),
//     new Book('4'),
// ]

// console.log(Book.getCount())
// Book.burnBookByTitle('3', shelter)
// console.log(shelter)
// console.log(Book.getCount())

// dz4-2
// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// ■ get-свойство, возвращающее радиус окружности;
// ■ set-свойство, устанавливающее радиус окружности;
// ■ get-свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

class Circle {
  _radius
  constructor(radius: any) {
    // все, что в комментариях происходит неявно
    // this = {}  
    this._radius = radius
    // console.log(this) // {_radius:r, prototype:Circle}
  }
  get radius() {
    return this._radius
  }

  set radius(value) {
    this._radius = value
  }
  get diametr() {
    let diametr = this._radius * 2
    return diametr
  }
  getSquare() {

    return Math.PI * Math.pow(this._radius, 2)
  }
  getCircleLength() {
    return Math.PI * (this._radius * 2)
  }
}

const myCircle = new Circle(5)

// console.log(myCircle._radius)
console.log(myCircle.radius)
myCircle.radius = 10
console.log(myCircle.radius)
console.log(myCircle.diametr)
console.log(myCircle.getSquare())
console.log(myCircle.getCircleLength())
console.log(myCircle)

// Реализовать класс, описывающий html элемент.
// Класс HtmlElement должен содержать внутри себя:
// название тега;
// самозакрывающийся тег или нет;
// текстовое содержимое;
// массив атрибутов;
// массив стилей;
// массив вложенных таких же тегов;
// метод для установки атрибута;
// метод для установки стиля;
// метод для добавления вложенного элемента в конец текущего элемента;
// метод для добавления вложенного элемента в начало текущего элемента;
// метод getHtml(), который возвращает html код в виде строки, включая html код вложенных элементов.
// С помощью написанного класса реализовать следующий блок и добавить его на страницу с помощью document.write().



class HtmlElement {
  tag: string
  single: boolean
  text: string
  attrs: string[] = []
  styles: string[] = []
  elements: HtmlElement[] = []
  constructor(tag: string, single: boolean, text: string) {
    this.tag = tag
    this.single = single
    this.text = text
  }
  setAttr(attr: string) {
    this.attrs.push(attr)
  }
  setStyle(style: string) {
    this.styles.push(style)
  }
  appendElement(element: HtmlElement) {
    this.elements.push(element)
  }
  prependElement(element: HtmlElement) {
    this.elements.unshift(element)
  }

  getHtml(): string {
    if (this.single) {
      return `<${this.tag} ${this.attrs.join(' ')} value="${this.text}" >`
    } else {
      const begin = `<${this.tag} ${this.attrs.join(' ')}>${this.text}`
      const end = `</${this.tag}>`
      return begin + this.elements.map(el => el.getHtml()).join('') + end
    }
  }
}

const imgElement = new HtmlElement('img', true, '')
const pElement = new HtmlElement('p', false, 'Getafe')
const h3Element = new HtmlElement('h3', false, 'Getafe')
h3Element.setAttr('class="colorRed"')
console.log(imgElement)
imgElement.setAttr('src=https://upload.wikimedia.org/wikipedia/ru/thumb/3/3f/Getafe_cf_200px_RU.png/200px-Getafe_cf_200px_RU.png')
imgElement.setStyle('color:red')
imgElement.setStyle('padding:10px')
imgElement.setAttr(`style="${imgElement.styles.join(';')}"`)
console.log(imgElement.getHtml())
pElement.appendElement(imgElement)
console.log(pElement.getHtml())
const divElement = new HtmlElement('div', false, '')
divElement.setAttr('style="width:300px; margin:10px"')
const wrapperElement = new HtmlElement('div', false, '')
wrapperElement.setAttr('id="wrapper"')
wrapperElement.setStyle('display: flex')
wrapperElement.appendElement(divElement)
divElement.appendElement(h3Element)
divElement.appendElement(imgElement)
divElement.appendElement(pElement)
// const divPrintElements = document.querySelector('.printElements')
// if (divPrintElements) divPrintElements.innerHTML = wrapperElement.getHtml()

//задание 2
// Реализовать класс, описывающий новость (заголовок, текст, массив тегов, дата публикации). В классе необходимо реализовать
// один метод print, который выводит всю информацию в таком виде, как на рисунке 1
// Обратите внимание на то, как выводится дата:
// если с даты публикации прошло менее дня, то выводится «сегодня»;

const header = new PrintMachine(20, 'black', 'Arial', 'h2')
const text = new PrintMachine(16, 'black', 'Arial', 'p')
const datePrint = new PrintMachine(18, 'black', 'Arial', 'p')

class infoNews {
  heading;
  text;
  arrayTags: Array<string>
  date: Date;

  constructor(heading: any, text: any, arrayTags: any, date: string) {
    this.heading = heading;
    this.text = text;
    this.arrayTags = arrayTags;
    this.date = new Date(date);
  }
  getDate() {
    let today = new Date()
    let yesterday = new Date(today.valueOf() - 1000 * 60 * 60 * 24)
    if (this.date.toLocaleDateString() == today.toLocaleDateString()) {
      return 'today'
    } else if (this.date.valueOf() > (today.valueOf() - 1000 * 60 * 60 * 24 * 7)) {
      return ((today.valueOf() - this.date.valueOf()) / (1000 * 60 * 60 * 24)).toFixed(0) + ' days ago'
    } else {
      return this.date.toLocaleDateString()
    }
  }
  print() {
    header.print(this.heading)
    text.print(this.text)
    datePrint.print(`<i>${this.getDate()}<i>`)
    text.print(this.arrayTags.join('  '))
  }
}
const post = new infoNews('you', 'never', ['walk', 'alone'], '2023-07-29')
console.log(post.getDate())

// Реализовать класс, который описывает css класс.Класс CssClass должен содержать внутри себя:
// название css класса;
// массив стилей;
// метод для установки стиля;
// метод для удаления стиля;
// метод getCss(), который возвращает css код в виде строки.

class CssClass {
  name: string
  styles: string[] = []
  constructor(name: string) {
    this.name = name
  }
  setStyle(style: string) {
    this.styles.push(style)
  }
  delStyle(style: string) {
    const id = this.styles.findIndex((el) => { el == style })
    if (id != 1) this.styles.splice(id, 1)
  }
  getCss() {
    return `.${this.name} {${(this.styles.join(';'))}}`
  }
}

const colorRed = new CssClass('colorRed')
colorRed.setStyle('color:red')
colorRed.setStyle('font-size:24px')

const colorGreen = new CssClass('colorGreen')
colorGreen.setStyle('color:green')


// Реализовать класс, описывающий блок html документ.
// Класс HtmlBlock должен содержать внутри себя:
// коллекцию стилей, описанных с помощью класса CssClass;
// корневой элемент,
// описанный с помощью класса HtmlElement;
// метод getCode(), который возвращает строку с html кодом (сначала теги style с описанием всех классов, а потом
// все html содержимое из корневого тега и его вложенных элементов).
// С помощью написанных классов реализовать следующий блок и добавить его на страницу с помощью document.write().

class MainBlockHtml {
  htmlObject: HtmlElement
  cssArray: CssClass[]
  constructor(h: any, a: any) {
    this.htmlObject = h
    this.cssArray = a
  }
  getCode() {
    document.head.innerHTML += `<style>${this.cssArray.map((el) => el.getCss()).join('\n')}</style>`
    document.body.innerHTML += this.htmlObject.getHtml()
  }
}

const pageObj = new MainBlockHtml(divElement, [colorRed, colorGreen])
pageObj.getCode()

//Дата и время

//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
let date = new Date(2012, 1, 20, 3, 12)
console.log(date)

//Напишите функцию getWeekDay(date), 
// показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
function getWeekDay(date: any) {
  let day = ['вт', 'ср', 'чт', 'пт', 'сб', 'вс', 'пн']
  return day[date.getDay(day)]
}
let date1 = new Date(2023, 8, 2, 21, 6)
console.log(getWeekDay(date))

function getLocalDay(date: Date) {
  let day = date.getDay()
  return [1, 2, 3, 4, 5, 6, 0][day]
}
console.log(getLocalDay(new Date))

//Вычисляемое свойство
// console.log(Object.getOwnPropertyDescriptor(user0,'fullName')) {
// configurable:true
// enumerable:true
//!вместо value
// get:f fullName() 
//!вместо writeble.Если сеттера не существует - значение не установить
// set:f fullName(value) 
// }

//Обычное свойство
console.log(Object.getOwnPropertyDescriptor(animal, 'eats'))
// {
// writable: true,
// configurable:true,
// enumerable:true,
// value:"Мой питомец",  
// }

//Метод прототипа
console.log(Object.getOwnPropertyDescriptor(rabbit.__proto__, 'hide'))
// {
// configurable:true,
//! По умолчанию не выводится в for..in
// enumerable:false,
// value:"Мой питомец", 
// }

// console.log(Object.getOwnPropertyDescriptors(rabbit))


async function download() {
  const request = await fetch('https://fakerapi.it/api/v1/products?_quantity=10') // Запрос данных с серверав
  const data = await request.json() // Преобразуем json из запроса d объект
  console.log(data)
  for (let el of data.data) {
    document.body.appendChild(renderCard(el)) // рендерим карточки, добавляя их в конец body
  }
}

const downloadButton = document.createElement('button')
downloadButton.textContent = 'Загрузить товары'
downloadButton.addEventListener('click', download)
document.body.appendChild(downloadButton)

function renderCard(el: any) {
  const cardDiv = document.createElement('div')   // создаём родительский div, в кот. будем добавлять данные
  cardDiv.style.display = 'flex'
  cardDiv.style.margin = '0 auto'
  cardDiv.style.maxWidth = '700px'
  cardDiv.style.padding = '20px'
  cardDiv.style.gap = '20px'
  const cardImage = document.createElement('img') // создали картинку
  cardImage.setAttribute('href', el.image)
  cardImage.style.minWidth = '200px'
  cardDiv.appendChild(cardImage)                  // Поместили картинку в корневой div
  const dataDiv = document.createElement('div')   // создали div для текстовых данных
  const cardH4 = document.createElement('h4')
  cardH4.textContent = el.name
  cardH4.addEventListener('click', () => { alert(el.name) })
  const cardDescr = document.createElement('p')
  cardDescr.textContent = el.description
  const cardPrice = document.createElement('p')
  cardPrice.textContent = el.price
  dataDiv.appendChild(cardH4)
  dataDiv.appendChild(cardDescr)
  dataDiv.appendChild(cardPrice)
  cardDiv.appendChild(dataDiv)                     // добавили div с текстовыми данными в корневой div
  return cardDiv                                   // вернули заполненных данными кореневой div
}

//изменение документа

// Методы для создания узлов:

// document.createElement(tag) – создаёт элемент с заданным тегом,
// document.createTextNode(value) – создаёт текстовый узел (редко используется),
// elem.cloneNode(deep) – клонирует элемент, если deep==true, то со всеми дочерними элементами.
// Вставка и удаление:

// node.append(...nodes or strings) – вставляет в node в конец,
// node.prepend(...nodes or strings) – вставляет в node в начало,
// node.before(...nodes or strings) – вставляет прямо перед node,
// node.after(...nodes or strings) – вставляет сразу после node,
// node.replaceWith(...nodes or strings) – заменяет node.
// node.remove() – удаляет node.
// Устаревшие методы:

// parent.appendChild(node)
// parent.insertBefore(node, nextSibling)
// parent.removeChild(node)
// parent.replaceChild(newElem, node)
// Все эти методы возвращают node.

// Если нужно вставить фрагмент HTML, то elem.insertAdjacentHTML(where, html) вставляет в зависимости от where:

// "beforebegin" – вставляет html прямо перед elem,
// "afterbegin" – вставляет html в elem в начало,
// "beforeend" – вставляет html в elem в конец,
// "afterend" – вставляет html сразу после elem.

// Также существуют похожие методы elem.insertAdjacentText и elem.insertAdjacentElement, 
// они вставляют текстовые строки и элементы, но они редко используются.
// Чтобы добавить HTML на страницу до завершения её загрузки:

// document.write(html)
// После загрузки страницы такой вызов затирает документ. В основном встречается в старых скриптах.

//3

// Реализовать класс, описывающий новостную ленту. Класс должен содержать:
// ■ массив новостей;+
// ■ get-свойство, которое возвращает количество новостей;+
// ■ метод для вывода на экран всех новостей;+
// ■ метод для добавления новости;
// ■ метод для удаления новости;
// ■ метод для сортировки новостей по дате (от последних новостей до старых);
// ■ метод для поиска новостей по тегу (возвращает массив новостей, в которых указан переданный в метод тег).
// Продемонстрировать работу написанных методов.


class NewsFeed {
  array: infoNews[]
  constructor(NewsArray: infoNews[]) {
    this.array = NewsArray
  }
  get count() {
    return this.array.length
  }
  print() {
    this.array.forEach(el => {
      el.print()
    })
  }
}


const feed = new NewsFeed([
  new infoNews('you', 'never', ['walk', 'alone'], '2023-08-23'),
  new infoNews('you2', 'never', ['walk', 'alone'], '2023-08-21'),
  new infoNews('you3', 'never', ['walk', 'alone'], '2023-07-24'),
  new infoNews('you4', 'never', ['walk', 'alone'], '2023-07-9'),
])

feed.print()

//Стили и классы
//className – строковое значение, удобно для управления всем набором классов.
//classList – объект с методами add/remove/toggle/contains, удобно для управления отдельными классами.
//Метод getComputedStyle(elem, [pseudo]) возвращает объект, похожий по формату на style


//Планирование: setTimeout и setInterval

function showNotification({ top = 0, right = 0, className = '', html = '' }) {

  let notification = document.createElement('div');
  notification.className = "notification";
  if (className) {
    notification.classList.add(className);
  }

  notification.style.top = top + 'px';
  notification.style.right = right + 'px';

  notification.innerHTML = html;
  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
}



showNotification({
  top: 10,
  right: 10,
  html: 'Hello ',
  className: "welcome"
})

//Размеры и прокрутка элементов
//Размеры и прокрутка окна
//Координаты

// ? Плавный скролл
// elem.scrollTo({
//   left: 0,
//   top: 0,
//   behavior: 'smooth'
// })


// ?Полная высота документа с прокручиваемой частью
// let scrollHeight = Math.max(
//   document.body.scrollHeight, document.documentElement.scrollHeight,
//   document.body.offsetHeight, document.documentElement.offsetHeight,
//   document.body.clientHeight, document.documentElement.clientHeight
// )

// ?Текущая прокрутка сверху  window.pageYOffset
// ?Текущая прокрутка слева   window.pageXOffset

// ?получаем координаты элемента в контексте документа
// function getCoords(elem) {
//   let box = elem.getBoundingClientRect();

//   return {
//     top: box.top + window.pageYOffset,
//     right: box.right + window.pageXOffset,
//     bottom: box.bottom + window.pageYOffset,
//     left: box.left + window.pageXOffset
//   };
// }

//1 Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и количество других знаков.
//3 цикла и условие
//метод массива includes

function displayStringStatistics(strc: string) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  const digits = '0123456789'
  const chars = '_+=-!@#$%^&*()~`*[]{}\\|/'
  let l = 0, d = 0, c = 0
  for (let char of strc) {
    if (letters.includes(char)) l++
    if (digits.includes(char)) d++
    if (chars.includes(char)) c++
  }
  console.log(`num of letters ${l}
num of digits ${d}
num of chars ${c}`)
  // return {letters:l,digits:d,chars:c}
}
displayStringStatistics('as35dfsj24Stsas#')

//2 Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.

// let num = 35
// function numberToString(num) {
//   let textNumber = num.toString()
//   return textNumber
// }
// console.log(numberToString(textNumber))

//обработчики событий
//Атрибут HTML: onclick="...".
//DOM-свойство: elem.onclick = function.
//Специальные методы: elem.addEventListener(event, handler[, phase]) для добавления, removeEventListener для удаления.

// const arr = str.join//превращение массива в строку

//3 Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, 
//маленькие – на большие, а цифры – на знак нижнего подчеркивания.
function changeSymbol(str: string) {
  const arr = str.split('')//превращение строки в массив 
  const big = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let small = 'abcdefghijklmnopqrstuvwxyz'
  const num = '0123456789'
  for (let i = 0; i < arr.length; i++) {
    if (big.includes(arr[i])) {
      arr[i] = arr[i].toLowerCase()
    } else if (small.includes(arr[i])) {
      arr[i] = arr[i].toUpperCase()
    } else if (num.includes(arr[i])) {
      arr[i] = '_'
    }
  }
  return arr.join('')
}
console.log(changeSymbol('12axcSs2'))
//4 Написать функцию, которая преобразует названия css-стилей с дефисом в название в СamelСase стиле: font-size в fontSize, background-color в backgroundColor, text- align в textAlign.
function changeStyleName(style: string) {
  let arr = style.split('-')
  console.log('arr', arr)
  arr.forEach((el, i, arr) => {
    if (i > 0) {
      console.log('el', el)
      arr[i] = el[0].toUpperCase() + el.slice(1)
    }
  })
  console.log('arr', arr)
  return arr.join('')
}
console.log(changeStyleName('font-size-normal'))

//5 Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру.
//Например: cascading style sheets в CSS, объектно-ориентированное программирование в ООП.

function wordToAbbr(word: string) {
  return word.split(' ').map(i => i[0].toUpperCase()).join('')
}
console.log(wordToAbbr('cascading style sheets'))

//6 Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную строку и возвращает ее.
function joinStr(...args: string[]) {
  return args.join('')
}
console.log(joinStr('Google', 'Opera'))

//2
// Реализуйте класс ExtendedDate, унаследовав его от стандартного класса Date и добавив следующие возможности:
// метод для вывода даты (числа и месяца) текстом
// метод для проверки – это прошедшая дата или будущая (если прошедшая, то метод возвращает false; если будущая или текущая, то true);
// метод для проверки – високосный год или нет;
// метод, возвращающий следующую дату.
// Создайте объект класса ExtendedDate и выведите на экран результаты работы новых методов.

class ExtendedDate extends Date {
  getRussianDate() {
    const month = ['январь', 'ф', 'м', 'а', 'м', 'и', 'и', 'а', 'с', 'о', 'н', 'д']
    return this.getDate() + ' ' + month[this.getMonth()]
  }
  now() {
    this.now()
  }
  parse(val: string) {
    this.parse(val)
  }
}

console.log((new ExtendedDate('2020-12-26')).getRussianDate())







//Всплытие и погружение
// При наступлении события – самый глубоко вложенный элемент, на котором оно произошло, помечается как «целевой» (event.target).

// Затем событие сначала двигается вниз от корня документа к event.target, по пути вызывая обработчики, поставленные через addEventListener(...., true), где true – это сокращение для {capture: true}.
// Далее обработчики вызываются на целевом элементе.
// Далее событие двигается от event.target вверх к корню документа, по пути вызывая обработчики, поставленные через on<event> и addEventListener без третьего аргумента или с третьим аргументом равным false.
// Каждый обработчик имеет доступ к свойствам события event:

// event.target – самый глубокий элемент, на котором произошло событие.
// event.currentTarget (=this) – элемент, на котором в данный момент сработал обработчик (тот, на котором «висит» конкретный обработчик)
// event.eventPhase – на какой фазе он сработал (погружение=1, фаза цели=2, всплытие=3).

//Действия браузера по умолчанию

// mousedown – начинает выделять текст (если двигать мышкой).
// click на <input type="checkbox"> – ставит или убирает галочку в input.
// submit – при нажатии на <input type="submit"> или при нажатии клавиши Enter в форме данные отправляются на сервер.
// keydown – при нажатии клавиши в поле ввода появляется символ.
// contextmenu – при правом клике показывается контекстное меню браузера.
// …и многие другие…

// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том,
// действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.

// Детали:
// Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.
// Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.

const contents = document.createElement('div')
contents.id = 'contents'

//Имитация загрузки данных
contents.innerHTML = '<p>Как насчёт того, чтобы прочитать <a href="wiki.com"><strong>Википедию</strong></a> или посетить <a href="W3.org"</a> и узнать о современных стандартах?</p>'
contents.addEventListener('click', (event) => {
  let target = event.target as any
  while (target != contents) {
    if (target?.nodeName == 'A') {
      if (!confirm('Перейти по ссылке' + target.href + '?')) {
        event.preventDefault()
        return
      }
    }
    target = target.parentNode
  }
})

document.body.prepend(contents)

//6 Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную строку и возвращает ее.
function joinStrings(...strings: string[]) {
  return strings.join('');
}
console.log(joinStrings('Google', 'Opera', 'fsfs'));

//7 Написать функцию – калькулятор. Функция принимает строку с примером, определяет, какое действие необходимо выполнить (+ - * /), переводит операнды в числа, решает пример и возвращает результат.
function calculate(num1: any, num2: any, operator: any) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 != 0) {
        return num1 / num2;
      } else {
        return "на 0 делить нельзя"
      }
  }
}
console.log(calculate(4, 6, "-"))
console.log(calculate(2, 5, "*"))

//9 Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью указанного разделителя.
// Например: строка “10/08/2020”, разделитель “/”, результат: “10”, “08”, “2020”.
function devide(str: string, devide: string) {
  return arr = str.split(devide)
}
console.log(devide('10/08/2020', '/'))

//Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.

const newsBlock = document.getElementById('news')
newsBlock?.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  const p = target.parentElement?.querySelector('p') as unknown as HTMLParagraphElement
  if (target.className == 'close') {
    p.hidden = !p.hidden
    target.textContent = p.hidden ? '[v]' : '[x]'
  }
}, { passive: true })

//10 Написать функцию вывода текста по заданному шаблону.
// Функция принимает первым параметром шаблон, в тексте которого может использоваться %, после символа % указывается индекс 
// входного параметра. При выводе вместо %индекс необходимо вывести значение соответствующего входного параметра.
// Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10,8, 2020) должна вывести “Today is Monday 10.8.2020”.

function textConclusion(template: any, ...strings: string[]) {
  [...strings].forEach((item, index) =>
    template = template.replace('%' + (index + 1), item))
  return template
}
console.log(textConclusion('Today is %1 %2.%3.%4', 'Monday', '7', '8', '2020'))

//Генерация пользовательских событий 

// Чтобы сгенерировать событие из кода, вначале надо создать объект события.
// Базовый конструктор Event(name, options) принимает обязательное имя события и options – объект с двумя свойствами:
// bubbles: true чтобы событие всплывало.
// cancelable: true если мы хотим, чтобы event.preventDefault() работал.
// Особые конструкторы встроенных событий MouseEvent, KeyboardEvent и другие принимают специфичные для каждого конкретного типа событий свойства. Например, clientX для событий мыши.
// Для пользовательских событий стоит применять конструктор CustomEvent. У него есть дополнительная опция detail, с помощью которой можно передавать информацию в объекте события. После чего все обработчики смогут получить к ней доступ через event.detail.
// Несмотря на техническую возможность генерировать встроенные браузерные события типа click или keydown, пользоваться ей стоит с большой осторожностью.
// Весьма часто, когда разработчик хочет сгенерировать встроенное событие – это вызвано «кривой» архитектурой кода.
// Как правило, генерация встроенных событий полезна в следующих случаях:
// Либо как явный и грубый хак, чтобы заставить работать сторонние библиотеки, в которых не предусмотрены другие средства взаимодействия.
// Либо для автоматического тестирования, чтобы скриптом «нажать на кнопку» и посмотреть, произошло ли нужное действие.
// Пользовательские события со своими именами часто создают для улучшения архитектуры, чтобы сообщить о том, что происходит внутри наших меню, слайдеров, каруселей и т.д.

//3

// Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации html кода таблицы со списком работников банка. Массив работников необходимо
// передавать через конструктор, а получать html код с помощью метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
// class Employee

let arr7 = [0, 5, 'stay', 'away', false]

//функция, которая возвращает индекс элемента массива, если такой элемент в нем есть, иначе возвращает -1
//аналогична методу массива indexOf
function indexOf(arr: any[], el: any, startIndex = 0) {
  for (let i = startIndex; i < arr.length; i++) {
    if (arr[i] == el) return i
  }
  return -1

}
let objArr = [{ id: 1, name: "Вася" },
{ id: 2, name: "Петя" },
{ id: 3, name: "Маша" }
]
objArr.findIndex(el => el.id == 2)
objArr.findIndex(el => el.id == 4)
let index = objArr.findIndex(el => el.name == 'Маша')
objArr.splice(index, 0, { id: 4, name: 'newName' }) //добавляем новый элемент в массив по индексу
objArr.splice(index, 1) //удаляем 1 элемент по индексу
objArr.splice(index, 1, { id: 4, name: 'newName' }) //удаляем 1 элемент по индексу и добавляем новый на его место
objArr.splice(index) //удаляем всё включая элемент
console.log(objArr)

//функция, которая возвращает индекс первого объекта, если функция fn вернула истину, иначе возвращает -1
//аналогична методу массива findIndex
function findIndex(arr: any[], fn: Function, startIndex = 0) {
  for (let i = startIndex; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) return i
  }
  return undefined

}
//функция, которая возвращает первый объект, если функция fn вернула истину, иначе возвращает undefind
//аналогична методу массива find
function find(arr: any[], fn: Function) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) return i
  }
  return undefined
}


// функция, которая возвращает массив объектов, для которых функция fn вернула истину, иначе возвращает пустой массив
// аналогична методу массива filter
function filter(arr: any[], fn: Function) {
  const newArr = [] as any[]
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) newArr.push(arr[i])
  }
  return newArr
}

let isQ = false
let isW = false

function qwFunc(e: KeyboardEvent) {
  if (e.type == 'keydown') {
    if (e.code == 'KeyQ') isQ = true
    if (e.code == 'KeyW') isW = true
  }
  if (e.type == 'keyup') {
    if (e.code == 'KeyQ') isQ = false
    if (e.code == 'KeyW') isW = false
  }
  if (isQ && isW) {
    alert('Boom!!!')
    isQ = isW = false
  }
}

window.addEventListener('keydown', qwFunc)
window.addEventListener('keydown', qwFunc)

//Страница: DOMContentLoaded, load, beforeunload, unload

// текущее состояние
console.log(document.readyState);

// вывести изменения состояния
document.addEventListener('readystatechange', () => console.log(document.readyState));

// События загрузки страницы:

// DOMContentLoaded генерируется на document, когда DOM готов. Мы можем применить JavaScript к элементам на данном этапе.
// Скрипты, вроде <script>...</script> или <script src="..."></script> блокируют DOMContentLoaded, браузер ждёт, пока они выполнятся.
// Изображения и другие ресурсы тоже всё ещё могут продолжать загружаться.
// Событие load на window генерируется, когда страница и все ресурсы загружены. Мы редко его используем, потому что обычно нет нужды ждать так долго.
// Событие beforeunload на window генерируется, когда пользователь покидает страницу. Если мы отменим событие, 
// браузер спросит, на самом ли деле пользователь хочет уйти (например, у нас есть несохранённые изменения).
// Событие unload на window генерируется, когда пользователь окончательно уходит, 
// в обработчике мы можем делать только простые вещи, которые ни о чём не спрашивают пользователя и не заставляют его ждать.
//  Из-за этих ограничений оно редко используется. Мы можем послать сетевой запрос с помощью navigator.sendBeacon.
// document.readyState – текущее состояние документа, изменения можно отследить с помощью события readystatechange:
// loading – документ грузится.
// interactive – документ прочитан, происходит примерно в то же время, что и DOMContentLoaded, но до него.
// complete – документ и ресурсы загружены, происходит примерно в то же время, что и window.onload, но до него.

// let script = document.createElement('script');

// мы можем загрузить любой скрипт с любого домена
// script.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js"
// document.head.append(script);

// script.onload = function() {
// в скрипте создаётся вспомогательная переменная с именем "_"
//   console.log(window._.VERSION); // отображает версию библиотеки
// }

// Изображения <img>, внешние стили, скрипты и другие ресурсы предоставляют события load и error для отслеживания загрузки:

// load срабатывает при успешной загрузке,
// error срабатывает при ошибке загрузки.
// Единственное исключение – это <iframe>: по историческим причинам срабатывает всегда load вне зависимости от того, как завершилась загрузка, даже если страница не была найдена.

// Событие readystatechange также работает для ресурсов, но используется редко, потому что события load/error проще в использовании.

function preloadImages(sources: string[], callback: Function) {
  let counter = 0;

  function onLoad() {
    counter++;
    if (counter == sources.length) callback();
  }

  for (let source of sources) {
    let img = document.createElement('img');
    img.onload = img.onerror = onLoad;
    img.src = source;
  }
}

// ---------- тест ----------

let sources = [
  "https://en.js.cx/images-load/1.jpg",
  "https://en.js.cx/images-load/2.jpg",
  "https://en.js.cx/images-load/3.jpg"
];

// добавляем случайные символы к ссылкам, чтобы избежать кеширования
for (let i = 0; i < sources.length; i++) {
  sources[i] += '?' + Math.random();
}

// для каждого изображения
// создадим другое изображение с аналогичным src и проверим, есть ли у нас его ширина
function testLoaded() {
  let widthSum = 0;
  for (let i = 0; i < sources.length; i++) {
    let img = document.createElement('img');
    img.src = sources[i];
    widthSum += img.width;
  }
  console.log(widthSum);
}

// должно выводиться 300
preloadImages(sources, testLoaded);

//3
//Реализовать класс Employee, описывающий работника, и создать массив работников банка.
//Реализовать класс EmpTable для генерации html кода таблицы со списком работников банка. 
//Массив работников необходимо передавать через конструктор, а получать html код с помощью метода getHtml().
//Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().

class Employee {
  name;
  age;
  post;
  constructor(name: string, age: number, post: string) {
    this.name = name;
    this.age = age;
    this.post = post;
  }
}

const empl = [
  new Employee("Matthew McConaughey", 44, "investment specialist"),
  new Employee("Jon Flanagan", 30, "credit specialist"),
  new Employee("Jamie Carragher", 45, "auditor"),
  new Employee("Robert Fowler", 48, "accountant"),
  new Employee("Jamie Vardy", 36, "accountant")
]

class EmpTable {
  arr
  constructor(arr: Employee[]) {
    this.arr = arr;
  }
  getHtml() {
    const html = `<table>
    <thead>
    <tr>
    <th>name</th>
    <th>age</th>
        <th>post</th>
      </tr>
    </thead>
    <tbody>
      ${this.arr.map(el => `<tr><td>${el.name}</td><td>${el.age}</td><td>${el.post}</td></tr>`).join('')}
      </tbody>
      </table>`
    document.body.insertAdjacentHTML('beforeend', html)
    return html
  }
}

const table = new EmpTable(empl)
// table.getHtml()

//Реализовать класс StyledEmpTable, который наследуется от класса EmpTable. Добавить метод getStyles(), который возвращает
// строку со стилями для таблицы в тегах style. Переопределить метод getHtml(), который добавляет стили к тому, что возвращает 
// метод getHtml() из родительского класса.
// Создать объект класса StyledEmpTable и вывести на экран результат работы метода getHtml().

class StyledEmpTable extends EmpTable {
  getStyles() {
    return `<style> table { color:red } </style>`
  }
  getHtml(): string {
    document.head.insertAdjacentHTML('beforeend', this.getStyles())
    return super.getHtml()
  }
}

const StyledTable = new StyledEmpTable(empl)
StyledTable.getHtml()

// pz2-5
//1
// Реализовать класс Button, который содержит ширину, высоту, текст кнопки и метод showBtn(), который выводит кнопку на экран с помощью тега button и функции document.write().
// Реализовать класс BootstrapButton, унаследовав его от класса Button. Добавить поле color и переопределить метод showBtn() так, чтобы кнопка выводилась со стилями и указанным цветом.

class Button {
  width
  height
  text
  constructor(width: number, height: number, text: string) {
    this.width = width
    this.height = height
    this.text = text
  }
  showBtn() {
    document.body.insertAdjacentHTML('beforeend', `<button style="width:${this.width}; height:${this.height};">${this.text}</button>`)
  }
}
const newButton = new Button(100, 50, 'dsfsdfsd')
newButton.showBtn()
class BootstrapButton extends Button {
  color
  constructor(width: number, height: number, text: string, color: string) {
    super(width, height, text)//вызов конструктора родителя
    this.color = color//this доступен только после вызова конструктора родителя
  }
  showBtn() {
    // super.showBtn()//вызов метода родителя
    document.body.insertAdjacentHTML('beforeend', `<button style="width:${this.width}; height:${this.height};background-color:${this.color}">${this.text}</button>`)
  }
}

const newButton2 = new BootstrapButton(100, 50, 'FDDFWE', 'red')
newButton2.showBtn()
//2
// Реализовать класс, описывающий геометрическую фигуру со свойствами и методами:
// ■ get-свойство для получения названия фигуры;
// ■ метод для вывода информации о фигуре (стороны и их длина);
// ■ метод для вычисления площади фигуры;
// ■ метод для вычисления периметра фигуры.
// Реализуйте классы-наследники: квадрат, прямоугольник и треугольник. Переопределите методы вывода и вычислений в  классах-наследниках.
// Создайте массив с различными фигурами и выведите информацию о каждой фигуре, включая площадь и периметр.

class Figure {
  name
  constructor(name: string) {
    this.name = name;
  }
  get figureName() {
    return this.name
  }
  getFigureInfo() {
  }
  getFigureSquare() {
  }
  getFigurePerimetr() {
  }
}

// class Rect extends Figure {
//   length1
//   length2
//   length3
//   constructor(length1: number, length2: number, length3: number) {
//     super(name)
//   }
//   getFigureSquare() {
//     Sq = (this.length1 * this.length2) / 2
//   }
//   getFigurePerimetr() {
//     perimetr = this.length1 + this.length2 + this.length3
//   }
// }

// class Square extends Figure {
//   length3
//   constructor(length3) {
//     getFigureSquare() {
//       Sq = this.length3 * 2
//     }
//     getFigurePerimetr() {
//       perimetr = this.length3 * 4
//     }
//   }
// }

// class Rectangle extends Figure {
//   length4
//   length5
//   constructor(length4,length5) {
//     getFigureSquare() {
//       Sq = this.length4*this.length5
//     }
//     getFigurePerimetr() {
//       perimetr = this.length4*2+this.length5*2
//     }
//   }
// }

//3
// Реализуйте класс ExtentedArray, унаследовав его от стандартного класса Array и добавив следующие методы:
// ■ метод getString(separator) – для получения строки со всеми элементами массива, перечисленными через указанный разделитель: запятая, тире, пробел и т. д.;
// ■ метод getHtml(tagName) – для получения строки с html кодом, где каждый элемент массива будет обернут в указанный тег (учтите, если указывается тег li, то все элементы
// дополнительно необходимо обернуть в ul).
// Создайте объект класса ExtentedArray, заполните его данными и выведите на экран результаты работы методов getString() и getHtml().

// Обработка ошибок, "try..catch"
try {

  console.log('Начало блока try');  // (1) <--
  // lalala; ошибка, переменная не определена!
  console.log('Конец блока try (никогда не выполнится)');  // (2)

} catch (err: any) {

  console.log(`Возникла ошибка!`, err, err.name, err.message, err.stack); // (3) <--

}

// Конструкция try..catch позволяет обрабатывать ошибки во время исполнения кода. Она позволяет запустить код и перехватить ошибки, которые могут в нём возникнуть.

// Синтаксис:

try {
  // исполняем код
} catch (err) {
  // если случилась ошибка, прыгаем сюда
  // err - это объект ошибки
} finally {
  // выполняется всегда после try/catch
}

// Секций catch или finally может не быть, то есть более короткие конструкции try..catch и try..finally также корректны.

// Объекты ошибок содержат следующие свойства:

// message – понятное человеку сообщение.
// name – строка с именем ошибки (имя конструктора ошибки).
// stack (нестандартное, но хорошо поддерживается) – стек на момент ошибки.
// Если объект ошибки не нужен, мы можем пропустить его, используя catch { вместо catch(err) {.

// Мы можем также генерировать собственные ошибки, используя оператор throw. Аргументом throw может быть что угодно, но обычно это объект ошибки, наследуемый от встроенного класса Error. Подробнее о расширении ошибок см. в следующей главе.

// Проброс исключения – это очень важный приём обработки ошибок: блок catch обычно ожидает и знает, как обработать определённый тип ошибок, поэтому он должен пробрасывать дальше ошибки, о которых он не знает.

// Даже если у нас нет try..catch, большинство сред позволяют настроить «глобальный» обработчик ошибок, чтобы ловить ошибки, которые «выпадают наружу». В браузере это window.onerror.

// ТЕМА: ОБРАБОТКА СОБЫТИЙ.
// DOCUMENT OBJECT MODEL

//1
// Создать html-страницу со списком ссылок. Ссылки на внешние источники (которые начинаются с http://)
// необходимо подчеркнуть пунктиром.Искать такие ссылки в списке и устанавливать им дополнительные стили необходимо с помощью JS.

const links = document.querySelectorAll('.links a') as NodeListOf<HTMLAnchorElement>
links.forEach(el => {
  if (el.getAttribute('href')?.includes('http')) {
    el.classList.add('extsource')
  }
})

//2
// Создать html-страницу с деревом вложенных директорий. При клике на элемент списка, 
// он должен сворачиваться или разворачиваться. При наведении на элемент, шрифт должен становится жирным (с помощью CSS).

let menu = document.querySelector('.menu') as HTMLDivElement
let lists = menu.querySelectorAll('li')

lists.forEach(el => {
  el.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const li = target.closest('li') as HTMLElement
    if (li == e.currentTarget) {
      const ul = li.querySelector('ul')
      if (ul) ul.classList.toggle('hide')
    }
  })
})

//3
// Создать html-страницу со списком книг. При щелчке на элемент, цвет текста должен меняться на оранжевый. 
// При повторном щелчке на другую книгу, предыдущей необходимо возвращать прежний цвет.
// Если при клике мышкой была зажата клавиша Ctrl, то элементдобавляется/удаляется из выделенных.
// Если при клике мышкой была зажата клавиша Shift, то к выделению добавляются все
// элементы в промежутке от предыдущего кликнутого до текущего.

let list = document.querySelector('.booklist ol') as HTMLOListElement
 

function setSelected(books:any)  {
  if(books.target.tagName == 'OL'){
      let selected = document.querySelector('.bookList.selected')
      if(selected) selected.classList.remove('selected')
      books.target.classList.add('selected')
  }
}

let lastActive: any
list.addEventListener('click', event => {
  const target = event.target as HTMLElement
  if(target.tagName == 'LI') {
    if (event.ctrlKey) {
      target.classList.toggle('selected')
    } 
    if (!event.ctrlKey && !event.shiftKey) {
      for (let el of list.querySelectorAll('li')) {
        if (el != target) {
          el.classList.remove('selected')
        }
      }
      target.classList.add('selected')
    }
    if (event.shiftKey) {
      if (!lastActive) {
        for (let el of list.querySelectorAll('li')) {
          if (el != target) {
            el.classList.add('selected')
          } else {
            break
          }
        }
      } else {
        let targetIndex = 0
        let lastActiveIndex = 0
        const lis = list.querySelectorAll('li')
        lis.forEach((el, i)=>{
          if (el==target) targetIndex = i
          if (el==lastActive) lastActiveIndex = i
        })
        for (let i=Math.min(targetIndex, lastActiveIndex); i<=Math.max(targetIndex, lastActiveIndex); i++) {
          lis[i].classList.add('selected')
        }
      }
      target.classList.add('selected')
    }
    lastActive = target
  }
})





