/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Instagram, 
  ChevronRight, 
  Star, 
  Calendar, 
  User, 
  Stethoscope,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

// --- Constants ---
const CLINIC_NAME = "Ashish Dental Care";
const DOCTOR_NAME = "Dr. P. Ashish";
const PHONE_NUMBER = "+919981559884";
const WHATSAPP_LINK = `https://wa.me/919981559884`;
const INSTAGRAM_LINK = "https://www.instagram.com/ashish.dental.care";
const ADDRESS = "Shop No 12, T Market, Power House, Bhilai 490011, Chhattisgarh, India";

const SERVICES = [
  { name: "Root Canal", icon: "🦷", desc: "Pain-free root canal treatment" },
  { name: "Braces", icon: "😬", desc: "Straighten your smile perfectly" },
  { name: "Cleaning", icon: "✨", desc: "Professional scaling & polishing" },
  { name: "Implants", icon: "🔩", desc: "Permanent tooth replacement" },
  { name: "Kids Dentistry", icon: "👶", desc: "Gentle care for little ones" },
];

const TESTIMONIALS = [
  { name: "Rajesh Kumar", rating: 5, text: "Dr. Ashish is very professional. The clinic is clean and the treatment was painless. Highly recommended in Bhilai!" },
  { name: "Priya Singh", rating: 5, text: "Best dentist I've visited. Very patient and explains everything clearly. My kids are also comfortable here." },
  { name: "Amit Sharma", rating: 5, text: "Excellent experience for my root canal. The staff is friendly and the appointment was on time." },
];

// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="text-center mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-600 max-w-2xl mx-auto text-lg"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    problem: '',
    date: '',
    time: ''
  });

  const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
    <div className={`${className} bg-medical-blue rounded-xl flex items-center justify-center text-white font-bold text-xl overflow-hidden`}>
      A
    </div>
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.mobile || !formData.date || !formData.time) {
      alert("Please fill all required fields / कृपया सभी जानकारी भरें");
      return;
    }

    const message = `Hello Ashish Dental Care, My name is ${formData.name}. I want appointment on ${formData.date} at ${formData.time} for ${formData.problem || 'General Checkup'}. Please confirm.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`${WHATSAPP_LINK}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="w-12 h-12" />
            <div>
              <h1 className="font-display font-bold text-xl leading-tight text-slate-900">Ashish Dental</h1>
              <p className="text-[10px] uppercase tracking-widest text-medical-green font-bold">Care & Cure</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-600 hover:text-medical-blue font-medium">Services</a>
            <a href="#about" className="text-slate-600 hover:text-medical-blue font-medium">About</a>
            <a href="#contact" className="text-slate-600 hover:text-medical-blue font-medium">Contact</a>
          </div>
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="bg-medical-blue/10 text-medical-blue px-5 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-medical-blue hover:text-white transition-all"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-medical-blue rounded-full text-sm font-bold mb-6">
              ✨ Best Dental Clinic in Bhilai
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Expert Dental Care <br />
              <span className="text-medical-blue">for Your Family</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              Experience pain-free treatments with {DOCTOR_NAME}. Book your appointment in under 30 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="btn-primary">
                Book Appointment <ChevronRight size={20} />
              </a>
              <a href={WHATSAPP_LINK} className="btn-secondary">
                <MessageCircle size={20} /> WhatsApp Chat
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm font-medium text-slate-600">500+ Happy Patients in Bhilai</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/dentist/800/800" 
                alt="Modern Dental Clinic" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -right-6 bottom-20 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-slate-100"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Availability</p>
                <p className="font-bold text-slate-900">Mon-Sat: 10AM-8PM</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="We offer a wide range of dental services with the latest technology.">
            Our Services
          </SectionHeading>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-blue-100 transition-all border border-transparent hover:border-blue-100 text-center group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                <p className="text-sm text-slate-500">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/doctor/600/700" 
                alt={DOCTOR_NAME} 
                className="rounded-[2.5rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-black/10"></div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-medical-blue font-bold tracking-widest uppercase text-sm mb-4 block">Meet Your Doctor</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Expert Care by {DOCTOR_NAME}</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Dr. P. Ashish is a dedicated dental professional committed to providing the highest quality of care to the Bhilai community. With years of experience and a gentle approach, he ensures every patient leaves with a confident smile.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Modern Pain-free Techniques",
                "Advanced Diagnostic Tools",
                "Patient-First Philosophy",
                "Sterilized & Safe Environment"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-medical-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <a href="#book" className="inline-flex items-center gap-2 text-medical-blue font-bold hover:gap-4 transition-all">
              Book your visit now <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section id="book" className="py-24 px-4 bg-medical-blue relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Book Appointment in 30s</h2>
            <p className="text-blue-100 text-lg">Fill details and confirm on WhatsApp</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl"
          >
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { step: 1, label: "Fill Details", active: true },
                { step: 2, label: "WhatsApp", active: false },
                { step: 3, label: "Confirm", active: false }
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center font-bold mb-2 ${s.active ? 'bg-medical-blue text-white' : 'bg-slate-100 text-slate-400'}`}>
                    {s.step}
                  </div>
                  <p className={`text-xs font-bold uppercase tracking-wider ${s.active ? 'text-medical-blue' : 'text-slate-400'}`}>{s.label}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1 flex items-center gap-2">
                    <User size={16} className="text-medical-blue" /> Your Name / आपका नाम *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Enter full name"
                    className="input-field"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1 flex items-center gap-2">
                    <Phone size={16} className="text-medical-blue" /> Mobile Number / मोबाइल नंबर *
                  </label>
                  <input 
                    type="tel" 
                    name="mobile"
                    required
                    placeholder="10-digit number"
                    className="input-field"
                    value={formData.mobile}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1 flex items-center gap-2">
                  <Stethoscope size={16} className="text-medical-blue" /> Dental Problem / समस्या (Optional)
                </label>
                <textarea 
                  name="problem"
                  placeholder="e.g. Toothache, Cleaning, Braces..."
                  className="input-field min-h-[100px] resize-none"
                  value={formData.problem}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1 flex items-center gap-2">
                    <Calendar size={16} className="text-medical-blue" /> Select Date / तारीख चुनें *
                  </label>
                  <input 
                    type="date" 
                    name="date"
                    required
                    className="input-field"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1 flex items-center gap-2">
                    <Clock size={16} className="text-medical-blue" /> Select Time / समय चुनें *
                  </label>
                  <select 
                    name="time"
                    required
                    className="input-field"
                    value={formData.time}
                    onChange={handleInputChange}
                  >
                    <option value="">Choose a slot</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full btn-primary py-5 rounded-2xl text-xl mt-4">
                Confirm on WhatsApp <MessageCircle size={24} />
              </button>
              <p className="text-center text-slate-400 text-sm">
                By clicking, you will be redirected to WhatsApp to confirm.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="What our patients say about their experience.">
            Patient Reviews
          </SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-lg shadow-slate-100"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-6 text-lg leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-medical-blue font-bold">
                    {t.name[0]}
                  </div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Visit us at our clinic in Power House, Bhilai.">
            Our Location
          </SectionHeading>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[450px] border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.578634865882!2d81.3855555!3d21.1891667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d0000000001%3A0x0!2sShop%20No%2012%2C%20T%20Market%2C%20Power%20House%2C%20Bhilai%20490011!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Logo className="w-12 h-12" />
                <h2 className="text-2xl font-bold font-display">{CLINIC_NAME}</h2>
              </div>
              <p className="text-slate-400 max-w-sm mb-8 text-lg">
                Providing world-class dental care with a personal touch. Your smile is our priority.
              </p>
              <div className="flex gap-4">
                <a href={INSTAGRAM_LINK} className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-medical-blue transition-colors">
                  <Instagram size={24} />
                </a>
                <a href={WHATSAPP_LINK} className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-medical-blue transition-colors">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Dr. Ashish</a></li>
                <li><a href="#book" className="hover:text-white transition-colors">Book Appointment</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Clinic Hours</h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex justify-between">
                  <span>Mon - Sat</span>
                  <span className="text-white font-bold">10 AM - 8 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-red-400 font-bold">Emergency Only</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-slate-800 rounded-2xl border border-slate-700">
                <p className="text-sm text-slate-400 mb-1">Call for Emergency:</p>
                <a href={`tel:${PHONE_NUMBER}`} className="text-xl font-bold text-white hover:text-medical-blue transition-colors">
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-10 flex flex-col md:row justify-between items-center gap-6">
            <div className="flex items-start gap-3 text-slate-400 max-w-md">
              <MapPin size={20} className="text-medical-blue flex-shrink-0 mt-1" />
              <p className="text-sm">{ADDRESS}</p>
            </div>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={WHATSAPP_LINK} 
          className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={32} />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={`tel:${PHONE_NUMBER}`} 
          className="w-16 h-16 bg-medical-blue text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-600 transition-colors"
          title="Call Now"
        >
          <Phone size={32} />
        </motion.a>
      </div>
    </div>
  );
}
