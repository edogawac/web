// 거듭제곱
// const num = 2 ** 3;

// 연산자 줄여 쓰기
// + - * / %
let num = 10;
num = num + 10;
num += 10;

// 증감 연산자, 감소 연산자
// let num = 10;

// 전위 연산
// ++num; --num;

// 후위 연산
// num++; num--;

// 비교 연산자
// > < >= <= == !=

// == (동등 연산자)
// 문자형과 숫자형인데 true가 나옴
const a = 1;
const b = "1";
console.log(a == b); // true

/// === (일치 연산자) 타입까지 비교
console.log(a === b); // false

// 조건문
if(typeof "as" == "string"){
    console.log(true);
} else if(typeof "as" != 'sring'){
    console.log(false);
} else{
    console.log('nothing');
}

// 논리 연산자
// || && !
// OR는 첫번째 true를 발견하면 평가를 멈춤
// AND는 첫번째 false를 발견하면 평가를 멈춤
// 예를들어 운전면허(80%)가 있고 시력(60%)이 좋은 여군(7%)를 뽑을 때
// 다음 '여군인데 시력이 좋고 운전면허가 있는 사람' 순서로 코드를 작성하면 훨씬 빨라짐
