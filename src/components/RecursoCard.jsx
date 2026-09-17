export default function RecursoCard({ icone, titulo, descricao }) {
  return (
    <article className="rounded-2x1 bg-white p-6 shadow-md rounded-xl transition hover:-translate-y-1 hover:shadow-x1">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white-100 border-[2px] border-yellow-400">
        {icone}
      </div>
      <h3 className="mt-4 text-xl font-bold">{titulo}</h3>
      <p className="mt-2 text-slate-500">{descricao}</p>
    </article>
  );
}
