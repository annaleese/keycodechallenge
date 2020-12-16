const heading = element.getElementById("heading");
const keyValue = element.getElementById("keyValue");
const keyCode = element.getElementById("keyCode");
const charCode = element.getElementById("charCode");

element.addEventListener("keypress", (x) => {
keyValue.textContent = `${x.key}`
keyCode.textContent = `${x.code}`
charCode.textContent = `${x.charCode}`
heading.textContent = `${x.charCode}`

})

