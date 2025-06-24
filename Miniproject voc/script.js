const showBtn = document.getElementById("show-ingredients-btn");
const ingredients = document.getElementById("ingredients-list");
const startBtn = document.getElementById("start-cooking-btn");
const nextBtn = document.getElementById("next-step-btn");
const steps = document.querySelectorAll(".step");
const progressBar = document.getElementById("progress-bar");
const printBtn = document.getElementById("print-recipe-btn");

let currentStep = 0;

// Toggle ingredients
showBtn.addEventListener("click", () => {
  ingredients.style.display = ingredients.style.display === "block" ? "none" : "block";
});

// Start cooking
startBtn.addEventListener("click", () => {
  steps[currentStep].style.display = "block";
  startBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
  progressBar.style.width = "25%";
});

// Next step
nextBtn.addEventListener("click", () => {
  steps[currentStep].style.display = "none";
  currentStep++;
  if (currentStep < steps.length) {
    steps[currentStep].style.display = "block";
    progressBar.style.width = ((currentStep + 1) / steps.length) * 100 + "%";
  } else {
    nextBtn.style.display = "none";
    progressBar.style.width = "100%";
  }
});

// Print recipe
printBtn.addEventListener("click", () => {
  window.print();
});