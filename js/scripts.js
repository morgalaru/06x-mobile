// insert current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear()

//toggle menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;