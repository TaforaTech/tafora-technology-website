import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Tafora Technology",
  description:
    "Get in touch with Tafora Technology. Let's discuss how we can help you build intelligent software for a smarter future.",
};

const contactInfo = [
  {
    label: "Email Us",
    value: "info.tafora@gmail.com",
    href: "mailto:infor.tafora@gmail.com",
    description: "We typically respond within 24 hours",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Call Us",
    value: "+880 1328181186",
    href: "tel:+8801328181186",
    description: "Sun – Thu, 09 AM – 07 PM (BST)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Visit Us",
    value: "House:1121, 5/A (5th Floor), Road:11, Avenue: 8/A, Mirpur DOHS, Dhaka-1216, Bangladesh",
    href: "https://maps.google.com/?q=Dhaka+Bangladesh",
    description: "Our headquarters in the heart of Dhaka",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Contact Section ── */}
        <section className="relative py-16 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Left — Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="relative z-10 max-w-4xl mx-auto text-left">
                  <p className="text-sm text-accent-cyan tracking-widest uppercase mb-6">
                    Contact Us
                  </p>
                  <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold leading-[1.15] tracking-tight">
                    How Can We Help You Make Business <span className="gradient-text">Better</span>?
                  </h1>
                  <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                    Have a project in mind? Let&apos;s collaborate to transform your vision into powerful, intelligent, and scalable technology solutions.
                  </p>
                </div>

                {contactInfo.map((info, i) => (
                  <AnimateOnScroll key={info.label} delay={Math.min(i + 1, 3)}>
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-4 rounded-2xl border border-card-border bg-card-bg/50 p-5 transition-all duration-500 hover:border-accent-cyan/30 hover:bg-card-bg"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-cyan/10 border border-accent-blue/20 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs text-muted uppercase tracking-wide mb-1">
                          {info.label}
                        </p>
                        <p className="text-foreground font-medium text-sm group-hover:text-accent-blue transition-colors duration-300">
                          {info.value}
                        </p>
                        <p className="text-muted/70 text-xs mt-1">
                          {info.description}
                        </p>
                      </div>
                    </a>
                  </AnimateOnScroll>
                ))}
              </div>

              {/* Right — Form */}
              <div className="lg:col-span-3">
                <AnimateOnScroll delay={1}>
                  <div className="rounded-2xl border border-card-border bg-card-bg/50 p-8 md:p-10">
                    <h3 className="text-xl font-semibold mb-1">
                    Start a conversation with our experts
                    </h3>
                    <p className="text-muted text-sm mb-8">
                      Fill out the form and our team will get back to you
                      promptly.
                    </p>
                    <ContactForm />
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Location Section ── */}
        <section className="relative py-16 md:py-24 bg-[#0b0b1a]">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                  Our Location
                </h2>
                <p className="mt-4 text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                  Visit us at our office in Dhaka, Bangladesh
                </p>
              </div>
            </AnimateOnScroll>

            {/* Location Card */}
            <AnimateOnScroll delay={1}>
              <div className="flex justify-center mb-12 md:mb-16">
                <a
                  href="https://maps.google.com/?q=Dhaka+Bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row items-center gap-5 sm:gap-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 transition-all duration-500 hover:border-accent-cyan/30 hover:bg-white/[0.08] max-w-xl w-full"
                >
                  <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-accent-cyan/30 transition-colors duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1617364852223-e9c4ad9f1e1c?w=300&h=300&fit=crop&q=80"
                      alt="Dhaka, Bangladesh"
                      width={112}
                      height={112}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-white mb-1.5 group-hover:text-accent-cyan transition-colors duration-300">
                      Dhaka, Bangladesh
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      House:1121, 5/A (5th Floor), Road:11, Avenue: 8/A, Mirpur DOHS, Dhaka-1216, Bangladesh
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-accent-cyan uppercase tracking-wider">
                      View on Map
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </AnimateOnScroll>

            {/* Google Maps Embed */}
            <AnimateOnScroll delay={2}>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.2!2d90.3667!3d23.8359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52ddb05!2sMirpur%20DOHS%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tafora Technology Office - Mirpur DOHS, Dhaka"
                  className="w-full"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
