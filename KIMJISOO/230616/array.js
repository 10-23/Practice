let arr = [1234, "test", true];
console.log(arr.length);

arr.length = 5;
console.log(arr);
console.log(arr.length);

arr[5] = "apple";
console.log(arr);
console.log(arr.length);

arr.push("banana");
console.log(arr);
console.log(arr.length);
