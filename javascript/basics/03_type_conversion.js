// 형변환

// 자동형변환
// "90" + "80" = 170
// "90" / 2 = 45
// 위와 같이 문자형이여도 숫자로 되어 있으면 자동으로 숫자형으로 형변환되어서 계산됨

// 명시적 형변환
// 자동형변환은 의도치 않는 에러를 발생할 수 있으므로 직접 형변환을함
// String() 문자형으로 변환
console.log(
  String(3),
  String(true),
  String(false),
  String(null),
  String(undefined)
);

// Number() 숫자형으로 변환
console.log(
  Number("134"),
  Number(true), // 1
  Number(false), // 0
  Number("12354ㅁㅁ"), // 문자열안에 글자가 같이 있으면 NaN
  Number(null), // 0
  Number(undefined) // NaN
);

// Boolean() 불린형으로 변환
// false만 기억하면 편함
// 숫자0, 빈문자열 "", null, undefined, NaN
// 외에는 전부 true

console.log(
  Boolean("a"),
  Boolean(""),
  Boolean(0),
  Boolean(NaN),
  Boolean(null),
  Boolean(undefined)
);
