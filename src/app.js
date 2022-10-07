console.log("Merhaba Kodlama.io")

//JS TypeSafe değildir.
let dolarBugun=9.30
let dolarDun=9.20
 dolarDun="Adana"
{
    let dolarDun=10
}
console.log(dolarDun)

const euroDun=11.2
// euroDun=11.9 sabit değişkenler sonradan  değiştirilemez.
console.log(euroDun)

//array
let konutKredileri=["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Memur Konut Kredisi"]
for(let i=0;i<konutKredileri.length;i++){
    console.log(konutKredileri[i])
}
