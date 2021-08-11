//RESPONSIVE MENU
let show = true;
const menuSection = document.querySelector(".menu-section")
const menuToggle = document.querySelector(".menu-toggle")

// WHEN I CLICK
menuToggle.addEventListener("click", () => {
   
   //BLOCK THE SCREEN
    document.body.style.overflow = show ? "hidden" : "initial"
   
    //ADDING CLASS "ON" IN "MENU-SECTION"
    menuSection.classList.toggle("on", show)
    show = !show;
})