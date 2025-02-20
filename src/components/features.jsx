"use client";
import { motion } from "framer-motion";
import { Brain, Flower2, Store, Cloud, BookOpen } from "lucide-react";
import { useTranslation } from 'react-i18next'


function SquishyCard()  {
  
 const {t,i18n} = useTranslation();
 const features = [
  
  {
    icon: <Brain className="w-12 h-12 text-green-600" />,
    title: t("feature1t"),
    desc: t("feature1d"),
  },
  {
    icon: <Flower2 className="w-12 h-12 text-green-600" />,
    title: t("feature2t"),
    desc: t("feature2d"),
  },
  {
    icon: <Store className="w-12 h-12 text-green-600" />,
    title: t("feature3t"),
    desc: t("feature3d"),
  },
  {
    icon: <Cloud className="w-12 h-12 text-green-600" />,
    title: t("feature4t"),
    desc: t("feature4d"),
  },
  {
    icon: <BookOpen className="w-12 h-12 text-green-600" />,
    title: t("feature5t"),
    desc: t("feature5d"),
  },
];
  return (
    <section id="features" className="bg-gray-50 px-6 py-16">
      
      <div className="text-center max-w-7xl">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {t("solution")}
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          {t("solution1")}
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mt-12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
        {features.map((item, index) => (
          <Card key={index} icon={item.icon} title={item.title} desc={item.desc} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ icon, title, desc }) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 1, ease: "backInOut" }}
      variants={{ hover: { scale: 1.05 } }}
      className="relative h-80 w-72 shrink-0 overflow-hidden rounded-xl bg-white p-6 shadow-lg"
    >
      
      <div className="relative z-10 text-center">
        <div className="flex justify-center mb-3">{icon}</div>
        <motion.h3
          initial={{ scale: 0.9 }}
          variants={{ hover: { scale: 1 } }}
          transition={{ duration: 0.8, ease: "backInOut" }}
          className="text-lg font-semibold text-green-600"
        >
          {title}
        </motion.h3>
        <p className="mt-2 text-gray-600">{desc}</p>
      </div>

     

      
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{ hover: { scale: 1.5 } }}
      transition={{ duration: 1, ease: "backInOut" }}
    >
      <motion.circle
        variants={{ hover: { scaleY: 0.5, y: -25 } }}
        transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#f1f5f9"
      />
      <motion.ellipse
        variants={{ hover: { scaleY: 2.25, y: -25 } }}
        transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#f1f5f9"
      />
    </motion.svg>
  );
};

export default SquishyCard;
