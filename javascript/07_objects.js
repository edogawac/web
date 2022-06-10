// 객체

// 생성
let superman = {
  name: "기본 이름",
  age: 33,
  // 메소드
  fly: function () {
    console.log("난다~");
  },
  sayHello: function () {
    console.log(`Hello! ${this.name}`);
  },
};

// 접근
let s = superman.age;
console.log(s);
superman.fly();
superman.sayHello();

// 추가
superman.gender = "male";
superman["hairColor"] = "red";
console.log(superman.gender);
console.log(superman.hairColor);

// 삭제
delete superman.hairColor;

// 단축 프로퍼티
const name = "clark";
const age = 33;

superman = {
  name,
  age,
  gender: "male",
};
// 객체만 찍으면 속성 값 전부 나옴
console.log(superman);

// 프로퍼티 존재 여부 확인
// 존재 하지 않을 경우 undefined 출력
console.log(superman.birthDay);

// in 키워드 사용
// 객체안에 해당 속성 있는지 검사 후 true, false 반환
console.log("name" in superman);
console.log("hairColor" in superman);

// for in
const ningen = {
  name: "hito",
  age: 25,
};

for (let key in ningen) {
  // console.log(key);
  // console.log(ningen[key]);
}

// 객체리턴해주는 함수
function makeObjets(name, age) {
  return {
    name,
    age,
    // name : name,
    // age : age,
    hobby: "영화",
  };
}

const nanashi = makeObjets("nanashi1", 25);
console.log(nanashi);

// 인수로 객체 받기
function isAdult(user) {
  if ("age" in user || user.age < 20) {
    // age 가 user안에 없거나 20보다 작으면...
    return false;
  } else {
    return true;
  }
}
const saram = {
  name: "사람1",
  age: 19,
};

console.log(isAdult(saram));

// this
// 화살표 함수는 일반 함수와 달리 자신만의 this를 가지지 않음
// 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져 옴
let boy = {
  name: "mike",
  sayHello: () => {
    console.log(this); // 전역객체
  },
};
// 여기서 this는 boy가 아니라 다른 것을 가리킴
// 브라우저 환경 에서는 window를
// Node js 에서는 global을
boy.sayHello();
