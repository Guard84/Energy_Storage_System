window.addEventListener('load', () => {
    const modal = document.querySelector('.cookie-consent-modal');
    const acceptBtn = document.querySelector('.accept-btn');
    const declineBtn = document.querySelector('.decline-btn');
  
    // Перевірка наявності cookieConsent у localStorage
    if (!localStorage.getItem('cookieConsent')) {
      modal.style.display = 'block'; // Відображення модалки
    }
  
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'accepted'); // Збереження вибору
      modal.style.display = 'none'; // Сховати модалку
    });
  
    declineBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'declined'); // Збереження вибору
      modal.style.display = 'none'; // Сховати модалку
    });
  });
  