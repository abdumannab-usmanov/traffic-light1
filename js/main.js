let elDiv = document.querySelector(".inner")
let elRed = document.querySelector(".red")
let elYellow = document.querySelector(".yellow")
let elGreen = document.querySelector(".green")


function traffic(){

    setTimeout(() => {
        elRed.style.backgroundColor = "red"
        elYellow.style.backgroundColor = "black"
    }, 2000)
    
    setTimeout(() => {
        elRed.style.backgroundColor = "black"
        elYellow.style.backgroundColor = "yellow" 
    }, 4000)
    
    setTimeout(() => {
        elYellow.style.backgroundColor = "black"
    }, 4500)

    setTimeout(() => {
        elYellow.style.backgroundColor = "yellow"
    }, 5000)

    setTimeout(() => {
        elYellow.style.backgroundColor = "black"
    }, 5500)

    setTimeout(() => {
        elYellow.style.backgroundColor = "yellow"
    }, 6000)

    setTimeout(() => {
        elYellow.style.backgroundColor = "yellow"
    }, 6500)

    setTimeout(() => {
        elYellow.style.backgroundColor = "black"
        elGreen.style.backgroundColor = "green" 
    }, 6500)

    setTimeout(() => {
        elYellow.style.backgroundColor = "yellow"
        elGreen.style.backgroundColor = "black" 
    }, 10000)

    setTimeout(() => {
        elYellow.style.backgroundColor = "yellow"
    }, 10500)

    setTimeout(() => {
        elYellow.style.backgroundColor = "black"
    }, 11000)

    setTimeout(() => {
        elYellow.style.backgroundColor = "yellow"
    }, 11500)
    setTimeout(() => {
        elYellow.style.backgroundColor = "black"
    }, 12000)

    setTimeout(() => {
        elYellow.style.backgroundColor = "yellow"
    }, 12500)

    setTimeout(() => {
        elRed.style.backgroundColor = "red"
        elYellow.style.backgroundColor = "black"
    }, 13000)
}

traffic()

setInterval(() => {
    traffic()
},14000)

