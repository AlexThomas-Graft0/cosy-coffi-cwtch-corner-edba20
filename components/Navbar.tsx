import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
      <Link href="/" className="text-2xl font-bold tracking-tight">Cosy Coffi Cwtch Corner</Link>
      <div className="space-x-6">
        <Link href="/menu" className="hover:text-[#5D4432]">Menu</Link>
        <Link href="/nooks" className="hover:text-[#5D4432]">Nooks</Link>
        <Link href="/booking" className="bg-[#5D4432] text-white px-4 py-2 rounded">Booking</Link>
      </div>
    </nav>
  );
}