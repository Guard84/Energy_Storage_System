const userLang = navigator.language || navigator.userLanguage;
const thankYouMessage = document.getElementById("thank-you-message");

if (userLang.startsWith("uk")) {
  thankYouMessage.textContent = `Дякуємо, ми обов'язково з Вами зв'яжемося!`;;
} else if (userLang.startsWith("ru")) {
  thankYouMessage.textContent = `Спасибо, мы обязательно свяжемся с Вами!`;;
} else {
  thankYouMessage.textContent = `Thank you, we will definitely get in touch with you!`;
}
