 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */

function averageMark(a, g, p) {
	
	// Задание №1
	let algebra = a;
	let geography = g;
	let physics = p;
	
	return (algebra + geography + physics) / 3;
}

function sayHello(userName) {
	
    // Задание №2
	let myName = userName;

	return `Привет, мир! Меня зовут ${myName}`;
}

function calculateFormula() {
    
	// Задание №3
	let x = 2;
	let y = 22;
	let z = 0;
	let result = x * y + 5 * z + x - 1;

    return result;
}
