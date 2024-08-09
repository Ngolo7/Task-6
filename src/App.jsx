import "./App.css";
const App = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <header className=" text-2xl font-bold mb-6">
        <h1>Cristiano7</h1>
      </header>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-NGEQDekk2BwsllLjk4tcIM_BPIzXECdsg&s
        alt="
        Cristiano
        Ronaldo
        className="h-14.5 justify-center  rounded-lg my- mb-2"
      />

      <main className="w-full max-w-7xl ">
        <section className="p-4 mb-4 border rounded-lg shadow-lg  bg-yellow-700">
          <h2 className="color=red text-xl font-semibold mb-2">
            About Cristiano
          </h2>
          <p className="mb-4">
            Cristiano Ronaldo dos Santos Aveiro is a Portuguese professional
            footballer who plays as a forward for Al Nassr and captains the
            Portugal national team.
          </p>
          <p>
            He is Known for his incredible mind-set, work ethic, goal-scoring
            ability. Ronaldo is considered one of the greatest footballers of
            all time.
          </p>
        </section>

        <section className="p-4 bg-slate-600 mb-4 border rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
          <h2 className="text-xl font-semibold mb-2">Achievements</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">5-time Ballon d'Or Winner</li>
            <li className="mb-2">4-time European Golden Shoe Winner</li>
            <li>Numerous League Titles and Champions League Titles</li>
          </ul>
        </section>

        <section className="bg-red-300 p-4 mb-4 border rounded-lg shadow-lg hover:bg-blue-400">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <a
            href="mailto:cristiano7@gmail.com"
            className="text-purple-500 hover:text-blue-700 transition-colors"
          >
            cristiano@example.com
          </a>
        </section>
      </main>

      <footer className="mt-6">
        <p className="text-sm text-gray-600">© 2024 Cristiano7</p>
      </footer>
    </div>
  );
};

export default App;
