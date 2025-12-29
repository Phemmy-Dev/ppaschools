import { Link } from "react-router-dom";
import {
  FileText,
  UserCheck,
  CreditCard,
  GraduationCap,
  CheckCircle2,
  Phone,
  Calendar,
  ClipboardList,
  Sparkles,
  ArrowRight,
  Clock,
  Heart,
  Users,
} from "lucide-react";
import SEO from "../components/SEO";

const Admissions = () => {
  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Submit Enquiry",
      description: "Contact us via phone or visit the school to express interest and get information about available classes.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      number: "02",
      icon: FileText,
      title: "Complete Application",
      description: "Fill out the admission form and provide required documents: birth certificate, passport photos, previous report (if applicable).",
      color: "from-emerald-500 to-teal-600",
    },
    {
      number: "03",
      icon: UserCheck,
      title: "Interview & Assessment",
      description: "Bring your child for a brief assessment to determine the appropriate class placement.",
      color: "from-purple-500 to-violet-600",
    },
    {
      number: "04",
      icon: CreditCard,
      title: "Pay Fees",
      description: "Complete payment of registration and school fees to secure your child's place.",
      color: "from-amber-500 to-orange-600",
    },
    {
      number: "05",
      icon: GraduationCap,
      title: "Begin Classes",
      description: "Your child is now officially enrolled! Collect uniforms and books, then start learning.",
      color: "from-brand-gold to-yellow-500",
    },
  ];

  const requirements = [
    { text: "Completed admission form", icon: FileText },
    { text: "Child's birth certificate (original & copy)", icon: FileText },
    { text: "4 passport photographs", icon: Users },
    { text: "Previous school report (for transfers)", icon: ClipboardList },
    { text: "Parent/Guardian ID card", icon: UserCheck },
  ];

  return (
    <>
      <SEO
        title="Admissions - Enroll Your Child Today"
        description="Enroll your child at Profound Performance Academy. Easy 5-step admission process. Now accepting students for Crèche, Nursery, and Primary classes in Jikwoyi, Abuja."
        keywords="school admission Abuja, enroll child Jikwoyi, nursery admission, primary school enrollment FCT, school registration Nigeria"
        url="/admissions"
      />
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-brand-gold/10 rounded-full animate-blob" />
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/10 rounded-full animate-float delay-300" />
            <div className="absolute top-1/2 right-20 w-20 h-20 border-2 border-brand-gold/30 animate-rotate-slow" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-brand-slate via-brand-slate/95 to-brand-gold/20" />

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
            <div className="inline-flex items-center gap-3 bg-green-500/20 backdrop-blur-sm border border-green-400/40 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-300 font-sans text-sm font-bold uppercase tracking-wider">
                Now Enrolling
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
              Join Our{" "}
              <span className="relative inline-block">
                <span className="text-brand-gold">Academy</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="#C9A227" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
                </svg>
              </span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
              Enrolment is open for the new academic session. Give your child the gift of quality education at Profound Performance Academy.
            </p>

            <a
              href="https://wa.link/5mhv2p"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-yellow-500 text-white px-8 py-4 rounded-full font-sans font-bold text-lg transition-all duration-300 shadow-lg shadow-brand-gold/30 hover:shadow-xl hover:-translate-y-1"
            >
              <Phone size={20} />
              Contact Us to Enrol
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-brand-gold rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* Admission Process - Timeline */}
        <section className="bg-brand-cream py-24 relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-gold/5 to-transparent" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold tracking-widest text-sm uppercase">
                <div className="w-8 h-0.5 bg-brand-gold" />
                How to Enrol
                <div className="w-8 h-0.5 bg-brand-gold" />
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-slate font-bold mt-4">
                Admission Procedure
              </h2>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="group relative bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border border-brand-gold/10 hover:border-brand-gold/30"
                >
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Step Number */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      <span className="font-serif font-bold text-white text-xl">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center shrink-0">
                      <step.icon size={28} className="text-brand-gold" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-slate mb-2">
                        {step.title}
                      </h3>
                      <p className="font-sans text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-12 -bottom-6 w-0.5 h-6 bg-brand-gold/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements & Admissions Open */}
        <section className="bg-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Requirements */}
              <div>
                <span className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold tracking-widest text-sm uppercase mb-4">
                  <div className="w-8 h-0.5 bg-brand-gold" />
                  Requirements
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-slate font-bold mb-8">
                  What You Need
                </h2>

                <div className="space-y-4">
                  {requirements.map((req, index) => (
                    <div
                      key={req.text}
                      className="flex items-center gap-4 bg-brand-cream rounded-xl p-4 hover-lift"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow">
                        <CheckCircle2 size={20} className="text-white" />
                      </div>
                      <span className="font-sans text-brand-slate font-medium">{req.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admissions Open Card */}
              <div className="bg-gradient-to-br from-brand-cream to-white rounded-3xl p-8 shadow-xl border border-brand-gold/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg animate-glow-pulse">
                    <Calendar size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brand-slate">
                      Admissions Open
                    </h3>
                    <p className="text-sm text-gray-500">Year-round enrollment</p>
                  </div>
                </div>

                <p className="font-sans text-gray-600 mb-8 leading-relaxed">
                  We accept new students throughout the academic year, subject to availability. Early registration is encouraged to secure your child's place.
                </p>

                <div className="space-y-4">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-yellow-500 text-white px-6 py-4 rounded-full font-sans font-bold transition-all shadow-lg hover:shadow-xl"
                  >
                    <Phone size={20} />
                    Contact Us Now
                  </Link>
                  <p className="text-center text-sm text-gray-500">
                    Or visit us at our school in Jikwoyi, Abuja
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="mt-8 pt-6 border-t border-brand-gold/20 grid grid-cols-3 gap-4">
                  {[
                    { icon: Clock, label: "Quick Process" },
                    { icon: Heart, label: "Caring Staff" },
                    { icon: Users, label: "Small Classes" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <item.icon size={24} className="text-brand-gold mx-auto mb-2" />
                      <p className="font-sans text-xs text-gray-500">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Affordable Fees CTA */}
        <section className="relative bg-brand-slate py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Sparkles size={32} className="text-brand-gold mx-auto mb-6" />

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
              Affordable{" "}
              <span className="text-brand-gold">Quality Education</span>
            </h2>

            <p className="font-sans text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              We believe quality education should be accessible. Our fees are competitively priced for families in our community. Contact us for the current fee structure.
            </p>

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-yellow-500 text-white px-10 py-5 rounded-full font-sans font-bold text-lg transition-all duration-300 shadow-lg shadow-brand-gold/30 hover:shadow-xl hover:-translate-y-1"
            >
              <GraduationCap size={22} />
              Start Your Child's Journey
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Admissions;
