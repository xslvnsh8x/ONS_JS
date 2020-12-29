'use strict';

/*
Задача:
Напишите функцию, генерирующую двумерный массив.
Количество вложенных масивов от 1 до arraysCount, и с числами внутри этих массивов от 1 до numbersCount.
 */

/**
 * Функция генерирует двухмерный массив.
 * @param {number} numbersCount - числа внутреннего массива
 * @param {number} arraysCount - количество внутренних массивов
 * @return {any[]}
 */
function generate(numbersCount, arraysCount) {
  const arrBasic = new Array(0);
  const arrInner = new Array(0);

  for (let i = 1; i <= numbersCount; i++) {
    arrInner.push(i);
  }

  for (let i = 0; i < arraysCount; i++) {
    arrBasic.push(arrInner);
  }
  return arrBasic;
}

console.log(generate(5, 3));