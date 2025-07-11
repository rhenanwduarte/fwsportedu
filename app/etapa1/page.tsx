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
      <div className="flex min-h-svh items-center justify-center">
        <div className="flex flex-col items-center gap-4 bg-black/50 p-8 rounded-xl max-w-md text-center">
          <h1 className="text-3xl font-bold text-white">
            Já imaginou viver algo totalmente novo?
          </h1>
          <p className="text-white text-lg">
            Sair da sua bolha, testar suas habilidades sociais, se desafiar num outro idioma.
          </p>
          <p className="text-sm text-white">
            Não é só sobre viajar — é sobre evoluir, amadurecer, viver um intercâmbio que muda tudo.
          </p>
          <p className="text-sm text-white italic">
            E tudo começa com a coragem de arrumar essa mala.
          </p>

          <img
            src="https://i.imgur.com/koaqsKv.gif"
            alt="Mala sendo feita"
            className="w-36 h-auto"
          />

          <button
            onClick={() => router.push("/etapa2")}
            className="mt-4 bg-white/80 hover:bg-white text-black px-6 py-3 rounded-full transition"
          >
            Quero viver essa experiência
          </button>
        </div>
      </div>
    </div>
  )
}
