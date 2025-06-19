import { motion } from 'framer-motion';

const PartnersSection = () => {
  const partners = [
    {
      name: "Banco do Brasil",
      logo: "/partners/bancobras.png",
    },
    {
      name: "Bradesco",
      logo: "/partners/hs.webp",
    },
    {
      name: "Itaú",
      logo: "/partners/Itau.jpg",
    },
    {
      name: "Santander",
      logo: "/partners/santander.webp",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 section-tag backdrop-blur-sm rounded-full px-4 py-2 mx-auto mb-6">
            <span className="size-2 rounded-full animate-pulse dot"></span>
            <span className="text-sm font-medium">Parceiros</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#367eF3] to-[#050950]">parceiros</span>
          </h2>
          <p className="text-[#C0C0C0] text-lg font-light max-w-2xl mx-auto">
            Trabalhamos com as principais instituições financeiras do mercado
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group w-48 h-48"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm luxury-border p-6">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#367eF310_1px,transparent_1px),linear-gradient(to_bottom,#367eF310_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
                
                {/* Logo */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#367eF3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-[#367eF3]/20 via-[#367eF3]/0 to-[#367eF3]/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#367eF310_0%,transparent_65%)] opacity-30"></div>
      </div>
    </section>
  );
};

export default PartnersSection; 