"use strict";

const myGreatTODOArray = [
  {
    task: "Помыть кота!",
    author: "Petya",
  },
  {
    task: "Купить кота!",
    author: "Petya",
  },
  {
    task: "Сделать ДЗ",
    author: "Ivan",
  },
];

/**
 * Функция возвращает задачи 'tasks' из списка в виде одной строки.
 * @param TODOArray
 */
function getAllTasksString(TODOArray) {
  let result = TODOArray.reduce((sum, currentKey) => sum + currentKey.task, "");
  console.log(result);
}

/**
 * Функция возвращает все задачи из списка принадлежащие указанному автору.
 * @param TODOArray
 * @param {string} author
 */
function getTasksByAuthor(TODOArray, author) {
  let result = TODOArray.filter((key) => key.author === author);
  console.log(result);
}

/**
 * Функция возвращает все задачи из списка принадлежащие указанному автору.
 * Отличие от предыдущей функции в том, что использован метод 'reduce',
 * а также результат выводится в виде массива.
 * @param TODOArray
 * @param {string} myAuthor
 */
function getTasksByAuthorMod(TODOArray, myAuthor) {
  let result = TODOArray.reduce((newArr, currentKey) => {
    if (currentKey.author === myAuthor) {
      newArr.push(currentKey.task);
    }
    return newArr;
  }, []);
  console.log(result);
}

/**
 * Функция принимает строку и ищет совпадения по списку задач.
 * Используя поиск совпадений через метод RegExp, можно находить совпадения
 * и фильтровать вплоть до буквы.
 * Надеюсь решение норм получилось =)
 * @param TODOArray
 * @param {string} searchString
 */
function findTasksByWord(TODOArray, searchString) {
  let regExp = new RegExp(searchString, "i");
  let filtered = TODOArray.filter((key) => regExp.test(key.task));
  console.log(filtered);
}

getAllTasksString(myGreatTODOArray); // 'Помыть кота!Купить кота!Сделать ДЗ'
getTasksByAuthor(myGreatTODOArray, "Ivan"); // [{ task: 'Сделать ДЗ', author: 'Ivan' }]
getTasksByAuthorMod(myGreatTODOArray, "Petya"); // ["Помыть кота!", "Купить кота!"]
findTasksByWord(myGreatTODOArray, "кот");
