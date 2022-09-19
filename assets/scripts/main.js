var menuButton = document.querySelector("#js-menuButton")

function closeMenu() {
    document.body.classList.remove("menuOpen"),
        menuLinksWithSublinks.forEach(function (t) {
            t.classList.remove("open");
        });
}
menuButton.addEventListener("click", function (t) {
    t.stopPropagation(),
        t.preventDefault(),
        document.body.classList.toggle("menuOpen");
})