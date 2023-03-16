const url = require("url");

const { URL } = url;

const base = new URL(
  "http://gugyeoj1n:1234@www.test.com/api/testpath?testkey1=1234&testkey2=5678#hash"
);

console.log("new URL() : ", base);
console.log("url.format() : ", url.format(base));

// protocol :// username : password @ host / pathname / search / hash