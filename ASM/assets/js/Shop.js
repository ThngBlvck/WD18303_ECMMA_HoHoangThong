
fetch('http://localhost:3000/product')
    .then(response => response.json())
    .then(data => {
        let list = document.getElementById("listpro");

        for (let i = 0; i < data.length; i++) {
            const item = data[i];

            list.innerHTML += `
        <div class="col-md-4" >
        <div class="card mb-4 product-wap rounded-0">
          <div class="card rounded-0">
            <img class="card-img rounded-0 img-fluid" src="assets/img/${item.image}">
            <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
              <ul class="list-unstyled">
                <li><a class="btn btn-success text-white" href="shop-single.html"><i class="far fa-heart"></i></a></li>
                <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="far fa-eye"></i></a></li>
                <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fas fa-cart-plus"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="card-body">
            <a href="shop-single.html" class="h3 text-decoration-none">${item.name}</a>
            <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
            </ul>
            <p class="text-center mb-0">${formatPrice(item.price)}</p>
          </div>
        </div>
        </div>
        
      `;
        }
    })

function formatPrice(price) {
    // You can add your own formatting logic here
    return `$${price.toFixed(3)}`;
}

