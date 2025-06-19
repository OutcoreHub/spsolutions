import { motion } from 'framer-motion';
import { Home, Car, TrendingUp, Globe, Brain, DollarSign } from 'lucide-react';

const ProblemSolutionSection = () => {
  const solutions = [
    {
      icon: Home,
      title: 'Imóveis de alto padrão',
      description: 'Conquiste sua residência dos sonhos ou invista em imóveis premium'
    },
    {
      icon: Car,
      title: 'Veículos de luxo',
      description: 'Adquira seu veículo de luxo com planejamento inteligente'
    },
    {
      icon: TrendingUp,
      title: 'Capital para expansão',
      description: 'Recursos estratégicos para expandir seus negócios'
    },
    {
      icon: Globe,
      title: 'Diversificação de ativos',
      description: 'Estratégias para diversificar seu portfólio de investimentos'
    },
    {
      icon: Brain,
      title: 'Planejamento de sucessão',
      description: 'Garanta a continuidade e proteção do seu patrimônio'
    }
  ];

  return (
    <>
      {/* Problem Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square w-full max-w-xl rounded-2xl overflow-hidden luxury-border">
                {/* Imagem com overlay */}
                <div className="absolute inset-0">
                  <img 
                    src="/luxury-home.jpg" 
                    alt="Luxury Home" 
                    className="w-full h-full object-cover opacity-70"
                  />
                  {/* Overlay dourado sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 opacity-50"></div>
                </div>
              </div>

              {/* Glowing Orbs */}
              <div className="absolute -top-20 -right-20 size-40 bg-[#367eF3]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 size-40 bg-[#367eF3]/10 rounded-full blur-3xl"></div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="inline-flex items-center gap-2 section-tag backdrop-blur-sm rounded-full px-4 py-2 w-fit mb-8">
                <span className="size-2 rounded-full animate-pulse dot"></span>
                <span className="text-sm font-medium">O Problema</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
                Você ainda acredita que precisa de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#367eF3] to-[#050950]">entrada ou financiamento</span> para crescer?
              </h2>

              <p className="text-[#C0C0C0] text-lg font-light leading-relaxed">
                A maioria das pessoas está presa ao modelo antigo de enriquecimento. Com o consórcio certo e uma estratégia bem estruturada, é possível adquirir bens de alto valor, proteger seu capital e gerar patrimônio sem depender de juros abusivos.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#367eF310_0%,transparent_65%)] opacity-30"></div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="sobre" className="py-24 relative overflow-hidden">
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
              <span className="text-sm font-medium">O Que Fazemos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
              Muito além de uma carta de crédito. <br />
              Uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#367eF3] to-[#050950]">inteligência patrimonial</span>
            </h2>
            <p className="text-[#C0C0C0] text-lg font-light max-w-2xl mx-auto">
              Desenvolvemos estratégias personalizadas para maximizar seu potencial de crescimento patrimonial
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm luxury-border h-full">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#367eF310_1px,transparent_1px),linear-gradient(to_bottom,#367eF310_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <solution.icon className="w-12 h-12 mb-6 text-[#367eF3]" />
                    <h3 className="text-xl font-light text-white mb-4">{solution.title}</h3>
                    <p className="text-[#C0C0C0] font-light">{solution.description}</p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#367eF3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
            {/* Impact phrase element to fill the empty space */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: solutions.length * 0.1 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl overflow-hidden bg-gradient-to-br from-[#367eF3]/20 to-transparent flex flex-col items-center justify-center text-center luxury-border h-full">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#367eF310_1px,transparent_1px),linear-gradient(to_bottom,#367eF310_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">Seu Patrimônio, Suas Regras</h3>
                  <p className="text-muted-foreground">Construa um futuro financeiro sólido, livre de juros e com a estratégia ideal para você.</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#367eF3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
    </>
  );
};

export default ProblemSolutionSection; 