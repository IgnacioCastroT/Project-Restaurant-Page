import "./styles.css";
import { loadHome } from "./home.js";
import { loadAboutUs } from "./aboutUs.js";
import { loadMenu } from "./menu.js";

let btnHome = document.querySelector(".btn_home")
let btnMenu = document.querySelector(".btn_menu")
let btnAboutUs = document.querySelector(".btn_about")
let btnOrder = document.querySelector(".btn-order")
let content = document.querySelector("#content")

function clearContent() {
    content.innerHTML = "";
}



btnHome.addEventListener("click", () => {
    clearContent()
    loadHome()
})

btnMenu.addEventListener("click", () => {
    clearContent()
    loadMenu()
})

btnAboutUs.addEventListener("click", () => {
    clearContent()
    loadAboutUs()
})

btnOrder.addEventListener("click", () => {
    alert("¡Tu Pokédex está vacía! Añade hamburguesas desde el menú primero.");
    clearContent();
    loadMenu();
})

loadHome()