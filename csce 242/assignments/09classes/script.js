class Vacation {
    constructor(title, type, description, thingsToDo, pic, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.pic = pic;
        this.mapSrc = mapSrc;
    }

    get card() {
        const section = document.createElement("section");
        section.classList.add("vacation");
        section.tabIndex = 0;
        section.setAttribute("role", "button");
        section.setAttribute("aria-label", `View ${this.title} details`);

        section.append(this.vacationName());
        section.append(this.vacationType());
        section.append(this.vacationImage());

        section.onclick = () => {
            this.showDetails();
        };

        // Allow keyboard users to open a card.
        section.onkeydown = (event) => {
            if (event.key == "Enter" || event.key == " ") {
                event.preventDefault();
                this.showDetails();
            }
        };

        return section;
    }

    vacationName() {
        const h3 = document.createElement("h3");
        h3.textContent = this.title;
        return h3;
    }

    vacationType() {
        const p = document.createElement("p");
        p.textContent = `${this.type} Vacation`;
        return p;
    }

    vacationImage() {
        const img = document.createElement("img");
        img.src = `images/${this.pic}`;
        img.alt = `View of ${this.title}`;
        return img;
    }

    paragraphInfo(property, value) {
        const p = document.createElement("p");
        const strong = document.createElement("strong");

        strong.textContent = `${property}: `;
        p.append(strong);
        p.append(value);

        return p;
    }

    showDetails() {
        const details = document.getElementById("vacation-details");
        details.innerHTML = "";

        const h2 = document.createElement("h2");
        h2.id = "modal-title";
        h2.textContent = this.title;

        details.append(h2);
        details.append(this.paragraphInfo("Type", this.type));
        details.append(this.paragraphInfo("Description", this.description));
        details.append(this.paragraphInfo("Things To Do", this.thingsToDo));

        const map = document.getElementById("vacation-map");
        map.src = this.mapSrc;
        map.title = `Map of ${this.title}`;

        document.getElementById("vacation-modal").style.display = "block";
        document.getElementById("content").inert = true;
        document.body.style.overflow = "hidden";
        document.getElementById("close-modal").focus();
    }
}

/* Vacation Objects */

const vacations = [];

vacations.push(new Vacation(
    "Asheville",
    "Mountain",
    "A mountain city in western North Carolina surrounded by the Blue Ridge Mountains.",
    "Explore downtown, visit the Biltmore Estate, and enjoy mountain scenery.",
    "asheville.jpg",
    "https://www.google.com/maps?q=Asheville,NC&output=embed"
));

vacations.push(new Vacation(
    "Boone",
    "Mountain",
    "A college town in North Carolina with mountain views and an outdoor atmosphere.",
    "Visit Appalachian State University, explore downtown, and hike nearby trails.",
    "boone.jpg",
    "https://www.google.com/maps?q=Boone,NC&output=embed"
));

vacations.push(new Vacation(
    "Hot Springs",
    "Mountain",
    "A small North Carolina town beside the French Broad River and the Appalachian Trail.",
    "Explore the Appalachian Trail, relax by the river, and enjoy the mountain setting.",
    "hot-springs.jpg",
    "https://www.google.com/maps?q=Hot+Springs,NC&output=embed"
));

vacations.push(new Vacation(
    "Table Rock",
    "Mountain",
    "A South Carolina mountain destination known for its rocky summit and forest scenery.",
    "Hike nature trails, take photographs, and enjoy a picnic near the lake.",
    "table-rock.jpg",
    "https://www.google.com/maps?q=Table+Rock+State+Park,SC&output=embed"
));

vacations.push(new Vacation(
    "Sunset Beach",
    "Beach",
    "A coastal North Carolina town with sandy shores and peaceful ocean views.",
    "Walk along the beach, collect seashells, and watch the sunset.",
    "sunset-beach.jpg",
    "https://www.google.com/maps?q=Sunset+Beach,NC&output=embed"
));

vacations.push(new Vacation(
    "Edisto Beach",
    "Beach",
    "A South Carolina beach community with a relaxed atmosphere and natural coastal scenery.",
    "Explore Edisto Beach State Park, look for shells, and spend time by the ocean.",
    "edisto-beach.jpg",
    "https://www.google.com/maps?q=Edisto+Beach,SC&output=embed"
));

vacations.push(new Vacation(
    "Oak Island",
    "Beach",
    "A North Carolina coastal destination with long beaches and a nearby lighthouse.",
    "Visit the lighthouse area, walk along the shore, and enjoy ocean views.",
    "oak-island.jpg",
    "https://www.google.com/maps?q=Oak+Island,NC&output=embed"
));

vacations.push(new Vacation(
    "Pawleys Island",
    "Beach",
    "A South Carolina barrier island known for its quiet beaches and salt marshes.",
    "Relax on the beach, photograph the marshes, and explore nearby shops.",
    "pawleys-island.jpg",
    "https://www.google.com/maps?q=Pawleys+Island,SC&output=embed"
));

/* Add Cards to the Page */

const vacationGallery = document.getElementById("vacation-gallery");

vacations.forEach((vacation) => {
    vacationGallery.append(vacation.card);
});

/* Close the Modal */

const closeModal = () => {
    document.getElementById("vacation-modal").style.display = "none";
    document.getElementById("content").inert = false;
    document.body.style.overflow = "";

    // Return focus to the card for the displayed vacation.
    const title = document.getElementById("modal-title").textContent;

    document.querySelectorAll(".vacation").forEach((card) => {
        if (card.querySelector("h3").textContent == title) {
            card.focus();
        }
    });
};

document.getElementById("close-modal").onclick = closeModal;

// Close when clicking the shaded area outside the popup.
document.getElementById("vacation-modal").onclick = (event) => {
    if (event.target == document.getElementById("vacation-modal")) {
        closeModal();
    }
};

// Close when pressing Escape.
document.addEventListener("keydown", (event) => {
    if (
        event.key == "Escape" &&
        document.getElementById("vacation-modal").style.display == "block"
    ) {
        closeModal();
    }
});