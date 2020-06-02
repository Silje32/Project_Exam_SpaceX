// "Hamburger menu"
// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu.

function myMenu() {
var menu = document.getElementById("nav-menu");
if (menu.style.display === "block") {
    menu.style.display = "none";
 } else{
   menu.style.display = "block";
 }
}
