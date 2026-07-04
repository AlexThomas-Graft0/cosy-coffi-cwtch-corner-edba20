import { Suspense } from 'react';
import { Hero } from '@/components/hero';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F7F5] text-[#3E2B1E]">
      <Navbar />
      <Suspense fallback={<div className="h-96 w-full animate-pulse bg-neutral-200" />}>
        <Hero />
      </Suspense>
      <section className="py-24 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-6">Your quiet corner in the heart of Cardiff.</h2>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Escape the bustle and settle in. Whether you’re finishing a project or catching up with an old friend, 
          Cosy Coffi Cwtch Corner is your sanctuary. Premium beans, local bakes, and the perfect nook waiting just for you.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/booking" className="bg-[#5D4432] text-white px-8 py-3 rounded-md hover:opacity-90 transition">Book your nook</a>
          <a href="/menu" className="border border-[#5D4432] text-[#5D4432] px-8 py-3 rounded-md hover:bg-[#E9E3DD] transition">See the menu</a>
        </div>
      </section>
    </main>
  );
}