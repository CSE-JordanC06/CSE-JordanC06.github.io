const road = document.getElementById("road");

const carColors = [
    "#25c6bd",
    "#a8e44d",
    "#6b65ad",
    "#ed8971",
    "#35136d",
    "#c4ecfa",
    "#b36cc0"
];

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const addCar = (xPosition, yPosition, color) => {
    const car = document.createElement("div");

    car.classList.add("car");
    car.style.backgroundColor = color;
    car.style.left = `${xPosition}px`;
    car.style.top = `${yPosition}px`;

    car.innerHTML = `
        <div class="window"></div>
        <div class="wheel wheel-left"></div>
        <div class="wheel wheel-right"></div>
    `;

    road.append(car);
};

const loadCars = (numberOfCars, roadWidth, lanePositions) => {
    for (let i = 0; i < numberOfCars; i++) {
        const xPosition = getRandomNumber(0, roadWidth - 90);
        const yPosition = lanePositions[getRandomNumber(0, lanePositions.length - 1)];
        const color = carColors[getRandomNumber(0, carColors.length - 1)];

        addCar(xPosition, yPosition, color);
    }
};

loadCars(8, road.clientWidth, [8, 78]);