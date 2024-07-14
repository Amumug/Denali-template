import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full">
      <div className="h-20 py-5 px-32">
        <Navbar />
      </div>
      <div className="w-full h-[calc(100vh-5rem)] overflow-hidden">
        <Hero />
      </div>
    </div>
  );
}

export default App;
