// ❓ОПИСАНИЕ:
// Задание
// Робот стоит в (0, 0) точке декартовой плоскости и ориентирован по вертикальной оси (y) в направлении увеличения значений y (другими словами, он смотрит вверх или на север). Робот выполняет несколько команд, каждая из которых представляет собой одно положительное целое число. Когда роботу присваивается положительное целое число K, он перемещает K квадратов вперед, а затем поворачивается на 90 градусов по часовой стрелке.

// Команды таковы, что обе координаты робота остаются неотрицательными.

// Ваша задача - определить, есть ли квадрат, который робот посещает хотя бы дважды после выполнения всех команд.

// Пример
// Для a = [4, 4, 3, 2, 2, 3] результат должен быть true.

// Точку (4, 3) посещают дважды, поэтому ответ таков true.

// Ввод / Вывод
// [input] целочисленный массив a
// Массив натуральных чисел, каждое число которого представляет команду.

// Ограничения:

// 3 ≤ a.length ≤ 100 длина массива от 3 до 100

// 1 ≤ a[i] ≤ 10000 элемент масиива от 1 до 10000

// [output] логическое значение
// true если есть квадрат, который робот посещает хотя бы дважды, false в противном случае.

// ✅ ОТВЕТ:

function robotWalk (a) {
  let positionOfTheRobot = {
    x: 0,
    y: 0,
    direction: "north"
  };
  let coordinates = ["00"];

  let findMatches = (newCoord) => {
    if (coordinates.includes (newCoord)) {
      coordinates.push (positionOfTheRobot.x + "" + positionOfTheRobot.y);
      return true;
    } else {
      coordinates.push (positionOfTheRobot.x + "" + positionOfTheRobot.y);
    }
  };
  
  for (let i = 0; i < a.length; i++) {
    if (positionOfTheRobot.direction === "north") {
      for (let j = 0; j < a[i]; j++) {
        positionOfTheRobot.y += 1; 
        if (findMatches (positionOfTheRobot.x + "" + positionOfTheRobot.y)) {
          return true;
        };
      };
      positionOfTheRobot.direction = "east";
    } else if (positionOfTheRobot.direction === "east") {
      for (let j = 0; j < a[i]; j++) {
        positionOfTheRobot.x += 1; 
        if (findMatches (positionOfTheRobot.x + "" + positionOfTheRobot.y)) {
          return true;
        };
      };
      positionOfTheRobot.direction = "south";
    } else if (positionOfTheRobot.direction === "south") {
      for (let j = 0; j < a[i]; j++) {
        positionOfTheRobot.y -= 1; 
        if (findMatches (positionOfTheRobot.x + "" + positionOfTheRobot.y)) {
          return true;
        };
      };
      positionOfTheRobot.direction = "west";
    } else if (positionOfTheRobot.direction === "west") {
      for (let j = 0; j < a[i]; j++) {
        positionOfTheRobot.x -= 1; 
        if (findMatches (positionOfTheRobot.x + "" + positionOfTheRobot.y)) {
          return true;
        };
      };
      positionOfTheRobot.direction = "north";
    }
  }
  return false;
};

