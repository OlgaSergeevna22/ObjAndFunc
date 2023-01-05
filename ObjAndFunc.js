// // Tasks Objects

// // 1. Вам предоставляется словарь / хэш / объект, содержащий некоторые языки, и результаты вашего теста на данных языках. Верните список языков, на которых ваш тестовый балл не ниже 60, в порядке убывания баллов.


function myLanguages(results) {

    let result = Object.keys(results).sort((a, b) => results[b] - results[a]).filter(item => results[item] >= 60)
    console.log(result);
}


myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 });
myLanguages({ "Hindi": 60, "Dutch": 93, "Greek": 71 });
myLanguages({ "C++": 50, "ASM": 10, "Haskell": 20 })


// 2. Ваша задача - написать такую кодировку длиной выполнения. Для заданной строки возвращает список (или массив) пар (или массивов) [ (i1, s1), (i2, s2), ..., (in, sn) ], так что можно восстановить исходную строку, повторив символ s x i x раз и объединив все эти строки. Ваша кодировка длины выполнения должна быть минимальной, т.Е.. для всех i значения si и si +1 должны отличаться.


let runLengthEncoding = function(str) {
    const arr = [];
    let value = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            arr.push([value, str[i]]);
            value = 1;
        } else {
            value++;
        }
    }
    return arr;
};

console.log(runLengthEncoding("hello world!"));


//   3. Реализуйте методfind, который принимает два параметра objectи path. Это pathбудет строка свойств, разделенная точкой, которую мы будем использовать для обхода нашегоobject, чтобы найти наше целевое значение.

//   Ознакомьтесь с этим кодеком, чтобы начать! https://codecast.qualified.io/interaction/594197b92f524d001c1ab790

//   Граничные случаи и дальнейшее рассмотрение
//   Обязательно обрабатывайте передаваемые индексы массива. Например, если у нас есть объект: { people: ['John', 'Dave', 'Lisa'] }и путь есть'people.1', целевое значение - 'Dave'это строка в позиции 1 внутри массива people .

//   Также этот метод должен обрабатывать недопустимые пути. Если у нас есть объект { user: { name: 'Dan' } }и путь есть'user.wallet.money', мы должны вернуться undefined. Допустимые пути являются эксклюзивными для свойств объекта, которые не наследуются, другими словами, они специфичны для этого объекта и не требуют поиска цепочки прототипов.

function find(object, path) {
    path = path.split(".");
    for (i in path) {
        if (object.hasOwnProperty(path[i]) === true) {
            object = object[path[i]];
        } else {
            return undefined;
        }
    }
    return object;
}


// // Tasks Functions

// // 1. Вы пишете функцию, которая принимает два набора аргументов произвольной длины. Возвращаемое значение будет суммой значений всех аргументов.


function calculate(a, b) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return function() {
        for (let j = 0; j < arguments.length; j++) {
            sum += arguments[j];
        }
        console.log(sum);
    }
}
// function calculate(...a) {
//     return function (...b) {
//       return [...a, ...b].reduce((sum, n) => sum + n)
//     };
//   }


calculate(1)(1) // should return 2
calculate(1, 1)(1) // should return 3
calculate(1, 1)(1, -1) // should return 2
calculate(2, 4)(3, 7, 1) // should return 17  



// // 2. #Описание Ваша задача - реализовать нашу любимую функцию Array.prototype.map с нуля, и да, она должна быть внутри прототипа массива. 

// Array.prototype.map = function(callback, context) {
//     const length = this.length
//     const arr = new Array(length)
//     for (let i = 0; i < length; i++) {
//         if (i in this) {
//             arr[i] = callback.call(context, this[i], i, this)
//         }
//     }
//     return arr
// }


// // Array.prototype.map = function(fn, nThis) {
// //     var newArr = this.slice();
// //     this.forEach((v, i, arr) => newArr[i] = fn.apply(nThis, [v, i, arr]));
// //     return newArr;
// //   }


// // 3. #Ваша задача реализовать наш любимый массив prototype.filter с нуля.


// Array.prototype.filter = function(fun, that) {
//     let out = [];

//     if (that) {
//         fun = fun.bind(that);
//     }

//     let t = this;
//     let len = t.length;
//     for (let i = 0; i < len; i++) {
//         if (i in t) {
//             if (fun(t[i], i, t)) {
//                 out.push(t[i]);
//             }
//         }
//     }
//     return out;
// };



// 4. Ваша задача - переопределить собственный Function.prototype.bindметод новым, который позволит вам повторно привязывать контекст несколько раз. В этом ката вам не нужно беспокоиться о каррировании, функция тестирования никогда не получит параметры.


Function.prototype.bind = function(ctx) {
    const func = this;
    return function(...args) {
        const rightCtx = this === global ? ctx : this;
        return func.apply(rightCtx, args);
    };
};


//   Function.prototype.bind = function (obj) {
// 	for (key in obj) {
// 		global[key] = obj[key]
// 	}
// 	return this
// }

// 5. Мы хотим создать функцию, которая возвращает массив функций, которые возвращают их индекс в массиве. Для лучшего понимания приведем пример:

// var callbacks = createFunctions(5); // create an array, containing 5 functions

// callbacks[0](); // must return 0
// callbacks[3](); // must return 3
// Мы уже реализовали эту функцию, но когда мы фактически запускаем код, результат выглядит не так, как мы ожидали. Можете ли вы определить, что с этим не так? Также имеется испытательный прибор


function createFunctions(n) {
    const callbacks = [];

    for (let i = 0; i < n; i++) {
        callbacks.push(function() {
            return i;
        });
    }

    return callbacks;
}

//   6. Для объекта coffeescript не существует такого понятия, как частные свойства! Но, может быть, они есть?

//   Реализуйте функциюcreateSecretHolder(secret), которая принимает любое значение как секретное и возвращает объект ТОЛЬКО с двумя методами

//   getSecret() который возвращает секрет
//   setSecret() который устанавливает секрет
//   obj = createSecretHolder(5)
//   obj.getSecret() # returns 5
//   obj.setSecret(2)
//   obj.getSecret() # returns 2


function createSecretHolder(secret) {
    return {
        getSecret: function() {
            return secret;
        },
        setSecret: function(n) {
            secret = n;
        },
    };
}


// // Tasks Date
// //1. История
// // Ваш интернет-магазин любит раздавать купоны для особых случаев. Некоторые клиенты пытаются обмануть систему, вводя неверные коды или используя купоны с истекшим сроком действия.

// // Задача
// // Ваша задача:
// // написать вызываемую функциюcheckCoupon, которая проверяет, что код купона действителен и не истек.

// // Купон больше не действителен на следующий день ПОСЛЕ истечения срока действия. Все даты будут передаваться в виде строк в этом формате: "MONTH DATE, YEAR".



// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {

//     currentDate = new Date(currentDate);
//     expirationDate = new Date(expirationDate);

//     if (enteredCode === correctCode && currentDate <= expirationDate) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }

//     // return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
// }


// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015") // true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015") // false

// // 2. Пятница, 13-е или Черная пятница, считается несчастливым днем. Подсчитайте, сколько неудачных дней в данном году.

// // Найдите число пятницы, 13-е в данном году.

// // Ввод: год в григорианском календаре как целое число.

// // Вывод: количество черных пятниц в году в виде целого числа.

// // Примеры:

// // unluckyDays(2015) == 3
// // unluckyDays(1986) == 1


// function unluckyDays(year) {

//     let count = 0;

//     for (let i = 0; i < 12; i++) {

//         let friday = new Date(year, i, 13);

//         if (friday.getDay() == 5) {

//             count++
//         }

//     }
//     console.log(count);
// }

// unluckyDays(2015) // 3
// unluckyDays(1986) // 1


// // 3. Учитывая a Date(в JS и Ruby) или hoursи minutes(в C и Python), верните угол между двумя стрелками 12-часовых аналоговых часов в радианах.

// // Примечания:
// // Минутная стрелка всегда указывает точную минуту (секундной стрелки нет).
// // Часовая стрелка не "привязывается" к отметкам: например, под 6:30углом нет0, потому что часовая стрелка уже находится на полпути между 6и 7.
// // Возвращает меньший из углов ( <= π ).
// // Вернитесьπ, если стрелки противоположны.
// // Примеры
// // в полдень угол равен: 0
// // под 3:00углом: π/2(90 градусов)
// // под 6:00углом: π(180 градусов)
// // под 9:00углом: π/2(90 градусов)

// function handAngle(date) {


//     // let hour = date.getUTCHours() % 12;
//     // let mimute = date.getUTCMinutes();
//     // let speedHourHand = 360 / (12 * 60);
//     // let speedMinuteHand = 360 / 60;
//     // let moveHour = (hour * 60 + mimute) * speedHourHand;
//     // let moveMinute = mimute * speedMinuteHand;
//     // let angle = Math.abs(moveHour - moveMinute);
//     // if (angle > 180) { angle = 360 - angle; }
//     // console.log(angle * Math.PI / 180);
// }


function handAngle(date) {
    let angle = Math.abs((date.getHours() % 12) * 30 + date.getMinutes() / 2 - date.getMinutes() * 6);
    if (angle > 180) {
        angle = 360 - angle;
    }
    return angle / 180 * Math.PI;
}



handAngle(10, 0) // 1.0471975511965976);
handAngle(0, 15) //, 1.4398966328953218);
handAngle(0, 45) //, 1.9634954084936207);