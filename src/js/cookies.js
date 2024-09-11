window.addEventListener("load", () => {
  const modal = document.querySelector(".cookie-consent-modal");
  const acceptBtn = document.querySelector(".accept-btn");
  const declineBtn = document.querySelector(".decline-btn");

  function showModal() {
    modal.style.display = "block";
  }

  function hideModal() {
    modal.style.display = "none";
  }

  const cookieConsent = localStorage.getItem("cookieConsent");
  if (!cookieConsent) {
    showModal();
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    hideModal();
  });

  declineBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "declined");
    hideModal();
  });
});
