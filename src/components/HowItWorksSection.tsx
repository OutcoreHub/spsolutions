import { motion } from 'framer-motion';
import { Search, LineChart, Target, Shield } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Diagnóstico financeiro personalizado',
      description: 'Análise completa do seu perfil e objetivos para criar uma estratégia sob medida'
    },
    {
      number: '02',
      icon: LineChart,
      title: 'Elaboração do plano ideal',
      description: 'Desenvolvimento do consórcio perfeito para suas necessidades e metas'
    },
    {
      number: '03',
      icon: Target,
      title: 'Acompanhamento estratégico',
      description: 'Suporte especializado em todas as etapas até a contemplação'
    },
    {
      number: '04',
      icon: Shield,
      title: 'Gestão do patrimônio',
      description: 'Orientação contínua para maximizar o retorno do seu investimento'
    }
  ];

  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 section-tag backdrop-blur-sm rounded-full px-4 py-2 mx-auto mb-6">
            <span className="size-2 rounded-full animate-pulse dot"></span>
            <span className="text-sm font-medium">Processo Simplificado</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#367eF3] to-[#050950]">metodologia exclusiva</span>
          </h2>
          <p className="text-[#C0C0C0] text-lg font-light max-w-2xl mx-auto">
            Um processo transparente e eficiente para transformar seus objetivos em realidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative"
            >
              <div className="relative pt-8 pl-8 pr-8 pb-8 rounded-2xl bg-black/80 backdrop-blur-sm luxury-border overflow-hidden h-[250px]">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#367eF310_1px,transparent_1px),linear-gradient(to_bottom,#367eF310_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-bold text-[#367eF3]">{step.number}</span>
                    <step.icon className="h-8 w-8 text-[#367eF3] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-[#C0C0C0] font-light leading-relaxed">{step.description}</p>
                </div>
                
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#367eF3]/5 via-[#367eF3]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-[#367eF3]/20 via-[#367eF3]/0 to-[#367eF3]/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Connection Lines for Desktop */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl">
          <svg className="w-full" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50 H900"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="opacity-20"
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#555555" stopOpacity="0" />
                <stop offset="50%" stopColor="#555555" stopOpacity="1" />
                <stop offset="100%" stopColor="#555555" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-400 to-dark-300/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(85,85,85,0.1)_0%,transparent_65%)] opacity-30"></div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 