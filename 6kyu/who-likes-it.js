// ❓ОПИСАНИЕ:
// Вы, наверное, знаете систему "лайков" на Facebook и других страницах. Люди могут ставить "лайки" публикациям в блоге, картинкам или другим элементам. Мы хотим создать текст, который должен отображаться рядом с таким элементом.

// Реализуйте функцию, которая принимает массив, содержащий имена людей, которым понравился элемент. Он должен возвращать отображаемый текст, как показано в примерах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
//Примечание: Для 4 или более имен число в "and 2 others" просто увеличивается.

// ✅ ОТВЕТ:

// Вариант 1:
function likes (names) {
  let rezult;
  switch (names.length) {
    case 0:
      rezult = "no one likes this";
      break;
    case 1:
      rezult = names[0] + " likes this";
      break;
    case 2:
      rezult = names[0] + " and " + names[1] + " like this";
      break;    
    case 3:
      rezult = names[0] + ", " + names[1] + " and " + names[2] + " like this";
      break;
    default:
      rezult = names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  };
  return rezult;
};

// Вариант 2:
function likes (names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return names[0] + " likes this";
  } else if (names.length === 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (names.length === 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else if (names.length > 3) {
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  }
};

