const btnToggleNavbar = document.getElementById("toggle-navbar");
const header__content = document.getElementById("header__content");
const header = document.getElementById("header");

function showNavbar() {
    header.style = "height: 100vh;";
    header__content.style = "display:flex;"
    btnToggleNavbar.classList.remove("hidden");
    // btnToggleNavbar.textContent = "<";
    btnToggleNavbar.classList.add("show");
}
function hiddenNavbar() {
    if(window.outerWidth <= 700) {
        header.style = "height: 4.8rem;";
        header__content.style = "display:none;";
        btnToggleNavbar.classList.remove("show");
        // btnToggleNavbar.textContent = ">";
        btnToggleNavbar.classList.add("hidden");
    }
}
function toggleNavbar() {
    if (btnToggleNavbar.classList.contains("hidden")) 
        showNavbar()
    else 
        hiddenNavbar();
}

btnToggleNavbar.addEventListener("click", toggleNavbar);