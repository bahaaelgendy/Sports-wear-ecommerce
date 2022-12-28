const section = window.location.search.split("?").at(-1)
let loading = document.querySelector(".loading")
let myData = async function () {
    const response = await fetch("data.json");
    const data = await response.json().then(loading.style.display ="none")
    displayProducts(data[section])
}
document.title = `${section} | Adidas`

document.getElementById("title").innerText = `${section}`
function displayProducts(listOfData) {
    let templeteContent = ""
    for (let i = 0; i < listOfData.length; i++) {
        templeteContent += `<div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card my-3">
        <img src="${listOfData[i].image}">
        <div class="card-body">
        <h5 class="card-title">${listOfData[i].title}</h5>
        <p class="card-text">${listOfData[i].price}</p>
        <a id=${listOfData[i].id} class="addToCard">Add To Card</a>
            </div>
        </div>
    </div>
    `

    }
    document.querySelector(".show-data").innerHTML = templeteContent


    let productArr = []
    if (JSON.parse(localStorage.getItem("allCards"))) {
        productArr.push()
        JSON.parse(localStorage.getItem("allCards")).forEach(ele => {
            productArr.push(ele)
        })
    }
    document.querySelectorAll("a").forEach(ele => {
        ele.onclick = () => {
            let myProduct = listOfData.find(product => product.id == ele.id)
            productArr.push(myProduct)
            localStorage.setItem("allCards", JSON.stringify(productArr))
        }
    })
}

window.addEventListener("load", () => {
    myData()
})