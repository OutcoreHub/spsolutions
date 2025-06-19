import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { siteConfig } from '@/config/site';

interface MobileNavProps {
  onNavigate: (id: string) => void;
}

const MobileNav = ({ onNavigate }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="relative z-50 text-white hover:bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-[#367eF3]" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="space-y-8">
                {siteConfig.mainNav.map((item) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavigation(item.href.replace('#', ''))}
                    className="block text-2xl font-medium text-[#C0C0C0] hover:text-[#367eF3] transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.title}
                  </motion.button>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-12 flex flex-col gap-4 items-center"
              >
                <Button
                  onClick={() => handleNavigation('simulador')}
                  className="luxury-border bg-[#1a1a1a] text-[#367eF3] hover:bg-[#050950] px-8 py-6 text-lg h-auto hover-shine premium-glow"
                >
                  Simular agora
                </Button>
                <p className="text-[#C0C0C0] text-sm">
                  © 2025 SP Solutions
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav; 