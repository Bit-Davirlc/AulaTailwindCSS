import RecursoCard from "./RecursoCard";

export default function Recursos() {
  return (
    <section id="recursos" className="mx-auto max-w-6x1 px-6 py-16">
      <div className="text-center">
        <p className="font-semibold uppercase tracking-widest text-yello-600">
          Tailwind CSS
        </p>

        <h2 className="mt-2 text-3x1 font-bold">O que você consegue fazer?</h2>

        <p className="mx-auto mt-4 max-w-2x1 text-slate-500">
          Com poucas classes conseguimos controlar praticamente toda a
          apresentação da interface
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <RecursoCard
          icone="🎨"
          titulo="Estilização"
          descricao="Cores, fontes, espaçamento, bordas, sombras e muito mais."
        />

        <RecursoCard
          icone="📱"
          titulo="Responsividade"
          descricao="Crie layouts que se adaptam a celular, tablet e desktop."
        />

        <RecursoCard
          icone="⌛"
          titulo="Produtividade"
          descricao="Monte interfaces rapidamente utilizando classes utilitárias."
        />
      </div>
    </section>
  );
}
