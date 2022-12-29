// Tasks Objects

// 1. Вам предоставляется словарь / хэш / объект, содержащий некоторые языки, и результаты вашего теста на данных языках. Верните список языков, на которых ваш тестовый балл не ниже 60, в порядке убывания баллов.


function myLanguages(results) {

    let result = Object.keys(results).sort((a, b) => results[b] - results[a]).filter(item => results[item] >= 60)
    console.log(result);
}


myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 });
myLanguages({ "Hindi": 60, "Dutch": 93, "Greek": 71 });
myLanguages({ "C++": 50, "ASM": 10, "Haskell": 20 })