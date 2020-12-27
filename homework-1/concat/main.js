'use strict';

/*
Задание:
Напишите функцию конкатенации (сложения) двух строк, которая возвращает результат.
Если результат больше чем 20 символов, обрезать его, и добавлять троеточие в конце.
 */

/**
 * Функция принимает на вход две строки и скливает их.
 * Если длина одной из строк или обеих строк больше 20 символов,
 * то она обрезает эту строку до 10 символов и ставит троеточие в конце этой строки.
 * @param {string} string1
 * @param {string} string2
 * @returns {string}
 */
function concatTwoStrings(string1, string2) {
  if (string1.length > 20 && string2.length > 20) {
    return `${string1.substr(0, 10)}... ${string2.substr(0, 10)}...`;
  } else if (string1.length > 20) {
    return `${string1.substr(0, 10)}... ${string2}`;
  } else if (string2.length > 20) {
    return `${string1} ${string2.substr(0, 10)}...`;
  } else {
    return `${string1} ${string2}`;
  }
}

console.log(concatTwoStrings('hello', 'brave new world of ours'));