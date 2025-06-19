import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona o consórcio inteligente?",
      answer: "O consórcio inteligente é uma estratégia patrimonial que combina as vantagens do consórcio tradicional com planejamento financeiro avançado. Você investe mensalmente sem juros, recebe consultoria especializada e tem flexibilidade no uso do crédito."
    },
    {
      question: "Qual a diferença entre consórcio e financiamento?",
      answer: "A principal diferença é que no consórcio você não paga juros, apenas taxa de administração. Além disso, nosso modelo oferece maior flexibilidade no uso do crédito e acompanhamento estratégico para maximizar o retorno do seu investimento."
    },
    {
      question: "Quanto tempo leva para ser contemplado?",
      answer: "O tempo de contemplação varia de acordo com o plano escolhido e a modalidade de consórcio. Trabalhamos com estratégias para otimizar suas chances de contemplação, e nossos consultores desenvolvem um plano personalizado para cada cliente."
    },
    {
      question: "Posso usar o crédito para diferentes finalidades?",
      answer: "Sim, nossos planos oferecem flexibilidade no uso do crédito. Você pode utilizar para imóveis, veículos, investimentos ou expansão de negócios, sempre com orientação estratégica para maximizar o retorno."
    },
    {
      question: "Como é feito o acompanhamento do plano?",
      answer: "Cada cliente tem acesso a um consultor dedicado que acompanha todo o processo, desde a escolha do plano até a contemplação. Oferecemos relatórios periódicos, análises de mercado e orientação contínua para otimizar sua estratégia patrimonial."
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
            <span className="text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Dúvidas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#367eF3] to-[#050950]">frequentes</span>
          </h2>
          <p className="text-[#C0C0C0] text-lg font-light max-w-2xl mx-auto">
            Encontre respostas para as principais dúvidas sobre nossos serviços
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative mb-4">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 rounded-2xl bg-black/50 backdrop-blur-sm luxury-border"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-light text-white pr-8">{faq.question}</h3>
                    <div className="text-[#367eF3]">
                      {openIndex === index ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-[#C0C0C0] font-light leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </button>

                {/* Hover Effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#367eF3]/20 via-[#367eF3]/0 to-[#367eF3]/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
              </div>
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

export default FAQSection; 