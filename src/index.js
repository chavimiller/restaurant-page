import './styles.css';
import cloudMilkLatte from "./images/cloudmilkLatte.png";
import goldenChai from "./images/goldenChai.png";
import moonMatcha from "./images/moonMatcha.png";
import starlightBrew from "./images/starlightBrew.png";
import MCafeLogo from "./images/MCafeLogo.svg";

const navBar = document.querySelector("nav")
const content = document.querySelector("#content");

const moonbeamCafe = document.createElement("div");
moonbeamCafe.classList.add("title");
moonbeamCafe.textContent = "Moonbeam Café"
content.appendChild(moonbeamCafe)

const slogan = document.createElement("div");
slogan.classList.add("slogan");
slogan.textContent = "Sip slow. Stay awhile.";
content.appendChild(slogan)

const viewMenu = document.createElement("button");
viewMenu.classList.add("view-menu");
viewMenu.textContent = "VIEW MENU";
content.appendChild(viewMenu)


const imageRow = document.createElement("div");
imageRow.classList.add("image-row");
content.appendChild(imageRow)

const cloudMilkLatteImg = document.createElement("img");
cloudMilkLatteImg.src = cloudMilkLatte;
imageRow.appendChild(cloudMilkLatteImg)

const goldenChaiImg = document.createElement("img");
goldenChaiImg.src = goldenChai;
imageRow.appendChild(goldenChaiImg)

const moonMatchaImg = document.createElement("img");
moonMatchaImg.src = moonMatcha;
imageRow.appendChild(moonMatchaImg)

const starlightBrewImg = document.createElement("img");
starlightBrewImg.src = starlightBrew;
imageRow.appendChild(starlightBrewImg)

const cafeLogo = document.createElement("img");
cafeLogo.src = MCafeLogo;
cafeLogo.classList.add("cafe-logo")
navBar.insertBefore(cafeLogo, navBar.firstChild)
