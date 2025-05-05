function setLanguage(lang) {
    console.log("hi");
    localStorage.setItem("lang", lang);
    location.reload(); // reload to apply language
  }
  
  async function loadTranslations(lang) {
    const response = await fetch(`/lang/${lang}.json`);
    return await response.json();
  }
  
  document.addEventListener("DOMContentLoaded", async () => {
    const lang = localStorage.getItem("lang") || "en";
    const translations = await loadTranslations(lang);
  
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });
  });
  