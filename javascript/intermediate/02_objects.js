// 생성자 함수(클래스??)
// 보통 첫글자는 대문자

function User(name, age) {
  // this = {} 1

  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name);
  };

  // return this; 2
}

// new를 붙이면 함수 내부에서 빈 객체를 만들고 그것을 리턴하는 형식으로 객체가 생성이 됨(1, 2)

let user1 = new User("A", 10);
let user2 = new User("B", 20);
let user3 = new User("C", 30);

// 계산된 프로퍼티(Computed property)
let a = "age";
const user = {
  name: "Mike",
  [a]: 30, // age : 30 (계산된 프로퍼티)
  [1 + 4]: 5,
  ["안녕" + "하세여"]: "hello",
};

// 객체 관련 메소드
const saram = {
  name: "tom",
  age: 30,
};

// 객체 복제 (두개 이상 가능)
const cloneSaram = saram; // 주소값 저장
const cloneSaram2 = Object.assign({}, saram, { gender: "male" }); // {} 빈객체 + saram 객체가 더해짐. 만약 {}에 속성을 넣으면, 넣은 속성 + saram 객체가 더해짐
console.log(cloneSaram2);

// 객체 키값 배열 반환
const saramKeys = Object.keys(saram);
console.log(saramKeys);

// 객체 값 배열 반환
const saramValues = Object.values(saram);
console.log(saramValues);

// 객체 키/값 배열 반환
const saramEntries = Object.entries(saram);
console.log(saramEntries); // 다차원 배열 형태로

// 키/값 배열을 객체로
const arr = [
  ["name", "tom"],
  ["age", 30],
  ["gender", "male"],
];
console.log(Object.fromEntries(arr));
