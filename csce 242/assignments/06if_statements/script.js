const exerciseOneLink = document.getElementById("exercise-one-link");
const exerciseTwoLink = document.getElementById("exercise-two-link");
const exerciseOne = document.getElementById("exercise-one");
const exerciseTwo = document.getElementById("exercise-two");
const daysMissed = document.getElementById("days-missed");
const deductionResult = document.getElementById("deduction-result");
const attendanceMessage = document.getElementById("attendance-message");
const daysLeft = document.getElementById("days-left");
const semesterMessage = document.getElementById("semester-message");
const toggleNav = document.getElementById("toggle-nav");
const mainNav = document.getElementById("main-nav");

exerciseOneLink.onclick = (e) => {
    e.preventDefault();
    exerciseOne.classList.remove("hidden");
    exerciseTwo.classList.add("hidden");
};

exerciseTwoLink.onclick = (e) => {
    e.preventDefault();
    exerciseOne.classList.add("hidden");
    exerciseTwo.classList.remove("hidden");
};

daysMissed.onchange = () => {
    const days = Number(daysMissed.value);
    const gradeDeduction = (days / 25) * 7;

    if (daysMissed.value === "") {
        deductionResult.innerHTML = "";
        attendanceMessage.innerHTML = "";
    } else if (days < 0 || days > 25) {
        deductionResult.innerHTML = "Please enter a number from 0 to 25.";
        attendanceMessage.innerHTML = "";
    } else {
        deductionResult.innerHTML =
            `You will lose ${gradeDeduction.toFixed(1)}% for skipping ${days} day(s).`;

        if (days === 0) {
            attendanceMessage.innerHTML =
                "Perfect! You are not planning to miss any class.";
        } else if (days <= 2) {
            attendanceMessage.innerHTML =
                "That is not too bad, but try to attend whenever possible.";
        } else if (days <= 5) {
            attendanceMessage.innerHTML =
                "Be careful. Missing several classes can make it hard to keep up.";
        } else if (days <= 10) {
            attendanceMessage.innerHTML =
                "You are missing valuable learning opportunities by skipping class.";
        } else {
            attendanceMessage.innerHTML =
                "That is a lot of class time to miss. Try to make attendance a priority.";
        }
    }
};

const displayDaysLeft = () => {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), 11, 4);
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const difference = lastDay - today;
    const numberOfDays = Math.ceil(difference / millisecondsInDay);

    if (numberOfDays < 0) {
        daysLeft.innerHTML = "The semester has ended!";
        semesterMessage.innerHTML =
            "Great job making it through the semester. Enjoy your break!";
    } else {
        daysLeft.innerHTML =
            `You have ${numberOfDays} days left in the semester.`;

        if (numberOfDays > 100) {
            semesterMessage.innerHTML =
                "Not time to start counting down yet.";
        } else if (numberOfDays > 50) {
            semesterMessage.innerHTML =
                "You are making progress. Keep working hard!";
        } else if (numberOfDays > 20) {
            semesterMessage.innerHTML =
                "The finish line is getting closer!";
        } else if (numberOfDays > 0) {
            semesterMessage.innerHTML =
                "Almost there! Finish the semester strong!";
        } else {
            semesterMessage.innerHTML =
                "Today is the last day of class. You have got this!";
        }
    }
};

toggleNav.onclick = () => {
    mainNav.classList.toggle("show");

    if (mainNav.classList.contains("show")) {
        toggleNav.innerHTML = "▲";
    } else {
        toggleNav.innerHTML = "▼";
    }
};

displayDaysLeft();