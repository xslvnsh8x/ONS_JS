'use strict';

/*
Задача:
Напишите функцию, переворачивающую переданную строчку ( word —> drow ).
 */

/**
 * Функция принимает на вход произвольную строку.
 * При помощи метода split преобразовывает строку в массив, разбивая на символы.
 * При помощи метода reverse переворачивает полученный масив.
 * При помощи метода join собирает обратно строку из массива.
 * В методе join обязательно передаём параметр '', иначе по-умолчанию вернётся строка,
 * в которой буквы будут разделены запятой ('h,e,l,l,o,w') например.
 * @type {string}
 * @return {string}
 */
let yourText = prompt('Type any text here');

function getInvertedString(str) {
  return str.split('').reverse().join('');
}

console.log(getInvertedString(yourText));