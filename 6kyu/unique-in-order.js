// ❓ОПИСАНИЕ:
// Реализуем функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов без каких-либо элементов с одинаковым значением рядом друг с другом и сохраняет исходный порядок элементов.

// Например:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// ✅ ОТВЕТ:

var uniqueInOrder = function (iterable) {
  let rezult = [];
  
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i+1]) {
      rezult.push(iterable[i]);
    }
  };
  
  return rezult;
};

uniqueInOrder([1,2,2,3,3]);