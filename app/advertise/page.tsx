"use client";

import { Reveal } from "@/components/ui/Reveal";
import { PackageCard } from "@/components/ui/PackageCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Advertise() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FAFCFF] text-slate-900">
      {/* SECTION 1 — HEADER */}
      <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-center">
        <Reveal>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Partner With <span className="text-primary font-serif-italic">Switzerland Familye</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            For brands ready to go beyond a single post. Long-term partnerships, sponsored campaigns, and exclusive promotions that build a sustained Swiss brand presence month after month.
          </p>
        </Reveal>
      </section>

      {/* SECTION 2 — PACKAGES */}
      <section className="py-24 px-6 bg-white border-y border-slate-200 shadow-sm">
        <Reveal>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <PackageCard
              name="Sponsored Content"
              price="CHF 300 / mo"
              description="Consistent monthly presence"
              features={[
                "4 feed posts per month",
                "8 Instagram stories per month",
                "Brand mention in bio",
                "Monthly performance report",
                "Caption and content strategy"
              ]}
              buttonText="Enquire Now"
              buttonVariant="outline"
              href="/contact"
            />
            <PackageCard
              name="Brand Ambassador"
              price="CHF 500 / mo"
              description="Deep integration, maximum visibility"
              features={[
                "8 feed posts per month",
                "Daily story features",
                "Profile bio link",
                "Highlight reel feature",
                "Weekly performance report",
                "Dedicated campaign strategy session"
              ]}
              buttonText="Enquire Now"
              buttonVariant="default"
              href="/contact"
              isPopular
            />
          </div>
        </Reveal>
      </section>

      {/* SECTION 3 — HOW IT WORKS */}
      <section className="py-32 px-6 max-w-5xl mx-auto w-full">
        <Reveal>
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-serif-italic font-bold sticky top-32 text-slate-900">The Process</h2>
            </div>
            
            <div className="md:w-2/3 flex flex-col gap-16">
              {[
                { num: "01", title: "You Reach Out", desc: "Fill in our contact form or DM us on Instagram. Tell us about your brand, your goals, and who you want to reach in Switzerland." },
                { num: "02", title: "We Design Your Campaign", desc: "Our team builds a custom strategy with the right content type, timing, niche alignment, and messaging tailored specifically to your brand." },
                { num: "03", title: "You Review and Approve", desc: "We share the full plan before anything goes live. You approve or request changes — no surprises, ever." },
                { num: "04", title: "Go Live and See Results", desc: "Your campaign reaches nearly a million Swiss followers within 48 hours. We track performance and report back so you see exactly what is working." }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="text-primary font-bold font-satoshi text-3xl pt-1 opacity-50 group-hover:opacity-100 transition-opacity">
                    {step.num}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 4 — CLOSING CTA */}
      <section className="py-32 px-6 bg-white border-t border-slate-200 text-center shadow-lg rounded-t-[3rem] -mb-10 relative z-10">
        <Reveal>
          <h2 className="text-5xl font-bold mb-6 text-slate-900">Ready to <span className="font-serif-italic font-regular text-primary">Partner</span> With Us?</h2>
          <p className="text-slate-600 font-medium text-lg max-w-xl mx-auto mb-12">
            Tell us about your brand and let's build something great together — for Switzerland.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button className="h-12 px-8 text-base">Start a Conversation</Button>
            </Link>
            <Link href="/get-featured">
              <Button variant="outline" className="h-12 px-8 text-base bg-transparent border-slate-300">Get Featured Instead</Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
