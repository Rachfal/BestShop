// HEADER

const headerBurger = document.querySelector(".header-burger")
const headerMenuList = document.querySelector(".header-menu-list")

headerBurger.addEventListener("click", function () {
    this.classList.toggle("header-burger-cross")

    // if (Array.from(this.classList).includes("header-burger-cross")) {
    //     document.querySelector(".header").appendChild(headerMenuList)
        
    // } else {
    //     document.querySelector(".header-menu").appendChild(headerMenuList)
    // }
    
    headerMenuList.classList.toggle("header-menu-list-visible")

})


// CALCULATOR
function calculatorSelectSlideDown() {
    document.querySelector("#calculator-package-select img").classList.toggle("rotated")
    document.querySelector(".calculator-package-select-list").classList.toggle("calculator-package-select-list-hidden")
    calculatorUpdate()
}


function calculatorUpdate() {
    const productPrice = 5;
    const productQuant = Number(document.querySelector("#calculator-products-input").value);
    const orderPrice = 2;
    const orderQuant = Number(document.querySelector("#calculator-orders-input").value);
    const packageName = document.querySelector("#calculator-package-select span").innerText;
    let packagePrice = 0;
    switch (packageName) {
        case "Basic":
            packagePrice = 0;
            break;
        case "Professional":
            packagePrice = 25;
            break;
        case "Premium":
            packagePrice = 60;
            break;
        default:
            packagePrice = 0;
    }
    const accountingChecked = document.querySelector("#chbox-accounting").checked;
    const accountingPrice = accountingChecked ? 10 : 0;
    const terminalChecked = document.querySelector("#chbox-terminal").checked;
    const terminalPrice = terminalChecked ? 5 : 0;
    const sum = productPrice * productQuant + orderPrice * orderQuant + packagePrice + accountingPrice + terminalPrice;
    const sumDiv = document.querySelector(".calculator-sum")

    if (productQuant === 0) {
        document.querySelector(".calculator-products").classList.add("calculator-result-hidden")
    } else {
        document.querySelector(".calculator-products").classList.remove("calculator-result-hidden")
        sumDiv.classList.remove("calculator-result-hidden")
    }
    document.querySelector(".calculator-products span").innerText = `${productQuant} * $${productPrice}`;
    document.querySelector(".calculator-products strong").innerText = `$${productQuant * productPrice}`;

    if (orderQuant === 0) {
        document.querySelector(".calculator-orders").classList.add("calculator-result-hidden")
    } else {
        document.querySelector(".calculator-orders").classList.remove("calculator-result-hidden")
        sumDiv.classList.remove("calculator-result-hidden")
    }
    document.querySelector(".calculator-orders span").innerText = `${orderQuant} * $${orderPrice}`;
    document.querySelector(".calculator-orders strong").innerText = `$${orderQuant * orderPrice}`;

    if (packageName === "Choose Package") {
        document.querySelector(".calculator-package").classList.add("calculator-result-hidden")
    } else {
        document.querySelector(".calculator-package").classList.remove("calculator-result-hidden")
        sumDiv.classList.remove("calculator-result-hidden")
    }
    document.querySelector(".calculator-package span").innerText = packageName;
    document.querySelector(".calculator-package strong").innerText = `$${packagePrice}`;

    if (!accountingChecked) {
        document.querySelector(".calculator-accounting").classList.add("calculator-result-hidden")
    } else {
        document.querySelector(".calculator-accounting").classList.remove("calculator-result-hidden")
        sumDiv.classList.remove("calculator-result-hidden")
    }
    document.querySelector(".calculator-accounting strong").innerText = `$${accountingPrice}`;

    if (!terminalChecked) {
        document.querySelector(".calculator-terminal").classList.add("calculator-result-hidden")
    } else {
        document.querySelector(".calculator-terminal").classList.remove("calculator-result-hidden")
        sumDiv.classList.remove("calculator-result-hidden")
    }
    document.querySelector(".calculator-terminal strong").innerText = `$${terminalPrice}`;
    document.querySelector(".calculator-sum strong").innerText = `$${sum}`;

}

calculatorUpdate()

document.querySelectorAll(".calculator-data input").forEach(el => {
    el.addEventListener("change", calculatorUpdate)
})

document.querySelectorAll(".calculator-data input").forEach(el => {
    el.addEventListener("keypress", function (ev) {
        if (ev.charCode < 48 || ev.charCode > 57) {
            ev.preventDefault();
            alert("type a number")
        };
    })
})
document.querySelector("#calculator-package-select").addEventListener("click", calculatorSelectSlideDown)
document.querySelectorAll(".calculator-package-select-list li").forEach(el => {
    el.addEventListener("click", function () {
        document.querySelector("#calculator-package-select span").innerText = this.innerText;
        calculatorSelectSlideDown()
    })
})

