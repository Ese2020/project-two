let navList = document.querySelector(".nav-list");

function myFunction(x) {
    x.classList.toggle("change");
    navList.classList.toggle("d-none");
    navList.style.opacity = 1;
}

