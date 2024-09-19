import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import xml2js from 'xml2js';

async function getData() {
  const res = await fetch(`https://medium.com/feed/@sailesshakya`)
  const data = await res.text();
  const parser = new xml2js.Parser();
  const parsedData = await parser.parseStringPromise(data);
  console.log(parsedData);
  return parsedData;

};

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
     {/* // <Education /> */}
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  )
};