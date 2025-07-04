import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Home, Users, Briefcase, Calendar, Mail, Instagram, Linkedin, ChevronRight, ArrowRight, MapPin, Phone, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ComparisonSection from '@/components/ComparisonSection';
import PlansSection from '@/components/PlansSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SimulatorSection from '@/components/SimulatorSection';
import FAQSection from '@/components/FAQSection';
import PartnersSection from '@/components/PartnersSection';
import MobileNav from '@/components/MobileNav';
import Head from '@/components/Head';
import CookieConsent from '@/components/CookieConsent';
import luxuryHomeImage from '@/assets/luxury-home.jpg';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    objective: '',
    value: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://n8n.outcorehub.com/webhook/3554dfe9-4417-4d37-8315-933baedb66d1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/obrigado');
        setFormData({
          name: '',
          email: '',
          phone: '',
          objective: '',
          value: ''
        });
      } else {
        alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
      }
    } catch (error) {
      alert('Ocorreu um erro na conexão. Por favor, tente novamente mais tarde.');
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.getElementsByClassName('contact-card');
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <>
      <Head />
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-[#367eF3]/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="h-10 cursor-pointer"
                onClick={() => scrollToSection('inicio')}
              >
                <img src="/logo.png" alt="Site Logo" className="h-full w-auto" />
              </motion.div>
            <div className="hidden md:flex items-center space-x-8">
                {['inicio', 'sobre', 'solucoes', 'como-funciona', 'simulador', 'contato'].map((item) => (
                  <motion.button 
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => scrollToSection(item)} 
                    className="text-[#C0C0C0] hover:text-[#367eF3] transition-colors duration-300 font-light tracking-wide"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                  </motion.button>
                ))}
            </div>
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="hidden md:block"
                >
            <Button 
              onClick={() => scrollToSection('simulador')}
                    className="luxury-border bg-[#1a1a1a] text-[#367eF3] hover:bg-[#050950] px-8 py-6 text-lg h-auto hover-shine premium-glow"
            >
                    Simular agora
                    <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
                </motion.div>
                <MobileNav onNavigate={scrollToSection} />
              </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
        <section id="inicio" className="relative min-h-screen flex items-center">
          {/* Background Image and Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/hero-background.jpg')] bg-cover bg-center bg-no-repeat"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/60 to-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#367eF310_0%,transparent_65%)] opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-8"
              >
                <div className="inline-flex items-center gap-2 section-tag backdrop-blur-sm rounded-full px-4 py-2 w-fit">
                  <span className="size-2 rounded-full animate-pulse dot"></span>
                  <span className="text-sm font-medium">Consultoria Especializada</span>
        </div>
                
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight premium-text leading-[1.1]">
                  Transforme consórcios em <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#367eF3] to-[#050950]">estratégia</span><br />
                  patrimonial
          </h1>

                <p className="text-xl text-[#C0C0C0] max-w-xl font-light">
                  Construa, proteja e expanda seu patrimônio com inteligência. Sem juros. Sem entrada. Com estratégia e acompanhamento premium.
          </p>

                <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('simulador')}
                    className="luxury-border bg-[#1a1a1a]/80 text-[#367eF3] hover:bg-[#050950] px-8 py-6 text-lg h-auto hover-shine premium-glow backdrop-blur-sm"
            >
                    Criar meu plano
                    <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contato')}
                    variant="outline"
                    className="luxury-border border-[#367eF3]/20 text-white hover:bg-[#367eF3]/10 px-8 py-6 text-lg h-auto hover-shine backdrop-blur-sm"
            >
                    Falar com especialista
            </Button>
          </div>
              </motion.div>

              {/* Right Content - Stats Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl overflow-hidden bg-black/30 backdrop-blur-xl luxury-border">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="h-full w-full bg-[linear-gradient(to_right,rgba(85,85,85,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(85,85,85,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-8">
                    <div className="space-y-2">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Patrimônio Inteligente</h3>
                      <p className="text-white/90 text-lg">Construa seu futuro com estratégia e sofisticação</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#87CEFA] to-[#87CEFA] text-4xl font-bold">+R$ 10M</p>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#87CEFA] to-[#36A4FF] font-light tracking-wide">Em patrimônio planejado</div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#87CEFA] to-[#87CEFA] text-4xl font-bold">100%</p>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#87CEFA] to-[#36A4FF] font-light tracking-wide">Consultivo</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/4 right-8 text-[#367eF3]"
                  >
                    <DollarSign className="h-20 w-20" />
                  </motion.div>
            </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#367eF3]/20 via-transparent to-[#367eF3]/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
              </motion.div>
            </div>
        </div>
      </section>

        {/* Stats Section */}
        <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: '+R$ 10M', label: 'em patrimônio planejado', trend: 'up', change: '+20.1%' },
                { value: '7 Estados', label: 'atendidos', trend: 'up', change: '+15.5%' },
                { value: '100%', label: 'atendimento consultivo', trend: 'up', change: '+8.3%' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative group"
                >
                  <div className="relative p-8 rounded-2xl overflow-hidden stats-card stats-hover-glow">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 stats-grid-pattern opacity-10"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-4xl font-light tracking-tight stats-value mb-3">{stat.value}</div>
                      <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#87CEFA] to-[#36A4FF] font-light tracking-wide">{stat.label}</div>
                      <div className="mt-4 flex items-center text-sm">
                        <span className={cn(
                          "flex items-center",
                          stat.trend === 'up' ? 'text-[#367eF3]' : 'text-red-500'
                        )}>
                          {stat.trend === 'up' ? '↑' : '↓'} {stat.change}
                        </span>
          </div>
        </div>
            </div>
                </motion.div>
              ))}
            </div>
            </div>
            
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#367eF310_0%,transparent_65%)] opacity-30"></div>
        </div>
      </section>

        {/* Problem and Solution Section */}
        <ProblemSolutionSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Comparison Section */}
        <ComparisonSection />

        {/* Plans Section */}
        <PlansSection onPlanSelect={setSelectedPlanName} />

        {/* Solutions Section */}
        <section id="solucoes" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Nossas Soluções</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-lg border solution-card">
                <div className="solution-icon">
                  <Briefcase className="w-8 h-8 mb-4 text-[#367eF3]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gestão de Patrimônio</h3>
                <p className="text-muted-foreground">Estratégias personalizadas para maximizar seus investimentos.</p>
                </div>
                
              <div className="p-6 bg-card rounded-lg border solution-card">
                <div className="solution-icon">
                  <Users className="w-8 h-8 mb-4 text-[#367eF3]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Consultoria Especializada</h3>
                <p className="text-muted-foreground">Aconselhamento profissional para decisões estratégicas.</p>
                </div>
                
              <div className="p-6 bg-card rounded-lg border solution-card">
                <div className="solution-icon">
                  <Calendar className="w-8 h-8 mb-4 text-[#367eF3]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Planejamento Sucessório</h3>
                <p className="text-muted-foreground">Proteção e continuidade do seu legado familiar.</p>
                </div>
                
              <div className="p-6 bg-card rounded-lg border solution-card">
                <div className="solution-icon">
                  <ChevronRight className="w-8 h-8 mb-4 text-[#367eF3]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Serviços Complementares</h3>
                <p className="text-muted-foreground">Soluções integradas para suas necessidades.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border solution-card flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-semibold mb-2">Transforme seu futuro financeiro</h3>
                <p className="text-muted-foreground">Nossa expertise a serviço dos seus maiores objetivos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Simulator Section */}
        <SimulatorSection selectedPlanName={selectedPlanName} />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Partners Section */}
        <PartnersSection />

        {/* Contact Section */}
        <section id="contato-section" className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Estamos à disposição para ajudar você a alcançar seus objetivos financeiros.
              </p>
            </div>
            
            <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              onMouseMove={handleMouseMove}
            >
              <div className="p-6 rounded-lg border bg-card hover:bg-accent/5 transition-colors contact-card">
                <div className="contact-icon">
                  <Mail className="w-8 h-8 mb-4 text-[#367eF3]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">Respondemos em até 24 horas</p>
                <a href="mailto:contato@spsolucoesfinanceiras.com.br" className="text-[#367eF3] hover:underline">
                  contato@spsolucoesfinanceiras.com.br
                </a>
              </div>
              
              <div className="p-6 rounded-lg border bg-card hover:bg-accent/5 transition-colors contact-card">
                <div className="contact-icon">
                  <MapPin className="w-8 h-8 mb-4 text-[#367eF3]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Escritório</h3>
                <p className="text-muted-foreground mb-4">Visite nosso escritório</p>
                <span className="text-[#367eF3]">Quadra 3, Conjunto F, Lote 11, Setor Sul, Gama, DF</span>
            </div>
            
              <div className="p-6 rounded-lg border bg-card hover:bg-accent/5 transition-colors contact-card">
                <div className="contact-icon">
                  <Phone className="w-8 h-8 mb-4 text-[#367eF3]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                <p className="text-muted-foreground mb-4">9h - 18h</p>
                <a href="tel:+5561999148029" className="text-[#367eF3] hover:underline">
                  +55 61 99914-8029
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contato" className="relative py-12 overflow-hidden border-t border-[#367eF3]/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row justify-between items-center gap-6"
              >
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="h-10"
                >
                  <img src="/logo.png" alt="Site Logo" className="h-full w-auto" />
                </motion.div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-[#C0C0C0] font-light text-center md:text-right"
                >
                  © 2025 SP Solutions. Todos os direitos reservados.
                </motion.p>
              </motion.div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#367eF310_0%,transparent_65%)] opacity-10"></div>
            </div>
        </div>
      </footer>
    </div>
      <CookieConsent />
      {/* Google Tag Manager (noscript) */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MBLPJF9K"
      height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
      {/* End Google Tag Manager (noscript) */}
    </>
  );
};

export default Index;
