"use client";

import { useState } from "react";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

type PackageType = "Story Feature" | "Feed Post" | "Featured Campaign" | "Not sure";

export default function GetFeatured() {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>("Feed Post");
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
      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center">
        <Reveal>
          <RevealItem>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Promote Your Brand With Switzerland Familye
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Fill in the form below and we will put your brand in front of hundreds of thousands of real, engaged Swiss followers — <span className="text-slate-900 font-bold">fast</span>.
            </p>
          </RevealItem>
        </Reveal>
      </section>

      {/* SECTION 2 — METRICS STRIP */}
      <div className="bg-white border-y border-slate-200 py-8 w-full shadow-sm">
        <Reveal>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            {[
              { val: "954K+", label: "Followers" },
              { val: "5M+", label: "Total Reach" },
              { val: "6", label: "Content Niches" },
              { val: "48hr", label: "Turnaround" },
            ].map((m, i) => (
              <RevealItem key={i} className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary font-satoshi mb-2">{m.val}</span>
                <span className="text-xs uppercase tracking-widest font-bold text-slate-500">{m.label}</span>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </div>

      {/* SECTION 3 — LAYOUT */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* LEFT COLUMN */}
            <div className="flex flex-col">
              <RevealItem>
                <h2 className="text-3xl font-serif-italic mb-4 text-slate-900 font-bold">Pick What Works for You</h2>
              </RevealItem>
              <RevealItem>
                <p className="text-slate-600 mb-10 leading-relaxed font-medium">
                  All packages include a personal review and go live within 48 hours of confirmation.
                </p>
              </RevealItem>

              <div className="flex flex-col gap-4 mb-8">
                {[
                  { id: "Story Feature", name: "Story Feature", desc: "24-hour story, swipe-up link", price: "CHF 20" },
                  { id: "Feed Post", name: "Feed Post", desc: "Permanent post, 954K+ reach", price: "CHF 50", popular: true },
                  { id: "Featured Campaign", name: "Featured Campaign", desc: "7 days, 3 posts plus daily stories", price: "CHF 150" },
                ].map((pkg) => (
                  <RevealItem
                    key={pkg.id}
                  >
                    <div
                      onClick={() => setSelectedPackage(pkg.id as PackageType)}
                      className={`relative p-6 cursor-pointer border flex items-center justify-between transition-all rounded-lg shadow-sm ${
                        selectedPackage === pkg.id 
                          ? "border-primary border-l-4 lg:-ml-2 bg-white ring-1 ring-primary/20" 
                          : "border-slate-200 bg-white hover:border-primary/50"
                      }`}
                    >
                      {pkg.popular && <span className="absolute -top-3 left-6 bg-primary text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">Most Popular</span>}
                      <div className="flex flex-col mt-2">
                        <span className="font-bold text-lg mb-1 text-slate-900">{pkg.name}</span>
                        <span className="text-sm text-slate-500 font-medium">{pkg.desc}</span>
                      </div>
                      <span className="text-2xl font-bold text-primary font-satoshi">{pkg.price}</span>
                    </div>
                  </RevealItem>
                ))}
              </div>

              <RevealItem className="p-6 bg-blue-50/50 border border-blue-100 text-sm text-slate-600 leading-relaxed rounded-lg">
                <strong className="text-slate-900 block mb-1">Not sure which package?</strong>
                Select <span className="italic font-medium">Not sure</span> in the form and we will recommend the best fit for your budget and goals.
              </RevealItem>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col p-8 bg-white border border-slate-200 shadow-sm rounded-xl">
              <RevealItem>
                <h2 className="text-3xl font-serif-italic mb-10 text-slate-900 font-bold">Let's Get You Featured</h2>
              </RevealItem>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <RevealItem className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Your Name</label>
                    <input required type="text" className="bg-slate-50 border border-slate-200 rounded-md p-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-slate-900 placeholder:text-slate-400" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Business Name</label>
                    <input required type="text" className="bg-slate-50 border border-slate-200 rounded-md p-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-slate-900 placeholder:text-slate-400" />
                  </div>
                </RevealItem>

                <RevealItem className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Instagram Handle</label>
                    <input required type="text" placeholder="@yourbrand" className="bg-slate-50 border border-slate-200 rounded-md p-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-slate-900 placeholder:text-slate-400" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Email Address</label>
                    <input required type="email" className="bg-slate-50 border border-slate-200 rounded-md p-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-slate-900 placeholder:text-slate-400" />
                  </div>
                </RevealItem>

                <RevealItem className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Package Selection</label>
                  <select 
                    value={selectedPackage} 
                    onChange={(e) => setSelectedPackage(e.target.value as PackageType)}
                    className="bg-slate-50 border border-slate-200 rounded-md p-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-slate-900 appearance-none cursor-pointer"
                  >
                    <option value="Story Feature">Story Feature - CHF 20</option>
                    <option value="Feed Post">Feed Post - CHF 50</option>
                    <option value="Featured Campaign">Featured Campaign - CHF 150</option>
                    <option value="Not sure">Not sure, let's discuss</option>
                  </select>
                </RevealItem>

                <RevealItem className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">What Do You Want to Promote?</label>
                  <textarea required rows={4} className="bg-slate-50 border border-slate-200 rounded-md p-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-slate-900 resize-none placeholder:text-slate-400" placeholder="Tell us about the product, service, or event..."></textarea>
                </RevealItem>

                <RevealItem className="flex flex-col gap-2 mb-4">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Budget (Optional)</label>
                  <input type="text" placeholder="CHF" className="bg-slate-50 border border-slate-200 rounded-md p-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-slate-900 placeholder:text-slate-400" />
                </RevealItem>

                <RevealItem>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting || isSuccess}
                    className={`w-full h-14 font-medium text-base ${isSuccess ? 'bg-green-600 hover:bg-green-600' : ''}`}
                  >
                    {isSubmitting ? "Submitting..." : isSuccess ? "Request Submitted Successfully" : "Submit Feature Request"}
                  </Button>
                </RevealItem>
                
                <RevealItem>
                  <p className="text-slate-500 text-sm mt-2 text-center font-medium">All packages include a personal review. Questions? Contact us.</p>
                </RevealItem>
              </form>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
