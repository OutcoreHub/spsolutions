import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Building2, Landmark, Scale } from 'lucide-react';
import { MonthlyReturnChart } from './Charts';

interface PlansSectionProps {
  onPlanSelect: (planName: string) => void;
}

const PlansSection = ({ onPlanSelect }: PlansSectionProps) => {
  const plans = [
    {
      name: 'Plano Vértice',
      icon: Building2,
      patrimony: 750000,
      monthlyReturn: 6100,
      monthlyInvestment: 2306.25,
      color: '#367eF3'
    },
    {
      name: 'Plano Órbita',
      icon: Scale,
      patrimony: 1500000,
      monthlyReturn: 12000,
      monthlyInvestment: 4193.00,
      color: '#C0C0C0'
    },
    {
      name: 'Plano Legado',
      icon: Landmark,
      patrimony: 2000000,
      monthlyReturn: 16000,
      monthlyInvestment: 5166.00,
      color: '#C0C0C0'
    }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const handlePlanSelection = (planName: string) => {
    localStorage.setItem('selectedPlanName', planName);
    onPlanSelect(planName);
    document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' });
  };

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
            <span className="text-sm font-medium">Nossos Planos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Modelos prontos para quem <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#367eF3] to-[#050950]">pensa grande</span>
          </h2>
          <p className="text-[#C0C0C0] text-lg font-light max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta aos seus objetivos e comece sua jornada de crescimento patrimonial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
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
                  <plan.icon className="w-12 h-12 mb-6" style={{ color: plan.color }} />
                  <h3 className="text-2xl font-light text-white mb-6">{plan.name}</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-[#C0C0C0] text-sm">Patrimônio estimado</p>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#367eF3] to-[#050950] text-2xl font-light">{formatCurrency(plan.patrimony)}</p>
                    </div>
                    <div>
                      <p className="text-[#C0C0C0] text-sm">Renda mensal potencial</p>
                      <p className="text-xl font-light text-white">{formatCurrency(plan.monthlyReturn)}</p>
                    </div>
                    <div>
                      <p className="text-[#C0C0C0] text-sm">Investimento mensal</p>
                      <p className="text-xl font-light text-white">{formatCurrency(plan.monthlyInvestment)}</p>
                    </div>
                  </div>

                  <Button 
                    onClick={() => handlePlanSelection(plan.name)} 
                    className="w-full bg-[#1a1a1a] text-white font-bold text-lg hover:bg-[#050950] luxury-border"
                  >
                    Quero este plano
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#367eF3]/5 via-[#367eF3]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Monthly Return Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl bg-black/50 backdrop-blur-sm luxury-border p-8 mt-16 group hover:shadow-lg hover:shadow-[#367eF3]/20 hover:border-transparent"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#367eF310_1px,transparent_1px),linear-gradient(to_bottom,#367eF310_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-light text-white mb-6">Comparativo de Retorno Mensal</h3>
            <MonthlyReturnChart plans={plans} />
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

export default PlansSection; 