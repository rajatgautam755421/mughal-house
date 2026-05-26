"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Credentials from "@/components/Credentials";
import Team from "@/components/Team";
import OfficeVisit from "@/components/OfficeVisit";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BookAppointmentModal from "@/components/BookAppointmentModal";
import LiveChat from "@/components/LiveChat";
import ScrollToTop from "@/components/ScrollToTop";
import UnderConstruction from "@/components/UnderConstruction";

// Flip to `true` (or back to `process.env.NODE_ENV === "production"`) to
// re-enable the branded "under construction" gate on the live site. The
// component is kept around so this is a one-line toggle.
const SHOW_UNDER_CONSTRUCTION = false;

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  if (SHOW_UNDER_CONSTRUCTION) {
    return <UnderConstruction />;
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-ink focus:text-paper focus:font-semibold"
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
        <Credentials />
        <Team />
        <CTA />
        <OfficeVisit onOpenBooking={() => setBookingOpen(true)} />
      </main>
      <Footer />
      {bookingOpen && <BookAppointmentModal onClose={() => setBookingOpen(false)} />}
      <LiveChat />
      <ScrollToTop />
    </>
  );
}
