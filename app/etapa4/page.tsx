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
      <div className="flex min-h-svh flex-col items-center justify-center gap-8 p-8">

        <h1 className="text-4xl font-extrabold text-yellow-400 text-center drop-shadow-md">
          Pra começar a desenhar o seu plano...
        </h1>

        <p className="text-lg text-white text-center max-w-md">
          O que mais te chama atenção em viver um intercâmbio?
        </p>

        <div className="flex flex-col gap-4 max-w-md w-full">

          <button
            onClick={() => router.push("/etapa5")}
            className="bg-white/90 hover:bg-white text-black px-6 py-4 rounded-xl shadow-xl text-lg font-semibold flex items-center justify-center gap-2 transition transform hover:-translate-y-1"
          >
            🚜 Aprender na prática sobre o agro fora do Brasil
          </button>

          <button
            onClick={() => router.push("/etapa5")}
            className="bg-white/90 hover:bg-white text-black px-6 py-4 rounded-xl shadow-xl text-lg font-semibold flex items-center justify-center gap-2 transition transform hover:-translate-y-1"
          >
            🇺🇸 Ganhar fluência convivendo com nativos
          </button>

          <button
            onClick={() => router.push("/etapa5")}
            className="bg-white/90 hover:bg-white text-black px-6 py-4 rounded-xl shadow-xl text-lg font-semibold flex items-center justify-center gap-2 transition transform hover:-translate-y-1"
          >
            🌍 Construir uma carreira internacional desde a faculdade
          </button>

          <button
            onClick={() => router.push("/etapa5")}
            className="bg-white/90 hover:bg-white text-black px-6 py-4 rounded-xl shadow-xl text-lg font-semibold flex items-center justify-center gap-2 transition transform hover:-translate-y-1"
          >
            ✈️ Viver uma aventura única e crescer como pessoa
          </button>

        </div>
      </div>
    </div>
  )
}
