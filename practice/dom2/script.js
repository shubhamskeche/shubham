let headingOne = document.querySelector('h1')
let buttonOne = document.querySelector("button")
console.log(buttonOne)
console.log(headingOne)


buttonOne.addEventListener('click', () => {
    headingOne.style.color = "purple"
})