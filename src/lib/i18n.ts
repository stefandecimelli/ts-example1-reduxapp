import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import english from "../messages/en.json"
import french from "../messages/fr.json"
import { getSearchParams } from "./common";

const LOCALE_SEARCH_PARAM = 'locale';
const DEFAULT_LOCALE = 'en';

i18next.use(initReactI18next).init({
    resources: {
        en: { translation: english },
        fr: { translation: french },
    }, 
    fallbackLng: DEFAULT_LOCALE,
});

export const getLocaleFromSearchParams = (): string => {
    return getSearchParams().get(LOCALE_SEARCH_PARAM) || DEFAULT_LOCALE;
};

export const setLocaleInSearchParams = (locale: string) => {
    const searchParams = getSearchParams();
    searchParams.set(LOCALE_SEARCH_PARAM, locale);
    window.history.pushState({}, '', `${window.location.pathname}?${searchParams}`);
}

export default i18next;
