const foundationChecks = [
  "Next.js App Router",
  "TypeScript strict",
  "Tailwind CSS",
] as const;

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-12 sm:px-10">
      <section
        className="w-full rounded-3xl border bg-white p-8 shadow-sm sm:p-12"
        style={{ borderColor: "var(--border)" }}
        aria-labelledby="page-title"
      >
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
          Démonstrateur hackathon
        </p>
        <h1
          id="page-title"
          className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl"
        >
          HLA Twin est prêt pour l’implémentation.
        </h1>
        <p
          className="mt-6 max-w-2xl text-lg leading-8"
          style={{ color: "var(--muted)" }}
        >
          Le frontend fonctionne. Ce socle n’active aucune règle médicale et ne
          contient que des données synthétiques.
        </p>

        <ul
          className="mt-10 grid gap-3 sm:grid-cols-3"
          aria-label="État du socle frontend"
        >
          {foundationChecks.map((check) => (
            <li
              key={check}
              className="rounded-2xl border px-5 py-4 font-medium"
              style={{
                background: "var(--accent-soft)",
                borderColor: "var(--border)",
              }}
            >
              <span aria-hidden="true" className="mr-2 text-teal-800">
                ✓
              </span>
              {check}
            </li>
          ))}
        </ul>

        <aside className="mt-10 rounded-2xl border-l-4 border-teal-700 bg-slate-50 p-5">
          <h2 className="font-semibold">Périmètre de sécurité</h2>
          <p className="mt-2 leading-7" style={{ color: "var(--muted)" }}>
            HLA Twin est un outil d’aide à la revue avec validation humaine
            obligatoire. Il ne réalise ni diagnostic, ni recommandation
            thérapeutique, ni décision autonome.
          </p>
        </aside>
      </section>
    </main>
  );
}
