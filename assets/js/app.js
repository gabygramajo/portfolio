const btnToggleNavbar = document.getElementById("toggle-navbar");
const header__content = document.getElementById("header__content");
const header = document.getElementById("header");

function showNavbar() {
    header.style = "width: 100%";
    header__content.style = "display:block;"
    btnToggleNavbar.classList.remove("left");
    btnToggleNavbar.textContent = "<";
    btnToggleNavbar.classList.add("right");
}
function hiddenNavbar() {
    header.style = "width: .4rem";
    header__content.style = "display:none;"
    btnToggleNavbar.classList.remove("right");
    btnToggleNavbar.textContent = ">";
    btnToggleNavbar.classList.add("left");
}
function toggleNavbar() {
    if (btnToggleNavbar.classList.contains("left")) 
        showNavbar()
    else 
        hiddenNavbar();
}

btnToggleNavbar.addEventListener("click", toggleNavbar);
// document.querySelectorAll(".navbar__item")
        // .forEach((e) => e.addEventListener("click", hiddenNavbar));