var btnToCart = document.getElementsByClassName('shop-item-button');
for (let i = 0; i < btnToCart.length; i++) {
    const btn = btnToCart[i];
    btn.addEventListener('click',addToCart)
}
addChange();


function addChange() {
    var numQuantity = document.getElementsByClassName('cart-quantity-input');
    for (let i = 0; i < numQuantity.length; i++) {
        const num = numQuantity[i];
        num.addEventListener('change',countPrice);
    }
}

var total=0;
function countPrice(event) {
    let num = event.target;
    let cartRow = num.parentElement.parentElement;
    let price = cartRow.getElementsByClassName('cart-price')[0];
    price = parseFloat(price.innerText.replace('$',''));
    if(isNaN(num.value) || num.value <= 0){
        num.value = 1;
    }
    let total = num.value * price;

    let cartTotal = document.getElementsByClassName('cart-total')[0];
    let totalPrice = cartTotal.getElementsByClassName('cart-total-price')[0];
    totalPrice.innerText = "$"+total;
}

function addToCart(event) {
    let btn = event.target;
    let showItem = btn.parentElement.parentElement;
    
    //ke nol karena cara akses array
    //jadi ini sama dengan id cuman class
    let itemTitle = showItem.getElementsByClassName('shop-item-title')[0].innerText;
    let itemImg = showItem.getElementsByClassName('shop-item-image')[0].src;
    let itemPrice = showItem.getElementsByClassName('shop-item-price')[0].innerText;
    //console.log(itemPrice);
    makeCart(itemTitle,itemImg,itemPrice);
}

function makeCart(itemTitle,itemImg,itemPrice) {

    //if(itemTitle)

    let cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    let dataCart = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${itemImg}" width="100" height="100">
        <span class="cart-item-title">${itemTitle}</span>
    </div>
    <span class="cart-price cart-column">${itemPrice}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>
    `;
    cartRow.innerHTML = dataCart;
    let cartItem = document.getElementsByClassName('cart-items')[0];
    cartItem.append(cartRow);

    let cartItems = document.getElementsByClassName('cart-items')[0];
    let listPrice = cartItems.getElementsByClassName('cart-price');
    for (let i = 0; i < listPrice.length; i++) {
        const price = listPrice[i];
        total += parseFloat(price.innerText.replace('$',''));
        total = Math.round(total) * 100 / 100 ;
    }

    let cartTotal = document.getElementsByClassName('cart-total')[0];
    let totalPrice = cartTotal.getElementsByClassName('cart-total-price')[0];
    totalPrice.innerText = "$"+total;
    addChange();
}