// ===============================
// Chocolate Store JavaScript
// ===============================

// Cart Array
let cart = [];

// ------------------------------
// Register Validation
// ------------------------------
function validateRegister() {

    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    if(name=="" || email=="" || phone=="" || password==""){
        alert("Please fill all fields");
        return false;
    }

    alert("Registration Successful!");
    return true;
}

// ------------------------------
// Login Validation
// ------------------------------
function validateLogin(){

    let email=document.getElementById("loginEmail").value;
    let password=document.getElementById("loginPassword").value;

    if(email=="" || password==""){
        alert("Enter Email and Password");
        return false;
    }

    alert("Login Successful!");
    return true;
}

// ------------------------------
// Add to Cart
// ------------------------------
function addToCart(product,price){

    cart.push({
        product:product,
        price:price
    });

    alert(product+" added to cart");

    updateCart();
}

// ------------------------------
// Update Cart
// ------------------------------
function updateCart(){

    let cartItems=document.getElementById("cartItems");

    if(cartItems==null)
        return;

    cartItems.innerHTML="";

    let total=0;

    cart.forEach(function(item,index){

        total+=item.price;

        cartItems.innerHTML+=`

        <tr>

        <td>${item.product}</td>

        <td>₹${item.price}</td>

        <td>

        <button onclick="removeItem(${index})">

        Remove

        </button>

        </td>

        </tr>

        `;

    });

    document.getElementById("total").innerHTML="₹"+total;

    document.getElementById("count").innerHTML=cart.length;
}

// ------------------------------
// Remove Item
// ------------------------------
function removeItem(index){

    cart.splice(index,1);

    updateCart();
}

// ------------------------------
// Checkout
// ------------------------------
function checkout(){

    let totalElement = document.querySelector(".total");


    if(totalElement){

        let amount = totalElement.innerText;


        alert("✅ Order Placed Successfully!\n\n" + amount);

    }

    else{

        alert("Amount not found");

    }

}

// ------------------------------
// Search Product
// ------------------------------
function searchProduct(){

    let input=document.getElementById("search").value.toLowerCase();

    let cards=document.getElementsByClassName("card");

    for(let i=0;i<cards.length;i++){

        let title=cards[i].getElementsByTagName("h3")[0];

        if(title.innerHTML.toLowerCase().indexOf(input)>-1){

            cards[i].style.display="block";

        }

        else{

            cards[i].style.display="none";

        }

    }

}

// ------------------------------
// Welcome Message
// ------------------------------
window.onload=function(){

    console.log("Chocolate Store Loaded Successfully");

}

// ------------------------------
// Remove Static Cart Page Item
// ------------------------------

function removeCartRow(button){

    let row = button.parentElement.parentElement;

    row.remove();

    updateStaticTotal();

}


// Update Cart Page Total

function updateStaticTotal(){

    let rows=document.querySelectorAll("table tr");

    let total=0;


    for(let i=1;i<rows.length;i++){

        let price=rows[i].cells[2].innerText.replace("₹","");

        let quantity=rows[i].cells[3].innerText;


        total += Number(price)*Number(quantity);

    }


    let totalElement=document.querySelector(".total");

    if(totalElement){

        totalElement.innerHTML="Total : ₹"+total;

    }

}
function validateRegister(){

    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;


    if(name=="" || email=="" || phone=="" || password=="" || confirmPassword==""){

        alert("Please fill all fields");

        return false;
    }


    if(password != confirmPassword){

        alert("Password and Confirm Password not match");

        return false;
    }


    alert("✅ Registration Successful!");

    return true;

}
function validateLogin(){

    let email = document.getElementById("loginEmail").value;

    let password = document.getElementById("loginPassword").value;


    if(email=="" || password==""){

        alert("Please enter Email and Password");

        return false;

    }


    alert("✅ Login Successful!");

    return true;

}
function addCartItem(button, price){

    let row = button.parentElement.parentElement;


    let quantityElement = row.querySelector(".quantity");


    let quantity = Number(quantityElement.innerHTML);


    quantity = quantity + 1;


    quantityElement.innerHTML = quantity;


    updateStaticTotal();


    alert("Product quantity increased");

}
