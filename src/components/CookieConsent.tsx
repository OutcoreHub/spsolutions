import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'sp-solutions-cookie-consent';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="relative max-w-7xl mx-auto">
            <div className="relative p-6 rounded-2xl overflow-hidden bg-black/95 backdrop-blur-xl luxury-border">
              {/* Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#DAA52010_1px,transparent_1px),linear-gradient(to_bottom,#DAA52010_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-light text-white mb-2">
                    Sua privacidade é importante
                  </h3>
                  <p className="text-[#C0C0C0] font-light">
                    Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site. 
                    Você pode personalizar suas preferências a qualquer momento.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleDecline}
                    variant="outline"
                    className="luxury-border border-[#DAA520]/20 text-white hover:bg-[#DAA520]/10"
                  >
                    Recusar
                  </Button>
                  <Button
                    onClick={handleAccept}
                    className="luxury-border bg-[#1a1a1a] text-[#DAA520] hover:bg-[#222222] hover-shine premium-glow"
                  >
                    Aceitar cookies
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-[#C0C0C0] hover:text-white"
                  onClick={() => setIsVisible(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent; 