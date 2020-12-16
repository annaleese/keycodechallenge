Object.addEventListener("keydown", (event) => {
    console.log(event)
    document.getElementById('keyValue').textContent = event.key
})

Object.addEventListener("keydown", (event) => {
    console.log(event)
    document.getElementById('keyCode').textContent = event.code
})

Object.addEventListener("keydown", (event) => {
    console.log(event)
    document.getElementById('charCode').textContent = event.charCode
})

