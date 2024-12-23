import Generator from "@/components/generator";
//import SwipeGrid from "@/components/Pics";

const Home =() => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Generator />
      
      <div className="fixed text-sm md:text-base p-2 backdrop-blur-md rounded right-2 border border-zinc-700/30 shadow bottom-1 text-center text-gray-500 z-50">
        <p>
          © Made with ❤️ by{" "}
          <a
            href=""
            target="_blank"
            className="text-zinc-200 hover:underline"
            rel="noopener noreferrer"
          >
            Swapnanil
          </a>{" "}
        </p>
      </div>
    </main>
  );
};

export default Home;