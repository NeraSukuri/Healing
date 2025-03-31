document.addEventListener("DOMContentLoaded", () => {
    console.log("Healingy Website Loaded");
});
const headings = [
    "Support Your Child's Emotional Growth",
    "Take The First Step Towards A Balanced & FulFilling Life.",
    "Revitalize Your Midn And Sprit"
];

const texts = [
    "Professional counseling services for better mental health",
    "We provide a safe space where you can find peace.Our Expert therapists guide you through overcoming mental challenges with personalized care.",
    "Our Personalized Therapy sessions are designed to help you regain mental clearity and emotional strength"
];

let index = 0;

function changeText() {
    index = (index + 1) % headings.length;
    document.getElementById("hero-heading").style.opacity = 0;
    document.getElementById("hero-text").style.opacity = 0;

    setTimeout(() => {
        document.getElementById("hero-heading").innerText = headings[index];
        document.getElementById("hero-text").innerText = texts[index];

        document.getElementById("hero-heading").style.opacity = 1;
        document.getElementById("hero-text").style.opacity = 1;
    }, 500);
}

setInterval(changeText, 3000);