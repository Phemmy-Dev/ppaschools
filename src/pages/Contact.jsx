import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import SEO from "../components/SEO";

const Contact = () => {
  const contactCards = [
    {
      icon: Phone,
      title: "Phone",
      value: "+234 707 615 3892",
      link: "tel:+2347076153892",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Mail,
      title: "Email",
      value: "ppacademyofficial@gmail.com",
      link: "mailto:ppacademyofficial@gmail.com",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Jikwoyi, Abuja",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon - Fri: 8am - 4pm",
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <>
      <SEO
        title="Contact Us - Get in Touch"
        description="Contact Profound Performance Academy. Call +234 707 615 3892 or visit us at No. 3 Rahinna Street, Jikwoyi, Abuja. We're here to help with admissions and inquiries."
        keywords="contact school Jikwoyi, school phone number Abuja, Profound Performance Academy address, school location FCT"
        url="/contact"
      />
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-20 w-64 h-64 bg-brand-gold/10 rounded-full animate-blob" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/10 rounded-full animate-float delay-300" />
            <div className="absolute top-1/2 left-20 w-16 h-16 border-2 border-brand-gold/30 animate-rotate-slow" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-brand-slate via-brand-slate/95 to-brand-gold/20" />

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
              <MessageCircle size={14} className="text-brand-gold" />
              <span className="text-white/80 font-sans text-sm">We'd love to hear from you</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
              Get in{" "}
              <span className="relative inline-block">
                <span className="text-brand-gold">Touch</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="#C9A227" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
                </svg>
              </span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Have questions about admissions, fees, or our programs? Reach out to us through any of the channels below.
            </p>
          </div>
        </section>

        {/* Contact Cards - Floating */}
        <section className="py-12 -mt-16 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactCards.map((card, index) => (
                <div
                  key={card.title}
                  className="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift border border-brand-gold/10"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <card.icon size={26} className="text-white" />
                  </div>
                  <h3 className="font-serif font-bold text-brand-slate text-lg mb-2">
                    {card.title}
                  </h3>
                  {card.link ? (
                    <a href={card.link} className="font-sans text-gray-600 text-sm hover:text-brand-gold transition-colors">
                      {card.value}
                    </a>
                  ) : (
                    <p className="font-sans text-gray-600 text-sm">{card.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <section className="bg-brand-cream py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-brand-gold font-sans font-bold tracking-widest text-sm uppercase">
                <div className="w-8 h-0.5 bg-brand-gold" />
                Find Us
                <div className="w-8 h-0.5 bg-brand-gold" />
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-slate font-bold mt-4">
                Visit Our School
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Google Map Embed */}
              <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-2xl border border-brand-gold/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5432!2d7.3461!3d8.9753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTgnMzEuMSJOIDfCsDIwJzQ2LjAiRQ!5e0!3m2!1sen!2sng!4v1704061234567!5m2!1sen!2sng"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Profound Performance Academy Location"
                  className="w-full"
                />
              </div>

              {/* Address & Contact Card */}
              <div className="space-y-6">
                {/* Full Address Card */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-brand-gold/10">
                  <h3 className="font-serif text-xl font-bold text-brand-slate mb-6 flex items-center gap-3">
                    <MapPin size={24} className="text-brand-gold" />
                    Our Location
                  </h3>

                  <div className="bg-brand-cream rounded-xl p-4 mb-6">
                    <p className="font-sans text-gray-600 leading-relaxed">
                      <strong className="text-brand-slate">No. 3 Rahinna Street</strong>
                      <br />
                      Opposite AEDC Office, Angua Gede
                      <br />
                      Jikwoyi, Abuja
                      <br />
                      <span className="text-sm text-gray-500">(Under AMAC, FCT)</span>
                    </p>
                  </div>

                  {/* Quick Contact */}
                  <div className="space-y-3 mb-6">
                    <a
                      href="tel:+2347076153892"
                      className="flex items-center gap-3 text-gray-600 hover:text-brand-gold transition-colors"
                    >
                      <Phone size={18} className="text-brand-gold" />
                      <span className="font-sans">+234 707 615 3892</span>
                    </a>
                    <a
                      href="mailto:ppacademyofficial@gmail.com"
                      className="flex items-center gap-3 text-gray-600 hover:text-brand-gold transition-colors"
                    >
                      <Mail size={18} className="text-brand-gold" />
                      <span className="font-sans text-sm">ppacademyofficial@gmail.com</span>
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="font-sans font-semibold text-brand-slate mb-4">
                      Follow Us
                    </h4>
                    <div className="flex gap-4">
                      <a
                        href="https://www.facebook.com/61564853650936"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                      >
                        <Facebook size={24} className="text-white" />
                      </a>
                      <a
                        href="https://www.instagram.com/p/DKKGW8Vo4gb/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                      >
                        <Instagram size={24} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.link/w6zfaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      <MessageCircle size={28} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-white text-lg">Chat with Us</h4>
                      <p className="font-sans text-white/80 text-sm">Message us on WhatsApp</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Response Promise */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 text-brand-gold mb-4">
              <Sparkles size={20} />
              <span className="font-sans font-bold text-sm uppercase tracking-wider">Our Promise</span>
              <Sparkles size={20} />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-brand-slate font-bold mb-4">
              We Respond Within 24 Hours
            </h2>
            <p className="font-sans text-gray-600 max-w-2xl mx-auto">
              Your enquiry is important to us. Our team will get back to you promptly to answer all your questions about enrolment, fees, and our programs.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
