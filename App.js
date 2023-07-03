const trigger = document.getElementsByClassName("trigger")[0]
const actualNav = document.getElementsByClassName("actual-nav")[0]
const menu =document.getElementsByClassName("menu")[0]
const closeNav = document.getElementsByClassName("close-mobile-nav")[0]


trigger.addEventListener("click", () =>{
  actualNav.className = "display-nav"
  menu.className = "remove-trigger"
  trigger.className = "remove-trigger"
})

closeNav.addEventListener("click", () =>{
  actualNav.className = "remove-trigger"
  menu.className = "menu"
  trigger.className = "trigger"
})


// do for the trigger too


// Then put an if else condition that if the opacity of the display-menu == 1, it should turn its display to none and it should turn the menu's display to block