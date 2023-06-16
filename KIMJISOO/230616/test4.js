let text = "abcdefghijklmnopqrstuvwxyz";
let length = text.length;

let text2 = "Apple, Banana, Kiwi";
let part = text2.slice(7, 13);

let text3 = "Please visit Microsoft!";
let newText = text3.replace("Microsoft", "W3Schools");

let text4 = "Hello World";
let text5 = text4.toUpperCase();

let text6 = "Hello World";
let text7 = text4.toLowerCase();

let text8 = "Hello";
let text9 = "World";
let text10 = text8.concat(" ", text9);

let text11 = "Please locate where 'locate' occurs!";
let index = text11.lastIndexOf("John");

let text12 = "Please locate where 'locate' occurs!";
let index2 = text12.indexOf("locate", 15);

let firstName = `Jane`;
let lastName = `Doe`;
let fullName = `My name is ${firstName} ${lastName}!`;

console.log(length);
console.log(part);
console.log(newText);
console.log(text5);
console.log(text7);
console.log(text10);
console.log(index);
console.log(index2);
console.log(fullName);
