import React from 'react';

export default function MapSection() {
  return (
    <section className="w-full h-[450px]">
      <iframe
        title="TechHub"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13610.8348947588!2d73.1074292!3d31.4142782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922686d804193f9%3A0x9d00659ba9c58dfe!2sAllied%20Islamic%20Bank!5e0!3m2!1sen!2s!4v1689310957087!5m2!1sen!2s"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0 w-full h-full"
      ></iframe>
    </section>
  );
}
