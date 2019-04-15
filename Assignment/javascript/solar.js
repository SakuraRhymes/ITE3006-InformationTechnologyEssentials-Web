function onHoverChangeiframe(planetName) {
    var iframe = document.querySelector("#iframe_planet");
    switch (planetName) {
        case "Mercury":
            iframe.src = "mercury.html";
            break;
        case "Venus":
            iframe.src = "venus.html";
            break;
    }
}

