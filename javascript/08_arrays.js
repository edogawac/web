// 배열

let students = ["철수", "영희", "영수"];
console.log(students[0]);

// 배열에는 객체를 넣을 수 있음
let objects = [
  "철수",
  30,
  function () {
    console.log("hello");
  },
];

// 값 가져오기
console.log(objects[2]);

// 수정
objects[2] = '함수였음';

// 길이
objects.length;

// 마지막에 추가, 삭제
objects.push("3반", "z");
objects.pop();

// 처음에 추가, 삭제
objects.unshift("3학년", "여러개 한번에 가능");
objects.shift();

for (let index = 0; index < objects.length; index++) {
  console.log(objects[index]);
}

console.log('-----------------------');

// 배열 반복문 for ... of
// in으로도 가능하지만 비추천
for (let obj of objects){
    console.log(obj);
}