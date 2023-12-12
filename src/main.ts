import {
  changeLanguage,
  LANGUAGE_KEY,
  LANGUAGE,
  getBrowserLanguage,
  toggleLanguage
} from "./languageHandler.js";

const init = () => {
  const preferredLanguage: LANGUAGE =
    (localStorage.getItem(LANGUAGE_KEY) as LANGUAGE) || getBrowserLanguage();
  // changeLanguage(preferredLanguage);
  changeLanguage(LANGUAGE.PL);

  const today = new Date();
  document.querySelector("#currentYear")!.textContent = today
    .getFullYear()
    .toString();
};

document
  .querySelector("[data-i18n=languageSwitch]")
  ?.addEventListener("click",toggleLanguage);

init();
