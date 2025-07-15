import cloudMilkLatte from "./images/cloudmilkLatte.png";
import goldenChai from "./images/goldenChai.png";
import moonMatcha from "./images/moonMatcha.png";
import starlightBrew from "./images/starlightBrew.png";

export function menuPage() {
    const navBar = document.querySelector("nav")
    const content = document.querySelector("#content");

    content.innerHTML = "";

    const items = [
        {name: "Starlight Brew", image: starlightBrew, description: "Slow-brewed black coffee, sourced from single-origin beans, with a bold, smooth flavor.", price: "₪14"},
        {name: "Cloudmilk Latte", image: cloudMilkLatte, description: "Cardamom-spiced latte with your choice of plant-based milk, lightly sweetened.", price: "₪18"},
        {name: "Moon Matcha", image: moonMatcha, description: "Ceremonial grade matcha with your choice of milk, lightly sweetened.", price: "₪20"},
        {name: "Golden Chai", image: goldenChai, description: "Spiced chai tea with oat milk, infused with turmeric, cinnamon & ginger.", price: "₪18"}
    ]

    const backgroundMenu = document.createElement("div");
    backgroundMenu.classList.add("background-menu");
    content.appendChild(backgroundMenu);

    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Menu";
    content.appendChild(menuTitle);

    const menuCarousel = document.createElement("div");
    menuCarousel.classList.add("menu-carousel");
    content.appendChild(menuCarousel);

    items.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;

        const drinkName = document.createElement("div");
        drinkName.textContent = item.name;
        drinkName.classList.add("drink-name");

        const drinkDescr = document.createElement("div");
        drinkDescr.textContent = item.description;
        drinkDescr.classList.add("drink-description");

        const drinkPrice = document.createElement("div");
        drinkPrice.textContent = item.price;
        drinkPrice.classList.add("drink-price")

        menuCarousel.appendChild(menuItem);
        menuItem.appendChild(img);
        menuItem.appendChild(drinkName);
        menuItem.appendChild(drinkDescr);
        menuItem.appendChild(drinkPrice);
    })
}