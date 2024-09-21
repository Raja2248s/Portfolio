import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact.js";
import Education from "./pages/Educations/Education.js";
import Internship from "./pages/Internship/Internship.js";
import Projects from "./pages/Projects/Projects.js";
// import Projects from "./pages/projects/projects";
import ScrollToTop from "react-scroll-to-top";
import "react-toastify/dist/ReactToastify.css";
import MobileNav from "./components/MobileNav/MobileNav.js";
import { useTheme } from "./context/ThemeContext.js";
import Techstack from "./pages/TechStack/Techstack";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
      <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <Internship />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <h4 className="text-center">
            Crafted with passion and dedication by Gaurav Singh &copy; 2024
          </h4>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
