'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function BookingPage() {
  const [formData, setFormData] = useState({ name: '', email: '', date: '', time_slot: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('bookings').insert([formData]);
    setStatus(error ? 'error' : 'success');
  };

  return (
    <div className="max-w-xl mx-auto py-20 px-8">
      <h1 className="text-4xl font-serif mb-4">Secure your spot.</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input required placeholder="Your Name" className="w-full p-3 border rounded" onChange={e => setFormData({...formData, name: e.target.value})} />
        <input required type="email" placeholder="Email" className="w-full p-3 border rounded" onChange={e => setFormData({...formData, email: e.target.value})} />
        <input required type="date" className="w-full p-3 border rounded" onChange={e => setFormData({...formData, date: e.target.value})} />
        <select className="w-full p-3 border rounded" onChange={e => setFormData({...formData, time_slot: e.target.value})}>
          <option value="morning">Morning (9am - 11am)</option>
          <option value="afternoon">Afternoon (2pm - 4pm)</option>
        </select>
        <button disabled={status === 'loading'} className="bg-[#5D4432] text-white w-full py-3 rounded">
          {status === 'loading' ? 'Booking...' : 'Confirm my booking'}
        </button>
      </form>
      {status === 'success' && <p className="mt-4 text-green-600">Booking received! See you soon.</p>}
    </div>
  );
}