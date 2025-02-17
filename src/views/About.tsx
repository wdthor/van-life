import vanNight from "../assets/van-night.jpg";
const About = () => {
  return (
    <main className="flex w-full flex-auto flex-col">
      <section className="lg:px-12 xl:flex xl:flex-row-reverse xl:gap-20 xl:px-25">
        <div className="relative h-58 overflow-hidden lg:h-auto lg:w-full">
          <img
            className="absolute -top-50 h-auto w-full sm:-top-80 sm:px-6 md:-top-110 lg:relative lg:top-0 lg:mt-8 lg:max-h-108 lg:rounded lg:object-cover lg:object-center xl:px-0"
            src={vanNight}
            alt="A person sitting on a van watching the stars at night"
          />
        </div>
        <section className="gap-6 px-6 py-8 sm:grid sm:grid-cols-2 xl:block">
          <div>
            <h1 className="mb-4 text-2xl font-bold text-pretty">
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
          <div className="bg-van-500 rounded p-6 sm:h-fit">
            <h2 className="mb-4 text-xl font-bold">
              <span className="block">Your destination is waiting.</span> Your
              van is ready.
            </h2>
            <button className="bg-van-gray-900 rounded-md px-4 py-2 text-white">
              Explore our vans
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default About;
