var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];

function createFruit(index) {
  var that = this;
  
  this.name = "Name: " + products[index].name;
  this.price = "Price: $" + products[index].price;
  this.image = products[index].image;
  this.borderColor = products[index].color;
  
  this.productEle = document.createElement("div");
  this.productEle.classList.add("product");
  
  this.productImg = document.createElement("img");
  this.productImg.src = this.image;
  this.productEle.appendChild(this.productImg);
  
  this.productName = document.createElement("p");
  this.productName.innerHTML = this.name;
  this.productEle.appendChild(this.productName);
  
  this.productPrice = document.createElement("p");
  this.productPrice.innerHTML = this.price;
  this.productEle.appendChild(this.productPrice);
  
  this.productEle.addEventListener("mouseenter", function() {
    that.colorBorder();
  })
  this.productEle.addEventListener("mouseleave", function() {
    that.blackBorder();
  })
  this.productEle.addEventListener("click", function() {
    imgEle.src = that.image;
    nameEle.innerHTML = that.name;
    priceEle.innerHTML = that.price;
    popUpEle.style.display = "flex";
  })
  
  document.body.appendChild(this.productEle);
}

createFruit.prototype.colorBorder = function() {
  this.productEle.style.border = "2px solid " + this.borderColor;
}

createFruit.prototype.blackBorder = function() {
  this.productEle.style.border = "2px solid black";
}

function createStore() {
  this.fruit = [];
  for (let i = 0; i < 3; i++) {
    this.fruit.push(new createFruit(i));
  }
}

function changePopUp() {
  if (popUpEle.style.display === "none") {
    popUpEle.style.display = "flex";
  } else {
    popUpEle.style.display = "none";
  }
}

createStore();

var popUpEle = document.createElement("div");
popUpEle.classList.add("popUp");

var imgEle = document.createElement("img");
var nameEle = document.createElement("p");
var priceEle = document.createElement("p");

popUpEle.appendChild(imgEle);
popUpEle.appendChild(nameEle);
popUpEle.appendChild(priceEle);

popUpEle.addEventListener("click", function() {
  popUpEle.style.display = "none";
})
document.body.appendChild(popUpEle);