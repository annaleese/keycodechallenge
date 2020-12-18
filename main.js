let keyValue = document.getElementById("keyValue");
let keyCode = document.getElementById("keyCode");
let charCode = document.getElementById("charCode");
let heading = document.getElementById ("heading")

window.addEventListener("keydown", (event) => {
    console.log(event)
    keyValue.innerHTML = event.key
    keyCode.innerHTML = event.code
    charCode.innerHTML = event.keyCode
    heading.innerHTML = event.keyCode
})


