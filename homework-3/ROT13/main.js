'use strict';

/*
Задача:
Напишите реализацию алгоритма ROT-13 для английского алфавита.
 */

/**
 * Функция принимает на вход строку и преобразовывает её в новую строку, используя алгоритм ROT-13.
 * Сначала разбивает строку на элементы используя метод split.
 * Полученный массив из элементов перебирается при помощи метода map, в котором в качестве коллбэка
 * используется метод fromCharCode объекта String.
 *
 * @param {string} str
 * @return {string}
 */
function rot13(str) {
  return str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + (char.toLowerCase() < 'n' ? 13 : -13)))
    .join('');
}

console.log(rot13('hello')); // uryyb