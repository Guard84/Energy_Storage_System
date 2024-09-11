document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      setTimeout(() => {
        const base = window.location.origin;
        window.location.href = `${base}/success.html`;
      }, 100);
    });
  }
});
