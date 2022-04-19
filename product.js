function input() {
    const productid = document.querySelector('input[name="productid"]');
    const productdesc = document.querySelector('input[name="productdesc"]');
    const price = document.querySelector('input[name="price"]');
    const user = document.querySelector('input[name="user"]');
    const status = document.querySelector('input[name="status"]')
    const email = document.querySelector('input[name="email"]');
    let submit = validate(productID, productdesc, price, user, status, email) 

    return submit;
}

function validate(productID, productdesc, price, user, status, email) {

    let valid = true;

    if (productid.length !== 6 || productid !== /[0-9]{8}/){
        invalidreading(productid);
    }

    if (!productdesc.value || productdesc.length <= 20){
        invalidreading(productdesc);
    }

    if(price.length < 3 || price.length > 0 || price !== /[0-9]{3}/){
        invalidreading(price);
    }

    if(user.length < 6 || /^[a-z][A-Z]/){
        invalidreading(user);
    }
    
    if(!email.value){
        invalidreading(email);
    }
}

function invalidreading(con){
    element.nextElementSibling.classList.remove("no_error");
}

function reset(){
    document.getElementById("signup").reset();  
}