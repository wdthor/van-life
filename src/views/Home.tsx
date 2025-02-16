const Home = () => {
  return (
    <main className="bg-gray-400 bg-[url(assets/mountain-view.png)] bg-blend-multiply bg-cover bg-center flex flex-col px-6 py-20 flex-auto text-white sm:items-center md:text-center">
      <h1 className="text-4xl font-bold mb-4 text-pretty">
        <span className="md:block">You got the travel plans,</span> we got the
        travel vans.
      </h1>
      <p className="mb-10 text-balance">
        <span className="md:block">
          Add adventure to your life by joining the #vanlife movement.
        </span>{" "}
        Rent the perfect van to make your perfect road trip.
      </p>
      <button className="bg-van-700 p-2 rounded-xs border-none max-w-sm w-full">
        Find your Van
      </button>
    </main>
  );
};

export default Home;
