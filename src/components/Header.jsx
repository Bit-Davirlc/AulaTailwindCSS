export default function Header() {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="mx-auto flex max-w-6x1 items-center justify-between px-6 py-4">
        <h1 className="text-2x1 font-bold text-yellow-400">
          &lt;&gt; Desvendando o Código
        </h1>

        <nav className="text-2x1 font-bold text-yellow-400">
          <a href="#inicio" className="transition hover:text-yellow-400">
            Inicio
          </a>
          <a href="#recursos" className="transition hover:text-yellow-400">
            Recursos
          </a>
          <a href="#sobre" className="transition hover:text-yellow-400">
            Sobre
          </a>
        </nav>

        <button className="rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-black transition hover:bg-yellow-300">
          Começar
        </button>
      </div>
    </header>
  );
}
