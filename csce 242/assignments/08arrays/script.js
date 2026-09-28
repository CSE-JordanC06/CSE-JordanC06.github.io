const mountainDestinations = {
    "Asheville": "https://www.google.com/maps?q=Asheville,+North+Carolina&output=embed",
    "Boone": "https://www.google.com/maps?q=Boone,+North+Carolina&output=embed",
    "Hot Springs": "https://www.google.com/maps?q=Hot+Springs,+North+Carolina&output=embed",
    "Table Rock": "https://www.google.com/maps?q=Table+Rock+State+Park,+South+Carolina&output=embed"
};

const beachDestinations = {
    "Myrtle Beach": "https://www.google.com/maps?q=Myrtle+Beach,+South+Carolina&output=embed",
    "Folly Beach": "https://www.google.com/maps?q=Folly+Beach,+South+Carolina&output=embed",
    "Hilton Head": "https://www.google.com/maps?q=Hilton+Head+Island,+South+Carolina&output=embed",
    "Tybee Island": "https://www.google.com/maps?q=Tybee+Island,+Georgia&output=embed"
};

const destinationType = document.getElementById("destination-type");
const destinationLinks = document.getElementById("destination-links");
const map = document.getElementById("map");

const showMap = mapUrl => {
    map.src = mapUrl;
    map.style.display = "block";
};

const displayDestinations = destinations => {
    destinationLinks.innerHTML = "";
    map.style.display = "none";
    map.src = "";

    Object.keys(destinations).forEach(destinationName => {
        const link = document.createElement("a");
        link.href = "#";
        link.innerHTML = destinationName;

        link.onclick = event => {
            event.preventDefault();
            showMap(destinations[destinationName]);
        };

        destinationLinks.append(link);
    });
};

destinationType.onchange = () => {
    if (destinationType.value === "mountains") {
        displayDestinations(mountainDestinations);
    }
    else if (destinationType.value === "beaches") {
        displayDestinations(beachDestinations);
    }
    else {
        destinationLinks.innerHTML = "";
        map.style.display = "none";
        map.src = "";
    }
};