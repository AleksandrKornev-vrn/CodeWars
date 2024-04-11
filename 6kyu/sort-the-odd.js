// ❓ОПИСАНИЕ:
// Задача
// Вам будет предоставлен массив чисел. Вы должны отсортировать нечетные числа в порядке возрастания, оставив четные числа на их первоначальных позициях.

// Примеры
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2,

// ✅ ОТВЕТ:

function sortArray (array) {
  let indexArray = [];
  let arrayN = [];
  array.forEach ((item, index) => {
    if (item % 2 !== 0) {
      arrayN.push (item);
      indexArray.push (index);
    }
  });
  arrayN.sort((left, right) => left - right);
  arrayN.forEach ((item, index) => {
    array[indexArray[index]] = arrayN[index];
  });
  return array;
};

sortArray ([5, 8, 6, 3, 4]);