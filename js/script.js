let headerMenu = document.getElementById("header__menu");

openMenu = () => {
  headerMenu.classList.add("opened");
  headerMenu.setAttribute("onclick", "closeMenu()")
}

closeMenu = () => {
  headerMenu.classList.remove("opened");
  headerMenu.setAttribute("onclick", "openMenu()")
}