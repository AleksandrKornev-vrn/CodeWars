// ❓ОПИСАНИЕ:
// Камень-ножницы-бумага
// Давайте играть! Вы должны указать, какой игрок выиграл! В случае ничьей вернитесь Draw!.

// Примеры (Input1, Input2 --> Вывод):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// ✅ ОТВЕТ:
const rps = (p1, p2) => {
  let rezult;
  if (p1 === p2) {
    rezult = "Draw!";
  } else if (p1 === "scissors") {
    if (p2 === "paper") {
      rezult = "Player 1 won!";
    } else if ((p2 === "rock")) {
      rezult = "Player 2 won!";
    }
  } else if (p1 === "paper") {
    if (p2 === "scissors") {
      rezult = "Player 2 won!";
    } else if ((p2 === "rock")) {
      rezult = "Player 1 won!";
    }
  } else if (p1 === "rock") {
    if (p2 === "scissors") {
      rezult = "Player 1 won!";
    } else if ((p2 === "paper")) {
      rezult = "Player 2 won!";
    }
  };
  return rezult;
};