let arr = [1, 2, 3, 4, 5, 6, 7];

const sumArray = (array) => array.reduce((acc, currentValue) => acc + currentValue, 0);

console.log(sumArray(arr)); // Kết quả mong muốn 28
