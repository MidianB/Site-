/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ShieldCheck, Cpu, Users, ArrowUpRight, ArrowRight, Menu, X, BookOpen, Fingerprint, Lock, ChevronRight, Mail, Phone, MapPin, CheckCircle2, Gamepad2, MonitorPlay, School, Briefcase, Baby, Heart, Layout, Bot, Target, Eye, Sparkles, Milestone, Mic, Wrench, Linkedin, Instagram, MessageCircle, Trophy, Award } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// --- Reusable Components ---

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-graphite/80 hover:text-petrol transition-colors"
    >
      {children}
    </a>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="max-w-2xl">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-medium text-dark leading-tight mb-4"
      >
        {title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-graphite font-light"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}

// --- Main App ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-purple-subtle/30 selection:text-petrol">
      
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-offwhite/80 backdrop-blur-md border-b border-black/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 group">
            <span className="font-sans font-bold text-xl tracking-tight text-dark group-hover:text-petrol transition-colors">
              Ciber Mind
            </span>
            <img src="/logo.svg" alt="Ciber Mind Logo" className="w-10 h-10 object-contain ml-1" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#inicio">Início</NavLink>
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#produtos">Produtos</NavLink>
            <NavLink href="#contato">Contato</NavLink>
          </nav>

          <div className="hidden md:block">
            <a 
              href="#contato"
              className="px-5 py-2.5 rounded-full bg-dark text-white text-sm font-medium hover:bg-petrol transition-colors inline-block"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-offwhite pt-24 px-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-2xl font-display font-medium">
              <NavLink href="#inicio" onClick={() => setMobileMenuOpen(false)}>Início</NavLink>
              <NavLink href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</NavLink>
              <NavLink href="#produtos" onClick={() => setMobileMenuOpen(false)}>Produtos</NavLink>
              <NavLink href="#contato" onClick={() => setMobileMenuOpen(false)}>Contato</NavLink>
            </nav>
            <div className="mt-12">
               <a 
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-6 py-4 rounded-full bg-petrol text-white font-medium block"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section (#inicio) */}
        <section id="inicio" className="relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="flex-1 z-10 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-7xl font-display font-medium text-dark leading-[1.05] tracking-tight text-balance mb-8">
                  Proteção digital para <span className="text-petrol">quem mais precisa.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-graphite-light font-light max-w-xl leading-relaxed mb-10">
                  O Ciber Mind democratiza o acesso à cibersegurança, inteligência artificial e educação digital para mulheres, crianças, adolescentes e pequenos empreendedores em situação de vulnerabilidade social.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#produtos" 
                    className="px-8 py-4 rounded-full bg-petrol text-white font-medium hover:bg-dark transition-all flex items-center justify-center gap-2 group"
                  >
                    Conheça o projeto
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a 
                    href="#sobre" 
                    className="px-8 py-4 rounded-full border border-black/10 text-dark font-medium hover:bg-black/5 transition-colors flex items-center justify-center"
                  >
                    Fale conosco
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Abstract Graphic (SaaS Aesthetic) */}
            <div className="flex-1 w-full lg:max-w-lg relative z-0 hidden md:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-square w-full"
              >
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" 
                    alt="Mulheres e jovens utilizando tecnologia em ambiente educativo" 
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent"></div>
                </div>
              </motion.div>
            </div>
            
          </div>
        </section>

        {/* Dados e Impacto Banner */}
        <section className="py-24 bg-white border-y border-black/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-medium text-dark leading-tight mb-6">
                A transformação digital avançou mais rápido que a educação digital.
              </h2>
              <p className="text-xl text-graphite/80 font-light">
                O aumento exponencial de crimes cibernéticos no Brasil afeta desproporcionalmente populações vulneráveis. Nossa resposta é a informação.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-20 divide-y md:divide-y-0 md:divide-x divide-black/10">
              <div className="pt-8 md:pt-0 md:px-6 first:pl-0 flex flex-col gap-2">
                <span className="text-4xl lg:text-5xl font-display font-semibold text-petrol">300%</span>
                <span className="text-sm font-medium text-graphite/70 uppercase tracking-wider">Aumento de golpes</span>
                <span className="text-xs text-graphite/50">no Brasil nos últimos anos</span>
              </div>
              <div className="pt-8 md:pt-0 md:px-6 flex flex-col gap-2">
                <span className="text-4xl lg:text-5xl font-display font-semibold text-purple-subtle">1M+</span>
                <span className="text-sm font-medium text-graphite/70 uppercase tracking-wider">Crimes Virtuais</span>
                <span className="text-xs text-graphite/50">registrados anualmente</span>
              </div>
              <div className="pt-8 md:pt-0 md:px-6 flex flex-col gap-2 overflow-hidden">
                <span className="text-3xl lg:text-4xl font-display font-semibold text-petrol break-words sm:tracking-tighter">Vulneráveis</span>
                <span className="text-sm font-medium text-graphite/70 uppercase tracking-wider">Crianças online</span>
                <span className="text-xs text-graphite/50">sem supervisão digital adequada</span>
              </div>
              <div className="pt-8 md:pt-0 md:px-6 flex flex-col gap-2 overflow-hidden">
                <span className="text-3xl lg:text-4xl font-display font-semibold text-purple-subtle break-words sm:tracking-tighter">Falta de</span>
                <span className="text-sm font-medium text-graphite/70 uppercase tracking-wider">Proteção Online</span>
                <span className="text-xs text-graphite/50">educação focada em prevenção</span>
              </div>
            </div>

            <div className="bg-offwhite rounded-3xl p-10 lg:p-16 border border-black/5">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div>
                  <h3 className="font-display font-medium text-sm text-graphite uppercase tracking-wider mb-8">Nosso Impacto Até Aqui</h3>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <span className="block text-4xl font-display font-medium text-dark mb-2">+50</span>
                      <span className="text-sm text-graphite">Palestras realizadas</span>
                    </div>
                    <div>
                      <span className="block text-4xl font-display font-medium text-dark mb-2">+30</span>
                      <span className="text-sm text-graphite">Workshops práticos</span>
                    </div>
                    <div>
                      <span className="block text-4xl font-display font-medium text-dark mb-2">+2k</span>
                      <span className="text-sm text-graphite">Pessoas impactadas</span>
                    </div>
                    <div>
                      <span className="block text-4xl font-display font-medium text-dark mb-2">+10</span>
                      <span className="text-sm text-graphite">Projetos parceiros</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
                   <h4 className="font-display font-medium text-sm text-graphite uppercase tracking-wider mb-6">Premiações</h4>
                   <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center shrink-0">
                          <Trophy className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-medium text-dark">Game Show Sebrae 2026</p>
                          <p className="text-sm text-graphite/70">Projeto Vencedor</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-petrol/10 text-petrol rounded-full flex items-center justify-center shrink-0">
                          <Award className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-medium text-dark">Shell Iniciativa Jovem</p>
                          <p className="text-sm text-graphite/70">Iniciativa Destaque</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center shrink-0">
                          <Users className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-medium text-dark">Programa AE 2025</p>
                          <p className="text-sm text-graphite/70">Embaixada dos EUA</p>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre (#sobre) */}
        <section id="sobre" className="pt-32">
          {/* 1. Quem Somos */}
          <div className="bg-dark text-white relative overflow-hidden py-32 rounded-[2.5rem] mx-4 lg:mx-8 mb-32 max-w-[1400px] xl:mx-auto">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-petrol/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7">
                  <span className="text-petrol font-semibold uppercase tracking-wider text-sm mb-4 block">Quem Somos</span>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-display font-medium leading-tight mb-8"
                  >
                    O Ciber Mind é uma edtech e iniciativa de impacto social.
                  </motion.h2>
                  <p className="text-xl text-white/70 font-light mb-8 max-w-2xl">
                    Focada em cibersegurança, inteligência artificial, proteção digital e inclusão tecnológica.
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="space-y-8">
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="border-l-4 border-petrol pl-6"
                    >
                      <h4 className="font-display text-xl font-medium mb-2">Nosso Público</h4>
                      <p className="text-white/70 font-light">Atuamos principalmente com mulheres negras, crianças, adolescentes, pequenos empreendedores (MEIs) e públicos vulneráveis.</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Nossa História */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80" 
                    alt="Mulher focada usando tecnologia" 
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
              <div>
                <span className="text-petrol font-semibold uppercase tracking-wider text-sm mb-4 block">Nossa História</span>
                <h2 className="text-3xl md:text-5xl font-display font-medium text-dark leading-tight mb-8">
                  Transformar a exclusão em proteção ativa.
                </h2>
                <div className="space-y-6 text-graphite/80 font-light text-lg">
                  <p>
                    Tudo começou com uma inquietação constante. Observamos o aumento alarmante de golpes digitais e crimes virtuais, mas a inovação tecnológica corria à margem da sociedade, criando uma perigosa exclusão digital.
                  </p>
                  <p>
                    A falta de acesso à educação tecnológica básica mostrou um abismo: enquanto poucos discutiam o futuro da IA, milhares de pessoas — principalmente grupos invisibilizados — perdiam sua segurança básica online.
                  </p>
                  <p className="font-medium text-petrol">
                    O Ciber Mind surgiu para virar esse jogo. Decidimos transformar a tecnologia, tantas vezes excludente e complexa, em uma ferramenta acessível e ativa de proteção social.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Missão, Visão e Valores */}
          <div className="bg-white border-y border-black/5 py-32 mb-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8">
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-offwhite rounded-3xl p-10 border border-black/5 transition-all text-center group flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-petrol text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-dark mb-4">Missão</h3>
                  <p className="text-graphite/80 font-light text-lg text-balance">
                    Democratizar o acesso à proteção digital para quem mais precisa.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-offwhite rounded-3xl p-10 border border-black/5 transition-all text-center group flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-purple-subtle text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-dark mb-4">Visão</h3>
                  <p className="text-graphite/80 font-light text-lg text-balance">
                    Construir um Brasil mais seguro, acolhedor e soberano digitalmente.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-offwhite rounded-3xl p-10 border border-black/5 transition-all text-center group flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-dark text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-dark mb-4">Valores</h3>
                  <p className="text-graphite/80 font-light">
                    Inclusão, Inovação,<br/> Acessibilidade, Diversidade,<br/> Educação e Impacto Social.
                  </p>
                </motion.div>

              </div>
            </div>
          </div>

          {/* 4. Diferenciais */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
             <div className="text-center mb-20 flex flex-col items-center">
              <span className="text-petrol font-semibold uppercase tracking-wider text-sm mb-4 block">Diferenciais</span>
              <SectionHeading 
                title="Como fazemos a diferença." 
                subtitle="Metodologias criadas para gerar engajamento e transformação real." 
              />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               <div className="border border-black/10 rounded-3xl p-8 flex flex-col gap-4 bg-white">
                 <Layout className="w-8 h-8 text-petrol" />
                 <h4 className="font-display text-xl font-medium text-dark">Frameworks Personalizados</h4>
               </div>
               <div className="border border-black/10 rounded-3xl p-8 flex flex-col gap-4 bg-white">
                 <Bot className="w-8 h-8 text-purple-subtle" />
                 <h4 className="font-display text-xl font-medium text-dark">Agentes de IA</h4>
               </div>
               <div className="border border-black/10 rounded-3xl p-8 flex flex-col gap-4 bg-white">
                 <Gamepad2 className="w-8 h-8 text-dark" />
                 <h4 className="font-display text-xl font-medium text-dark">Metodologias Gamificadas</h4>
               </div>
               <div className="border border-black/10 rounded-3xl p-8 flex flex-col gap-4 bg-white">
                 <BookOpen className="w-8 h-8 text-petrol" />
                 <h4 className="font-display text-xl font-medium text-dark">Educação Acessível</h4>
               </div>
               <div className="border border-black/10 rounded-3xl p-8 flex flex-col gap-4 bg-white">
                 <Heart className="w-8 h-8 text-purple-subtle" />
                 <h4 className="font-display text-xl font-medium text-dark">Conteúdo Humanizado</h4>
               </div>
               <div className="border border-black/10 rounded-3xl p-8 flex flex-col gap-4 bg-white">
                 <ShieldCheck className="w-8 h-8 text-dark" />
                 <h4 className="font-display text-xl font-medium text-dark">Proteção Digital Prática</h4>
               </div>
            </div>
          </div>

          {/* 5. Linha do Tempo */}
          <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-32">
            <div className="text-center mb-20 flex flex-col items-center">
              <span className="text-petrol font-semibold uppercase tracking-wider text-sm mb-4 block">Nossa Trajetória</span>
              <SectionHeading 
                title="A jornada do Ciber Mind" 
                subtitle="Passos construídos ao lado da comunidade e de parceiros estratégicos." 
              />
            </div>

            <div className="relative border-l-2 border-black/5 ml-4 md:ml-10 space-y-16">
              
              <div className="relative pl-10">
                <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-petrol flex items-center justify-center shadow-[0_0_0_6px_var(--color-offwhite)]">
                   <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <h4 className="font-display text-2xl font-semibold text-dark mb-2">Criação do Projeto</h4>
                <p className="text-graphite/70 font-light">O início de uma ideia: traduzir tecnologia e proteger pessoas comuns por meio da informação.</p>
              </div>

              <div className="relative pl-10">
                <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-purple-subtle flex items-center justify-center shadow-[0_0_0_6px_var(--color-offwhite)]">
                   <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <h4 className="font-display text-2xl font-semibold text-dark mb-2">Participação em Programas</h4>
                <p className="text-graphite/70 font-light">Validação das metodologias e primeiros reconhecimentos institucionais focados em impacto.</p>
              </div>

              <div className="relative pl-10">
                <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-dark flex items-center justify-center shadow-[0_0_0_6px_var(--color-offwhite)]">
                   <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <h4 className="font-display text-2xl font-semibold text-dark mb-2">Palestras e Workshops</h4>
                <p className="text-graphite/70 font-light">Milhares de pessoas impactadas presencialmente e online com atividades práticas de cibersegurança.</p>
              </div>

              <div className="relative pl-10">
                <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-petrol flex items-center justify-center shadow-[0_0_0_6px_var(--color-offwhite)]">
                   <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <h4 className="font-display text-2xl font-semibold text-dark mb-2">Crescimento da Comunidade</h4>
                <p className="text-graphite/70 font-light">Uma rede cada vez mais forte de mulheres, educadores e empreendedores conscientes e multiplicadores.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Produtos (#produtos) */}
        <section id="produtos" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 flex flex-col items-center">
              <span className="text-petrol font-semibold uppercase tracking-wider text-sm mb-4 block">Portfólio</span>
              <SectionHeading 
                title="Soluções educacionais práticas" 
                subtitle="Da teoria à prática, nossas metodologias são desenhadas para gerar impacto real, proteção ativa e empoderamento." 
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <motion.div whileHover={{ y: -5 }} className="bg-offwhite border border-black/5 rounded-3xl p-8 hover:shadow-xl hover:border-petrol/20 transition-all group flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 text-petrol flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                   <Mic className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-dark mb-4">Palestras</h3>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                   <span className="px-3 py-1 bg-white text-dark text-xs font-medium rounded-full border border-black/5">Golpes Digitais</span>
                   <span className="px-3 py-1 bg-white text-dark text-xs font-medium rounded-full border border-black/5">Proteção Online</span>
                   <span className="px-3 py-1 bg-white text-dark text-xs font-medium rounded-full border border-black/5">Inteligência Artificial</span>
                   <span className="px-3 py-1 bg-white text-dark text-xs font-medium rounded-full border border-black/5">Cyberbullying</span>
                   <span className="px-3 py-1 bg-white text-dark text-xs font-medium rounded-full border border-black/5">Privacidade</span>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div whileHover={{ y: -5 }} className="bg-offwhite border border-black/5 rounded-3xl p-8 hover:shadow-xl hover:border-petrol/20 transition-all group flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 text-purple-subtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                   <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-dark mb-2">Workshops</h3>
                <p className="text-graphite/80 font-light mb-6">Treinamentos práticos sob medida.</p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center gap-2 text-sm text-graphite"><CheckCircle2 className="w-4 h-4 text-petrol"/> Escolas</div>
                  <div className="flex items-center gap-2 text-sm text-graphite"><CheckCircle2 className="w-4 h-4 text-petrol"/> Empresas</div>
                  <div className="flex items-center gap-2 text-sm text-graphite"><CheckCircle2 className="w-4 h-4 text-petrol"/> ONGs</div>
                  <div className="flex items-center gap-2 text-sm text-graphite"><CheckCircle2 className="w-4 h-4 text-petrol"/> Projetos Sociais</div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div whileHover={{ y: -5 }} className="bg-offwhite border border-black/5 rounded-3xl p-8 hover:shadow-xl hover:border-petrol/20 transition-all group flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 text-petrol flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                   <MonitorPlay className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-dark mb-2">Cursos Online</h3>
                <p className="text-graphite/80 font-light mb-6">Trilhas de aprendizado completas para diversas idades.</p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center gap-2 text-sm text-graphite"><CheckCircle2 className="w-4 h-4 text-petrol"/> Mulheres MEIs</div>
                  <div className="flex items-center gap-2 text-sm text-graphite"><CheckCircle2 className="w-4 h-4 text-petrol"/> Iniciantes em Tecnologia</div>
                  <div className="flex items-center gap-2 text-sm text-graphite"><CheckCircle2 className="w-4 h-4 text-petrol"/> Crianças e Adolescentes</div>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div whileHover={{ y: -5 }} className="bg-offwhite border border-black/5 rounded-3xl p-8 hover:shadow-xl hover:border-petrol/20 transition-all group flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 text-purple-subtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                   <Gamepad2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-dark mb-4">Gamificação</h3>
                <p className="text-graphite/80 font-light">Treinamentos interativos e educativos com desafios e dinâmicas criativas que facilitam a absorção.</p>
              </motion.div>
              
              {/* Card 5 */}
              <motion.div whileHover={{ y: -5 }} className="bg-offwhite border border-black/5 rounded-3xl p-8 hover:shadow-xl hover:border-petrol/20 transition-all group flex flex-col h-full lg:col-span-2">
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 text-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                   <Bot className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-dark mb-4">Frameworks e IA</h3>
                <p className="text-graphite/80 font-light mb-6">Empoderamento através de inovação personalizada para educadores e pequenas organizações.</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                   <span className="px-3 py-1 bg-white text-dark text-xs font-medium rounded-full border border-black/5">Agentes de IA</span>
                   <span className="px-3 py-1 bg-white text-dark text-xs font-medium rounded-full border border-black/5">Automação</span>
                   <span className="px-3 py-1 bg-white text-dark text-xs font-medium rounded-full border border-black/5">Frameworks Personalizados</span>
                   <span className="px-3 py-1 bg-white text-dark text-xs font-medium rounded-full border border-black/5">Soluções Educacionais Digitais</span>
                </div>
              </motion.div>

            </div>

            <div className="mt-20 flex justify-center">
              <a 
                href="#contato"
                className="px-8 py-4 rounded-full bg-dark text-white font-medium hover:bg-petrol transition-colors flex items-center gap-2 group shadow-lg"
              >
                Quero levar o Ciber Mind para minha instituição
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </section>

        {/* Soluções e Preços */}
        <section id="precos" className="py-32 bg-offwhite">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl font-display font-medium leading-tight text-dark mb-6 max-w-4xl">
                Soluções de segurança sob medida para cada realidade
              </h1>
              <h2 className="text-xl text-graphite/80 font-light max-w-3xl">
                Do letramento digital para as famílias à proteção estratégica para negócios. Conheça as nossas frentes de atuação.
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Cartão 1: Impacto Social */}
              <div className="bg-white rounded-[2rem] p-8 lg:p-10 border-2 border-petrol/30 shadow-xl relative flex flex-col h-full transform lg:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-petrol text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                    Impacto Social
                  </span>
                </div>
                <div className="mb-8 mt-2">
                  <h3 className="font-display text-2xl font-semibold text-dark mb-2">Crianças e Mulheres</h3>
                  <p className="text-graphite/60 text-sm font-medium uppercase tracking-wider mb-6">Foco Comunitário</p>
                  <p className="text-graphite font-light mb-6 min-h-[48px]">
                    <span className="font-medium">Público:</span> Crianças, jovens e mulheres em situação de vulnerabilidade.
                  </p>
                  <div className="flex items-baseline gap-2 pb-8 border-b border-black/10">
                    <span className="text-4xl font-display font-medium text-petrol">Acesso Gratuito</span>
                    <span className="text-sm font-medium text-graphite/60 align-bottom">/ Preço Social</span>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-petrol shrink-0" />
                    <span className="text-graphite/80 text-sm leading-relaxed">Acesso à Plataforma Educacional Gamificada (focada em letramento lúdico e prevenção de riscos).</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-petrol shrink-0" />
                    <span className="text-graphite/80 text-sm leading-relaxed">Acesso à "Mary": nossa assistente virtual no WhatsApp que atua como rede de emergência e salvaguarda para mulheres.</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-petrol shrink-0" />
                    <span className="text-graphite/80 text-sm leading-relaxed">Trilhas de conhecimento sobre combate à violência digital e desinformação.</span>
                  </div>
                </div>
              </div>

              {/* Cartão 2: MEIs */}
              <div className="bg-white rounded-[2rem] p-8 lg:p-10 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="font-display text-2xl font-semibold text-dark mb-2">MEIs</h3>
                  <p className="text-graphite/60 text-sm font-medium uppercase tracking-wider mb-6">Microempreendedores Individuais</p>
                  <p className="text-graphite font-light mb-6 min-h-[48px]">
                    <span className="font-medium">Público:</span> Empreendedores de base e comércio local.
                  </p>
                  <div className="flex items-baseline gap-2 pb-8 border-b border-black/10">
                    <span className="text-lg font-medium text-graphite/60 align-top">R$</span>
                    <span className="text-5xl font-display font-medium text-dark">49</span>
                    <span className="text-sm font-medium text-graphite/60 align-bottom">/ mês</span>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-petrol shrink-0" />
                    <span className="text-graphite/80 text-sm leading-relaxed">Blindagem prática de contas comerciais (segurança no WhatsApp Business e Instagram).</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-petrol shrink-0" />
                    <span className="text-graphite/80 text-sm leading-relaxed">Treinamento rápido para prevenção de fraudes financeiras (golpes do PIX e boletos falsos).</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-petrol shrink-0" />
                    <span className="text-graphite/80 text-sm leading-relaxed">Letramento sobre privacidade de dados dos clientes no dia a dia.</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-petrol shrink-0" />
                    <span className="text-graphite/80 text-sm leading-relaxed">Guias práticos para recuperação de contas invadidas.</span>
                  </div>
                </div>
              </div>

              {/* Cartão 3: PMEs */}
              <div className="bg-white rounded-[2rem] p-8 lg:p-10 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="font-display text-2xl font-semibold text-dark mb-2">PMEs</h3>
                  <p className="text-graphite/60 text-sm font-medium uppercase tracking-wider mb-6">Pequenas e Médias Empresas</p>
                  <p className="text-graphite font-light mb-6 min-h-[48px]">
                    <span className="font-medium">Público:</span> Empresas em crescimento buscando governança técnica e institucional.
                  </p>
                  <div className="flex items-baseline gap-2 pb-8 border-b border-black/10">
                    <span className="text-lg font-medium text-graphite/60 align-top">R$</span>
                    <span className="text-5xl font-display font-medium text-dark">499</span>
                    <span className="text-sm font-medium text-graphite/60 align-bottom">/ mês</span>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-petrol shrink-0" />
                    <span className="text-graphite/80 text-sm leading-relaxed">Diagnóstico de vulnerabilidades na infraestrutura e governança de dados.</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-petrol shrink-0" />
                    <span className="text-graphite/80 text-sm leading-relaxed">Treinamento corporativo de equipes contra ataques de phishing e engenharia social.</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-petrol shrink-0" />
                    <span className="text-graphite/80 text-sm leading-relaxed">Consultoria inicial para adequação à LGPD e frameworks de segurança.</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-petrol shrink-0" />
                    <span className="text-graphite/80 text-sm leading-relaxed">Estratégias de proteção cibernética e resiliência integradas com Inteligência Artificial.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Banner CTA */}
        <section className="py-32 bg-petrol text-white text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <h2 className="text-5xl md:text-7xl font-display font-medium leading-tight mb-10">
              Um Brasil digitalmente seguro começa pela educação.
            </h2>
            <a 
              href="#contato"
              className="px-10 py-5 rounded-full bg-white text-dark font-medium hover:bg-offwhite transition-colors text-lg"
            >
              Entre em contato
            </a>
          </div>
        </section>

        {/* Contato (#contato) */}
        <section id="contato" className="py-32 bg-petrol relative overflow-hidden text-white">
          {/* Abstract stylized map background (dots symbolizing national impact) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
             <div className="absolute inset-0 bg-gradient-to-t from-petrol via-transparent to-petrol"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-petrol via-transparent to-petrol"></div>
             
             {/* Glowing hubs */}
             <div className="absolute top-[40%] left-[60%] w-32 h-32 bg-purple-subtle rounded-full blur-[80px]"></div>
             <div className="absolute top-[60%] left-[30%] w-48 h-48 bg-white/20 rounded-full blur-[100px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">Entre em contato</h2>
                  <p className="text-white/70 text-lg mb-12 max-w-md">
                    Vamos construir um ambiente digital mais seguro juntos. Estamos prontos para novas parcerias e projetos.
                  </p>

                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12 backdrop-blur-sm">
                    <h3 className="font-display text-xl font-medium mb-3 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-subtle" />
                      Agenda social aberta
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      O Ciber Mind disponibiliza mensalmente palestras gratuitas para organizações que atuam com mulheres e crianças em situação de vulnerabilidade social.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-2">Canais Diretos</p>
                  <div className="flex flex-wrap gap-4">
                     <a href="https://www.linkedin.com/company/cibermind/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                       <Linkedin className="w-5 h-5 text-blue-400" />
                       <span className="font-medium text-sm">LinkedIn</span>
                     </a>
                     <a href="https://www.instagram.com/ciber.mind/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                       <Instagram className="w-5 h-5 text-pink-400" />
                       <span className="font-medium text-sm">Instagram</span>
                     </a>
                  </div>
                </div>
              </div>

              {/* Formulário Minimalista */}
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] text-dark shadow-2xl relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-subtle/20 rounded-full blur-[40px] z-0"></div>
                
                {formStatus === "success" ? (
                  <div className="relative z-10 flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 bg-petrol/10 text-petrol rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold mb-2">Mensagem enviada com sucesso!</h3>
                    <p className="text-graphite/70">Em breve entraremos em contato.</p>
                    <button 
                      onClick={() => setFormStatus("idle")}
                      className="mt-8 px-6 py-3 rounded-full bg-offwhite border border-black/5 hover:bg-black/5 transition-colors font-medium text-sm"
                    >
                      Enviar nova mensagem
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); setFormStatus("success"); }}>
                    <h3 className="font-display text-2xl font-semibold mb-6">Envie uma mensagem</h3>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-dark/70">Nome</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-4 rounded-xl bg-offwhite border border-black/5 focus:border-petrol focus:ring-1 focus:ring-petrol outline-none transition-all placeholder:text-graphite/40"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-dark/70">E-mail</label>
                      <input 
                        type="email" 
                        required
                        placeholder="seu@email.com"
                        className="w-full px-4 py-4 rounded-xl bg-offwhite border border-black/5 focus:border-petrol focus:ring-1 focus:ring-petrol outline-none transition-all placeholder:text-graphite/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-dark/70">Instituição</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Nome da empresa, ONG ou escola"
                        className="w-full px-4 py-4 rounded-xl bg-offwhite border border-black/5 focus:border-petrol focus:ring-1 focus:ring-petrol outline-none transition-all placeholder:text-graphite/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-dark/70">Mensagem</label>
                      <textarea 
                        rows={4}
                        required
                        placeholder="Como podemos colaborar?"
                        className="w-full px-4 py-4 rounded-xl bg-offwhite border border-black/5 focus:border-petrol focus:ring-1 focus:ring-petrol outline-none transition-all placeholder:text-graphite/40 resize-none"
                      ></textarea>
                    </div>

                    <button type="submit" className="w-full py-4 rounded-xl bg-petrol text-white font-medium hover:bg-dark transition-all flex items-center justify-center gap-2 group mt-2">
                      Enviar Mensagem
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-2">
              <span className="font-sans font-bold text-xl text-dark">Ciber Mind</span>
              <img src="/logo.svg" alt="Ciber Mind Logo" className="w-8 h-8 object-contain" />
            </div>
            
            <div className="text-center md:text-right font-display font-medium text-petrol text-lg">
              "Educação digital também é proteção social."
            </div>
          </div>
          
          <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-graphite/60">
             <div>&copy; {new Date().getFullYear()} Ciber Mind. Todos os direitos reservados.</div>
             <div className="flex gap-6">
                <a href="https://www.linkedin.com/company/cibermind/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-petrol transition-colors">LinkedIn</a>
                <a href="https://www.instagram.com/ciber.mind/" target="_blank" rel="noopener noreferrer" className="hover:text-petrol transition-colors">Instagram</a>
                <a href="#" className="hover:text-petrol transition-colors">Termos de Uso</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
