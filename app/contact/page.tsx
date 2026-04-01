"use client";

import { useState } from "react";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FAFCFF] text-slate-900">
      {/* SECTION 1 — HEADER */}
      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center w-full">
        <Reveal>
          <RevealItem>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Let's <span className="font-serif-italic font-regular text-primary">Talk</span>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
              Have a question about featuring your brand, a collaboration idea, or just want to say hello? We read every message and respond within 24 hours.
            </p>
          </RevealItem>
        </Reveal>
      </section>

      {/* SECTION 2 — TWO COLUMN LAYOUT */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* LEFT COLUMN — CONTACT INFO */}
            <div className="flex flex-col">
              <RevealItem>
                <h2 className="text-3xl font-serif-italic font-bold mb-10 text-slate-900">Reach Out Direct</h2>
              </RevealItem>
              
              <div className="flex flex-col gap-12 mb-16">
                <RevealItem>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">Instagram DM - Fastest response</span>
                    <a href="https://instagram.com/switzerland_familye" target="_blank" rel="noreferrer" className="text-2xl font-bold text-slate-900 hover:text-primary transition-colors inline-flex items-center gap-3">
                      @switzerland_familye
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </a>
                  </div>
                </RevealItem>
                
                <RevealItem>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">Threads</span>
                    <a href="https://threads.net/@switzerland_familye" target="_blank" rel="noreferrer" className="text-2xl font-bold text-slate-900 hover:text-primary transition-colors inline-flex items-center gap-3">
                      @switzerland_familye
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </a>
                  </div>
                </RevealItem>

                <RevealItem>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">Response Time</span>
                    <p className="text-2xl font-bold text-slate-900">Within 24 hours</p>
                  </div>
                </RevealItem>
              </div>

              <RevealItem className="p-8 bg-blue-50/50 border border-blue-100 rounded-lg text-sm text-slate-600 leading-relaxed font-medium">
                <strong className="text-slate-900 block mb-2 text-lg">For urgent promotion requests</strong>
                DM us directly on Instagram at @switzerland_familye.
              </RevealItem>
            </div>

            {/* RIGHT COLUMN — MESSAGE FORM */}
            <div className="flex flex-col bg-white p-10 border border-slate-200 shadow-sm rounded-xl">
              <RevealItem>
                <h2 className="text-3xl font-serif-italic font-bold mb-8 text-slate-900">Send Us a Message</h2>
              </RevealItem>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <RevealItem className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Your Name</label>
                  <input required type="text" className="bg-slate-50 border border-slate-200 rounded-md p-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-slate-900" />
                </RevealItem>
                
                <RevealItem className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Email Address</label>
                  <input required type="email" className="bg-slate-50 border border-slate-200 rounded-md p-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-slate-900" />
                </RevealItem>

                <RevealItem className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Subject</label>
                  <select className="bg-slate-50 border border-slate-200 rounded-md p-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-slate-900 appearance-none cursor-pointer">
                    <option value="Promotion Enquiry">Promotion Enquiry</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Partnership">Partnership</option>
                    <option value="General Question">General Question</option>
                    <option value="Other">Other</option>
                  </select>
                </RevealItem>

                <RevealItem className="flex flex-col gap-2 mb-4">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Your Message</label>
                  <textarea required rows={5} className="bg-slate-50 border border-slate-200 rounded-md p-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-slate-900 resize-none" placeholder="How can we help?"></textarea>
                </RevealItem>

                <RevealItem>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting || isSuccess}
                    className={`w-full h-14 font-medium text-base ${isSuccess ? 'bg-green-600 hover:bg-green-600 border-none' : ''}`}
                  >
                    {isSubmitting ? "Sending..." : isSuccess ? "Message Sent successfully!" : "Send Message"}
                  </Button>
                </RevealItem>
                
                <RevealItem>
                  <p className="text-center text-slate-500 mt-2 text-sm font-medium">We respond within 24 hours.</p>
                </RevealItem>
              </form>
            </div>

          </div>
        </Reveal>
      </section>
    </div>
  );
}
