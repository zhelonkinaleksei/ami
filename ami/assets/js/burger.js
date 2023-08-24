const menuIcon = document.querySelector(".menu__icon");
if (menuIcon) {
   const headMenu = document.querySelector(".header__nav");
   const menuItems = document.querySelectorAll(".header__nav ul li a");
   menuIcon.addEventListener("click", function (e){
      menuIcon.classList.toggle("_active");
      headMenu.classList.toggle("_actived");
      document.body.classList.toggle("_lock");
   });
  // menuItems.forEach(function (item) {
  // item.addEventListener("click", function (e){
    //  menuIcon.classList.remove("_active");
    //  headMenu.classList.remove("_actived");
    //  document.body.classList.remove("_lock");
  // });
//});
}