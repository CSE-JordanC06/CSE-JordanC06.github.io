const toggleNav = document.getElementById("toggle-nav");
const mainNav = document.getElementById("main-nav");

toggleNav.onclick = () => {
    mainNav.classList.toggle("show");
};