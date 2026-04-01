const thankYouBtn = document.getElementById("thankYouBtn");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

if (thankYouBtn) {
  thankYouBtn.addEventListener("click", () => {
    alert("Thank you for visiting!");
  });
}

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    const topSection = document.getElementById("top");
    if (topSection) {
      topSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formFeedback.textContent = "Please fill out all fields before submitting.";
      formFeedback.style.color = "#b00020";
      return;
    }

    formFeedback.textContent = `Thanks, ${name}! Your message has been received.`;
    formFeedback.style.color = "#0a7d2a";
    contactForm.reset();
  });
}
