let keyValue = document.getElementById("keyValue");
let keyCode = document.getElementById("keyCode");
let charCode = document.getElementById("charCode");
let heading = document.getElementById ("Heading")

window.addEventListener("keydown", (event) => {
    console.log(event)
    keyValue.innerHTML = event.key
    keyValue.innerHTML = event.code
    keyValue.innerHTML = event.keyCode
    Heading.innerHTML = event.keyCode
})

window.addEventListener("keydown", (event) => {
    console.log(event)
    keyCode.innerHTML = event.code
})

window.addEventListener("keydown", (event) => {
    console.log(event)
    charCode.innerHTML = event.charCode
})

