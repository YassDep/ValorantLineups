// Sample data for crosshairs
const crosshairsData = [
    {
        name: "Asuna",
        code: "0;P;o;1;f;0;0t;1;0l;2;0a;1;0f;0;1b;0",
        imageSrc: "Asuna crosshair.webp",
    },
    {
        name: "TenZ",
        code: "0;P;o;1;0t;1;0l;1;0o;0;0a;0;0f;0;1t;1;1l;1;1o;1;1a;0;1m;0;1f;0",
        imageSrc: "TenZ-crosshair.jpg",
    },
    {
        name: "Shroud",
        code: "0;P;o;0.166;0l;7;0o;4;0a;1;0f;0;1b;0",
        imageSrc: "Shroud crosshair.webp",
    },
    {
        name: "Glasses",
        code: "0;P;t;2;o;1;d;1;0t;10;0l;19;0v;0;0g;1;0o;1;0a;0;0e;0;1l;10;1v;0;1g;1;1o;19;1a;0;1s;0;1e;0",
        imageSrc: "sunglasses crosshair.png",
    },
    {
        name: "Smiley",
        code: "0;P;c;7;t;2;o;1;d;1;z;3;a;0;f;0;0t;10;0l;2;0o;2;0a;1;0f;0;1b;0",
        imageSrc: "smiley crosshair.png",
    },
    {
        name: "Steve",
        code: "0;P;c;5;t;2;o;1;0t;6;0l;4;0v;3;0g;1;0o;0;0a;1;0f;0;1t;6;1v;6;1g;1;1o;5;1a;1;1m;0;1f;0",
        imageSrc: "steve crosshair.png",
    },

];

// Function to create a crosshair container
function createCrosshairContainer(crosshairData) {
    const container = document.createElement("div");
    container.classList.add("person");

    const innerContainer = document.createElement("div");
    innerContainer.classList.add("container");

    const containerInner = document.createElement("div");
    containerInner.classList.add("container-inner");

    const crosshairImage = document.createElement("img");
    crosshairImage.classList.add("circle");
    crosshairImage.src = crosshairData.imageSrc;

    containerInner.appendChild(crosshairImage);
    innerContainer.appendChild(containerInner);
    container.appendChild(innerContainer);

    const divider = document.createElement("div");
    divider.classList.add("divider");

    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = crosshairData.name;

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = crosshairData.code;

    container.appendChild(divider);
    container.appendChild(name);
    container.appendChild(title);

    return container;
}

// Function to add all crosshair containers to the page
function addCrosshairsToPage() {
    const crosshairsContainer = document.getElementById("crosshairsContainer");
    let row = null;

    crosshairsData.forEach((crosshairData, index) => {
        if (index % 3 === 0) {
            row = document.createElement("div");
            row.classList.add("crosshair-row");
            crosshairsContainer.appendChild(row);
        }

        const crosshairContainer = createCrosshairContainer(crosshairData);
        row.appendChild(crosshairContainer);
    });
}

// Call the function to add crosshairs when the page is loaded
window.addEventListener("DOMContentLoaded", addCrosshairsToPage);