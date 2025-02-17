const Home = () => {
  return (
    <main className="flex flex-auto flex-col bg-gray-400 bg-[url(assets/mountain-view.jpg)] bg-cover bg-top px-6 py-20 text-white bg-blend-multiply sm:items-center md:text-center">
      <h1 className="mb-4 text-4xl font-bold text-pretty">
        <span className="md:block">You got the travel plans,</span> we got the
        travel vans.
      </h1>
      <p className="mb-10 text-balance">
        <span className="md:block">
          Add adventure to your life by joining the #vanlife movement.
        </span>
        Rent the perfect van to make your perfect road trip.
      </p>
      <button className="bg-van-700 w-full max-w-sm cursor-pointer rounded-xs border-none p-2">
        Find your Van
      </button>
    </main>
  );
};

export default Home;
