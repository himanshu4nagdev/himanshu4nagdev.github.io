import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import BookAppointment from "@/components/BookAppointment";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        <a
          href="https://docs.google.com/presentation/d/1CFxTsIKarfToc-s3wMEqeybL-3Bc6bOo/edit?usp=sharing&ouid=110060366950830819912&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg text-center"
        >
          Explore STEM Course Curriculum for Hobbyists
        </a>
        <a
          href="https://docs.google.com/presentation/d/1iTxXqK4VUFm-zQ6_gubmI17mL2rwao4t/edit?usp=sharing&ouid=110060366950830819912&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg text-center"
        >
          Explore STEM Course Curriculum for Robotics & AI (ICSE Board)
        </a>
      </div>
      <Hero />
      <About />
      <Projects />
      <BookAppointment />
      <Footer />
    </div>
  );
};

export default Index;
