const products = [
 {id:1, name:"Laptop", price:800},
 {id:2, name:"Phone", price:400},
 {id:3, name:"Headphones", price:100}
];

const container = document.getElementById("products");

products.forEach(p=>{
 container.innerHTML += `
  <div>
   <h3>${p.name}</h3>
   <p>$${p.price}</p>
   <button onclick="addToCart('${p.name}')">Add to Cart</button>
  </div>
 `;
});

function addToCart(product){
 alert(product + " added to cart");
}