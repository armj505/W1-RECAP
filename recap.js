const name = "Ahmad";
let age = 30;
const hobbies = ["playing games", "watching anime ", "strolling "];

console.log(
  `My name is ${name}. I am ${age} years old. my hobbies are ${hobbies}`
);

function func(x, y) {
  let sum = x + y + 1;
  console.log(sum);
}
func(4, 5);

function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
countDown(20);

function nameRemove(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Ali") {
      continue;
    }
    console.log(arr[i]);
  }
}
const friends = ["Husain", "Saleh", "Ali", "Mohammad", "Abdullah"];
nameRemove(friends);
