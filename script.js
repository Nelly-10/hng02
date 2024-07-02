// Function to get the current date and time
function getCurrentDateTime() {
  const now = new Date();

  // Get day of the week
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = days[now.getDay()];

  // Get current time
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const currentTime = `${hours}:${minutes}:${seconds}`;

  return { dayOfWeek, currentTime };
}

// Function to get the current week number
function getWeekNumber(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - startOfYear) / 86400000;

  return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
}

// Function to update the display
function updateDisplay() {
  const dateTimeElement = document.getElementById("dateTime");
  const weekNumberElement = document.getElementById("weekNumber");

  const { dayOfWeek, currentTime } = getCurrentDateTime();
  const weekNumber = getWeekNumber(new Date());

  dateTimeElement.textContent = `Today is ${dayOfWeek}, Current Time: ${currentTime}`;
  weekNumberElement.textContent = `Current Week Number: ${weekNumber}`;
}

// Update the display every second
setInterval(updateDisplay, 1000);

// Initial display update
updateDisplay();







/** creating button click show hide navbar **/
let togglebtn = document.querySelector(".togglebtn");
let nav = document.querySelector(".navlinks");
let links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function () {
  this.classList.toggle("click");
  nav.classList.toggle("open");
});

let typed = new Typed(".input", {
  strings: ["Frontend Developer", "UX Designer", "Web Developer"],
  typedSpeed: 70,
  backSpeed: 55,
  loop: true,
});

