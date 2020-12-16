let keyValue = document.getElementById("keyValue");
let keyCode = document.getElementById("keyCode");
let charCode = document.getElementById("charCode");

Object.addEventListener("keydown", (event) => {
    console.log(event)
    ('keyValue').InnerHTML = event.key
})

Object.addEventListener("keydown", (event) => {
    console.log(event)
    ('keyCode').InnerHTML = event.code
})

Object.addEventListener("keydown", (event) => {
    console.log(event)
    ('charCode').InnerHTML = event.charCode
})

