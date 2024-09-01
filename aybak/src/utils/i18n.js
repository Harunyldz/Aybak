import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Çeviri dosyalarını içe aktar
import translationEN from '../locales/en/translation.json';
import translationTR from '../locales/tr/translation.json';

// Çevirileri yapılandır
const resources = {
    en: {
        translation: translationEN
    },
    tr: {
        translation: translationTR
    }
};

i18n
    .use(initReactI18next) // i18next'i react ile entegre eder
    .init({
        resources,
        lng: "tr", // varsayılan dili ayarla
        fallbackLng: "en", // varsayılan dil çalışmazsa kullanılacak dil
        keySeparator: false, // Anahtar ayrımını devre dışı bırak
        interpolation: {
            escapeValue: false // React zaten XSS koruması yapıyor
        }
    });

export default i18n;
