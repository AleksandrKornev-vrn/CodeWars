// ❓ОПИСАНИЕ:
// В этом ката от вас требуется, получив строку, заменить каждую букву на ее позицию в алфавите.
// Если что-то в тексте не является буквой, проигнорируйте это и не возвращайте.
// "a" = 1, "b" = 2 и др.
// Пример
// alphabetPosition("The sunset sets at twelve o' clock.")
// Должен вернуться результат "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( в виде строки )

// ✅ ОТВЕТ:

function alphabetPosition(text) {
  const map = {
    "a": 1,
    "b": 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let rezult = [];
  text.toLowerCase().split("").forEach(item => {
    if (map[item]) {
      rezult.push(map[item]);
    }
  });
  return rezult.join(" ");
};

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
