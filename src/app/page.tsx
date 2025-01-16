import { AboutMe } from "@/components/about_me/aboutme";
import { ContactMe } from "@/components/Contact/ContactMe";
import { Experience } from "@/components/EduExper/Experience";

import { Headers } from "@/components/Header/header";
import { Projects } from "@/components/Projects/projects";
import { Skills } from "@/components/skills/skills";
import { WelcomeConten } from "@/components/Welcome/Content";
import React from "react";

const App = () => {
  return (
    <div className="bg-black text-white font-sans">
      <Headers />
      <WelcomeConten />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <ContactMe />
    </div>
  );
};

export default App;
