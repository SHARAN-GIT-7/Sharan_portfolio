import React, { useState } from 'react';
import { IoMdDownload } from "react-icons/io";
import MagneticButton from './MagneticButton';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const services = [
    "UI/UX",
    "Graphic Design",
    "Logo Design",
    "Brand Design",
    "Web Development",
    "App Development"
    
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const scriptURL = 'https://script.google.com/macros/s/AKfycby468b8xCRiTOpX_z3RVNoKsknWIymIEuHTp89qRUrEzSR9-P-Sum03g9N0iKw58J9wtQ/exec'
    try {
      // mode: 'no-cors' is necessary for Google Apps Script to work correctly from a browser
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      setStatus('Message sent successfully!');
      setFormData({ name: '', contactNo: '', service: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Error!', error.message);
      setStatus('Error: Could not send message.');
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side (Empty/Intro) */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 capitalize tracking-wide">
            Let's build <br />
            <span className="text-primary">something great.</span>
          </h2>
          <p className="text-text-gray text-lg max-w-md leading-relaxed mb-12">
            Have a project in mind? Reach out and let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="mt-8">
            <MagneticButton 
              href="src\assets\Sharanraj.T RESUME.pdf" 
              download 
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full border  transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <div className="flex items-center gap-3">
                <span>Download My Resume</span>
                <IoMdDownload size={20} />
              </div>
            </MagneticButton>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-widest text-xs">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-widest text-xs">Contact No</label>
                <input 
                  type="tel" 
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  required
                  placeholder="+91 00000 00000"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 uppercase tracking-widest text-xs">Service Needed</label>
              <div className="relative">
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-colors appearance-none"
                >
                  <option value="" disabled className="bg-zinc-900">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-zinc-900">{service}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 uppercase tracking-widest text-xs">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <MagneticButton 
              type="submit"
              className="w-full py-5 bg-primary text-black font-bold uppercase tracking-widest rounded-xl disabled:opacity-50"
              disabled={status === 'Sending...'}
            >
              {status || 'Send Message'}
            </MagneticButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
