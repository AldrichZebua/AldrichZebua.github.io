import { HouseIcon, MailIcon, PhoneCallIcon } from "lucide-react";

export const ContactMe = () => {
  return (
    <section id="contact" className="py-20 px-8 bg-orange-500 text-black">
      <h2 className="text-center text-4xl mb-12">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className=" flex flex-col justify-center items-center text-center">
          <div className="flex items-center gap-2">
            <PhoneCallIcon />
            <p>Call Me On</p>
          </div>
          <p>+62 852 7059 9749</p>
        </div>
        <div className=" flex flex-col justify-center items-center text-center">
          <div className="flex items-center gap-2">
            <MailIcon />
            <p>Email Us At</p>
          </div>
          <p>aldrichderilchristianzebua@gmail.com</p>
        </div>
        <div className=" flex flex-col justify-center items-center text-center">
          <div className="flex items-center gap-2">
            <HouseIcon />
            <p>Visit Office</p>
          </div>
          <p>Medan, Sumatera Utara, Indonesia</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <a href="mailto:aldrichderilchristianzebua@gmail.com">
          <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800">
            Send Message
          </button>
        </a>
      </div>
    </section>
  );
};
