const NumeroSecreto = Math.floor(Math.random() * 10 + 1)
console.log(`El numero con el que se esta jugando es ${NumeroSecreto}`)
let win = false

console.log(`El numero con el que jugaste ${NumeroSecreto}`)

while (win == false) {
    const NumeroJugador = parseInt(
        prompt("Guess the secret number inner 1 and 10")
    );
    if (NumeroJugador === NumeroSecreto){
        console.log("Felicidades Ganaste!")
        win = true
        alert("Felicidades Ganaste")
    }else if (NumeroJugador < NumeroSecreto){
        console.log(`El numero ${NumeroJugador} que elegiste es muy bajo, intenta con uno más alto`)
    }else {
        console.log("El numero es muy alto, intenta otra vez")
        prompt("Guess the secret number inner 1 and 10")
    }    

}
function CalculateDiscount (price, discountpercentage) {
    const discount = (price * discountpercentage)/ 100
    const pricewithdiscount = price - discount
    return pricewithdiscount
}
const originalprice = 1000
const discountpercentage = 20
const price = CalculateDiscount(originalprice, discountpercentage)
console.log(price)

