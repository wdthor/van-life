import vanNight from "../assets/van-night.jpg";
const About = () => {
  return (
    <main className="flex flex-col flex-auto w-full">
      <section className="xl:flex xl:flex-row-reverse lg:px-12 xl:px-25 xl:gap-20">
        <div className="h-58 relative overflow-hidden lg:w-full lg:h-auto">
          <img
            className="w-full h-auto absolute -top-50 sm:px-6 xl:px-0 sm:-top-80 md:-top-110 lg:top-0 lg:relative lg:max-h-108 lg:object-cover lg:object-center lg:mt-8 lg:rounded"
            src={vanNight}
            alt="A person sitting on a van watching the stars at night"
          />
        </div>
        <section className="px-6 py-8 sm:grid sm:grid-cols-2 gap-6 xl:block">
          <div>
            <h1 className="text-2xl font-bold mb-4 text-pretty">
              Don’t squeeze in a sedan when you could relax in a van.
            </h1>
            <p className="mb-4">
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p className="mb-8">
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
          <div className="p-6 bg-van-500 sm:h-fit rounded">
            <h2 className="text-xl font-bold mb-4">
              <span className="block">Your destination is waiting.</span> Your
              van is ready.
            </h2>
            <button className="bg-van-gray-900 text-white px-4 py-2 rounded-md">
              Explore our vans
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default About;
