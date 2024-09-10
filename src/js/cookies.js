window.addEventListener('load', () => {
    const modal = document.querySelector('.cookie-consent-modal');
    const acceptBtn = document.querySelector('.accept-btn');
    const declineBtn = document.querySelector('.decline-btn');
  
    if (!localStorage.getItem('cookieConsent')) {
      modal.style.display = 'block';
    }
  
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'accepted');
      modal.style.display = 'none';
    });
  
    declineBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'declined');
      modal.style.display = 'none';
    });
  });
  