'use client';

import { useState,useRef } from 'react';
import { sendEmailUsingEmailJS } from '@/lib/api/contact';


export default function BookingForm() {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    message: '',
  });

  const [status, setStatus] = useState('');


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await sendEmailUsingEmailJS(formRef.current);
      setStatus('✅ Thank you for showing interest in our homestay! We will contact you as soon as possible. You can also reach us via WhatsApp, or call on +91-9910859297.');
      setForm({ name: '', email: '', message: '' });
      formRef.current.reset();
    } catch (error) {
      setStatus(`❌ ${error.message}`);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-center">Enquire Now</h3>
        <form onSubmit={handleSubmit} className="space-y-4 text-black" ref={formRef}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            name="dates"
            placeholder="Preferred Dates (e.g. June 12–14)"
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Any special requests or questions?"
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />
          <button
            type="submit"
            className="w-full theme-widgets-bg-color text-white py-3 rounded-xl"
          >
            Send Inquiry
          </button>
        </form>
      {status && <p className=" mt-4 text-green-600 text-center">{status}</p>}
    </div>
  );
}
