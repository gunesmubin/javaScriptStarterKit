function addToCart(quantity,productName="Elma") {
    console.log("Sepete Eklendi :" + productName + "Miktar :" +quantity )
}

addToCart()
addToCart("Yumurta",10)

//Değişkeni fonksiyon olarak tanımlama (ERO Function)
let sayHello=()=>{
    console.log("Helle World!")
}
sayHello()

let sayHello2=function()
{
    console.log("Helle World 2 !")
}
sayHello2()

function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("Elma",10,100)
addToCart2("Armut",15,150)

let product1={productName:"Elma",quantity:10,unitPrice:20}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Miktar : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}

addToCart3(product1)

let product2={productName:"Elma",quantity:10,unitPrice:20}
let product3={productName:"Elma",quantity:10,unitPrice:20}
product2=product3
product2.productName="Karpuz"
console.log(product3.productName)

let sayi1 =10
let sayi2 =20
sayi1=sayi2
sayi2=100
console.log(sayi1)

function addToCart4(products) {
    
}

let products=[
    {productName:"Elma",quantity:10,unitPrice:20},
    {productName:"Armut",quantity:5,unitPrice:20},
    {productName:"Muz",quantity:9,unitPrice:20}
]

addToCart4(products)

function add(number1,number2) {
    console.log(number1+number2)
}
add(15,30)

function add2(...numbers) {//... rest operatörüdür. Gönderilen veriyi array yapar.
    let total=0
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]
        console.log(total)
    }
}

add2(10,20,30,40,50)

console.log(Math.max(30,40,600,1,230))

let numbers=[30,40,600,1,230]
console.log(Math.max(...numbers))// numbers arrayini spread etti(ayırdı) ve öyle yazdı.

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]]=[//Array'ilk verisi ilk değişkene, ikinci verisi ikinci değişkene atandı
    {name:"İç Anadolu",popilation:"20M"},
    {name:"Marmara",popilation:"50M"},
    {name:"Karadeniz",popilation:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Kocaeli"],
        ["Sinop","Trabzon"]
    ]
]
console.log(icAnadolu)
console.log(marmara)
console.log(karadeniz)
console.log(icAnadolu.name)
console.log(icAnadolu.popilation)
console.log(icAnadoluSehirleri)

let newProductName,newQuantity,newUnitPrice // Objenin Değişkenlere atanması
({productName:newProductName,quantity:newQuantity,unitPrice:newUnitPrice}
    ={productName:"Elma",quantity:10,unitPrice:20})
    console.log(newProductName)
    console.log(newQuantity)
    console.log(newUnitPrice)


