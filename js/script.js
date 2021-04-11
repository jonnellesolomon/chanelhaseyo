let hamburger = document.querySelector(".hamIcon");
let menu = document.querySelector("#openMenu");
let close = document.querySelector(".closeMenu");

hamburger.addEventListener("click", 
    function displayMenu() {
        menu.style.display = "block";
});

close.addEventListener("click", 
    function closeMenu() {
        menu.style.display = "none";
});

