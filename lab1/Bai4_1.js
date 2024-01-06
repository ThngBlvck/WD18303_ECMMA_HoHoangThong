
fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let array = data;

        let html = document.getElementById('table');

        let index = 1;

        let child_html = `<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Ảnh đại diện</th>
        <th scope="col">Họ tên</th>
        <th scope="col">Ngày tạo</th>
      </tr>
    </thead>`

        array.forEach(element => {
            console.log(element);
            child_html += `
      <tbody>
        <tr>
          <td>${index++}</td>
          <td><img src="${element.avatar}" alt="${element.name}"></td>
          <td>${element.name}</td>
          <td>${element.createdAt}</td>
        </tr>
      </tbody>`;
        });

        child_html += `</table>`;
        html.innerHTML = child_html;
    });