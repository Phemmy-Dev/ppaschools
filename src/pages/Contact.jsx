import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  MessageCircle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      alert("Thank you for your message! We will get back to you soon.");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1000);
  };

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

      {/* Contact Form & Location */}
      <section className="bg-brand-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-brand-gold/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Send size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-brand-slate">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-sm font-medium text-brand-charcoal mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans bg-brand-cream/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-medium text-brand-charcoal mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans bg-brand-cream/50"
                      placeholder="+234..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-brand-charcoal mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans bg-brand-cream/50"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-brand-charcoal mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans bg-brand-cream/50"
                  >
                    <option value="">Select a topic...</option>
                    <option value="admissions">Admissions Enquiry</option>
                    <option value="online">Online School (Coming Soon)</option>
                    <option value="fees">Fees & Payment</option>
                    <option value="visit">Schedule a Visit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-brand-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans bg-brand-cream/50 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-yellow-500 disabled:bg-gray-400 text-white px-6 py-4 rounded-full font-sans font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Location & Social */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-72 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />
                <div className="text-center z-10">
                  <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin size={32} className="text-brand-gold" />
                  </div>
                  <p className="font-sans text-gray-500 font-medium">
                    Interactive map coming soon
                  </p>
                </div>
              </div>

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
  );
};

export default Contact;
