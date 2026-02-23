import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Concierge } from './components/Concierge';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Partners } from './components/Partners';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { PreFooterCTA } from './components/PreFooterCTA';
import { BookingProvider } from './context/BookingContext';
import { LanguageProvider } from './context/LanguageContext';
import { BookingModal } from './components/BookingModal';

function App() {
  return (
    <LanguageProvider>
      <BookingProvider>
        <div className="bg-midnight min-h-screen text-silver font-sans selection:bg-electric selection:text-white">
          <header>
            <Navbar />
          </header>
          <main>
            <Hero />
            <Partners />
            <Services />
            <Concierge />
            <Testimonials />
            <About />
            <PreFooterCTA />
          </main>
          <Footer />
          <StickyCTA />
          <BookingModal />
        </div>
      </BookingProvider>
    </LanguageProvider>
  );
}

export default App;