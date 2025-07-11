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

        <h1 className="text-4xl font-extrabold text-yellow-400 text-center drop-shadow-md">
          Talvez o seu plano não seja igual ao de ninguém.
        </h1>

        <div className="bg-black/50 p-4 rounded-xl shadow-md max-w-md text-center">
          <p className="text-xl text-white">
            Cada pessoa carrega <span className="font-bold">histórias, medos e vontades diferentes</span>. 📚💭
          </p>
        </div>

        <div className="bg-black/50 p-4 rounded-xl shadow-md max-w-md text-center">
          <p className="text-lg text-white">
            Por isso, nenhum plano de intercâmbio deveria ser igual ao outro. ✈️🗺️
          </p>
        </div>

        <div className="bg-black/50 p-4 rounded-xl shadow-md max-w-md text-center">
          <p className="text-base italic text-white">
            Quem sabe o seu plano não é justamente o que vai <span className="font-bold">quebrar o padrão?</span> 🚀✨
          </p>
        </div>

        <button
          onClick={() => router.push("/etapa4")}
          className="bg-white/80 hover:bg-white text-black px-8 py-4 rounded-full text-lg font-semibold transition"
        >
          Quero continuar descobrindo o meu
        </button>

      </div>
    </div>
  )
}
