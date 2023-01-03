// // Tasks Objects

// // 1. Вам предоставляется словарь / хэш / объект, содержащий некоторые языки, и результаты вашего теста на данных языках. Верните список языков, на которых ваш тестовый балл не ниже 60, в порядке убывания баллов.


// function myLanguages(results) {

//     let result = Object.keys(results).sort((a, b) => results[b] - results[a]).filter(item => results[item] >= 60)
//     console.log(result);
// }


// myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 });
// myLanguages({ "Hindi": 60, "Dutch": 93, "Greek": 71 });
// myLanguages({ "C++": 50, "ASM": 10, "Haskell": 20 })


// Tasks Functions

// 1. Вы пишете функцию, которая принимает два набора аргументов произвольной длины. Возвращаемое значение будет суммой значений всех аргументов.


function calculate(a, b) {
    // return a + b
    console.log(a + b);
}



//     // let sum = 0;
//     // for (let i = 0; i < arguments.length; i++) {
//     //     sum += arguments[i]
//     // }
//     // return function() {
//     //     for (let j = 0; j < arguments.length; j++) {
//     //         sum += arguments[j];
//     //     }
//     //     console.log(sum);
//     // }



calculate(1)(1) // should return 2
calculate(1, 1)(1) // should return 3
    // calculate(1, 1)(1, -1) // should return 2
    // calculate(2, 4)(3, 7, 1) // should return 17