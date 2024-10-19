const c = require('ansi-colors');

function hello(name) {
  console.log(c.red(name) + c.green(" 님, 안녕하세요?"));
}

hello("신지현");
