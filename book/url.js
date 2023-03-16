const url = require("url");

const { URL } = url;

const base = new URL(
  "http://gugyeoj1n:woojin9821@www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);

console.log("new URL() : ", base);
console.log("url.format() : ", url.format(base));