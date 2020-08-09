"use strict"

function getResult(a,b,c){
    // Задача №1
    let x = [];
    let D = Math.pow(b, 2) - 4 * a * c;

    if (D === 0) {
        x.push(-b / (2 * a));
    } else if (D > 0) {
        x.push((-b + Math.sqrt(D)) / 2 * a);
        x.push((-b - Math.sqrt(D)) / 2 * a);
    }

    return x;
}

function getAverageMark(marks){
    // Задача №2
    let sum = 0;
    let averageMark = 0;

    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log('Больше 5 оценок')
        marks.splice(5);
    }

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i]
    }

    averageMark = sum / marks.length

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // Задача №3
    let result = '';

    if (new Date().getFullYear() - dateOfBirthday.getFullYear() > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }

    return result;
}