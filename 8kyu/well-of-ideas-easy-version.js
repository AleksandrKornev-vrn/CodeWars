// ❓ОПИСАНИЕ:
// На каждую хорошую идею ката, похоже, приходится немало плохих!

// В этом ката вам нужно проверить предоставленный массив (x) на наличие хороших идей "good" и плохих идей "bad". Если есть одна или две хорошие идеи, верните "Опубликовать!" "Publish!", если их больше 2, верните "Я чувствую серию!" "I smell a series!". Если хороших идей нет, как это часто бывает, верните "Сбой!" "Fail!".

// ✅ ОТВЕТ:
function well(x){
  let goodArray = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      goodArray.push(x[i]);
    }
  };
  if (goodArray.length === 0) {
    return "Fail!";
  } else if (goodArray.length > 2) {
    return "I smell a series!";
  }
  return "Publish!";
}