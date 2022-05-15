let hamDropDown = document.querySelector(".ham-dropdown");
let body = document.getElementsById("body")

function myFunction(x) {
    x.classList.toggle("change");
    hamDropDown.classList.toggle("d-none");
    hamDropDown.style.opacity = 0.7;
    body.style.backgroundColor = 'black';
}
