
fetch(' http://localhost:3000/categories')
    .then(response => response.json())
    .then(data => {
        let list = document.getElementById("listcate");

        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            list.forEach(function (item) {
                list.innerHTML += `
        <div class="col-lg-3">
    <h1 class="h2 pb-4">Categories</h1>
    <ul class="list-unstyled templatemo-accordion">
        <li class="pb-3">
            <a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="shop.html"> ${item.name}
                <i class="fa fa-fw fa-chevron-circle-down mt-1"></i>
            </a>
        </li>

    </ul>
</div>

      `;
            })
    }});