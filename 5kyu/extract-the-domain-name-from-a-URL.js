// ❓ОПИСАНИЕ:
// Напишите функцию, которая при задании URL в виде строки анализирует только имя домена и возвращает его в виде строки. Например:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//qgfuq3gb.pro/warez/

// ✅ ОТВЕТ:

function domainName (url) {
  url = url.replace ("http://", "");
  url = url.replace ("https://", "");
  url = url.replace ("www.", "");
  return url.split(".")[0];
};

