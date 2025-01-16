export const Experience = () => {
  return (
    <section id="Experience" className="py-20 px-8 bg-gray-900">
      <div className="text-center text-4xl text-orange-500 mb-12">
        Experience
      </div>
      <div className="flex flex-col justify-between gap-8 lg:flex-row md:px-10 lg:px-52">
        <div>
          <div className="flex justify-center text-orange-500 text-xl font-bold mb-5">
            Education
          </div>
          <h2 className="text-lg font-semibold text-sky-500 text-center">
            Bachelor of Computer Science
          </h2>
          <ul className="list-disc mt-2 space-y-2 text-center">
            <ul>Universitas Prima Indonesia</ul>
            <ul>Faculty of Science and Technology</ul>
            <ul>GPA: 3,97</ul>
          </ul>
        </div>
        <div>
          <div className="flex justify-center text-orange-500 text-xl font-bold mb-5">
            Work Experience
          </div>
          <div className="flex justify-center">
            <div className="flex md:flex-col md:justify-between xs:flex-col  xs:w-full gap-8">
              <div className="flex flex-col text-center ">
                <h2 className="text-lg font-semibold text-sky-500 text-center">
                  Project Officer Intern
                </h2>
                <ul className="list-disc mt-2 space-y-2 text-center">
                  <ul>Universitas Prima Indonesia</ul>
                  <ul>March 2023 - July 2023</ul>
                </ul>
              </div>
              <div className="flex flex-col text-center">
                <h2 className="text-lg font-semibold text-sky-500 text-center">
                  Assistan Lecturer S1 Informatics Engineering
                </h2>
                <ul className="list-disc mt-2 space-y-2 text-center">
                  <ul>Universitas Prima Indonesia</ul>
                  <ul>March 2023 - May 2024</ul>
                </ul>
              </div>
              <div className="flex flex-col text-center">
                <h2 className="text-lg font-semibold text-sky-500 text-center">
                  FrontEnd Development
                </h2>
                <ul className="list-disc mt-2 space-y-2 text-center">
                  <ul>Rumah Solusi Digital</ul>
                  <ul>November 2024 - Now</ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center text-orange-500 text-xl font-bold mb-5">
            Organization Experience
          </div>
          <div className="flex justify-center">
            <div className="flex md:flex-col md:justify-between xs:flex-col xs:w-full gap-8">
              <div className="flex flex-col text-center">
                <h2 className="text-lg font-semibold text-sky-500">
                  UNPRI Creatif FAST
                </h2>
                <ul className="list-disc mt-2 space-y-2">
                  <ul>Member</ul>
                  <ul>Universitas Prima Indonesia</ul>
                  <ul>Faculty of Science and Technology</ul>
                  <ul>June 2021 - April 2022</ul>
                </ul>
              </div>
              <div className="flex flex-col text-center">
                <h2 className="text-lg font-semibold text-sky-500">
                  Komunitas Mahasiswa Nias
                </h2>
                <h2 className="text-lg font-semibold text-sky-500">
                  (UNPRI Medan)
                </h2>
                <ul className="list-disc mt-2 space-y-2">
                  <ul>Vice Chair</ul>
                  <ul>November 2022 - October 2023</ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
