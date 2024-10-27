



var loginForm = document.querySelector('#login');
var regForm = document.querySelector('#register');
var indicator = document.querySelector("#indicator");
var loginbtn = document.querySelector('#logmenubtn')
var loginmenu = document.querySelector('.login-form');
var cartTab = document.querySelector('.cart-tab');
var cartBtn = document.querySelector('#cartBtn');
var sidebarBtn = document.querySelector('#menubtn');
var sidebar = document.querySelector('#sidebar');






function sideBar() {
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        sidebarBtn.style.color = "#e60023";
    } else {
        sidebarBtn.style.color = "#fff";
    }

}


loginbtn.onclick = () => {
    loginmenu.classList.toggle('active');
    if (loginmenu.classList.contains('active')) {
        loginbtn.style.color = "#e60023";
    } else {
        loginbtn.style.color = "#fff";
    }


}
function loginMenu() {

    loginmenu.classList.toggle('active');
    if (loginmenu.classList.contains('active')) {
        loginbtn.style.color = "#e60023";
    } else {
        loginbtn.style.color = "#fff";
    }
    register();
}
cartBtn.onclick = () => {
    cartTab.classList.toggle('show');
    if (cartTab.classList.contains('show')) {
        cartBtn.style.color = "#e60023"
    } else {
        cartBtn.style.color = "#fff";
    }

}



function register() {

    regForm.style.transform = "translateX(32.5rem)";
    loginForm.style.transform = "translateX(32.5rem)";

    indicator.style.transform = "translateX(10.5rem)";
    indicator.style.width = "25%";

}

function login() {


    regForm.style.transform = "translateX(0)";
    loginForm.style.transform = "translateX(0)";
    indicator.style.transform = "translateX(3rem)";
    indicator.style.width = "20%";
}

/*---remove from cart------*/

var removeBtn = document.getElementsByClassName('remove-btn');
console.log(removeBtn);


for (var i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', remove);


}

function remove(event) {

    var buttonclicked = event.target;
    buttonclicked.parentElement.parentElement.remove();
    updatetotla();
}

var quantityInput = document.getElementsByClassName('quantity');

for (var i = 0; i < quantityInput.length; i++) {
    quantityInput[i].addEventListener('change', function (event) {
        var input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updatetotla();
    })
}








function updatetotla() {
    var container = document.getElementsByClassName('cart-items')[0];
    var cartitem = container.getElementsByClassName('item');
    var total = 0;
    for (var i = 0; i < cartitem.length; i++) {
        var priceElement = cartitem[i].getElementsByClassName('price')[0];
        var quantityElement = cartitem[i].getElementsByClassName('quantity')[0];

        var price = parseFloat(priceElement.textContent.replace('$', ''));
        var quantity = quantityElement.value;
        total += price * quantity;


    }
    total = Math.round(total * 100) / 100;
    document.getElementById('display').textContent = '$' + total;

}



/*----add to cart----*/
var addCart = document.getElementsByClassName('add-to-cart');
for (var i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener('click', addToCart);


}
function addToCart(event) {
    var button = event.target;
    var item = button.parentElement.parentElement.parentElement;
    var name = item.getElementsByClassName('name')[0].innerText;
    var price = item.getElementsByClassName('price')[0].innerText;
    var image = item.getElementsByClassName('image')[0].src;


    console.log(name, price, image);
    addItemToCart(name, price, image);

    updatetotla();


}


function addItemToCart(name, price, image) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('item');


    var cartItems = document.getElementsByClassName('cart-items')[0];


    var cartItemNames = cartItems.getElementsByClassName('name');
    var cartItemQuantity = cartItems.getElementsByClassName('quantity');



    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].textContent == name) {
            cartItemQuantity[i].value++;
            return;
        }
    }




    var cartRowcontent = ` 
    
        <img src="${image}" alt="">
        <p class="name">${name}</p>
        <p class="price">${price}</p>
        <input type="number" class="quantity" value="1">
        <a class="remove-btn"><i class="fa-solid fa-trash" id="remove-btn"></i></a>
      `

    cartRow.innerHTML = cartRowcontent;


    cartItems.append(cartRow);
    cartRow.getElementsByClassName('remove-btn')[0].addEventListener('click', remove);






}

var buyBtn = document.getElementsByClassName('buy');
buyBtn[0].addEventListener('click', purshase);

function purshase() {
    alert("Thank you for your purchase!");
}














// Countdown Timer Logic
function startCountdown(endDate, element) {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = endDate - now;
  
      if (timeLeft <= 0) {
        clearInterval(interval);
        element.innerHTML = "Event Started!";
        return;
      }
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      element.querySelector('.days').innerText = days;
      element.querySelector('.hours').innerText = hours;
      element.querySelector('.minutes').innerText = minutes;
      element.querySelector('.seconds').innerText = seconds;
    }, 1000);
  }
  
  // Initialize the countdown for the giveaway event
  const giveawayEndDate = new Date('2024-11-05T00:00:00').getTime();
  const countdownElement = document.querySelector('.countdown');
  startCountdown(giveawayEndDate, countdownElement);
  