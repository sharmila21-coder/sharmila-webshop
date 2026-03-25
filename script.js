fetch("http://localhost:3000/products")
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("products");

    data.forEach(product => {
      container.innerHTML += `
        <div>
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
        </div>
      `;
    });

  })
  .catch(error => console.log(error));