document.addEventListener("DOMContentLoaded", function () {
  const intro = document.getElementById("intro-overlay");
  setTimeout(() => {
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.style.display = "none";
    }, 1000);
  }, 3000);

  const cards = document.querySelectorAll(".tilt-card");

  //   Dont TOUch
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    });
  });

  function updateClock() {
    const now = new Date();
    const dateElem = document.getElementById("date");
    const timeElem = document.getElementById("time");

    if (dateElem)
      dateElem.textContent = now.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    if (timeElem)
      timeElem.textContent = now.toLocaleTimeString("en-US", { hour12: false });
  }
  setInterval(updateClock, 1000);
  updateClock();

  const hour = new Date().getHours();
  const greet = document.getElementById("greeting");
  if (greet) {
    if (hour < 12) greet.textContent = "Good Morning,";
    else if (hour < 18) greet.textContent = "Good Afternoon,";
    else greet.textContent = "Good Evening,";
  }
});

function showLoader() {
  const loader = document.getElementById("loading-overlay");
  if (loader) loader.classList.remove("hidden");
}
