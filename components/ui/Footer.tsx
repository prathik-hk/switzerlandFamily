import Link from "next/link";
import { Button } from "./Button";

export function Footer() {
  return (
    <footer className="bg-[#F4F7FB] py-20 px-6 border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-serif-italic font-bold tracking-tight text-slate-900">Switzerland Familye</span>
            </Link>
            <p className="text-slate-600 text-sm mt-4 leading-relaxed">
              Switzerland's Viral Promotion Platform. Helping Swiss brands, creators, and small businesses get seen by nearly a million engaged followers every single day.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-2">Pages</h4>
            <Link href="/" className="text-slate-600 hover:text-primary transition-colors text-sm font-medium">Home</Link>
            <Link href="/about" className="text-slate-600 hover:text-primary transition-colors text-sm font-medium">About</Link>
            <Link href="/get-featured" className="text-slate-600 hover:text-primary transition-colors text-sm font-medium">Get Featured</Link>
            <Link href="/contact" className="text-slate-600 hover:text-primary transition-colors text-sm font-medium">Contact</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-2">Packages</h4>
            <Link href="/get-featured" className="text-slate-600 hover:text-primary transition-colors text-sm font-medium">Story Feature</Link>
            <Link href="/get-featured" className="text-slate-600 hover:text-primary transition-colors text-sm font-medium">Feed Post</Link>
            <Link href="/get-featured" className="text-slate-600 hover:text-primary transition-colors text-sm font-medium">Featured Campaign</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-2">Connect</h4>
            <a href="https://instagram.com/switzerland_familye" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-primary transition-colors text-sm font-medium">Instagram</a>
            <a href="https://threads.net/@switzerland_familye" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-primary transition-colors text-sm font-medium">Threads</a>
            <Link href="/contact" className="text-slate-600 hover:text-primary transition-colors text-sm font-medium">Contact Us</Link>
            
            <Link href="/get-featured" className="mt-4">
              <Button variant="outline" className="w-full h-10 text-sm border-slate-300 text-slate-700 hover:bg-slate-100 h-10 px-6 rounded-full font-medium tracking-normal">Get Featured</Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 text-slate-500 text-sm font-medium">
          <p>&copy; 2026 Switzerland Familye. All rights reserved.</p>
          <a href="https://instagram.com/switzerland_familye" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors mt-4 md:mt-0">
            @switzerland_familye
          </a>
        </div>
      </div>
    </footer>
  );
}
