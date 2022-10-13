let cart =[
    {id:1,productName:"Telefon",quantity:3,unitPrice:4000},
    {id:2,productName:"Bardak",quantity:2,unitPrice:30},
    {id:3,productName:"Kalem",quantity:1,unitPrice:20},
    {id:4,productName:"Notebook",quantity:1,unitPrice:6000},
    {id:5,productName:"Kitap",quantity:5,unitPrice:55},
    {id:6,productName:"Kahve",quantity:5,unitPrice:20}
]

// Array'i tek tek dolaşır ve istenirse belirli bir şarta göre yeni bir array verir.
cart.map(product=>console.log(product.productName))

cart.map(product=>{
    console.log(product.productName+" : "+product.unitPrice*product.quantity)
})

// Array'i tek tek dolaşır ve arama kriterine göre yeni bir array verir.
let quantityOver2=cart.filter(product=>product.quantity>2)
console.log(quantityOver2)


// Array'i tek tek dolaşır ve verilen kriterin toplam değerini döner (acc başlangıç değerdir ve 0 dır bunun üzerine ekleyerek devam eder
let total=cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0)
console.log(total)


function addToCart(sepet) {
    sepet.push({id:7,productName:"Ruhsat",quantity:1,unitPrice:20})
}
addToCart(cart)
console.log(cart)

let sayi=10
function sayiTopla(number) {
    number+=1
}
sayiTopla(sayi)
console.log(sayi)