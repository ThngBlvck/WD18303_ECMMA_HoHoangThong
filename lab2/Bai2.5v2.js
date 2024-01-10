function generateTableHeader(headerTitles) {
    if(!headerTitles || headerTitles.length === 0){
        return "";
    }
    let html =``;
    headerTitles.forEach(elements => {
        html += `<th>${elements}</th>`
        // console.log(elements);
    });

    return `<thead><tr>${html}</tr></thead>`;
}
function generateTableRow(rowData){
    if(!rowData || rowData.length === 0){

    }
    return `<tr>
            <td>${rowData.id}</td>
            <td>${rowData.name}</td>
            <td><img src ="${rowData.avatar}" alt="" height="100px"></td>
            <td>${rowData.createAt}</td>

    </tr>`;
}
function generateTable(header,data){
    let headerRow = generateTableHeader(header);
    let html ='';
    data.forEach(element => {
        html +=generateTableRow(element)
    })
    return  `<table>${headerRow} <tbody>${html}</tbody></table>`
};



let rowData =[{
    id: 1,
    name: "Nguyen Van Teo",
    avatar:"https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
    createAt:"2024/01/07"
},
{
    id: 2,
    name: "Nguyen Van Tai",
    avatar:"https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
    createAt:"2024/01/07"
},
{
        id: 3,
        name: "Nguyen Van Anh",
        avatar:"https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
        createAt:"2024/01/07"
},
{
        id: 4,
        name: "Nguyen Van Em",
        avatar:"https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
        createAt:"2024/01/07"
}

];
 let header =[
     "ID",
     "Name",
     "avatar",
     "createAt"
];
document.write(generateTable(header,rowData))
