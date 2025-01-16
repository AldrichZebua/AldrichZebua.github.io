export const Projects = () => {
  return (
    <section id="Projects" className="py-20 px-8">
      <h2 className="text-center text-4xl text-orange-500 mb-12">Projects</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded shadow-md">
            {/* <img
            src={`/image/portfolio_${index + 1}.png`}
            alt={`Portfolio ${index + 1}`}
            className="w-full h-40 object-cover rounded"
          /> */}
          </div>
        ))}
      </div>
    </section>
  );
};
