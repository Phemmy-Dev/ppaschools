import { Link } from "react-router-dom";
import {
  GraduationCap,
  Users,
  Award,
  Sparkles,
  BookOpen,
  Heart,
  Wallet,
  Monitor,
  Star,
  Phone,
  ChevronRight,
  Quote,
  Camera,
  Play,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import SEO from "../components/SEO";

// Import school images
import heroImg from "../assets/heroimg.jpeg";
import missionImg from "../assets/mission.jpeg";
import galleryMain from "../assets/WhatsApp Image 2025-12-18 at 5.44.17 PM.jpeg";
import gallery1 from "../assets/WhatsApp Image 2025-12-18 at 5.44.18 PM.jpeg";
import gallery2 from "../assets/glimpse1.jpeg";
import gallery3 from "../assets/glimpse2.jpeg";
import gallery4 from "../assets/glimpse3.jpeg";

const Home = () => {
  return (
    <>
      <SEO
        title="Profound Performance Academy"
        description="Quality affordable nursery & primary education in Jikwoyi, Abuja. Building the total child through practical teaching since 2011. CAC registered, DQA accredited."
        keywords="best school in Jikwoyi, nursery school Abuja, primary school Abuja, affordable school FCT, Profound Performance Academy, education Nigeria"
        url="/"
      />
      <div className="overflow-hidden">
        {/* Hero Section - Premium Design */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Abstract Shapes - HIGHLY VISIBLE */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large floating blob - top left */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-gold/20 animate-blob animate-float" />

            {/* Floating gold circle - right side */}
            <div className="absolute top-1/4 right-10 w-32 h-32 bg-brand-gold/30 rounded-full animate-float delay-300" />

            {/* Rotating square */}
            <div className="absolute top-40 right-40 w-24 h-24 border-4 border-brand-gold/40 animate-rotate-slow" />

            {/* Small bouncing dots */}
            <div className="absolute bottom-40 left-1/4 w-6 h-6 bg-white/50 rounded-full animate-bounce" />
            <div className="absolute top-1/3 left-20 w-8 h-8 bg-brand-gold/50 rounded-full animate-bounce delay-500" />
            <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-white/40 rounded-full animate-bounce delay-700" />

            {/* Large pulsing ring */}
            <div className="absolute bottom-20 right-20 w-64 h-64 border-4 border-brand-gold/20 rounded-full animate-ping" style={{ animationDuration: "3s" }} />

            {/* Floating decorative line */}
            <div className="absolute top-1/2 left-10 w-40 h-1 bg-gradient-to-r from-brand-gold/0 via-brand-gold/50 to-brand-gold/0 animate-float delay-200" />
          </div>

          {/* Background Image with Gradient */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-[pulse_20s_ease-in-out_infinite]"
            style={{
              backgroundImage: `url('${heroImg}')`,
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-slate/95 via-brand-slate/85 to-brand-gold/20" />

          {/* Content */}
          <div className="relative z-20 text-center max-w-5xl mx-auto px-4 sm:px-6 py-20">
            {/* Animated Badge */}
            {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8 animate-fade-in-up">
              <div className="w-2 h-2 bg-brand-gold rounded-full animate-ping" />
              <span className="text-white/90 font-sans text-sm font-medium">
                Now Offering Online Classes
              </span>
              <Sparkles size={14} className="text-brand-gold" />
            </div> */}

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-6 leading-tight">
              Building the{" "}
              <span className="relative inline-block">
                <span className="text-brand-gold">Total Child</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="#C9A227" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
                </svg>
              </span>
              <br className="hidden md:block" />
              <span className="block mt-2">Through Practical Teaching</span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Providing affordable, quality education in Jikwoyi, Abuja since
              2011. We lay a solid foundation for your child's future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="https://wa.link/5mhv2p"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-yellow-500 text-white px-8 py-4 rounded-full font-sans font-bold text-lg transition-all duration-300 shadow-lg shadow-brand-gold/30 hover:shadow-xl hover:shadow-brand-gold/40 hover:-translate-y-1"
              >
                <GraduationCap size={22} />
                Enrol Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full font-sans font-semibold text-lg transition-all duration-300"
              >
                <Play size={18} className="text-brand-gold" />
                Discover Our Story
              </Link>
            </div>

            {/* Trust Badges - Floating Cards */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Award, text: "CAC Registered" },
                { icon: CheckCircle2, text: "DQA Accredited" },
                { icon: Sparkles, text: "Est. 2011" },
              ].map((badge, index) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:bg-white/20 transition-all cursor-default"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <badge.icon size={16} className="text-brand-gold" />
                  <span className="text-white/80 text-sm font-sans">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-brand-gold rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Mission Section - Split Design */}
        <section className="relative bg-brand-cream py-24 overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-gold/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div>
                <span className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold tracking-widest text-sm uppercase mb-4">
                  <div className="w-8 h-0.5 bg-brand-gold" />
                  Our Philosophy
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-slate font-bold mb-6 leading-tight">
                  Knowledge is{" "}
                  <span className="relative">
                    Key
                    <span className="absolute -bottom-1 left-0 w-full h-2 bg-brand-gold/20 -rotate-1" />
                  </span>
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-relaxed mb-6">
                  We exist to create an environment for proper learning through
                  practical teaching —{" "}
                  <span className="text-brand-slate font-semibold italic">
                    teaching that can be felt
                  </span>.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-relaxed mb-8">
                  Our vision is to produce a total child by laying a solid
                  educational foundation. Founded in 2011 in Asokoro, Abuja, we
                  relocated to Jikwoyi in 2019 to better serve families in our
                  community.
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { number: "13+", label: "Years" },
                    { number: "500+", label: "Students" },
                    { number: "30+", label: "Teachers" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-serif text-3xl font-bold text-brand-gold">{stat.number}</div>
                      <div className="font-sans text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-brand-gold font-sans font-semibold hover:gap-4 transition-all group"
                >
                  Learn more about our story
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right: Image Collage */}
              <div className="relative">
                <div className="relative z-10">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={missionImg}
                      alt="Students learning in classroom"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold/10 rounded-3xl -z-10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-brand-gold/30 rounded-2xl -z-10" />

                {/* Floating card */}
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-4 z-20 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center">
                      <Heart size={24} className="text-brand-gold" />
                    </div>
                    <div>
                      <div className="font-sans text-sm font-semibold text-brand-slate">Nurturing Environment</div>
                      <div className="font-sans text-xs text-gray-500">Where every child matters</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Cards with Hover Effects */}
        <section className="bg-white py-24 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold tracking-widest text-sm uppercase">
                <div className="w-8 h-0.5 bg-brand-gold" />
                Why Choose Us
                <div className="w-8 h-0.5 bg-brand-gold" />
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-slate font-bold mt-4">
                What Sets Us Apart
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Practical Teaching",
                  description: "Hands-on learning experiences that make education memorable and impactful.",
                  color: "from-amber-500 to-orange-600",
                },
                {
                  icon: Heart,
                  title: "Character Building",
                  description: "We nurture moral values alongside academics for well-rounded development.",
                  color: "from-rose-500 to-pink-600",
                },
                {
                  icon: Wallet,
                  title: "Affordable Quality",
                  description: "Premium education accessible to families in our community.",
                  color: "from-emerald-500 to-teal-600",
                },
                {
                  icon: Monitor,
                  title: "Online Learning",
                  description: "Flexible online classes for students who cannot attend physically.",
                  color: "from-blue-500 to-indigo-600",
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative bg-brand-cream rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <feature.icon size={28} className="text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-brand-slate mb-3 group-hover:text-brand-gold transition-colors">
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

        {/* Gallery Section - Masonry Style with Premium Look */}
        <section className="bg-gradient-to-b from-brand-cream to-white py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold tracking-widest text-sm uppercase">
                <Camera size={16} />
                School Life
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-slate font-bold mt-4">
                A Glimpse Inside
              </h2>
            </div>

            {/* Bento Grid Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
              {/* Large Featured Image */}
              <div className="col-span-2 row-span-2 relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                <img
                  src={galleryMain}
                  alt="Students learning"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <div className="font-serif font-bold">Classroom Learning</div> */}
                </div>
              </div>

              {/* Smaller Images */}
              {[
                { src: gallery1, label: "Teaching" },
                { src: gallery2, label: "Activities" },
                { src: gallery3, label: "Environment" },
                { src: gallery4, label: "Reading" },
              ].map((img, i) => (
                <div key={i} className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                  <img
                    src={img.src}
                    // alt={img.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-slate/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {/* <span className="text-white font-sans font-medium">{img.label}</span> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-10 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold tracking-widest text-sm uppercase">
                <Quote size={16} />
                Testimonials
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-slate font-bold mt-4">
                What Parents Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: "I'm beyond grateful for Dominion's amazing results! A big thank you to his wonderful teachers for their guidance and support.",
                },
                {
                  text: "This is another testament of the depth of great impact Profound Performance Academy had on Murewa.Even though he struggled with subjects like french, music and phonics, we were so shocked when he was called to the stage for the award.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-brand-cream to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-gold/10"
                >
                  {/* Decorative quote */}
                  <Quote size={32} className="text-brand-gold/20 absolute top-6 right-6" />

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                      ))}
                    </div>

                    <p className="font-sans text-gray-600 leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-sans font-semibold text-brand-slate">{testimonial.name}</div>
                        <div className="font-sans text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-brand-slate py-24 overflow-hidden">
          {/* Abstract Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-[400px] h-[400px] border border-white/5 rounded-full" />
              <div className="absolute inset-4 border border-white/5 rounded-full" />
              <div className="absolute inset-8 border border-white/5 rounded-full" />
            </div>
          </div>

          {/* Floating Orbs */}
          <div className="absolute top-20 left-20 w-16 h-16 bg-brand-gold/20 rounded-full animate-float" />
          <div className="absolute bottom-20 right-40 w-12 h-12 bg-white/10 rounded-full animate-float delay-500" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-300 font-sans text-sm font-semibold">Enrolment Now Open</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
              Ready to Give Your Child the Best Start?
            </h2>
            <p className="font-sans text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Join our community of learners. Visit our school or contact us today
              to begin the enrollment process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-5 rounded-full font-sans font-semibold text-lg transition-all"
              >
                <Phone size={20} />
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
