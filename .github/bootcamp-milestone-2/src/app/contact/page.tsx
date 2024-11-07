"use client"
import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';


{/*Implemented This Code From Youtube Video */}
export default function ContactUs() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_rsgvr3a', 'template_4rzz5sh', form.current, {
          publicKey: 'NW-05nhrPzHvK504f',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <label className="block text-sm font--apple-system- text-gray-700">
        Name
      </label>
      <input 
      type="text" name="user_name" 
      required
      className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-md'/>
      <label className="block text-sm font--apple-system- text-gray-700">
        Email
      </label>
      <input 
      type="email" 
      name="user_email" 
      required
      className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-md'
      />
      <label className="block text-sm font--apple-system- text-gray-700">Message</label>
      <textarea name="message" 
      className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm'
      />
      <input type="submit" 
      value="Send"
      className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-md hover:text-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out'
      required 
      />
    </form>
  </div>
  );
};
