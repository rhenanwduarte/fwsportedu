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
          Um intercâmbio pensado só pra você.
        </h1>

        <div className="bg-black/50 p-4 rounded-xl shadow-md max-w-md text-center">
          <p className="text-xl text-white">
            Um intercâmbio <span className="font-bold">do seu jeito</span>, feito pra combinar com quem você é — e com quem quer se tornar.
          </p>
        </div>

        <div className="bg-black/50 p-4 rounded-xl shadow-md max-w-md text-center">
          <p className="text-lg text-white">
            Não é só sobre viajar. É sobre construir uma <span className="font-bold">história única</span> que só você vai ter pra contar.
          </p>
        </div>

        <div className="bg-black/50 p-4 rounded-xl shadow-md max-w-md text-center">
          <p className="text-base italic text-white">
            E se eu te disser que <span className="font-bold">já comecei a pensar no seu plano?</span>
          </p>
        </div>

        <button
          onClick={() => router.push("/etapa3")}
          className="bg-white/80 hover:bg-white text-black px-8 py-4 rounded-full text-lg font-semibold transition"
        >
          Quero ver como seria o meu plano
        </button>
      </div>
    </div>
  )
}
