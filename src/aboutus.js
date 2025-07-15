
export function aboutUs() {
    const navBar = document.querySelector("nav")
    const content = document.querySelector("#content");

    content.innerHTML = "";

    const backgroundAbout = document.createElement("div");
    backgroundAbout.classList.add("background-about");
    content.appendChild(backgroundAbout);

    const welcomeTitle = document.createElement("div");
    welcomeTitle.textContent = "Welcome to Moonbeam Café"
    welcomeTitle.classList.add("welcome");

    const welcomeParagraph = document.createElement("div");
    welcomeParagraph.textContent = "We craft soulful drinks with organic ingredients, plant-based milks, and local herbs. Whether you're journaling, working, or simply daydreaming, Moonbeam is your space to slow down and feel at home.";
    welcomeParagraph.classList.add("paragraph");

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");

    const location = document.createElement("div");
    location.textContent = "Location";
    location.classList.add("location-title");

    const locationParagraph = document.createElement("div");
    locationParagraph.textContent = "Tucked between the old bookshop and the flower stall at Rothschild 19, Tel Aviv, our café is the perfect hideaway in the heart of the city.";
    locationParagraph.classList.add("paragraph");
    
    const hours = document.createElement("div");
    hours.textContent = "Hours";
    hours.classList.add("hours-title");

    const hoursParagraph = document.createElement("div");
    hoursParagraph.innerHTML = "Monday-Thursday: 8:00am - 6:00pm<br>Friday: 8:00am - 2:00pm<br>Saturday: Closed<br>Sunday: 9:00am - 4:00pm"
    hoursParagraph.classList.add("paragraph");

    content.appendChild(welcomeTitle);
    content.appendChild(welcomeParagraph);
    content.appendChild(infoContainer);
    infoContainer.appendChild(location);
    infoContainer.appendChild(locationParagraph);
    infoContainer.appendChild(hours);
    infoContainer.appendChild(hoursParagraph);

}