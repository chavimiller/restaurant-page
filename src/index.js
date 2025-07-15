import './styles.css';

import { homePage } from './homepage.js';
import { aboutUs } from './aboutus.js';
import { menuPage } from './menu.js';

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homePage()

homeButton.addEventListener("click", () => {
    homePage()
})

menuButton.addEventListener("click", () => {
    menuPage()
})

aboutButton.addEventListener("click", () => {
    aboutUs()
})

