// ❓ОПИСАНИЕ:
// Дополните решение так, чтобы функция разбивала верблюжью оболочку, используя пробел между словами.

// Пример
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// ✅ ОТВЕТ:

function solution (string) {
  let rezult = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      rezult.push(" " + string[i]);
    } else {
      rezult.push(string[i]);
    }
  };
  return rezult.join("");
};
