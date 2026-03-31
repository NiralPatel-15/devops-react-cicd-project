import React from "react";

import Hero from "../components/Hero";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects"; 
import Chatbot from "../pages/Chatbot"; 
import Logos from "../components/Logos";

const Home = () => {
  return (
    <>
      <Hero />
      <Logos/>
      <Skills />
      <WorkExperience />
      <Projects />
      <Chatbot />
    </>
  );
};

export default Home;