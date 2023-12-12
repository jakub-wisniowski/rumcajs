type TranslationFile = { [key: string]: string };
export enum LANGUAGE {
    EN = "en",
    PL = "pl"
}

export const LANGUAGE_KEY = "language";

let currentLanguage: LANGUAGE;

const translations = {
    [LANGUAGE.EN]: null,
    [LANGUAGE.PL]: null
};

const fetchLanguageData = async (lang: LANGUAGE): Promise<TranslationFile> => {
    const response = await fetch(`assets/translations/${lang}.json`);
    return response.json();
};

const updateTranslations = (langData: TranslationFile) => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key) el.textContent = langData[key];
    });
};

const setLanguagePreference = (lang: LANGUAGE) => {
    localStorage.setItem(LANGUAGE_KEY, lang);
};

export const getBrowserLanguage = () => {
    const browserLanguage = navigator.language;
    if (browserLanguage === "pl") return LANGUAGE.PL;
    return LANGUAGE.EN;
};

export const changeLanguage = async (language: LANGUAGE.EN | LANGUAGE.PL) => {
    let langData: TranslationFile | null = translations[language];
    if (!langData) {
        langData = await fetchLanguageData(language);
    }
    currentLanguage = language;
    setLanguagePreference(language);
    updateTranslations(langData);
};

export const toggleLanguage = () =>
    changeLanguage(currentLanguage === LANGUAGE.PL ? LANGUAGE.EN : LANGUAGE.PL);
