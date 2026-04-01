"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Ticker } from "@/components/ui/Ticker";
import { PackageCard } from "@/components/ui/PackageCard";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedStatCard } from "@/components/ui/AnimatedStatCard";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#FAFCFF]">
      {/* SECTION 1 — HERO */}
      <section className="relative pt-24 md:pt-40 pb-12 md:pb-20 px-6 flex flex-col items-center justify-center text-center max-w-5xl mx-auto min-h-[100svh] md:min-h-[85vh]">
        <Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 md:mb-8">
            <div className="flex -space-x-3">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces&auto=format&q=80" alt="Audience" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=faces&auto=format&q=80" alt="Audience" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces&auto=format&q=80" alt="Audience" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces&auto=format&q=80" alt="Audience" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=faces&auto=format&q=80" alt="Audience" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-[#F59E0B] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm font-medium text-slate-600">
                Trusted by <span className="text-slate-900 font-bold">954K+</span> engaged Swiss followers
              </div>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 md:mb-8 leading-[1.1] text-slate-900">
            Switzerland's <span className="font-serif-italic font-regular text-primary">Viral</span> Promotion Platform
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Helping Swiss brands, creators, and small businesses get seen by nearly a million real, engaged followers — every single day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0 mb-4 md:mb-16">
            <Link href="/get-featured" className="w-full sm:w-auto">
              <AnimatedButton>Get Featured</AnimatedButton>
            </Link>

          </div>

     
        </Reveal>
      </section>

      {/* SECTION 2 — TICKER */}
      <Ticker />

      {/* SECTION 3 — SOCIAL PROOF */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-16 flex flex-col items-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-8">
              Results
            </div>
            <h2 className="text-4xl md:text-5xl text-center font-bold leading-tight max-w-3xl mx-auto text-slate-900">
              Join hundreds of Swiss brands already <span className="font-serif-italic font-regular text-primary">growing</span> with Switzerland Familye
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
            <AnimatedStatCard
              endValue={954}
              suffix="K+"
              label="Total Followers"
              theme="light"
            />
            <AnimatedStatCard
              endValue={5}
              suffix="M+"
              label="Total Reach"
              theme="dark"
            />
            <AnimatedStatCard
              endValue={500}
              suffix="+"
              label="Brands Featured"
              theme="dark"
            />
            <AnimatedStatCard
              endValue={5080}
              suffix="+"
              label="Posts Published"
              theme="dark"
            />
          </div>
        </Reveal>
      </section>

      {/* SECTION 4 — WHAT WE DO */}
      <section className="py-32 px-6 bg-white border-y border-slate-200">
        <Reveal>
          <div className="max-w-7xl mx-auto mb-20 flex flex-col items-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-8">
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl text-center font-bold leading-tight max-w-3xl mx-auto text-slate-900">
              We Turn Swiss Attention Into <span className="font-serif-italic font-regular text-primary">Real Growth</span>
            </h2>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
            {[
              { num: "01", title: "Promotion", body: "Put your brand directly in front of nearly a million engaged Swiss followers — people who already love food, beauty, lifestyle, and supporting local." },
              { num: "02", title: "Exposure", body: "Reach real audiences across Zurich, Geneva, Basel, and Bern. No bots, no inflated numbers — genuine Swiss people who act on what they discover." },
              { num: "03", title: "Results", body: "Drive real traffic, new followers, and paying customers. Our partners see measurable growth within 48 hours of going live." }
            ].map((col, i) => (
              <div
                key={i}
                className="flex flex-col items-start p-8 border border-slate-200 bg-[#FAFCFF] rounded-lg min-h-[320px] justify-between md:p-10"
              >
                <span className="flex items-center md:hidden font-serif-italic text-2xl font-bold text-slate-400 uppercase tracking-widest">
                  {col.num}<span className="ml-2 mt-2.5 h-1.5 w-1.5 bg-primary rounded-full"></span>
                </span>

                <span className="hidden md:block text-7xl font-bold text-slate-200 mb-6 leading-none">
                  {col.num}
                </span>

                <div className="flex flex-col mt-auto md:mt-0">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 md:text-3xl font-serif-italic md:mb-4 tracking-tight md:tracking-normal">{col.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-[15px] md:text-base">{col.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SECTION 5 — FEATURED CONTENT (VIDEOS MARQUEE) - PLACEHOLDERS */}
      <section className="py-32 overflow-hidden relative">
        <Reveal>
          <div className="text-center mb-16 px-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-">Viral Content</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">The Engagement Engine</h2>
          </div>

          <div className="relative w-full flex overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFCFF] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFCFF] to-transparent z-10 pointer-events-none"></div>

            <motion.div
              className="flex space-x-6 w-max items-center px-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
            >
              {[
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/hotel.mp4?updatedAt=1774343936604",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/bodycare.mp4?updatedAt=1774343936086",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/red.mp4?updatedAt=1774343934540",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/promotion.mp4?updatedAt=1774343936073",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/explainer.mp4?updatedAt=1774343935978",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/hotel.mp4?updatedAt=1774343936604",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/bodycare.mp4?updatedAt=1774343936086",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/red.mp4?updatedAt=1774343934540",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/promotion.mp4?updatedAt=1774343936073",
                "https://ik.imagekit.io/6b0su29zd/Aus.Magazine/explainer.mp4?updatedAt=1774343935978"
              ].map((src, i) => (
                <div key={i} className="relative w-[280px] md:w-[320px] aspect-[9/16] shrink-0 bg-slate-100 shadow-md overflow-hidden rounded-xl border border-slate-200">
                  <video src={src} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 6 — PACKAGES */}
      <section className="py-32 px-6 bg-[#F0F4F8] border-y border-slate-200">
        <Reveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-8">Get Featured</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Get Your Brand <span className="font-serif-italic font-regular text-primary">Seen</span> by Hundreds of Thousands</h2>
            <p className="text-slate-600 max-w-2xl mb-16 text-lg font-medium">
              Promote your business, product, or service to a highly engaged Swiss audience. Choose your level of exposure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
              <PackageCard
                name="Story Feature"
                price="From CHF 20"
                description="24-hour brand placement"
                features={["24-hour story placement", "Swipe-up link to your page", "Posted within 24 hours", "Reach 50K+ followers"]}
                buttonText="Submit Request"
                buttonVariant="outline"
                href="/get-featured"
              />
              <PackageCard
                name="Feed Post"
                price="From CHF 50"
                description="Permanent visibility"
                features={["Permanent feed post", "Caption with your handle", "Shared to stories too", "Priority turnaround", "954K+ follower reach"]}
                buttonText="Submit Request"
                buttonVariant="default"
                href="/get-featured"
                isPopular
              />
              <PackageCard
                name="Featured Campaign"
                price="From CHF 150"
                description="7-day full campaign"
                features={["3 feed posts plus daily stories", "7-day promotion window", "Custom caption writing", "Priority placement", "Performance summary"]}
                buttonText="Submit Request"
                buttonVariant="outline"
                href="/get-featured"
              />
            </div>

            <div className="mt-12 text-slate-500 text-sm font-medium">
              All packages include a personal review. Questions? <Link href="/contact" className="text-primary font-bold hover:underline">Contact us</Link>.
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 7 — WHY CHOOSE US */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 max-w-3xl mx-auto leading-tight">Why Brands Choose Switzerland Familye</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Switzerland-Focused Audience", desc: "Our entire community is Swiss-based. Your promotion reaches real local customers, not international followers who will never visit your shop." },
              { title: "Six Niches, One Platform", desc: "Food. Photography. Beauty. Tips. Marketing. Small Business. Your brand finds the exact audience that cares most about what you offer." },
              { title: "Fast 48-Hour Turnaround", desc: "Submit today, go live tomorrow. We move fast because your time is money and opportunity does not wait." },
              { title: "Nearly a Million Real Eyes", desc: "954K followers built over 5,000 posts. This is not overnight growth — it is a genuinely engaged community built on trust over years." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-[#FAFCFF] border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SECTION 8 — TESTIMONIALS */}
      <section className="py-32 bg-white border-y border-slate-200 overflow-hidden">
        <Reveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center px-6 mb-20">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-8 ">Results</span>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900">Real <span className="font-serif-italic font-regular text-primary">Growth</span> for Real Swiss Brands</h2>
          </div>

          <div className="relative w-full flex overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-max gap-8 animate-marquee hover:[animation-play-state:paused] px-4 items-stretch group cursor-pointer">
              {[
                { quote: "We gained 400 plus followers in the first 48 hours. Our DMs were full of enquiries. Best CHF 50 we have ever spent on marketing.", name: "Lena M.", biz: "Nail Studio, Zurich" },
                { quote: "Our bookings doubled the week after the feature. We have been using Switzerland Familye every month since. The ROI is incredible.", name: "Marco T.", biz: "Alpine Tour Guide, Interlaken" },
                { quote: "Finally a promotion platform built for Swiss businesses. Our restaurant reached thousands of new people overnight. We were fully booked by the weekend.", name: "Priya R.", biz: "Restaurant Owner, Geneva" },
                { quote: "We gained 400 plus followers in the first 48 hours. Our DMs were full of enquiries. Best CHF 50 we have ever spent on marketing.", name: "Lena M.", biz: "Nail Studio, Zurich" },
                { quote: "Our bookings doubled the week after the feature. We have been using Switzerland Familye every month since. The ROI is incredible.", name: "Marco T.", biz: "Alpine Tour Guide, Interlaken" },
                { quote: "Finally a promotion platform built for Swiss businesses. Our restaurant reached thousands of new people overnight. We were fully booked by the weekend.", name: "Priya R.", biz: "Restaurant Owner, Geneva" }
              ].map((test, i) => (
                <div key={i} className="w-[320px] md:w-[400px] shrink-0 p-8 bg-[#FAFCFF] border border-slate-200 rounded-xl flex flex-col shadow-sm transition-transform">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-[#F59E0B] text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-8 flex-grow font-medium text-[15px] md:text-base">"{test.quote}"</p>
                  <div className="flex flex-col mt-auto">
                    <span className="font-bold text-slate-900">{test.name}</span>
                    <span className="text-slate-500 text-sm font-medium">{test.biz}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="py-40 px-6 text-center">
        <Reveal>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">Ready to <span className="font-serif-italic font-regular text-primary">Grow</span> Your Swiss Brand?</h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mb-12 font-medium">
            Get featured today and reach hundreds of thousands of potential customers across Switzerland.
          </p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <Link href="/get-featured">
              <AnimatedButton>Get Featured</AnimatedButton>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
