'use strict'

//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function isPalindrome() {
    const strRemovedSpaces = this.replace(/\s+/g, '').toLowerCase();
    const reverseArray = strRemovedSpaces.split("").reverse();
    const reverseString = reverseArray.join("");

    return strRemovedSpaces === reverseString;
}


function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let sumMarks = 0;

    if (marks.length == 0) {
        return 0;
    }

    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];
    }

    let roundedAverage = Math.round(sumMarks / marks.length);

    return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    const now = Date.now();
    const parsedBirthday = +new Date(birthday);
    const diff = now - parsedBirthday;
    const age = diff / (100 * 60 * 60 * 24 * 365);
    
    return age >= 18;
}

