// ❓ОПИСАНИЕ:
// Вам будет дано слово. Ваша задача - вернуть средний символ слова. Если длина слова нечетная, верните средний символ. Если длина слова четная, верните 2 средних символа.

// #Примеры:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// # Ввод

// Слово (строка) определенной длины 0 < str < 1000 (В javascript вы можете получить чуть больше 1000 в некоторых тестовых примерах из-за ошибки в тестовых примерах). Вам не нужно проверять это. Это здесь только для того, чтобы сказать вам, что вам не нужно беспокоиться о том, что время ожидания вашего решения истекло.

// # Вывод

// Средние символы слова представлены в виде строки.



// ✅ ОТВЕТ:

function getMiddle (s) {
  //Code goes here!
  if (s.length % 2 === 0) {
    return  s[s.length/2 - 1] + s[s.length/2];
  } else {
    return s[s.length/2 - 0.5];
  }
};