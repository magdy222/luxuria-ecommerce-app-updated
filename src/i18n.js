import i18n, { dir } from "i18next";
import { initReactI18next } from "react-i18next";
//import languageDetector from "i18next-browser-languagedetector"
import arabicTranslation from "../src/local/ar.json"
import englishTranslation from "../src/local/en.json"


const resources = {
  en: {
    translation: englishTranslation,
    dir: "ltr"
  },
  ar: {
    translation: arabicTranslation,
    dir: "rtl"
  }
};

i18n
  //.use(languageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false 
    },
    react:{
        useSuspence :false
    }
  });

  export default i18n;