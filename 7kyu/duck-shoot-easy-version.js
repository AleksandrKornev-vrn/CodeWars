// ❓ОПИСАНИЕ:
// Вы прибыли на карнавал и направляетесь прямиком к палатке для охоты на уток. Почему бы и нет?
// Вам будет предоставлено установленное количество патронов и оценка прицела от 1 до 0. Нет, ваша цель не всегда идеальна - эй, может быть, кто-то повозился с прицелом на пистолете...
// В любом случае, ваша задача - подсчитать, сколько успешных выстрелов вы сможете сделать, учитывая доступные боеприпасы и ваш показатель меткости, затем вернуть строку, представляющую количество уток, при этом те, в которых стреляли утки, отмечены символом "X", а те, которые выжили, оставлены неизменными. Вы всегда будете стрелять слева направо.
// Пример начальной и конечной цепочки уток с двумя успешными выстрелами:
// Начать ---> |~~~~~22~2~~~~~|
// Бах!! Бах!!
// Конец ---> |~~~~~XX ~ 2 ~~~~~|
// Все входные данные будут иметь правильный тип и никогда не будут пустыми.

// ✅ ОТВЕТ:
function duckShoot (ammo, aim, ducks) {
  let performance = Math.floor (ammo * aim);
  let rezult = [];
  for (let i = 0; i < ducks.length; i++) {
    if (ducks[i] === "2" && performance > 0) {
      rezult.push("X");
      performance --;
    } else {
      rezult.push(ducks[i]);
    }
  };
  return rezult.join("");
};

duckShoot (9, 0.22, '|~~~~~~~2~2~~~|');