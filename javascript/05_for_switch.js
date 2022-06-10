// for, while, do while
// break, continue

for (let i = 1; i < 6; i++) {
  console.log(i * 1);
}

let i = 1;
while (i < 6) {
  console.log(`i : ${i}`);
  i++;
}

// i = 1;
// do{

// } while(i<6){
//     console.log(i);
//     i++;
// }

let GRADE = "A";
switch (GRADE) {
  case "A":
    console.log("A");
    break;
  case "B":
  // case "C":  // B C 둘다 같은 코드를 실행하고 싶을 때
    console.log("B");
    break;
  default:
    console.log('object');
}
