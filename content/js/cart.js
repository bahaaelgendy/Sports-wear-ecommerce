let cart = JSON.parse(localStorage.getItem("allCards"));
let cartPage = document.getElementById("cartPage");
let id = []
let allData = []
cart.forEach(pro => {
  if (pro) {
    if (!id.includes(pro.id)) {
      id.push(pro.id)
      pro.num = 1
      allData.push(pro)
    } else {
      let copyData = allData.find(ele => ele.id === pro.id)
      copyData.num += 1
    }

  }

})

cartPage.innerHTML = ""
allData.forEach(element => {
  cartPage.innerHTML += `      <div class="row border-top py-4">
        <div class="col-4 border-end d-flex justify-content-center align-items-center">
          <div class="img-cart ">

            <img class="" src="${element.image}" alt="">
          </div>
        </div>
        <div class="col-7">
          <div class="details mb-5">
            <h2>${element.title}</h2>
            <h4>Qty: ${element.num}</h4>
          </div>
          <div class="">
            <button class="btn btn-info px-4 py-2">+</button>
            <button class="btn btn-secondary px-4 py-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z">
                </path>
              </svg></button>
          </div>
        </div>
        <div class="col-1 price text-end">
          <p> ${element.price}</p>
        </div>
      </div>`
});