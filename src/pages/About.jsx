import { Link } from "react-router-dom";
import {
  Award,
  Target,
  Eye,
  Heart,
  Clock,
  MapPin,
  Quote,
  Users,
  BookOpen,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

// Import school images
import historyImg from "../assets/WhatsApp Image 2025-12-18 at 5.44.23 PM.jpeg";
import galleryImg1 from "../assets/WhatsApp Image 2025-12-18 at 5.44.24 PM.jpeg";
import galleryImg2 from "../assets/WhatsApp Image 2025-12-18 at 5.44.25 PM.jpeg";
import galleryImg3 from "../assets/WhatsApp Image 2025-12-18 at 5.44.26 PM.jpeg";
import galleryImg4 from "../assets/WhatsApp Image 2025-12-18 at 5.44.27 PM.jpeg";
import galleryImg5 from "../assets/gallery5.jpeg";
import galleryImg6 from "../assets/gallery6.jpeg";
import galleryImg7 from "../assets/WhatsApp Image 2025-12-18 at 5.44.34 PM.jpeg";
import galleryImg8 from "../assets/WhatsApp Image 2025-12-18 at 5.44.35 PM.jpeg";

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Premium */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-brand-gold/10 rounded-full animate-blob" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full animate-float delay-300" />
          <div className="absolute top-1/2 right-20 w-20 h-20 border-2 border-brand-gold/30 animate-rotate-slow" />
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-slate via-brand-slate/95 to-brand-gold/20" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
            <Sparkles size={14} className="text-brand-gold" />
            <span className="text-white/80 font-sans text-sm">Est. 2011</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
            Discover{" "}
            <span className="relative inline-block">
              <span className="text-brand-gold">Our Story</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="#C9A227" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
              </svg>
            </span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Learn about our journey, values, and the passion that drives us to
            nurture every child who walks through our doors.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-brand-gold rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="bg-brand-cream py-24 relative">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-gold/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="animate-fade-in-left">
              <span className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold tracking-widest text-sm uppercase mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                Our Story
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-slate font-bold mb-8 leading-tight">
                A Journey of{" "}
                <span className="relative">
                  Excellence
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-brand-gold/20 -rotate-1" />
                </span>
              </h2>

              {/* Timeline */}
              <div className="space-y-8 relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-brand-gold/20" />

                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    1
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                    <span className="text-brand-gold font-sans font-bold text-sm">2011</span>
                    <h3 className="font-serif text-lg font-bold text-brand-slate mt-1">Founded in Asokoro</h3>
                    <p className="font-sans text-gray-600 text-sm mt-2">
                      Established at Mahathma Gandhi Street, Asokoro, Abuja with a vision to provide quality education to every child.
                    </p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    2
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                    <span className="text-brand-gold font-sans font-bold text-sm">2019</span>
                    <h3 className="font-serif text-lg font-bold text-brand-slate mt-1">Relocated to Jikwoyi</h3>
                    <p className="font-sans text-gray-600 text-sm mt-2">
                      Moved to better serve families in the community who needed access to affordable, quality education.
                    </p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    3
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                    <span className="text-brand-gold font-sans font-bold text-sm">Today</span>
                    <h3 className="font-serif text-lg font-bold text-brand-slate mt-1">Growing & Thriving</h3>
                    <p className="font-sans text-gray-600 text-sm mt-2">
                      Continuing to nurture young minds with practical, hands-on teaching, now offering online classes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image with Stats */}
            <div className="relative animate-fade-in-right">
              <div className="relative z-10">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={historyImg}
                    alt="School environment"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold/10 rounded-3xl -z-10 animate-float" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-brand-gold/30 rounded-2xl -z-10" />

              {/* Stats card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 z-20 hidden md:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <span className="font-serif text-3xl font-bold text-brand-gold">13+</span>
                    <p className="font-sans text-xs text-gray-500 mt-1">Years</p>
                  </div>
                  <div className="text-center">
                    <span className="font-serif text-3xl font-bold text-brand-gold">500+</span>
                    <p className="font-sans text-xs text-gray-500 mt-1">Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Motto - Premium Cards */}
      <section className="bg-white py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold tracking-widest text-sm uppercase">
              <div className="w-8 h-0.5 bg-brand-gold" />
              What We Believe
              <div className="w-8 h-0.5 bg-brand-gold" />
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-slate font-bold mt-4">
              Our Guiding Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="group relative bg-gradient-to-br from-brand-cream to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-gold/10 hover:border-brand-gold/30 hover-lift">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-bl-full" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Eye size={28} className="text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-slate mb-4">
                  Our Vision
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  To produce a <strong className="text-brand-slate">total child</strong> by laying a solid
                  educational foundation that prepares them for life's challenges.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="group relative bg-gradient-to-br from-brand-cream to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-gold/10 hover:border-brand-gold/30 hover-lift md:-mt-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-bl-full" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Target size={28} className="text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-slate mb-4">
                  Our Mission
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  We exist to create an environment for proper learning through
                  <strong className="text-brand-slate"> practical teaching — teaching that can be felt</strong>.
                </p>
              </div>
            </div>

            {/* Motto */}
            <div className="group relative bg-gradient-to-br from-brand-cream to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-gold/10 hover:border-brand-gold/30 hover-lift">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-gold/5 to-transparent rounded-bl-full" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Heart size={28} className="text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-slate mb-4">
                  Our Motto
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed mb-4">
                  We believe education unlocks every child's potential.
                </p>
                <p className="font-serif text-2xl text-brand-gold font-bold italic">
                  "Knowledge is Key"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation - Floating Badges */}
      <section className="bg-gradient-to-b from-brand-cream to-white py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-brand-gold/5 rounded-full animate-float" />
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-brand-gold/10 rounded-full animate-float delay-500" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold tracking-widest text-sm uppercase">
              <Award size={16} />
              Credentials
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-slate font-bold mt-4">
              Accreditation & Compliance
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Award, label: "CAC Registered", desc: "Corporate Affairs" },
              { icon: CheckCircle2, label: "DQA Accredited", desc: "Quality Assured" },
              { icon: Clock, label: "Est. 2011", desc: "13+ Years" },
              { icon: MapPin, label: "Jikwoyi, Abuja", desc: "AMAC, FCT" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover-lift border border-brand-gold/10"
              >
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold group-hover:scale-110 transition-all">
                  <item.icon size={24} className="text-brand-gold group-hover:text-white transition-colors" />
                </div>
                <p className="font-sans font-bold text-brand-slate">{item.label}</p>
                <p className="font-sans text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - 8 Images */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold tracking-widest text-sm uppercase">
              <BookOpen size={16} />
              Life at Our School
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-slate font-bold mt-4">
              Moments That Matter
            </h2>
          </div>

          {/* 8-Image Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Row 1 - 4 images */}
            {[
              { src: galleryImg1, label: "Classroom Learning" },
              { src: galleryImg2, label: "Teacher Support" },
              { src: galleryImg3, label: "Group Activities" },
              { src: galleryImg4, label: "School Environment" },
            ].map((img, i) => (
              <div key={i} className="relative group aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans font-medium text-sm">{img.label}</span>
                </div>
              </div>
            ))}

            {/* Row 2 - 4 images */}
            {[
              { src: galleryImg5, label: "Reading Time" },
              { src: galleryImg6, label: "Happy Students" },
              { src: galleryImg7, label: "Creative Arts" },
              { src: galleryImg8, label: "Learning Together" },
            ].map((img, i) => (
              <div key={i + 4} className="relative group aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"> 
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership Message - Premium Quote */}
      <section className="relative bg-brand-slate py-24 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Quote size={48} className="text-brand-gold/30 mx-auto mb-8" />

          <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-8">
            Message from the Head of School
          </h2>

          <blockquote className="font-sans text-xl md:text-2xl text-white/90 leading-relaxed italic mb-10">
            "At Profound Performance Academy, every child matters. We are
            committed to providing not just academic knowledge, but building
            character, instilling values, and preparing our students for a
            successful future. Thank you for trusting us with your children."
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-glow-pulse">
              <span className="font-serif font-bold text-white text-2xl">H</span>
            </div>
            <div className="text-left">
              <p className="font-sans font-bold text-white text-lg">Head of School</p>
              <p className="font-sans text-white/60 text-sm">
                Profound Performance Academy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-cream py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-brand-slate font-bold mb-4">
            Want to Join Our Family?
          </h2>
          <p className="font-sans text-gray-600 mb-8">
            Discover how Profound Performance Academy can be the right choice for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.link/w6zfaj"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-yellow-500 text-white px-8 py-4 rounded-full font-sans font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <GraduationCap size={20} />
              Start Enrolment
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-slate hover:bg-brand-charcoal text-white px-8 py-4 rounded-full font-sans font-semibold transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
