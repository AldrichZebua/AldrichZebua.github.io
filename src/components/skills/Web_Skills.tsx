import {
  AboutMongoDB,
  AboutNodeJS,
  AboutPostgreSQL,
  AboutReactJs,
  AboutShadcn,
  AboutTailwind,
} from "../share_compo/SkillAbout";

export const WebSkills = () => {
  return (
    <div>
      <div className="flex justify-center text-xl font-bold mb-5">
        Web Development
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-5">
        <div className="flex flex-col basis-full sm:basis-1/2 lg:basis-3/4">
          <h2 className="text-lg font-semibold">Frontend Development</h2>
          <ul className="list-disc mt-2 space-y-2">
            <li>Proficient in modern frameworks: React, Next.js.</li>
            <li>
              Good in building responsive UI/UX designs with Tailwind CSS,
              Shadcn, and Motion.dev
            </li>
            <li>Strong knowledge of JavaScript, HTML5, and CSS3.</li>
          </ul>
        </div>
        <div className="flex flex-col basis-full sm:basis-1/2 lg:basis-3/4">
          <h2 className="text-lg font-semibold">Backend Development</h2>
          <ul className="list-disc mt-2 space-y-2">
            <li>
              Skilled in RESTful and GraphQL API design and implementation.
            </li>
            <li>
              Experience with server-side frameworks like Node.js (Express.js,
              NestJS).
            </li>
            <li>
              Knowledge of database systems: MySQL, PostgreSQL, MongoDB, and
              Firebase Realtime Database.
            </li>
          </ul>
        </div>
        <div className="flex flex-col basis-full sm:basis-1/2 lg:basis-3/4">
          <h2 className="text-lg font-semibold">
            Version Control & Deployment:
          </h2>
          <ul className="list-disc  mt-2 space-y-2">
            <li>Proficient with Git and GitHub for code collaboration.</li>
            <li>Familiarity with CI/CD tools: GitHub Actions, and Docker.</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center gap-5 mt-10">
        <AboutReactJs />
        <AboutTailwind />
        <AboutShadcn />
        <AboutNodeJS />
        <AboutMongoDB />
        <AboutPostgreSQL />
      </div>
    </div>
  );
};
