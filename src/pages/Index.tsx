import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import BookAppointment from "@/components/BookAppointment";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-wrap justify-center gap-2 max-w-3xl px-4">
        <a
          href="https://docs.google.com/presentation/d/1CFxTsIKarfToc-s3wMEqeybL-3Bc6bOo/edit?usp=sharing&ouid=110060366950830819912&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg text-center"
        >
          STEM for Hobbyists
        </a>
        <a
          href="https://docs.google.com/presentation/d/1iTxXqK4VUFm-zQ6_gubmI17mL2rwao4t/edit?usp=sharing&ouid=110060366950830819912&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg text-center"
        >
          Robotics & AI (ICSE Board)
        </a>
        <a
          href="https://docs.google.com/presentation/d/1uLISFxq2EquBitizdUiVIB5vLD9JkGJL/edit?usp=sharing&ouid=110060366950830819912&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg text-center"
        >
          Robotics with Graphical Programming
        </a>
        <a
          href="https://himanshu4nagdev.github.io/robotics_syllabus/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg text-center"
        >
          Robotics & AI for Engineers
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
