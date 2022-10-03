let shop = document.getElementById('shop');

console.log(shop);

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop =()=>{
  return (shop.innerHTML = shopItemData.map((x)=>{
    let {id, name,price, desc1, desc2, desc3, img} = x;
    let search = basket.find((x)=>x.id === id) || [];
    return `
    <div id-product-${id} class="cards-wrapper">
              <div class="card">
                <img class="card-img-top" src=${img} alt="">
                <div class="card-body">
                  <h3>${name}</h3>
                  <ul>
                    <li>${desc1}</li>
                    <li>${desc2}</li>
                    <li>${desc3}</li>
                  </ul>
                  <div class="price-quantity">
                    <h4>Rs ${price}</h4>
                    <div class="buttons">
                      <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                      <div id=${id} class="quantity">${search.item === undefined? 0: search.item}</div>
                      <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                  </div>
                  <a href="cart.html"<button class="cart-btn btn btn-style-green" type="button">Buy Tickets</button></a>
                </div>
              </div>
            </div>
    `;
  }).join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x)=> x.id === selectedItem.id)

  if (search === undefined){
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  }
  else{
    search.item += 1;
  }

  // console.log(basket);
  update(selectedItem.id);

  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x)=> x.id === selectedItem.id)

  if(search === undefined) return;
  else if (search.item === 0) return;
  else{
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x)=>x.item !== 0);
  // console.log(basket);


  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x)=>x.id === id)
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation()
};

let calculation =()=>{
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0);

}

calculation();


const nav = document.querySelector('nav');
console.log(nav);

window.addEventListener("scroll", function()  {
    const offset = window.pageYOffset;

    if(offset > 30) {
      nav.classList.add("scroll")

    }
    else {
      nav.classList.remove("scroll")
    }

});


