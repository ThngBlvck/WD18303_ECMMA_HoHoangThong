const API_URL = "http://localhost:3000/product";
fetch(API_URL)
    .then(function (response){
        response.json().then(function (data){
            console.log(data)
            let product = data;
            let html = document.getElementById("listpro");

            let child_html = ``
            let index = 1;
            for(let {image, name, price, detail} of product){
                child_html += `
                    <tr>
                        <td>${index++}</td>
                        <td>${name}</td>
                        <td><img src="../assets/img/${image}" width="70px"></td>
                        <td>${price} đ</td>
                        <td>${detail}</td>
                        <td>
                            <button type="button" class="btn btn-success">Sửa</button>
                            <button type="button" class="btn btn-danger">Xoá</button>
                        </td>
                    </tr>
                `
            }
            child_html += ``;
            html.innerHTML = child_html;
        })
    })