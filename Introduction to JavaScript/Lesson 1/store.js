var btnToCart = document.getElementsByClassName('shop-item-button');
for (let i = 0; i < btnToCart.length; i++) {
    const btn = btnToCart[i];
    btn.addEventListener('click',addToCart)
}

function addToCart(event) {
    let btn = event.target;
    console.log(btn);
}
