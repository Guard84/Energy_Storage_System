document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      setTimeout(() => {
        window.location.href = "/success.html";
      }, 100);
    });
  }
});
