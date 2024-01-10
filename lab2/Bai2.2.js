const source = [1,2,3,4,5,6,7,8,9,10];
function removeFistTwo(list) {
    const [a, b, ...arr] = list; // Thay đổi code ở đây
    return arr;
}
const arr = removeFistTwo(source);
console.log(arr) // Kết quả mong muốn  [3,4,5,6,7,8,9,10]
console.log(source) // Kết quả mong muốn  [1,2,3,4,5,6,7,8,9,10]