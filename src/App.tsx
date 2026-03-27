import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Phone, Mail, MapPin, Calendar, Users, 
  ChevronRight, Star, Instagram, Facebook, Twitter,
  ArrowUp, CheckCircle2, Loader2, Moon, Sun, ChevronLeft
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean, toggleDarkMode: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Venues', href: '#venues' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Booking', href: '#booking' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-display font-bold text-xl">R</span>
          </div>
          <span className={cn(
            "font-display text-xl font-bold tracking-widest uppercase",
            isScrolled ? "text-zinc-900 dark:text-white" : "text-white"
          )}>
            Royal Aura
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-widest uppercase transition-colors hover:text-gold",
                isScrolled ? "text-zinc-600 dark:text-zinc-400" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleDarkMode}
            className={cn(
              "p-2 rounded-full transition-colors",
              isScrolled ? "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800" : "text-white/90 hover:bg-white/10"
            )}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a 
            href="#booking"
            className="px-6 py-2 gold-gradient text-white text-xs font-bold tracking-widest uppercase rounded-full hover:shadow-xl hover:scale-105 transition-all"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleDarkMode}
            className={cn(
              "p-2 rounded-full transition-colors",
              isScrolled ? "text-zinc-600 dark:text-zinc-400" : "text-white/90"
            )}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="text-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? "text-zinc-900 dark:text-white" : "text-white"} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 shadow-2xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-zinc-800 dark:text-zinc-200 text-lg font-medium border-b border-zinc-100 dark:border-zinc-800 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 gold-gradient text-white text-center font-bold rounded-xl"
            >
              Reserve Your Date
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax-like effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold font-display tracking-[0.3em] uppercase mb-4 text-sm md:text-base"
        >
          Excellence in Every Detail
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight"
        >
          Celebrate Your Moments in <span className="italic text-gold-light">Royal Style</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#booking"
            className="px-10 py-4 gold-gradient text-white font-bold tracking-widest uppercase rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all"
          >
            Book Now
          </a>
          <a 
            href="#venues"
            className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold tracking-widest uppercase rounded-full hover:bg-white/20 transition-all"
          >
            Explore Venues
          </a>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};

interface VenueCardProps {
  key?: React.Key;
  title: string;
  description: string;
  image: string;
  price: string;
  features: string[];
}

const VenueCard = ({ title, description, image, price, features }: VenueCardProps) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 shadow-xl border border-zinc-100 dark:border-zinc-800"
  >
    <div className="aspect-[4/5] overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-serif text-zinc-900 dark:text-white">{title}</h3>
        <span className="text-gold font-bold">{price}</span>
      </div>
      <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
        {description}
      </p>
      
      <div className="mb-6 space-y-2">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
            <CheckCircle2 size={12} className="text-gold" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <button className="flex items-center gap-2 text-gold font-bold text-xs tracking-widest uppercase group-hover:gap-4 transition-all">
        View Details <ChevronRight size={16} />
      </button>
    </div>
  </motion.div>
);

const Venues = () => {
  const venues = [
    {
      title: "The Grand Ballroom",
      description: "Our flagship venue featuring crystal chandeliers, gold leaf detailing, and a massive dance floor. Perfect for weddings up to 500 guests.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
      price: "From ₹4,50,000",
      features: ["500 Guest Capacity", "Crystal Chandeliers", "Gold Leaf Detailing", "Massive Dance Floor"]
    },
    {
      title: "Crystal Lounge",
      description: "An intimate, modern space with glass walls and minimalist luxury. Ideal for corporate dinners and engagement parties.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
      price: "From ₹2,25,000",
      features: ["150 Guest Capacity", "Glass Walls", "Minimalist Luxury", "Modern Sound System"]
    },
    {
      title: "Garden Terrace",
      description: "A breathtaking outdoor setting surrounded by lush greenery and ambient lighting. Perfect for evening cocktail receptions.",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop",
      price: "From ₹3,00,000",
      features: ["300 Guest Capacity", "Lush Greenery", "Ambient Lighting", "Open Air Setting"]
    }
  ];

  return (
    <section id="venues" className="py-24 px-6 bg-soft-beige dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-display tracking-widest uppercase text-sm">Our Spaces</span>
          <h2 className="text-4xl md:text-6xl font-serif mt-4 text-zinc-900 dark:text-white">Exquisite Venues</h2>
          <div className="w-24 h-1 gold-gradient mx-auto mt-6 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {venues.map((venue, idx) => (
            <VenueCard 
              key={idx} 
              title={venue.title}
              description={venue.description}
              image={venue.image}
              price={venue.price}
              features={venue.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = ({ onImageClick }: { onImageClick: (index: number) => void }) => {
  const images = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522673607200-1648832cee98?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=800&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-gold font-display tracking-widest uppercase text-sm">Visual Journey</span>
            <h2 className="text-4xl md:text-6xl font-serif mt-4 text-zinc-900 dark:text-white">Capturing Memories</h2>
          </div>
          <button className="px-8 py-3 border-2 border-gold text-gold font-bold tracking-widest uppercase rounded-full hover:bg-gold hover:text-white transition-all">
            View All Photos
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 0.98 }}
              onClick={() => onImageClick(idx)}
              className={cn(
                "relative overflow-hidden rounded-2xl cursor-pointer group",
                idx === 0 || idx === 4 ? "md:row-span-2" : ""
              )}
            >
              <img 
                src={img} 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Lightbox = ({ images, index, onClose, onNext, onPrev }: { images: string[], index: number, onClose: () => void, onNext: () => void, onPrev: () => void }) => {
  return (
    <AnimatePresence>
      {index !== -1 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
        >
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>

          <button 
            onClick={onPrev}
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors"
          >
            <ChevronLeft size={48} />
          </button>

          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl w-full h-full flex items-center justify-center"
          >
            <img 
              src={images[index]} 
              alt="Gallery Lightbox" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <button 
            onClick={onNext}
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors"
          >
            <ChevronRight size={48} />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest uppercase">
            {index + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Sophia & James",
      text: "Royal Aura made our wedding day absolutely magical. The attention to detail and the sheer elegance of the Grand Ballroom left our guests speechless.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      role: "CEO, TechVision",
      text: "We hosted our annual gala here and the service was impeccable. The Crystal Lounge provided the perfect modern backdrop for our corporate brand.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      text: "The Garden Terrace was the perfect spot for my daughter's 21st birthday. The lighting at sunset was breathtaking. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-6 bg-zinc-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border border-gold rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-gold rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Star className="text-gold mx-auto mb-4" fill="currentColor" />
          <h2 className="text-4xl md:text-5xl font-serif">What Our Guests Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold" fill="currentColor" />
                ))}
              </div>
              <p className="text-white/70 italic leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-bold text-gold">{review.name}</h4>
                {review.role && <p className="text-xs text-white/40 uppercase tracking-widest mt-1">{review.role}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    date: '',
    guests: '',
    hall: 'Grand Ballroom',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-24 px-6 bg-soft-beige">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-gold font-display tracking-widest uppercase text-sm">Reservations</span>
          <h2 className="text-4xl md:text-6xl font-serif mt-4 text-zinc-900 mb-8">Plan Your Grand Celebration</h2>
          <p className="text-zinc-600 leading-relaxed mb-10 text-lg">
            Ready to host an unforgettable event? Fill out the form and our dedicated event planners will get back to you within 24 hours to discuss your vision.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest">Call Us</p>
                <p className="font-bold text-zinc-800">+1 (800) ROYAL-AURA</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest">Email Us</p>
                <p className="font-bold text-zinc-800">events@royalaura.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-zinc-100 relative overflow-hidden">
          <AnimatePresence>
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-serif text-zinc-900 mb-4">Reservation Received!</h3>
                <p className="text-zinc-500 mb-8">Thank you for choosing Royal Aura. Our team will contact you shortly to finalize the details.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 gold-gradient text-white font-bold rounded-full"
                >
                  Done
                </button>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Full Name</label>
                <input 
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Email Address</label>
                <input 
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Event Type</label>
                <select 
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all appearance-none"
                >
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Corporate</option>
                  <option>Anniversary</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Event Date</label>
                <input 
                  required
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  type="date" 
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Guests</label>
                <input 
                  required
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  type="number" 
                  placeholder="e.g. 150"
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Preferred Hall</label>
                <select 
                  name="hall"
                  value={formData.hall}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all appearance-none"
                >
                  <option>Grand Ballroom</option>
                  <option>Crystal Lounge</option>
                  <option>Garden Terrace</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Additional Requirements</label>
              <textarea 
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us more about your vision..."
                className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
              />
            </div>

            <button 
              disabled={isSubmitting}
              type="submit"
              className="w-full py-5 gold-gradient text-white font-bold tracking-[0.2em] uppercase rounded-2xl shadow-xl hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              {isSubmitting ? <Loader2 className="animate-spin" /> : null}
              {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop" 
                alt="Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white z-20 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop" 
                alt="Interior Detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 gold-gradient rounded-full opacity-20 blur-3xl" />
          </div>

          <div>
            <span className="text-gold font-display tracking-widest uppercase text-sm">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-serif mt-4 text-zinc-900 mb-8">A Legacy of Elegance</h2>
            <p className="text-zinc-600 leading-relaxed mb-6 text-lg">
              Founded in 1995, Royal Aura Banquets was born from a vision to create a space where luxury meets heartfelt celebration. We believe that every event is a milestone that deserves a setting as unique and grand as the moment itself.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-10">
              Our team of expert designers and hospitality professionals work tirelessly to ensure that from the first consultation to the final toast, your experience is seamless, sophisticated, and truly royal.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-serif text-gold mb-2">25+</h4>
                <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Years of Excellence</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-gold mb-2">5000+</h4>
                <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Events Hosted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">R</span>
              </div>
              <span className="font-display text-lg font-bold tracking-widest uppercase">Royal Aura</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Crafting unforgettable experiences in the heart of the city. Luxury, elegance, and royal service for your most precious moments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest uppercase mb-8 text-gold">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#venues" className="hover:text-white transition-colors">Our Venues</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest uppercase mb-8 text-gold">Contact Info</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>Royal Palace Grounds, Palace Road, Jaipur, Rajasthan 302001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+91 141 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span>events@royalaura.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest uppercase mb-8 text-gold">Location</h4>
            <div className="w-full h-48 rounded-2xl overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {/* 
                INSTRUCTIONS TO REPLACE MAP:
                1. Go to Google Maps (maps.google.com)
                2. Search for your venue address.
                3. Click 'Share' -> 'Embed a map'.
                4. Copy the URL from the 'src' attribute of the iframe.
                5. Replace the URL below with your copied URL.
              */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.534834612345!2d75.8043!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4123456789%3A0x1234567890abcdef!2sCity%20Palace%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1625573434567!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
          <p>© 2026 Royal Aura Banquets. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const galleryImages = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522673607200-1648832cee98?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=1200&auto=format&fit=crop",
  ];

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleNext = () => setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  const handlePrev = () => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div className="relative">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero />
        <About />
        <Venues />
        
        {/* Quick CTA Banner */}
        <section className="py-20 px-6 gold-gradient text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif mb-8">Ready to start your journey with us?</h2>
            <a 
              href="#booking"
              className="inline-block px-12 py-4 bg-white text-gold font-bold tracking-widest uppercase rounded-full shadow-2xl hover:bg-soft-beige hover:scale-105 transition-all"
            >
              Get a Free Quote
            </a>
          </div>
        </section>

        <Gallery onImageClick={setLightboxIndex} />
        <Testimonials />
        <BookingForm />
      </main>

      <Footer />

      <Lightbox 
        images={galleryImages} 
        index={lightboxIndex} 
        onClose={() => setLightboxIndex(-1)} 
        onNext={handleNext}
        onPrev={handlePrev}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-white text-gold rounded-full shadow-2xl flex items-center justify-center hover:bg-gold hover:text-white transition-all"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
        
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
