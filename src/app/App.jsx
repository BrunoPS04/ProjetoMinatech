import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import logo from "../assets/imgminatech.webp"
import equipe from "../assets/equipe-Minatech.png"
import {
  Sparkles,
  Code2,
  Atom,
  Calculator,
  Palette,
  Rocket,
  Heart,
  Users,
  BookOpen,
  ChevronDown,
  Star,
  MessageCircle,
  Mail,
  Quote,
  ArrowRight,
  CheckCircle2,
  Zap,
  ArrowUp,
  Menu,
  X,
  Target,
  Lightbulb,
  TrendingUp,
  Award,
  Building2,
  Briefcase,
  GraduationCap,
  UserCircle,
} from "lucide-react";
import { ImageWithFallback } from "./components/ImageWithFallback";

export default function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      setHeaderBg(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const learningAreas = [
    {
      icon: Code2,
      title: "Programação",
      description:
        "Aprenda a criar sites,  TESTE apps e jogos do zero",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Atom,
      title: "Ciências",
      description:
        "Experimentos e descobertas que vão te surpreender",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Calculator,
      title: "Matemática",
      description:
        "Resolva desafios de forma criativa e divertida",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Palette,
      title: "Arte & Design",
      description:
        "Crie projetos visuais incríveis com tecnologia",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Acolhimento",
      description: "Um espaço seguro onde você é protagonista",
    },
    {
      icon: Users,
      title: "Diversidade",
      description: "Todas são bem-vindas, sem exceção",
    },
    {
      icon: Rocket,
      title: "Futuro",
      description: "Construa as habilidades para seus sonhos",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Inscreva-se",
      description:
        "Preencha o formulário de inscrição gratuita",
    },
    {
      number: "02",
      title: "Participe",
      description: "Junte-se às aulas e atividades práticas",
    },
    {
      number: "03",
      title: "Crie",
      description:
        "Desenvolva projetos reais e construa seu portfólio",
    },
  ];

  const faqs = [
    {
      question: "Preciso saber programar para participar?",
      answer:
        "Não! O programa foi criado para iniciantes. Vamos começar do zero e você vai aprender tudo passo a passo.",
    },
    {
      question: "O programa é realmente gratuito?",
      answer:
        "Sim! A Jornada Minatech é 100% gratuita. Nossa missão é democratizar o acesso à tecnologia.",
    },
    {
      question: "Qual a idade para participar?",
      answer:
        "O programa é voltado para meninas de 13 a 18 anos que queiram explorar o mundo da tecnologia.",
    },
    {
      question: "Preciso ter computador próprio?",
      answer:
        "Não se preocupe! Disponibilizamos equipamentos durante as atividades presenciais.",
    },
    {
      question: "Como funciona o programa?",
      answer:
        "São encontros semanais com atividades práticas, projetos em grupo, mentoria e muito aprendizado na prática.",
    },
  ];

  const testimonials = [
    {
      name: "Ana Clara",
      age: 16,
      text: "Antes eu achava que programação não era pra mim. Hoje já criei meu primeiro app e me sinto capaz de tudo!",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      name: "Beatriz",
      age: 15,
      text: "Encontrei amigas incríveis e descobri que adoro matemática quando ela é aplicada a coisas reais.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      name: "Juliana",
      age: 17,
      text: "A Jornada Minatech mudou minha visão de futuro. Agora quero fazer faculdade de Ciência da Computação!",
      image:
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Aprenda fazendo",
      description: "Projetos práticos desde o primeiro dia",
    },
    {
      icon: Users,
      title: "Networking",
      description: "Conecte-se com outras meninas e mentoras",
    },
    {
      icon: CheckCircle2,
      title: "Certificado",
      description: "Reconhecimento oficial ao concluir",
    },
    {
      icon: Rocket,
      title: "Portfólio",
      description: "Construa projetos para mostrar ao mundo",
    },
  ];

  const impactMetrics = [
    { number: "+250", label: "Alunas impactadas", icon: Users },
    { number: "+50", label: "Voluntários", icon: Heart },
    { number: "+100", label: "Mulheres profissionais envolvidas", icon: UserCircle },
    { number: "+40", label: "Visitas técnicas", icon: Building2 },
    { number: "+30", label: "Bolsas de estudo", icon: GraduationCap },
    { number: "+30", label: "Universitárias apoiadas", icon: Award },
    { number: "+10", label: "Mentoras", icon: Lightbulb },
  ];

  const pillars = [
    {
      icon: Lightbulb,
      title: "Inspirar",
      description: "Despertar o interesse e a curiosidade pela tecnologia",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Apoiar",
      description: "Oferecer suporte emocional e recursos necessários",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: TrendingUp,
      title: "Capacitar",
      description: "Desenvolver habilidades técnicas e socioemocionais",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Target,
      title: "Incluir",
      description: "Garantir acesso e oportunidades para todas",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const organizationalValues = [
    "Diversidade",
    "Equidade",
    "Inclusão",
    "Acessibilidade",
    "Inspiração",
    "Alegria",
    "Trabalho em Rede",
  ];

  const partners = [
    "https://via.placeholder.com/200x80/8B5CF6/ffffff?text=Parceiro+1",
    "https://via.placeholder.com/200x80/EC4899/ffffff?text=Parceiro+2",
    "https://via.placeholder.com/200x80/6366F1/ffffff?text=Parceiro+3",
    "https://via.placeholder.com/200x80/F43F5E/ffffff?text=Parceiro+4",
    "https://via.placeholder.com/200x80/8B5CF6/ffffff?text=Parceiro+5",
    "https://via.placeholder.com/200x80/EC4899/ffffff?text=Parceiro+6",
  ];

  const leadership = [
    {
      name: "Maria Silva",
      role: "Fundadora e Diretora Executiva",
      bio: "Engenheira de Software com mais de 10 anos de experiência em tecnologia e impacto social.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      name: "Ana Paula Costa",
      role: "Coordenadora Pedagógica",
      bio: "Educadora apaixonada por democratizar o acesso à tecnologia para meninas.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      name: "Juliana Santos",
      role: "Gerente de Parcerias",
      bio: "Especialista em desenvolvimento de parcerias estratégicas e captação de recursos.",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Header/Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white backdrop-blur-lg shadow-md"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img
                src= {logo}
                alt="Jornada Minatech"
                className="h-10 md:h-14 w-auto"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a
                href="#sobre"
                className="text-gray-700 hover:text-purple-600 transition-colors text-sm"
              >
                Sobre
              </a>
              <a
                href="#programa"
                className="text-gray-700 hover:text-purple-600 transition-colors text-sm"
              >
                Programa
              </a>
              <a
                href="#impacto"
                className="text-gray-700 hover:text-purple-600 transition-colors text-sm"
              >
                Impacto
              </a>
              <a
                href="#parceiros"
                className="text-gray-700 hover:text-purple-600 transition-colors text-sm"
              >
                Parceiros
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow text-sm"
              >
                Inscreva-se
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors text-gray-700"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{
              height: mobileMenuOpen ? "auto" : 0,
              opacity: mobileMenuOpen ? 1 : 0,
            }}
            className="lg:hidden overflow-hidden"
          >
            <nav
              className="flex flex-col gap-4 py-4 border-t border-gray-200"
            >
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Sobre
              </a>
              <a
                href="#programa"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Programa
              </a>
              <a
                href="#impacto"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Impacto
              </a>
              <a
                href="#parceiros"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Parceiros
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Depoimentos
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                FAQ
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg text-center"
              >
                Inscreva-se
              </button>
            </nav>
          </motion.div>
        </div>
      </motion.header>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500 pt-16 md:pt-20">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6"
              >
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">
                  Vagas Abertas 2026
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-tight">
                Sua jornada na{" "}
                <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  tecnologia
                </span>{" "}
                começa aqui
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-white/90 leading-relaxed">
                Um programa gratuito para meninas que querem
                transformar ideias em realidade através da
                tecnologia
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-8 py-3 md:py-4 bg-white text-purple-600 rounded-full shadow-xl hover:shadow-2xl transition-shadow group"
                >
                  <span className="flex items-center gap-2 justify-center">
                    Quero me inscrever
                    <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full hover:bg-white/20 transition-colors"
                >
                  Saiba mais
                </motion.button>
              </div>

              <div className="mt-8 md:mt-12 flex items-center gap-6 md:gap-8 justify-center lg:justify-start">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="text-3xl md:text-4xl">
                    +250
                  </div>
                  <div className="text-white/80 text-sm md:text-base">
                    Alunas impactadas
                  </div>
                </motion.div>
                <div className="w-px h-10 md:h-12 bg-white/30" />
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="text-3xl md:text-4xl">
                    +100
                  </div>
                  <div className="text-white/80 text-sm md:text-base">
                    Profissionais envolvidas
                  </div>
                </motion.div>
                <div className="w-px h-10 md:h-12 bg-white/30" />
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="text-3xl md:text-4xl">
                    100%
                  </div>
                  <div className="text-white/80 text-sm md:text-base">
                    Gratuito
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://minatechbrasil.com.br/wp-content/uploads/2024/08/IMG_9604-1-2048x1536.jpg"
                  alt="Grupo de meninas da Jornada Minatech"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="hidden md:block absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-80 blur-xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-6 md:gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl md:rounded-2xl mb-3 md:mb-4"
                >
                  <value.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </motion.div>
                <h3 className="text-lg md:text-xl mb-2">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 px-2">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impacto" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Nosso Impacto</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              Transformando{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                realidades
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Números que refletem nosso compromisso com a inclusão e o impacto social na vida de meninas e mulheres
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-purple-100 text-center group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4"
                >
                  <metric.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </motion.div>
                <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {metric.number}
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-snug">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="sobre"
        className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden"
      >
        {/* Organic decorative shapes */}
        <motion.div
          className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="rounded-2xl overflow-hidden shadow-lg"
                  >
                    <ImageWithFallback
                      src="https://minatechbrasil.com.br/wp-content/uploads/2024/08/site-minatech-2-768x433.png"
                      alt="Estudantes colaborando"
                      className="w-full h-auto"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="rounded-2xl overflow-hidden shadow-lg"
                  >
                    <ImageWithFallback
                      src="https://minatechbrasil.com.br/wp-content/uploads/2024/08/site-minatech-1-768x433.png"
                      alt="Grupo de estudantes"
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>
                <div className="space-y-4 mt-8">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="rounded-2xl overflow-hidden shadow-lg"
                  >
                    <ImageWithFallback
                      src="https://minatechbrasil.com.br/wp-content/uploads/2023/08/site-minatech-4-768x433.png"
                      alt="Estudante no laptop"
                      className="w-full h-auto"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="rounded-2xl overflow-hidden shadow-lg"
                  >
                    <ImageWithFallback
                      src="https://minatechbrasil.com.br/wp-content/uploads/2024/08/site-minatech-6-768x433.png"
                      alt="Estudante sorrindo"
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-last"
            >
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6">
                <BookOpen className="w-4 h-4" />
                <span className="text-xs md:text-sm">
                  Sobre o projeto
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
                Transformando{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  vidas
                </span>{" "}
                através da tecnologia
              </h2>

              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
                A Jornada Minatech é um programa social gratuito
                que nasceu para quebrar barreiras e abrir
                portas. Acreditamos que toda menina merece a
                chance de explorar seu potencial na tecnologia,
                independentemente de sua origem.
              </p>

              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Aqui você vai aprender fazendo, criar projetos
                reais, fazer amizades incríveis e descobrir que
                o futuro está nas suas mãos.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1">
                      Comunidade acolhedora
                    </h4>
                    <p className="text-gray-600">
                      Conecte-se com outras meninas que
                      compartilham seus sonhos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1">Projetos práticos</h4>
                    <p className="text-gray-600">
                      Aprenda criando coisas de verdade, não
                      apenas teoria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1">Mentoria e apoio</h4>
                    <p className="text-gray-600">
                      Conte com profissionais que vão te guiar
                      nessa jornada
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section id="quem-somos" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full mb-6">
              <Target className="w-4 h-4" />
              <span className="text-sm">Quem Somos</span>
            </div> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              Nossa{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                essência
              </span>
            </h2>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            {/* <div className="inline-flex items-center gap-2 text-purple-600 mb-4">
              <Target className="w-5 h-5" />
              <h3 className="text-xl md:text-2xl">Nossa Missão</h3>
            </div> */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed bg-gradient-to-r from-purple-50 to-pink-50 p-6 md:p-8 rounded-2xl border border-purple-100">
              Promover a inclusão de meninas e mulheres em situação de vulnerabilidade nas áreas STEAM
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-16"
          >
            <h3 className="text-2xl md:text-3xl text-center mb-8">
              Nossos Valores
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {organizationalValues.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full border border-purple-200 hover:border-purple-400 transition-colors"
                >
                  {value}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pillars */}
          <div>
            <h3 className="text-2xl md:text-3xl text-center mb-12">
              Nossos Pilares
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, rotate: [0, -1, 1, 0] }}
                  className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-purple-200 text-center"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${pillar.color} rounded-2xl mb-4`}
                  >
                    <pillar.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </motion.div>
                  <h4 className="text-lg md:text-xl mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Areas */}
      <section
        id="programa"
        className="py-16 md:py-24 bg-white relative overflow-hidden"
      >
        {/* Decorative organic shapes */}
        <motion.div
          className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs md:text-sm">
                Conteúdo STEAM
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
              O que você vai{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                aprender
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Explore diferentes áreas da tecnologia e descubra
              onde sua paixão se encontra
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {learningAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, rotate: [0, -1, 1, 0] }}
                className="relative group"
              >
                <div className="h-full bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-purple-200">
                  <motion.div
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${area.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6`}
                  >
                    <area.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl mb-2 md:mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -1, 1, 0],
                }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl md:rounded-3xl p-4 md:p-6 text-center border border-purple-100 hover:border-purple-300 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl md:rounded-2xl mb-3 md:mb-4">
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-sm md:text-base mb-1 md:mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500 text-white relative overflow-hidden">
        {/* Organic blob shapes */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-white rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-yellow-300 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
              Como participar
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
              Fazer parte da Jornada Minatech é simples e
              gratuito
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="relative inline-block mb-4 md:mb-6">
                  <div className="text-6xl md:text-8xl opacity-20">
                    {step.number}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-xl md:text-2xl">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl mb-2 md:mb-3">
                  {step.title}
                </h3>
                <p className="text-white/80 text-base md:text-lg px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-12 py-4 md:py-5 bg-white text-purple-600 rounded-full shadow-2xl text-base md:text-lg hover:shadow-3xl transition-shadow group"
            >
              <span className="flex items-center gap-2 justify-center">
                Inscreva-se agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <p className="mt-4 text-white/80 text-sm md:text-base">
              Vagas limitadas • 100% gratuito
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="depoimentos"
        className="py-16 md:py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden"
      >
        {/* Decorative blobs */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-purple-700 px-4 py-2 rounded-full mb-6">
              <Quote className="w-4 h-4" />
              <span className="text-sm">Depoimentos</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
              Histórias que{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                inspiram
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça meninas que transformaram suas vidas
              através da tecnologia
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  rotate: index % 2 === 0 ? 1 : -1,
                }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow relative"
              >
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-purple-200 mb-4" />
                <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-4 ring-purple-100">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500">
                      {testimonial.age} anos
                    </p>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white fill-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="parceiros" className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
              <Building2 className="w-4 h-4" />
              <span className="text-sm">Parceiros</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              Quem nos{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                apoia
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Empresas e organizações que acreditam no poder transformador da tecnologia e educação
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <img
                    src={partner}
                    alt={`Parceiro ${index + 1}`}
                    className="h-16 w-auto opacity-60 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Junte-se a nós na missão de transformar vidas através da tecnologia
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="flex items-center gap-2">
                Seja um parceiro
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="lideranca" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-purple-700 px-4 py-2 rounded-full mb-6">
              <UserCircle className="w-4 h-4" />
              <span className="text-sm">Liderança</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              Quem faz{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                acontecer
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça a equipe apaixonada por transformar o futuro das meninas na tecnologia
            </p>
          </motion.div>

          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center">
                <img
                  src={equipe}
                  alt="Equipe Jornada Minatech"
                  className="w-full max-w-5xl rounded-3xl shadow-2xl"
                />
              </div>

              <div className="mt-10 text-center">
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Queremos que todas vocês se sintam abraçadas, acolhidas e inspiradas pela nossa jornada também.
                  Lutamos para ver mais mulheres no universo da tecnologia e fazemos isso de forma voluntária,
                  buscando sempre dar oportunidades para vocês meninas que estão iniciando suas carreiras
                  e escolhendo as profissões.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6">
              <MessageCircle className="w-4 h-4" />
              <span className="text-xs md:text-sm">
                Perguntas frequentes
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
              Tire suas{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                dúvidas
              </span>
            </h2>
          </motion.div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl md:rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full px-4 md:px-6 py-4 md:py-5 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
                >
                  <span className="text-base md:text-lg pr-3 md:pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{
                      rotate: openFaq === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-purple-600 flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 md:px-6 pb-4 md:pb-5 text-sm md:text-base text-gray-700">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-purple-900 text-white relative overflow-hidden">
        {/* Animated organic blobs */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-pink-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-tight">
              Pronta para começar sua jornada?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 md:mb-10 leading-relaxed px-4">
              Junte-se a centenas de meninas que estão
              construindo o futuro através da tecnologia. Sua
              história começa aqui.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-base md:text-lg shadow-2xl group"
              >
                <span className="flex items-center gap-2 justify-center">
                  Fazer inscrição gratuita
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-10 py-4 md:py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full text-base md:text-lg hover:bg-white/20 transition-colors"
              >
                Falar com a equipe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div className="sm:col-span-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 mb-4 cursor-pointer"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xl md:text-2xl">
                  Jornada Minatech
                </span>
              </motion.div>
              <p className="text-gray-400 mb-6 max-w-md text-sm md:text-base">
                Empoderando meninas através da educação em
                tecnologia. Um futuro mais inclusivo e diverso
                começa aqui.
              </p>
              <div className="flex gap-3 md:gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            <div>
              <h4 className="mb-3 md:mb-4 text-base md:text-lg">
                Navegação
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    Programa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    Como participar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 md:mb-4 text-base md:text-lg">
                Contato
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li className="break-words">
                  contato@jornadaminatech.org
                </li>
                <li>São Paulo, Brasil</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 md:pt-8 border-t border-gray-800 text-center text-gray-400 text-xs md:text-sm">
            <p>
              &copy; 2026 Jornada Minatech. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}