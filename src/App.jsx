import Header from "./components/Header";
import Footer from "./components/Footer";
import Sobre from "./components/Sobre";
import Recursos from "./components/Recursos";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />

      <main>
        {/* <Hero /> */}
        <Recursos />
        <Sobre />
      </main>

      <Footer />
    </div>
  );
}
