let headerMenu = document.getElementById("header__menu");
let header = document.getElementById("header");

openMenu = () => {
  headerMenu.classList.add("opened");
  header.classList.remove("closed-header");
  header.classList.add("opened-header");
  headerMenu.setAttribute("onclick", "closeMenu()")
}

closeMenu = () => {
  headerMenu.classList.remove("opened");
  header.classList.remove("opened-header");
  header.classList.add("closed-header");
  headerMenu.setAttribute("onclick", "openMenu()")
}