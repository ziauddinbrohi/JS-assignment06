// // Question No.1

var arr = [[]];


// // Question NO.2

var matrix = [ [0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1] ];
  
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      document.write(matrix[i][j] + " ");
    }
    document.write("<br>"); 
  }

// // Question No.3

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
  }

// // Question NO.4 

var num = prompt("Enter a number to show its multiplication table:");
var length = prompt("Enter the length of the table:");


if (isNaN(num) || isNaN(length)) {
  document.write("Please enter valid numbers.");
} else {
 
  document.write("<h2>Multiplication Table of " + num + "</h2>");
  for (var i = 1; i <= length; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
  }
}

// // Question No.5

function generateTable() {
    var number = document.getElementById("numberInput").value;
    if (isNaN(number) || number === "") {
      alert("Please enter a valid number.");
      return;
    }
  
    var table = "";
    for (var i = 1; i <= 10; i++) {
      table += number + " x " + i + " = " + (number * i) + "<br>";
    }
  
    document.write(table);
  }

// //   Question No.6

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];


for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); 
    document.write(fruits[i] + "<br>");
}

// // //  Question No.7

// a. Counting
var counting = [];
for (var i = 1; i <= 15; i++) {
    counting.push(i);
}
console.log("Counting:", counting.join(", "));

// b. Reverse counting
var reverseCounting = [];
for (var i = 10; i >= 1; i--) {
    reverseCounting.push(i);
}
console.log("Reverse counting:", reverseCounting.join(", "));

// c. Even
var evenNumbers = [];
for (var i = 0; i <= 20; i += 2) {
    evenNumbers.push(i);
}
console.log("Even:", evenNumbers.join(", "));

// d. Odd
var oddNumbers = [];
for (var i = 1; i < 20; i += 2) {
    oddNumbers.push(i);
}
console.log("Odd:", oddNumbers.join(", "));

// e. Series (2k)
var k = 1; // You can change this value
var series = [];
for (var i = 1; i <= 10; i++) {
    series.push(i * 2 * k);
}
console.log("Series (2k):", series.join(", "));


// Question no.8


var A = ["cake", "apple pie", "cookie", "chips", "patties"];

function searchItem() {
    var item = prompt("Enter an item to search:");
    
    var index = A.indexOf(item);
    
    if (index !== -1) {
        alert("Item found: " + item + " at index " + index);
    } else {
        alert("Item not found: " + item);
    }
}

 searchItem();

