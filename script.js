
// Автоматически обновляем год в подвале сайта
const footerText = document.querySelector("footer p");

if (footerText) {
  footerText.textContent = `© ${new Date().getFullYear()} — Портфолио веб-разработчика`;
}

// Плавная прокрутка к разделам
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
