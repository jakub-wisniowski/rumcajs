var _a;
import { changeLanguage, LANGUAGE_KEY, LANGUAGE, getBrowserLanguage, toggleLanguage } from "./languageHandler.js";
var init = function () {
    var preferredLanguage = localStorage.getItem(LANGUAGE_KEY) || getBrowserLanguage();
    // changeLanguage(preferredLanguage);
    changeLanguage(LANGUAGE.PL);
    var today = new Date();
    document.querySelector("#currentYear").textContent = today
        .getFullYear()
        .toString();
};
(_a = document
    .querySelector("[data-i18n=languageSwitch]")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", toggleLanguage);
init();
//# sourceMappingURL=main.js.map