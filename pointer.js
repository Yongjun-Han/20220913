// let a = [1, 2, 3];
// let b = a;

// b.push(4);

// console.log(b);
// console.log(a);

// // a = b 얕은복사

// let c = [1, 2, 3];
// let d = [1,2,3]

// d.push(4);

// console.log(c);
// console.log(d);

// 참조에 의한 복사

let a = [2,3,4];

let b = a.map((value) => value);
console.log(a===b);

// a.map(function(value) {
//   return value;
// })

// function cmdMap(arr) {
//   let temp = [];
//   arr.forEach((value) => {
//     temp.push(value);
//   })
//   return temp;
// }

// function cmdMapTwo(arr) {
//   let temp = [];
//   for(let i=0; i<arr.lenght; i++) {
//     temp[temp.length] = arr[i];
//   }
//   return temp;
// }