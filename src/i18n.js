import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define translations
const resources = {
  en: {
    translation: {
      "help_center": "Help Center",
      "features": "Features",
      "about": "About",
      "marketplace": "Marketplace",
      "testimonials": "Testimonials",
      "assist": "Assist",
      "get_started": "Get Started",
      "learn_more": "Learn More",
      "trusted_farmers": "Trusted by Farmers Across India",
      "empower_farmers": "Empowering farmers with AI-driven solutions for better crop management, market access, and financial security.",
      "testimonial_1": "This platform transformed my farming. AI insights boosted my crop yield by 30%!",
      "testimonial_2": "Weather predictions are spot on. It helped me avoid major losses this season.",
      "testimonial_3": "I love the smart advisory. It provides the best recommendations for my crops.",
      "testimonial_4": "Market access is amazing! I sold my produce at great prices directly to buyers."
    }
  },
  hi: {
    translation: {
      "help_center": "सहायता केंद्र",
      "features": "विशेषताएँ",
      "about": "के बारे में",
      "marketplace": "बाज़ार",
      "testimonials": "प्रशंसापत्र",
      "assist": "सहायता",
      "get_started": "शुरू करें",
      "learn_more": "और अधिक जानें",
      "trusted_farmers": "भारत भर के किसानों द्वारा विश्वसनीय",
      "empower_farmers": "किसानों को बेहतर फसल प्रबंधन, बाजार पहुंच और वित्तीय सुरक्षा के लिए एआई-संचालित समाधानों के साथ सशक्त बनाना।",
      "testimonial_1": "इस प्लेटफार्म ने मेरी खेती को बदल दिया। एआई अंतर्दृष्टि ने मेरी फसल की उपज को 30% बढ़ाया!",
      "testimonial_2": "मौसम पूर्वानुमान सटीक हैं। इसने मुझे इस सीजन में बड़े नुकसान से बचाया।",
      "testimonial_3": "मुझे स्मार्ट सलाह बहुत पसंद है। यह मेरी फसलों के लिए सबसे अच्छी सिफारिशें प्रदान करता है।",
      "testimonial_4": "बाजार पहुंच अद्भुत है! मैंने अपनी उपज को सीधे खरीदारों को बेचा और अच्छे दाम प्राप्त किए।"
      
    }
  },
  
  
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
