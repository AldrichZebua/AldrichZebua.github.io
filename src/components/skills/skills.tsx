import { AISkills } from "./AI_Skills";
import { WebSkills } from "./Web_Skills";

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-8 bg-gray-900">
      <h2 className="text-center text-4xl text-orange-500 mb-8">Skills</h2>
      <WebSkills />
      <AISkills />
    </section>
  );
};
