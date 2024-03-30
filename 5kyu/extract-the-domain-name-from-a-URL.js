// ❓ОПИСАНИЕ:
// Напишите функцию, которая при задании URL в виде строки анализирует только имя домена и возвращает его в виде строки. Например:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//qgfuq3gb.pro/warez/

// ✅ ОТВЕТ:

function domainName (url) {
  let domainName = "";
  if (url.includes("www")) {
    for (let i = url.indexOf("www") + 4; url[i] !== "."; i++) {
      domainName += url[i];
    };
  } else if (url.includes("//")) {
    for (let i = url.indexOf("//") + 2; url[i] !== "."; i++) {
      domainName += url[i];
    };
  } else {
  for (let i = 0; url[i] !== "."; i++) {
    domainName += url[i];
  };
}
  return domainName;
};

