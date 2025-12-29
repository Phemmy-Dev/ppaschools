import { Link } from "react-router-dom";
import {
  Monitor,
  Globe,
  Clock,
  Users,
  BookOpen,
  Video,
  MessageCircle,
  CheckCircle2,
  Laptop,
  Wifi,
  Sparkles,
  Bell,
  ArrowRight,
  Rocket,
  Calendar,
  Mail,
} from "lucide-react";
import SEO from "../components/SEO";

// Import school image
import onlineImg from "../assets/WhatsApp Image 2025-12-18 at 5.44.36 PM.jpeg";

const OnlineSchool = () => {
  const features = [
    {
      icon: Video,
      title: "Live Virtual Classes",
      description: "Real-time interactive lessons with our experienced teachers.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: BookOpen,
      title: "Same Curriculum",
      description: "Complete Nigerian curriculum delivered digitally with the same quality.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: MessageCircle,
      title: "Teacher Support",
      description: "Direct communication with teachers for questions and guidance.",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Recorded sessions available for revision at your convenience.",
      color: "from-amber-500 to-orange-600",
    },
  ];

  const requirements = [
    { icon: Laptop, text: "Computer, tablet, or smartphone" },
    { icon: Wifi, text: "Stable internet connection" },
    { icon: Monitor, text: "Web browser (Chrome, Firefox, Safari)" },
  ];

  return (
    <>
      <SEO
        title="Online School - Coming Soon in 2026"
        description="Profound Performance Academy's online school launches in 2026. Same quality education, delivered virtually. Get notified when we launch!"
        keywords="online school Nigeria, virtual learning Abuja, online education, remote learning, e-learning Nigeria"
        url="/online-school"
      />
      <div className="overflow-hidden">
        {/* Hero Section - Coming Soon Focus */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-72 h-72 bg-brand-gold/15 rounded-full animate-blob" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-white/10 rounded-full animate-float delay-300" />
            <div className="absolute top-1/2 right-20 w-24 h-24 border-2 border-brand-gold/40 animate-rotate-slow" />
            <div className="absolute bottom-1/3 left-20 w-16 h-16 bg-brand-gold/20 rounded-full animate-bounce delay-500" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-brand-slate via-brand-slate/95 to-brand-gold/30" />

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-3 bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/40 rounded-full px-6 py-3 mb-8 animate-glow-pulse">
              <Rocket size={18} className="text-brand-gold" />
              <span className="text-brand-gold font-sans text-sm font-bold uppercase tracking-wider">
                Coming Soon
              </span>
              <Sparkles size={16} className="text-brand-gold" />
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
              Online School{" "}
              <span className="relative inline-block">
                <span className="text-brand-gold">Launching Soon</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="#C9A227" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
                </svg>
              </span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
              We're bringing the same quality Profound Performance Academy education to your home.
              Stay tuned for our virtual learning platform launch!
            </p>

            {/* Notify Me Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-yellow-500 text-white px-8 py-4 rounded-full font-sans font-bold text-lg transition-all duration-300 shadow-lg shadow-brand-gold/30 hover:shadow-xl hover:-translate-y-1"
              >
                <Bell size={20} />
                Get Notified When We Launch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Expected Launch */}
            <div className="mt-12 inline-flex items-center gap-3 text-white/60 font-sans text-sm">
              <Calendar size={16} />
              <span>Expected Launch: 2026</span>
            </div>
          </div>

          {/* Decorative bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FDFCF5" />
            </svg>
          </div>
        </section>

        {/* What to Expect */}
        <section className="bg-brand-cream py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold tracking-widest text-sm uppercase">
                <div className="w-8 h-0.5 bg-brand-gold" />
                What to Expect
                <div className="w-8 h-0.5 bg-brand-gold" />
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-slate font-bold mt-4">
                Learning Without Boundaries
              </h2>
              <p className="font-sans text-gray-600 mt-4 max-w-2xl mx-auto">
                When we launch, you'll get the same quality Profound Performance Academy education, delivered directly to your home.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    { text: "Same experienced teachers as physical school", icon: Users },
                    { text: "Complete Nigerian curriculum coverage", icon: BookOpen },
                    { text: "Interactive learning with real-time feedback", icon: MessageCircle },
                    { text: "No need to relocate or commute", icon: Globe },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover-lift">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
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
                    src={onlineImg}
                    alt="Child learning online"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold/10 rounded-3xl -z-10 animate-float" />

                {/* Coming Soon overlay badge */}
                <div className="absolute top-4 right-4 bg-brand-gold text-white font-sans font-bold text-sm px-4 py-2 rounded-full shadow-lg">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="bg-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold tracking-widest text-sm uppercase">
                <Sparkles size={16} />
                Planned Features
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-slate font-bold mt-4">
                What's Included
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative bg-gradient-to-br from-brand-cream to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-gold/10 hover:border-brand-gold/30 hover-lift"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-5 rounded-bl-full`} />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <feature.icon size={26} className="text-white" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-brand-slate mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Preview */}
        <section className="bg-gradient-to-b from-brand-cream to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold tracking-widest text-sm uppercase">
                <Monitor size={16} />
                Technical Requirements
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-slate font-bold mt-4">
                What You'll Need
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {requirements.map((req) => (
                <div
                  key={req.text}
                  className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-lg hover-lift border border-brand-gold/10"
                >
                  <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <req.icon size={28} className="text-brand-gold" />
                  </div>
                  <p className="font-sans text-brand-slate font-medium">
                    {req.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Get Notified */}
        <section className="relative bg-brand-slate py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Rocket size={16} className="text-brand-gold" />
              <span className="text-white/80 font-sans text-sm">Be the First to Know</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
              Interested in Our
              <br />
              <span className="text-brand-gold">Online Program?</span>
            </h2>

            <p className="font-sans text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Leave your details and we'll notify you as soon as our online school launches.
              Be among the first to enroll your child!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-yellow-500 text-white px-10 py-5 rounded-full font-sans font-bold text-lg transition-all duration-300 shadow-lg shadow-brand-gold/30 hover:shadow-xl hover:-translate-y-1"
              >
                <Mail size={22} />
                Contact Us to Register Interest
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OnlineSchool;
