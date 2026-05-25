"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import OfficeVisit from "@/components/OfficeVisit";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BookAppointmentModal from "@/components/BookAppointmentModal";
import LiveChat from "@/components/LiveChat";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-gold-500 focus:text-dark-900 focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Team />
        <CTA />
        <OfficeVisit onOpenBooking={() => setBookingOpen(true)} />
      </main>
      <Footer />
      {bookingOpen && <BookAppointmentModal onClose={() => setBookingOpen(false)} />}
      <LiveChat />
      <ScrollProgress />
    </>
  );
}
