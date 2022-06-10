// 주석

// 인터프린터 언어, 호이스팅

// var 변수 선언 할 때 사용하는데 없어도 되고, 타입 구분이 힘듦
// 보통 let을 이용해 선언하지만 const로 전부 선언 하고, 후에 값이 바뀔 여지가 있으면 let으로 바꾸는게 좋음
// let을 사용하면 다시 같은 이름의 변수명을 let과 함께 사용 했을 때 오류를 발생함
// const. 변하지 않는 상수. 즉 재선언, 재할당 전부 불가능 

/*  
변수 선언 규칙
1. 문자와 숫자, $, _만 사용
2. 첫글자는 숫자가 될 수 없음
3. 예약어는 사용할 수 없음
4. 가급적 상수는 대문자로 선언
5. 변수명은 읽기 쉽고 이해할 수 있게 선언
*/

// --------------------------자료형-----------------------------

// 1. 문자형 String
const string1 = "이렇게 하거나";
const string2 = "이렇게";
const string3 = `${string2} 하거나`; // 문자열안에 변수를 넣고 싶으면 꼭 `` 이안에 넣음
const string4 = string3 + 55; // 문자형 + 숫자형 연산도 가능하며, 결과는 문자형

console.log(string4);

// 2. 숫자형 Number
const PI = 3.14;
const age = 30;

console.log(1 + 2); // 더하기
console.log(5 - 10); // 빼기
console.log(5 * 10); // 곱하기
console.log(10 / 2); // 나누기
console.log(9 % 3); // 나머지
console.log(5 / 0); // 자바스크립트에서는 0으로 나누면 Infinity를 얻을 수 있음
console.log("문자열을 숫자로 나눈다면 ? " / 2); // NaN = Not a Number

// 3. 논리형 Boolean
const a = true;
const b = false;

console.log(a == b);

// 4. null과 undefined
let undef;
console.log(undef); // undefined 값이 할당되지 않았다는 의미

let user = null;
console.log(user); // null 값이 존재하지 않는다는 의미

// 5. 객체형과 심불형

// typeof 연산자
// 본인이 직접 선언 했으면 상관 없겠지만, 다른 개발자가 만들었거나, 
// API 통신을 통해 받아온 데이터들을 타입에 따라 다른 처리를 해야 할 때 많이 사용함

console.log(typeof 3); // number
console.log(typeof "string"); // string
console.log(typeof true); // booelan
console.log(typeof null);
// null이 object(객체형)으로 출력되는데 사실 null은 객체가 아니고
// 자바스크립트 초기버전의 오류이며, 하위호환성을 유지하기 위해 수정하지 않는다고 함
console.log(typeof undefined); // undefined
