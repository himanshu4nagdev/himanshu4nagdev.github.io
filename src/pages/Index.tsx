import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import BookAppointment from "@/components/BookAppointment";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <BookAppointment />
      <Footer />
    </div>
  );
};

export default Index;
