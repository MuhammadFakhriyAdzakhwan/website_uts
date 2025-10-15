// Tombol Dark Mode
const toggle = document.getElementById("toggleMode");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Jam Digital
const clock = document.getElementById("clock");
setInterval(() => {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}, 1000);

// Random Motto
const mottoList = [
  "You Can Do More Than You Think",
  "Stay Positive, Work Hard, Make It Happen",
  "Never Stop Learning",
  "Dream Big, Start Small, Act Now",
  "Success is the sum of small efforts repeated daily"
];

document.getElementById("mottoBtn").addEventListener("click", () => {
  const random = mottoList[Math.floor(Math.random() * mottoList.length)];
  document.getElementById("mottoText").innerHTML = `<i>"${random}"</i>`;
});
