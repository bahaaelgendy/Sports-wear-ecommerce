
// slider

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});


//loading....
$("document").ready(function () {
    $(".loading").fadeOut(2500, function () {
        $("body").css("overflow-y", "auto");
    });
});
// nav and btnup

let btnUp = document.querySelector(".btn-up");
let navFixed = document.querySelector(".nav-fixed ");

btnUp.addEventListener("click", function () {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});

window.onscroll = function () {
    if (scrollY >= 390) {
        btnUp.classList.replace("hide", "show");
        navFixed.classList.add("nav-fixed");
    } else {
        btnUp.classList.replace("show", "hide");
        navFixed.classList.remove("nav-fixed");
    }
}

///////////////

let myArray = [];
let newArray = JSON.parse(localStorage.getItem("allCards")) || [];
let myData = async function () {
    const response = await fetch("data.json");
    const data = await response.json();
    let listOfData = data.hoodies
    myArray = listOfData
    displayProducts(listOfData)
}
myData();

function displayProducts(listOfData) {
    let templeteContent = ""
    for (let i = 0; i < listOfData.length; i++) {
        templeteContent += `<div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card">
            <img src="${listOfData[i].image}">
            <div class="card-body">
                <h5 class="card-title">${listOfData[i].title}</h5>
                <p class="card-text">${listOfData[i].price}</p>
                <a href="#" onclick = "setProduct(${myArray[i].id})">Add To Card</a>
            </div>
        </div>
    </div>
`
    }
    document.querySelector(".show-data").innerHTML = templeteContent
}


function setProduct(id) {
    let chooseProduct = myArray[id - 1]
    let countProduct = newArray.find((item) => {
        item.id === chooseProduct.id
    })
    if (countProduct) {
        countProduct.count += 1
    } else {
        newArray.push({ ...chooseProduct, count: 1 })
    }
    localStorage.setItem("allCards", JSON.stringify(newArray))
}
