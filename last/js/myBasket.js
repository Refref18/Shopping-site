let numOfItemsInBasket = 0;

totalPayment();

console.log(localStorage);
let allProducts = JSON.parse(localStorage.getItem("allToBuy"));
if (allProducts != null) {
  numOfItemsInBasket = allProducts.length;
}
document.querySelector(".numOfProducts").innerHTML = numOfItemsInBasket;
if (numOfItemsInBasket !== 0) {
  for (let i = 0; i < allProducts.length; i++) {
    let product = allProducts[i];
    let id = product.productId;
    let price = product.price;
    let properties = product.properties;
    let imgSrc = product.img;

    let readyImage = document.createElement("IMG");
    readyImage.setAttribute("src", imgSrc);
    readyImage.className = "column1";
    readyImage.style.width = "134px";
    readyImage.className = "column1";

    let readyProperties = document.createElement("DIV");
    readyProperties.innerHTML = properties;

    let readyDeleteButton = document.createElement("DIV");
    readyDeleteButton.className = "deleteFromBasket";
    readyDeleteButton.innerHTML = "Sil";

    let readyColumn2 = document.createElement("DIV");
    readyColumn2.className = "column2";
    readyColumn2.appendChild(readyProperties);
    readyColumn2.appendChild(readyDeleteButton);

    let readyColumn3 = document.createElement("DIV");
    readyColumn3.className = "column3";
    readyColumn3.innerHTML = price;

    let newProductDiv = document.createElement("DIV");
    newProductDiv.className = "newProductDiv";
    newProductDiv.appendChild(readyImage);
    newProductDiv.appendChild(readyColumn2);
    newProductDiv.appendChild(readyColumn3);

    let newItem = document.createElement("LI");
    newItem.className = "newProduct";
    newItem.id = id;
    newItem.appendChild(newProductDiv);

    readyDeleteButton.addEventListener("click", function () {
      toBin(product);
    });
    document.querySelector(".itemsInBasket").appendChild(newItem);
  }
}
if (numOfItemsInBasket == 0) {
  let emptyBasket = document.createElement("DIV");
  document.querySelector(".theBasket").appendChild(emptyBasket);
  emptyBasket.className = "emptyBasket";
  emptyBasket.innerHTML = "SEPETİNİZ BOŞ";
  emptyBasket.style.background.color = "dodgerBlue";
  emptyBasket.width = "100%";
}

/*if (numOfItemsInBasket !== 0) {
  for (var i = 0; i < localStorage.length; i++) {
    let product = JSON.parse(localStorage.getItem(localStorage.key(i)));
    let id = localStorage.key(i);
    let price = product.price;
    let properties = product.properties;
    let imgSrc = product.img;

    let readyImage = document.createElement("IMG");
    readyImage.setAttribute("src", imgSrc);
    readyImage.className = "column1";
    readyImage.style.width = "134px";
    readyImage.className = "column1";

    let readyProperties = document.createElement("DIV");
    readyProperties.innerHTML = properties;

    let readyDeleteButton = document.createElement("DIV");
    readyDeleteButton.className = "deleteFromBasket";
    readyDeleteButton.innerHTML = "Sil";

    let readyColumn2 = document.createElement("DIV");
    readyColumn2.className = "column2";
    readyColumn2.appendChild(readyProperties);
    readyColumn2.appendChild(readyDeleteButton);

    let readyColumn3 = document.createElement("DIV");
    readyColumn3.className = "column3";
    readyColumn3.innerHTML = price;

    let newProductDiv = document.createElement("DIV");
    newProductDiv.className = "newProductDiv";
    newProductDiv.appendChild(readyImage);
    newProductDiv.appendChild(readyColumn2);
    newProductDiv.appendChild(readyColumn3);

    let newItem = document.createElement("LI");
    newItem.className = "newProduct";
    newItem.id = id;
    newItem.appendChild(newProductDiv);

    readyDeleteButton.addEventListener("click", function () {
      toBin(newItem.id);
    });
    document.querySelector(".itemsInBasket").appendChild(newItem);
  }
}

if (numOfItemsInBasket == 0) {
  let emptyBasket = document.createElement("DIV");
  document.querySelector(".theBasket").appendChild(emptyBasket);
  emptyBasket.className = "emptyBasket";
  emptyBasket.innerHTML = "SEPETİNİZ BOŞ";
  emptyBasket.style.background.color = "dodgerBlue";
  emptyBasket.width = "100%";
}*/

let quantity = `Ürün Toplamı (${numOfItemsInBasket} Adet)`;
document.querySelector(".quantity").innerHTML = quantity;
document.querySelector(".howMuchToPay").innerHTML = totalPayment();

function toBin(Item) {
  console.log(allProducts);
  document.getElementById(Item.productId).remove();
  numOfItemsInBasket--;
  document.querySelector(".numOfProducts").innerHTML = numOfItemsInBasket;
  let quantity = `Ürün Toplamı (${numOfItemsInBasket} Adet)`;
  document.querySelector(".quantity").innerHTML = quantity;
  let index = allProducts.indexOf(Item);
  console.log(index);
  allProducts.splice(index, 1);
  console.log(allProducts);
  document.querySelector(".howMuchToPay").innerHTML = totalPayment();
  if (numOfItemsInBasket == 0) {
    let emptyBasket = document.createElement("DIV");
    document.querySelector(".theBasket").appendChild(emptyBasket);
    emptyBasket.className = "emptyBasket";
    emptyBasket.innerHTML = "SEPETİNİZ BOŞ";
    emptyBasket.style.background.color = "dodgerBlue";
    emptyBasket.width = "100%";
  }
}

function totalPayment() {
  let totalPayment = 0;
  for (let i = 0; i < numOfItemsInBasket; i++) {
    let product = allProducts[i];
    let id = product.productId;
    let price = product.price;
    let num = "";
    for (let i = 1; i < price.length - 2; i++) {
      if (price[i - 1] !== ".") {
        num += price[i - 1];
      }
    }
    totalPayment += parseInt(num);
  }
  return `${totalPayment} TL`;
}
