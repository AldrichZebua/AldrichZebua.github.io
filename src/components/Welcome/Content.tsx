import { CVButton } from "../share_compo/cv";
import { Button } from "../ui/button";

export const WelcomeConten = () => {
  return (
    <section className="flex flex-col items-center py-20 px-10">
      <div className="text-start">
        <h1 className="text-2xl md:text-3xl font-bold">Hi, I am </h1>
        <h1 className="text-5xl md:text-6xl font-bold text-orange-500 font-serif">
          Web Developer and AI Engineer
        </h1>
      </div>
      <div className="flex justify-end xs:w-full md:w-4/6">
        <Button className="mt-10 px-2 py-1 bg-orange-500 hover:bg-orange-400 text-white rounded">
          <CVButton />
        </Button>
      </div>
    </section>
  );
};
