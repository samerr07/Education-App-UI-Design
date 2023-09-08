// import { BrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import CompanySection from "./components/CompanySection/CompanySection";
import Course from "./components/Course/Course";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import FreeCourse from "./components/FreeCourse/FreeCourse";
// import CourseCard from "./components/Course/CourseCard";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Testimonial from "./components/Testimonial/Testimonial";
import './index.css';

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <CompanySection/>
      <AboutUs/>
      <Course/>
      <ChooseUs/>
      <Feature/>
      <FreeCourse/>
      <Testimonial/>
      <NewsLetter/>
      <Footer/>
    </>
      
    
  );
}

export default App;
