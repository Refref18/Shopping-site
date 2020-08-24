localStorage = [];
var archive = [];
numOfItemsInBasket = 0;
allProductsArray = [];
IdsOfProducts = [];
for (let i = 0; i < localStorage.length; i++) {
  archive[i] = localStorage.getItem(localStorage.key(i));
}
function toBucket(productId) {
  numOfItemsInBasket++;
  let pro = document.getElementById(productId);
  if (pro.getAttribute("added") == null) {
    pro.setAttribute("added", "YES");
    let img = document.getElementById("imageOfProduct").src;
    let price = pro.querySelector(".price").innerHTML;
    let properties = pro.querySelector(".properties").innerHTML;
    let productArray = { productId, properties, price, img };

    allProductsArray.push(productArray);
    IdsOfProducts.push(productId);

    localStorage.setItem("allToBuy", JSON.stringify(allProductsArray));
    console.log(localStorage);
    document.querySelector(".numOfProducts").innerHTML = numOfItemsInBasket;
  }
  document.querySelector(".numOfProducts").innerHTML = numOfItemsInBasket;
}

localStorage.clear();
