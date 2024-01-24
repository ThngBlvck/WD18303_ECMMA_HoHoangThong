fetch('http://localhost:3000/product')
    .then(response => response.json())
    .then(data => {
        let hot = data.filter(function (item) {
            return item.hotdeal == 1;
        });

        let cate_hot = document.getElementById("Ghe");

        hot.forEach(function (item) {
            cate_hot.innerHTML += `
        <div class="col-12 col-md-4 mb-4">
          <div class="card h-100">
            <a href="shop-single.html">
              <img src="./assets/img/${item.image}" class="card-img-top" alt="...">
            </a>
            <div class="card-body">
              <ul class="list-unstyled d-flex justify-content-between">
                <li class="text-muted text-right"> ${item.price}đ</li>
              </ul>
              <a href="shop-single.html" class="h2 text-decoration-none text-dark color-dot-black">${item.name}</a>
              <p class="card-text">${item.description}</p>
            </div>
          </div>
        </div>
      `;
        });
    })

