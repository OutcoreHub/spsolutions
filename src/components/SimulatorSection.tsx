import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { siteConfig } from '@/config/site';
import { formatCurrency } from '@/lib/utils';

interface SimulatorSectionProps {
  selectedPlanName: string;
}

const SimulatorSection = ({ selectedPlanName }: SimulatorSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    objective: '',
    value: '',
    selectedPlan: ''
  });

  useEffect(() => {
    console.log('SimulatorSection - selectedPlanName prop changed:', selectedPlanName);
    if (selectedPlanName) {
      setFormData(prev => ({ ...prev, selectedPlan: selectedPlanName }));
      console.log('SimulatorSection - formData.selectedPlan updated to:', selectedPlanName);
      localStorage.removeItem('selectedPlanName');
    }
  }, [selectedPlanName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let valueForWebhook: number | null = null;
    if (formData.value) {
      // Clean the string for parsing: remove 'R$', spaces, thousands dots, then replace decimal comma with a dot
      let cleanedForParsing = formData.value
                                    .replace('R$', '')
                                    .replace(/\s/g, ''); // Remove R$ and all whitespace
      
      // Remove thousands separators (dots) - for Brazilian format
      cleanedForParsing = cleanedForParsing.replace(/\./g, '');
      
      // Replace the decimal comma with a dot - for JavaScript parsing
      cleanedForParsing = cleanedForParsing.replace(',', '.');

      const parsedValue = parseFloat(cleanedForParsing);
      if (!isNaN(parsedValue)) {
        valueForWebhook = parsedValue;
      }
    }

    const dataForWebhook = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        objective: formData.objective,
        value: valueForWebhook, 
        selectedPlan: formData.selectedPlan
    };

    try {
      const response = await fetch('https://n8n.outcorehub.com/webhook-test/3554dfe9-4417-4d37-8315-933baedb66d1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataForWebhook),
      });

      if (response.ok) {
        alert('MUITO OBRIGADO! RECEBEMOS O SEU CONTATO E NOSSA EQUIPE ENTRARÁ EM CONTATO COM VOCÊ EM BREVE.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          objective: '',
          value: '',
          selectedPlan: ''
        });
      } else {
        console.error('Failed to send form data:', response.statusText);
        alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Ocorreu um erro na conexão. Por favor, tente novamente mais tarde.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Simplify to raw input for debugging
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="simulador" className="py-24 relative overflow-hidden">
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
            <span className="text-sm font-medium">Simulador</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Simule seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#367eF3] to-[#050550]">plano inteligente</span>
          </h2>
          <p className="text-[#C0C0C0] text-lg font-light max-w-2xl mx-auto">
            Descubra o melhor plano para alcançar seus objetivos patrimoniais
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative p-8 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm luxury-border">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#DAA52010_1px,transparent_1px),linear-gradient(to_bottom,#DAA52010_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-light text-white mb-6 text-center">SOLICITE A SUA PROPOSTA PERSONALIZADA</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {selectedPlanName && (
                    <div className="space-y-2">
                      <Label htmlFor="selectedPlan">Plano Escolhido</Label>
                      <Input
                        id="selectedPlan"
                        name="selectedPlan"
                        value={selectedPlanName}
                        readOnly
                        className="bg-black/50 border-[#DAA520]/20 focus:border-[#DAA520] transition-colors cursor-not-allowed"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-black/50 border-[#DAA520]/20 focus:border-[#DAA520] transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-black/50 border-[#DAA520]/20 focus:border-[#DAA520] transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-black/50 border-[#DAA520]/20 focus:border-[#DAA520] transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="objective">Objetivo patrimonial</Label>
                    <Input
                      id="objective"
                      name="objective"
                      value={formData.objective}
                      onChange={handleInputChange}
                      className="bg-black/50 border-[#DAA520]/20 focus:border-[#DAA520] transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="value">Valor disponível para investimento</Label>
                    <Input
                      id="value"
                      name="value"
                      value={formData.value}
                      onChange={handleInputChange}
                      className="bg-black/50 border-[#DAA520]/20 focus:border-[#DAA520] transition-colors"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full luxury-border bg-[#1a1a1a] text-white font-bold hover:bg-[#050950] px-8 py-6 text-lg h-auto hover-shine premium-glow"
                  >
                    Solicitar proposta personalizada
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#DAA52010_0%,transparent_65%)] opacity-30"></div>
      </div>
    </section>
  );
};

export default SimulatorSection;