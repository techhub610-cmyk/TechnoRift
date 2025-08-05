import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Footer/Footer';
import Connection from './Connection/Connection';
import CalendlyClone from "./CalendlyClone/CalendlyClone"
import Work from "./Work/Workconnection/Workconnection"
import About from "./AboutUs/AboutConnection/AboutConnection"
import Contact from "./ContactSection/ContactConnection/ContactConnection"
import Web from "./Service/WebConnection/WebConnection"
import Marketing from "./Service/Marketing/MarketingConnection/MarketingConnection"
import Management from "./Service/Management/ManagementConnection/ManagementConnection"
import Seo from "./Service/Seo/SeoConnection/SeoConnection"
import Course from "./Course/CourseCatalog"
import CourseCatalog from './Course/CourseCatalog';
import WebCourseDetail from './Course/WebCourseDetail/WebCourseDetail';
import CourseDetail from './Course/SocialMediaMarketingDetail/SocialMediaMarketingDetail';
import CareerSection from './CareerSection/CareerSection';
import Card from "./ServiceCards/ServiceCards"
import ScrollToTop from "./ScrollToTop/ScrollToTop"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServiceCards from './ServiceCards/ServiceCards';
import BlogSection from './BlogSection/BlogSection';
import BlogPage from './BlogSection/BlogPage';
import TeamSection from './TeamSection/TeamSection';
import CourseForm from "./Course/CourseFrom/CourseFrom"
import ModalComponent from './ModalComponent/ModalComponent'




function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>
      <ModalComponent/>
      <Routes>
        <Route path="/" element={<Connection />} />
        <Route path="/calendar" element={<CalendlyClone />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/web" element={<Web />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/manage" element={<Management />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/course" element={<Course />} />
        <Route path="/courses" element={<CourseCatalog />} />
        <Route path="/career" element={<CareerSection />} />
        <Route path="/expertise" element={<ServiceCards />} />
        <Route path="/blog" element={<BlogSection/>} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/courseform" element={<CourseForm />} />

        {/* ✅ Use only this one route for all course detail pages */}
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
