import Navbar from "./components/Navbar.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Menu from "./components/Menu.jsx";
import Reviews from "./components/Reviews.jsx";
import Employee from "./components/Employee.jsx";
import Booking from "./components/Booking.jsx";
import Visit from "./components/Visit.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Employee />
        <Booking />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
