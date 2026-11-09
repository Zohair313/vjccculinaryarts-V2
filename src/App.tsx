import Nav from './components/Nav'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import FounderTabs from './components/FounderTabs'
import CoursesAccordion from './components/CoursesAccordion'
import Journal from './components/Journal'
import FaqChat from './components/FaqChat'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Testimonials />
        <FounderTabs />
        <CoursesAccordion />
        <Journal />
        <FaqChat />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

export default App
