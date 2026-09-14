const speechCard = document.getElementById("speech-card");
const speechBubble = document.getElementById("speech-bubble");
const beverage = document.getElementById("beverage");
const beverageMessage = document.getElementById("beverage-message");
const sun = document.getElementById("sun");
const sticker = document.getElementById("sticker");

speechCard.onclick = () => {
    speechBubble.classList.toggle("hidden");
};

beverage.onchange = (e) => {
    beverageMessage.innerHTML = `${e.target.value}: Nice Choice!`;
};

sun.onclick = () => {
    sticker.classList.toggle("hidden");
};