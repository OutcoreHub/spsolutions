import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Com a SP Solutions, construí meu primeiro milhão sem juros, e com planejamento. Mudou minha visão de patrimônio.",
      author: "Lucas",
      location: "Goiânia",
      role: "Empresário"
    },
    {
      quote: "A melhor decisão da minha vida foi parar de financiar e começar a planejar.",
      author: "Cláudia",
      location: "São Paulo",
      role: "Investidora"
    },
    {
      quote: "Graças ao planejamento da SP Solutions, consegui expandir meus negócios de forma inteligente.",
      author: "Roberto",
      location: "Rio de Janeiro",
      role: "Empreendedor"
    }
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
            <span className="text-sm font-medium">Depoimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Histórias de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#367eF3] to-[#050950]">transformação real</span>
          </h2>
          <p className="text-[#C0C0C0] text-lg font-light max-w-2xl mx-auto">
            Conheça as experiências de quem já transformou sua visão de patrimônio com a SP Solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm luxury-border h-full">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#367eF310_1px,transparent_1px),linear-gradient(to_bottom,#367eF310_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <Quote className="w-10 h-10 text-[#367eF3] mb-6" />
                  
                  <blockquote className="mb-6">
                    <p className="text-lg font-light text-white leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-gradient-to-br from-[#367eF3] to-[#050950] opacity-20"></div>
                    <div>
                      <p className="text-white font-medium">{testimonial.author}</p>
                      <p className="text-[#C0C0C0] text-sm">
                        {testimonial.role} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#367eF3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-[#367eF3]/20 via-[#367eF3]/0 to-[#367eF3]/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">
            Seu futuro financeiro pode ser mais <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#367eF3] to-[#050950]">estratégico</span> do que você imagina
          </h3>
          <p className="text-[#C0C0C0] text-lg font-light max-w-2xl mx-auto mb-8">
            Preencha agora e receba uma proposta inteligente e personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#367eF3] text-white rounded-xl hover:bg-[#050950] transition-colors duration-300">
              Criar meu plano agora
            </button>
            <button className="px-8 py-4 border border-[#367eF3]/20 text-white rounded-xl hover:bg-[#367eF3]/10 transition-colors duration-300">
              Falar com especialista
            </button>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#367eF310_0%,transparent_65%)] opacity-30"></div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 