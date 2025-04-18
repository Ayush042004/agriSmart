import React from 'react'
import { Leaf} from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


function Footer() {
  const {t,i18n} = useTranslation();
  return (
    <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Leaf className="h-8 w-8 text-green-500" />
                <span className="ml-2 text-xl font-bold text-white">CROPX</span>
              </div>
              <p className="mt-4 text-gray-400">{t("footer1")}</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">{t("footer2")}</h3>
              <ul className="space-y-2">
                <li>
                    <Link to="/features" className="text-gray-400 hover:text-green-500">{t("features")}</Link>
                    
                </li>
                <li>
                    <Link to="/about" className="text-gray-400 hover:text-green-500">{t("about")}</Link>
                    
                </li>
                <li>
                    <Link to="/testimonials" className="text-gray-400 hover:text-green-500">{t("testimonials")}</Link>
                    
                </li>
            </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">{t("contact")}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>support@CROPX.com</li>
                <li>+91 1234567890</li>
                <li>Delhi, India</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">{t("follow")}</h3>
              <div className="flex space-x-4">
              <Link to="/" className="text-gray-400 hover:text-green-500">
  <FaFacebook className="h-6 w-6" />
</Link>
<Link to="/" className="text-gray-400 hover:text-green-500">
  <FaTwitter className="h-6 w-6" />
</Link>
<Link to="/" className="text-gray-400 hover:text-green-500">
  <FaInstagram className="h-6 w-6" />
</Link>
<Link to="/" className="text-gray-400 hover:text-green-500">
  <FaLinkedin className="h-6 w-6" />
</Link>


              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">&copy; 2025 CROPX. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer