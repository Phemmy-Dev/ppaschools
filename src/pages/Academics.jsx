import { Link } from "react-router-dom";
import {
  Baby,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Users,
  Monitor,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Palette,
  Calculator,
  Globe2,
  Heart,
} from "lucide-react";
import SEO from "../components/SEO";

// Import school image
import academicsImg from "../assets/glimpse1.jpeg";

const Academics = () => {
  const nurserySubjects = [
    { name: "Literacy", icon: BookOpen },
    { name: "Numeracy", icon: Calculator },
    { name: "Social Habits", icon: Users },
    { name: "Health Habits", icon: Heart },
    { name: "General Knowledge", icon: Globe2 },
    { name: "Moral Instruction", icon: Sparkles },
    { name: "Diction", icon: BookOpen },
  ];

  const primarySubjects = [
    "Mathematics",
    "English Studies",
    "Basic Science & Technology",
    "Home Economics",
    "Computer Studies",
    "Christian Religious Studies",
    "Citizenship Education",
    "Security Education",
    "Agricultural Science",
  ];

  return (
    <>
      <SEO
        title="Academics - Curriculum & Programs"
        description="Explore our Nigerian curriculum-based education for Crèche, Nursery, and Primary levels. Quality teaching from experienced educators in Jikwoyi, Abuja."
        keywords="Nigerian curriculum, nursery program Abuja, primary school curriculum, crèche, education program Jikwoyi"
        url="/academics"
      />
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-20 w-64 h-64 bg-brand-gold/10 rounded-full animate-blob" />
            <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/10 rounded-full animate-float delay-300" />
            <div className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-brand-gold/30 animate-rotate-slow" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-brand-slate via-brand-slate/95 to-brand-gold/20" />

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
              <BookOpen size={14} className="text-brand-gold" />
              <span className="text-white/80 font-sans text-sm">Nigerian Curriculum</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
              Excellence in{" "}
              <span className="relative inline-block">
                <span className="text-brand-gold">Education</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="#C9A227" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
                </svg>
              </span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Our curriculum follows Nigerian Ministry of Education standards,
              enhanced with practical teaching methods that make learning memorable.
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-brand-gold rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* Teaching Methodology */}
        <section className="bg-brand-cream py-24 relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-gold/5 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold tracking-widest text-sm uppercase mb-4">
                  <div className="w-8 h-0.5 bg-brand-gold" />
                  Our Approach
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-slate font-bold mb-6 leading-tight">
                  Teaching That{" "}
                  <span className="relative">
                    Can Be Felt
                    <span className="absolute -bottom-1 left-0 w-full h-2 bg-brand-gold/20 -rotate-1" />
                  </span>
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-relaxed mb-8">
                  At Profound Performance Academy, we believe in <strong>practical teaching</strong> — learning that goes beyond textbooks. Our students don't just memorize; they <strong>understand, experience, and apply</strong> what they learn.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Lightbulb, text: "Hands-on experiments and activities", color: "from-amber-500 to-orange-600" },
                    { icon: Users, text: "Small class sizes for personalized attention", color: "from-blue-500 to-indigo-600" },
                    { icon: Monitor, text: "Technology-enhanced learning", color: "from-emerald-500 to-teal-600" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover-lift">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <item.icon size={22} className="text-white" />
                      </div>
                      <span className="font-sans text-brand-slate font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={academicsImg}
                    alt="Students in classroom"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold/10 rounded-3xl -z-10 animate-float" />
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-brand-gold/30 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Classes Offered - Premium Cards */}
        <section className="bg-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold tracking-widest text-sm uppercase">
                <div className="w-8 h-0.5 bg-brand-gold" />
                Classes Offered
                <div className="w-8 h-0.5 bg-brand-gold" />
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-slate font-bold mt-4">
                From Crèche to Primary 6
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Baby,
                  title: "Crèche",
                  ages: "6 months - 2 years",
                  description: "Early childhood care in a safe, nurturing environment with age-appropriate stimulation.",
                  color: "from-pink-500 to-rose-600",
                },
                {
                  icon: BookOpen,
                  title: "Nursery 1 & 2",
                  ages: "2 - 5 years",
                  description: "Building foundational literacy and numeracy skills through play-based learning.",
                  color: "from-blue-500 to-indigo-600",
                },
                {
                  icon: GraduationCap,
                  title: "Primary 1 – 6",
                  ages: "5 - 12 years",
                  description: "Comprehensive curriculum preparing students for secondary education excellence.",
                  color: "from-emerald-500 to-teal-600",
                },
              ].map((level, index) => (
                <div
                  key={level.title}
                  className="group relative bg-gradient-to-br from-brand-cream to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-gold/10 hover:border-brand-gold/30 hover-lift"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${level.color} opacity-5 rounded-bl-full`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${level.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <level.icon size={28} className="text-white" />
                    </div>
                    <span className="inline-block bg-brand-gold/10 text-brand-gold font-sans text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {level.ages}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-brand-slate mb-3">
                      {level.title}
                    </h3>
                    <p className="font-sans text-gray-600 leading-relaxed">
                      {level.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="bg-gradient-to-b from-brand-cream to-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold tracking-widest text-sm uppercase">
                <Sparkles size={16} />
                Curriculum
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-slate font-bold mt-4">
                What We Teach
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Nursery Curriculum */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-brand-gold/10 hover-glow">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <BookOpen size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brand-slate">Nursery Curriculum</h3>
                    <p className="font-sans text-sm text-gray-500">7 Core Subjects</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {nurserySubjects.map((subject) => (
                    <div
                      key={subject.name}
                      className="group flex items-center gap-3 bg-brand-cream hover:bg-brand-gold/10 px-4 py-3 rounded-xl transition-colors cursor-default"
                    >
                      <subject.icon size={18} className="text-brand-gold" />
                      <span className="font-sans text-sm text-brand-slate font-medium">{subject.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Curriculum */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-brand-gold/10 hover-glow">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <GraduationCap size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brand-slate">Primary Curriculum</h3>
                    <p className="font-sans text-sm text-gray-500">9 Core Subjects</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {primarySubjects.map((subject) => (
                    <div
                      key={subject}
                      className="flex items-center gap-3 bg-brand-cream hover:bg-brand-gold/10 px-4 py-3 rounded-xl transition-colors cursor-default"
                    >
                      <CheckCircle2 size={18} className="text-brand-gold" />
                      <span className="font-sans text-sm text-brand-slate font-medium">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-brand-slate py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
              Ready to Enrol Your Child?
            </h2>
            <p className="font-sans text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Join our community of learners and give your child the best educational foundation.
            </p>
            <a
              href="https://wa.link/5mhv2p"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-yellow-500 text-white px-10 py-5 rounded-full font-sans font-bold text-lg transition-all duration-300 shadow-lg shadow-brand-gold/30 hover:shadow-xl hover:-translate-y-1"
            >
              <GraduationCap size={22} />
              Start Enrolment
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Academics;
