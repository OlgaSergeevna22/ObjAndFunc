// Tasks Objects

// 1. Вам предоставляется словарь / хэш / объект, содержащий некоторые языки, и результаты вашего теста на данных языках. Верните список языков, на которых ваш тестовый балл не ниже 60, в порядке убывания баллов.


function myLanguages(results) {

    let result = Object.keys(results).sort((a, b) => results[b] - results[a]).filter(item => results[item] >= 60)
    console.log(result);
}


myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 });
myLanguages({ "Hindi": 60, "Dutch": 93, "Greek": 71 });
myLanguages({ "C++": 50, "ASM": 10, "Haskell": 20 })


// Tasks Functions

// 1. Вы пишете функцию, которая принимает два набора аргументов произвольной длины. Возвращаемое значение будет суммой значений всех аргументов.


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



// Tasks Date
//1. История
// Ваш интернет-магазин любит раздавать купоны для особых случаев. Некоторые клиенты пытаются обмануть систему, вводя неверные коды или используя купоны с истекшим сроком действия.

// Задача
// Ваша задача:
// написать вызываемую функциюcheckCoupon, которая проверяет, что код купона действителен и не истек.

// Купон больше не действителен на следующий день ПОСЛЕ истечения срока действия. Все даты будут передаваться в виде строк в этом формате: "MONTH DATE, YEAR".



function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {

    currentDate = new Date(currentDate);
    expirationDate = new Date(expirationDate);

    if (enteredCode === correctCode && currentDate <= expirationDate) {
        console.log(true);
    } else {
        console.log(false);
    }

    // return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}


checkCoupon("123", "123", "July 9, 2015", "July 9, 2015") // true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015") // false

// 2. Пятница, 13-е или Черная пятница, считается несчастливым днем. Подсчитайте, сколько неудачных дней в данном году.

// Найдите число пятницы, 13-е в данном году.

// Ввод: год в григорианском календаре как целое число.

// Вывод: количество черных пятниц в году в виде целого числа.

// Примеры:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1


function unluckyDays(year) {

    let count = 0;

    for (let i = 0; i < 12; i++) {

        let friday = new Date(year, i, 13);

        if (friday.getDay() == 5) {

            count++
        }

    }
    console.log(count);
}

unluckyDays(2015) // 3
unluckyDays(1986) // 1