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
      "Solutions":"Solutions for",
      "Smart": "Smart",
      "get_started": "Get Started",
      "learn_more": "Learn More",
      "farmers": "Indian Farmers",
      "Productivity": "ProductivityX100",
      "trusted_farmers": "Trusted by Farmers Across India",
      "empower_farmers": "Empowering farmers with AI-driven solutions for better crop management, market access, and financial security.",
      "feature1t":  "AI-Based Crop Yield & Disease Prediction",
      "feature1d": "Get accurate predictions on crop yield and disease outbreaks using AI and Machine Learning models.",
      "feature2t": "Smart Farming Advisory",
      "feature2d": "Data-driven insights for optimal crop selection and management practices.",
      "feature3t": "Market Access",
      "feature3d":  "Connect with sellers and easily buy chemicals and pesticides at the best prices.",
      "feature4t":  "Weather Prediction",
      "feature4d":  "Stay ahead of the weather with accurate predictions and alerts for your region.",
      "feature5t": "Knowledge About Your Crop",
      "feature5d":  "Get access to a vast library of resources and articles on crop management and best practices.",
      "solution": "Comprehensive Farming Solutions",
      "solution1": "Everything you need to manage your farm smarter, not harder.",
      "testimonial_1": "This platform transformed my farming. AI insights boosted my crop yield by 30%!",
      "testimonial_2": "Weather predictions are spot on. It helped me avoid major losses this season.",
      "testimonial_3": "I love the smart advisory. It provides the best recommendations for my crops.",
      "testimonial_4": "Market access is amazing! I sold my produce at great prices directly to buyers.",
      "footer1": "Empowering farmers with smart technology for a better tomorrow.",
      "footer2": "Quick Links",
      "contact": "Contact",
      "follow" : "Follow us "
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
      "Solutions":"समाधान के लिए",
      "Smart": "बुद्धिमान",
      "get_started": "शुरू करें",
      "learn_more": "और अधिक जानें",
      "farmers": "भारतीय किसान",
      "Productivity": "उत्पादकताx100",
      "trusted_farmers": "भारत भर के किसानों द्वारा विश्वसनीय",
      "empower_farmers": "किसानों को बेहतर फसल प्रबंधन, बाजार पहुंच और वित्तीय सुरक्षा के लिए एआई-संचालित समाधानों के साथ सशक्त बनाना।",
      "feature1t":  "एआई-आधारित फसल उत्पादन और रोग पूर्वानुमान",
      "feature1d": "एआई और मशीन लर्निंग मॉडल का उपयोग करके फसल उत्पादन और रोग प्रकोपों का सटीक पूर्वानुमान प्राप्त करें।",
      "feature2t": "स्मार्ट खेती परामर्श",
      "feature2d": "अनुकूल फसल चयन और प्रबंधन प्रथाओं के लिए डेटा-संचालित जानकारी।",
      "feature3t":"बाजार पहुँच",
      "feature3d": "विक्रेताओं से जुड़ें और रसायन व कीटनाशक सबसे अच्छी कीमतों पर आसानी से खरीदें।",
      "feature4t":"मौसम पूर्वानुमान",
      "feature4d":  "अपने क्षेत्र के लिए सटीक मौसम पूर्वानुमान और अलर्ट के साथ मौसम की जानकारी पहले से प्राप्त करें।",
      "feature5t": "अपनी फसल के बारे में ज्ञान",
      "feature5d": "फसल प्रबंधन और सर्वोत्तम प्रथाओं पर संसाधनों और लेखों के विशाल संग्रह तक पहुँच प्राप्त करें।",
      "solution": "समग्र कृषि समाधान",
      "solution1": "आपकी खेती को अधिक स्मार्ट तरीके से प्रबंधित करने के लिए हर जरूरी सुविधा।",
      "testimonial_1": "इस प्लेटफार्म ने मेरी खेती को बदल दिया। एआई अंतर्दृष्टि ने मेरी फसल की उपज को 30% बढ़ाया!",
      "testimonial_2": "मौसम पूर्वानुमान सटीक हैं। इसने मुझे इस सीजन में बड़े नुकसान से बचाया।",
      "testimonial_3": "मुझे स्मार्ट सलाह बहुत पसंद है। यह मेरी फसलों के लिए सबसे अच्छी सिफारिशें प्रदान करता है।",
      "testimonial_4": "बाजार पहुंच अद्भुत है! मैंने अपनी उपज को सीधे खरीदारों को बेचा और अच्छे दाम प्राप्त किए।",
      "footer1": "स्मार्ट तकनीक के साथ किसानों को सशक्त बनाना एक बेहतर कल के लिए।",
      "footer2":"त्वरित लिंक",
      "contact": "संपर्क",
      "follow": "हमें फॉलो करें",
      
    }
  },
  
  
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
