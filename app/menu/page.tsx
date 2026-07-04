import { supabase } from '@/lib/supabaseClient';
import { Suspense } from 'react';

async function MenuList() {
  const { data: items } = await supabase.from('menu_items').select('*');
  
  return (
    <div className="space-y-8">
      {items?.map((item) => (
        <div key={item.id} className="border-b border-[#E9E3DD] pb-4">
          <div className="flex justify-between items-baseline">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <span className="text-[#5D4432]">£{item.price}</span>
          </div>
          <p className="text-sm opacity-80 mt-1">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function MenuPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-8">
      <h1 className="text-4xl font-serif mb-8">Simple, honest, and local.</h1>
      <Suspense fallback={<div>Loading menu...</div>}>
        <MenuList />
      </Suspense>
    </div>
  );
}