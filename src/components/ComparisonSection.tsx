import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { PatrimonialGrowthChart } from './Charts';

const ComparisonSection = () => {
  const comparisonData = [
    {
      criteria: 'Juros',
      consortium: { value: false, label: 'Zero' },
      financing: { value: true, label: 'Altos' }
    },
    {
      criteria: 'Entrada',
      consortium: { value: false, label: 'Não exige' },
      financing: { value: true, label: 'Sim' }
    },
    {
      criteria: 'Liberdade de uso',
      consortium: { value: true, label: 'Alta' },
      financing: { value: false, label: 'Limitada' }
    },
    {
      criteria: 'Planejamento personalizado',
      consortium: { value: true, label: 'Sim' },
      financing: { value: false, label: 'Não' }
    },
    {
      criteria: 'Retorno patrimonial',
      consortium: { value: true, label: 'Estratégico' },
      financing: { value: false, label: 'Passivo' }
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
            <span className="text-sm font-medium">Comparativo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Consórcio Inteligente x <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#367eF3] to-[#050950]">Financiamento Tradicional</span>
          </h2>
          <p className="text-[#C0C0C0] text-lg font-light max-w-2xl mx-auto">
            Entenda por que o consórcio planejado é a escolha mais inteligente para construir seu patrimônio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl bg-black/50 backdrop-blur-sm luxury-border"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#367eF310_1px,transparent_1px),linear-gradient(to_bottom,#367eF310_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
            
            <div className="relative z-10 p-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#367eF3]/20">
                    <th className="text-left py-4 text-[#C0C0C0] font-light">Critério</th>
                    <th className="text-center py-4 text-[#367eF3]">SP Solutions</th>
                    <th className="text-center py-4 text-[#C0C0C0]">Financiamento</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className="border-b border-[#367eF3]/10 last:border-0">
                      <td className="py-4 text-white font-light">{item.criteria}</td>
                      <td className="text-center py-4">
                        {item.consortium.value ? (
                          <Check className="w-6 h-6 text-[#367eF3] mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-[#367eF3] mx-auto" />
                        )}
                        <span className="text-sm text-[#C0C0C0] block mt-1">{item.consortium.label}</span>
                      </td>
                      <td className="text-center py-4">
                        {item.financing.value ? (
                          <Check className="w-6 h-6 text-red-500 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                        <span className="text-sm text-[#C0C0C0] block mt-1">{item.financing.label}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl bg-black/50 backdrop-blur-sm luxury-border p-8"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#367eF310_1px,transparent_1px),linear-gradient(to_bottom,#367eF310_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-light text-white mb-6">Crescimento Patrimonial</h3>
              <PatrimonialGrowthChart />
            </div>
          </motion.div>
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

export default ComparisonSection; 