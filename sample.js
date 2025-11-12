// sample.js

// --- Variables ---
let userName = "Alice";
const birthYear = 1995;

// --- Function ---
function greetUser(name) {
  console.log(`Hello, ${name}! Welcome to the JavaScript demo.`);
}

// --- Object Example ---
const user = {
  name: userName,
  age: new Date().getFullYear() - birthYear,
  greet() {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
  }
};

// --- Event Handling (if running in a browser) ---
document.addEventListener("DOMContentLoaded", () => {
  greetUser(user.name);
  user.greet();

  const button = document.getElementById("demoButton");
  if (button) {
    button.addEventListener("click", () => {
      alert("Button clicked!");
    });
  }
});

// --- Simple Loop Example ---
for (let i = 1; i <= 5; i++) {
  console.log(`Counting: ${i}`);
}
