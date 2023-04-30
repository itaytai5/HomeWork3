// LOOPS

// Exercise 1

// for(let num = 1 ; num <= 20; num++){
//     if(num% 2 === 0){
//        console.log(num);
//    }
// }

// Exercise 2

// for(let num = 1; num <= 10; num++){
//     console.log(num);
// }

// Exercise 3

//  for(let num = 1; num <=50 ; num++){

//  if(num% 3 === 0 && num% 5 === 0) {
//       console.log("FizzBuzz")
//  }else if(num% 3 === 0)
//      console.log("Fizz")
//  else if(num% 5 === 0) {
//       console.log("Buzz")
//   }
//  }

// Exercise 4

//let sum = 0;
//let i = 0;

//while (i < 5) {
//i++;
//  sum = sum + i;
//}
//console.log(sum);

// Exercise 5

// let sum = 0;

// for (let a = 1; a <= 1000; a++) {
//   sum = sum + a;
// }
// console.log(sum);

// Exercise 6

//let num = prompt("whats your number");
//for (i = 1; i < 10; i++) {
// console.log(num + "*" + i + "=" + num * i);
//}

// Exercise 7

//let colors = ["red", "green", "blue"];

//for (i = 0; i < colors.length; i++) {
//  console.log(colors[i]);
//}

// Exercise 15

// let sum = 0;
// let array = [1, 2, 3, 4];

// for (let i = 0; i < array.length; i++) {
//   sum = sum + array[i];
//   console.log(sum);
// }

// ARRAYS

function reverseOrder(arr) {
  let reversedArray = arr.sort((a, b) => b.localeCompare(a));
  return reversedArray;
}
let arr = ["Itay", "Boris", "Michael"];
reverseOrder(arr);
console.log("arr:", arr);
