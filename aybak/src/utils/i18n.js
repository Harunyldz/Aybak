import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'tr'],
    fallbackLng: 'tr',
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      // Farklı namespace'ler için dosya yollarını belirtin
      loadPath: (lng, namespace) => {
        return `./locales/${lng}/${namespace}.json`;
      },
    },
    ns: ['translation', 'recipes',"bakliyat"], // Yüklemek istediğiniz namespace'leri belirtin
    defaultNS: 'translation', // Varsayılan namespace
    react: {
      useSuspense: false,
    },
  });

export default i18n;
