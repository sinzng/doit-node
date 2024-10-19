// 매개변수가 있는 함수 표현식을 화살표 함수로 표현하기  (결과 비교 : 02\results\arrow-3.js)

// 함수 표현식
// let sum = function (a, b) { -> 매개변수
//   return a + b;
// }
// console.log(sum(100, 200)); -> 인수 

// 화살표 함수
let sum = (a, b) => {return a+b}; // 앞에는 소괄호 안에 매개변수(없으면 빈 소괄호), 뒤에는 중괄호 안에 함수 실행 내용
// 함수 실행 내용이 한 줄이고 return문이면 중괄호 생략 가능
console.log(sum(100, 200));
