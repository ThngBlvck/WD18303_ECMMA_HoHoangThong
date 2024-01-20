// var fs = require('fs');
// var  axios = require('axios');
//
// fs.readFile(
//     './data.json',
//     { endcodeing: 'utf8'},
//     function (err, data) {
//         console.log('Data loaded from disk', data);
//
//         axios.get('http://jsonplaceholder.typicode.com/todos/1')
//             .then(function (res) {
//                 console.log('Data downloaded from url', res.data);
//             });
//     }
// );

const fs = require('fs').promises;
const axios = require('axios');

async function loadData() {
    try {
        // Đọc dữ liệu
        const data = await fs.readFile('./data.json', { encoding: 'utf8' });
        console.log('Data loaded from disk', data);

        // Tải dữ liệu
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos/1');
        console.log('Data downloaded from URL', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Gọi hàm
loadData();
