const mapContainer = document.getElementById("map-container");

// Function to add a custom pin on the map
function addCustomPin(x, y, tooltipText) {
    const pin = document.createElement("div");
    pin.className = "custom-pin"; // Use the custom-pin class here
    pin.style.left = x + "px";
    pin.style.top = y + "px";
    pin.addEventListener("mouseover", () => {
        tooltip.style.opacity = 1;
    });
    pin.addEventListener("mouseout", () => {
        tooltip.style.opacity = 0;
    });
    pin.addEventListener("click", () => {
        mapContainer.removeChild(pin);
    });

    const tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.textContent = tooltipText;
    pin.appendChild(tooltip);

    mapContainer.appendChild(pin);
}

// Function to clear all custom pins
function clearCustomPins() {
    const customPins = document.querySelectorAll(".custom-pin");
    customPins.forEach((pin) => {
        mapContainer.removeChild(pin);
    });
}

// Add event listener to the clear button
const clearButton = document.getElementById("clear-pins-btn");
clearButton.addEventListener("click", clearCustomPins);

// Check if the clicked element is a custom pin
function isCustomPin(element) {
    return element.classList.contains("custom-pin");
}

// Add event listener to the map for custom pin placement
mapContainer.addEventListener("click", (event) => {
    const x = event.clientX - mapContainer.offsetLeft;
    const y = event.clientY - mapContainer.offsetTop;
    const target = event.target;

    if (!isCustomPin(target)) {
        addCustomPin(x, y, "Pin");
    }
});