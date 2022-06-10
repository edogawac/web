// 함수
// 1. 한번에 한작업에 집중
// 2. 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍

// 함수 선언문
// 컴파일 전 이러한 함수들을 따로 모아놔서 현재 이 함수가 선언된 곳 전 단계부터 사용 가능 하게 함
function sayHello(name) {
  console.log(`Hello, ${name}`);
}

// 기본값
function defaultValue(value = "기본값") {
  console.log("인수가 없으면 " + value);
}

// return
// void 함수이거나, return; 만 있을 시 항상 undefined를 반환함
function returnFunction() {
  console.log("object");
  return;
}
const result = returnFunction();
console.log(result);

// 함수 표현식
// 자바스크립트에서 한줄씩 읽어가는데 해당 코드에 도달하면 생성되어서 그 이후부터 사용 가능
let say = function () {
  console.log("Hello");
};
say();

// 화살표 함수
let add = (num1, num2) => (num1 + num2);
// 리턴문이 한줄이면 괄호 생략 가능 (num1, num2) => num1 + num2;
// 인수가 하나라면 괄호 생략 가능 name => `Hello ${name}`;
console.log(add(5, 3));
