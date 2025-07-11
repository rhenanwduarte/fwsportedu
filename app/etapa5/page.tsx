"use client"

import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()

  return (
    <div
      className="min-h-svh"
      style={{
        backgroundImage: "url('https://i.imgur.com/L3eUWEe.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-8">

        <div className="flex items-end justify-center gap-0">
          <h1 className="text-4xl font-extrabold text-yellow-400 text-center drop-shadow-md">
            Quero entender mais do seu sonho...
          </h1>
          <img 
            src="https://i.imgur.com/qLylahJ.gif" 
            alt="Loading" 
            className="w-12 h-12 drop-shadow-md"
          />
        </div>

        <p className="text-lg text-white text-center max-w-md">
          Como você imagina o seu dia a dia lá fora?
        </p>

        <div className="flex flex-col gap-4 max-w-md w-full">

          <button
            onClick={() => router.push("/etapa6")}
            className="bg-white/90 hover:bg-white text-black px-6 py-4 rounded-xl shadow-xl text-lg font-semibold flex items-center justify-center gap-2 transition transform hover:-translate-y-1"
          >
            🚜 Trabalhando em fazendas, conhecendo o agro de verdade
          </button>

          <button
            onClick={() => router.push("/etapa6")}
            className="bg-white/90 hover:bg-white text-black px-6 py-4 rounded-xl shadow-xl text-lg font-semibold flex items-center justify-center gap-2 transition transform hover:-translate-y-1"
          >
            📚 Estudando, frequentando a faculdade e fazendo amigos
          </button>

          <button
            onClick={() => router.push("/etapa6")}
            className="bg-white/90 hover:bg-white text-black px-6 py-4 rounded-xl shadow-xl text-lg font-semibold flex items-center justify-center gap-2 transition transform hover:-translate-y-1"
          >
            ✈️ Viajando e explorando novos lugares nos dias livres
          </button>

          <button
            onClick={() => router.push("/etapa6")}
            className="bg-white/90 hover:bg-white text-black px-6 py-4 rounded-xl shadow-xl text-lg font-semibold flex items-center justify-center gap-2 transition transform hover:-translate-y-1"
          >
            🌍 Mix de tudo: agro, estudos, viagens e experiências únicas
          </button>

        </div>
      </div>
    </div>
  )
}
