import Image from "next/image";
import { AboutContent, AboutContentXL } from "./contentAM";

export const AboutMe = () => {
  return (
    <section id="about" className="py-20 xl:px-32 xs:px-10">
      <h2 className="text-center text-4xl text-orange-500 mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="image/profil_pic.png"
          alt="Profile"
          width={256} // Set lebar dalam pixel, sesuai w-64
          height={320} // Set tinggi dalam pixel, sesuai h-80
          className="rounded-md shadow-lg object-cover"
        />
        <AboutContentXL />
        <AboutContent />
      </div>
    </section>
  );
};
