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

        <h1 className="text-4xl font-extrabold text-yellow-400 text-center drop-shadow-md flex items-center justify-center gap-2">
          Seu perfil tá quase pronto 📝
        </h1>

        <div className="bg-black/50 p-6 rounded-xl max-w-md text-center text-white text-lg">
          <p>
            Não é qualquer intercâmbio. 
            É um roteiro pensado pra te fazer <strong>viver o agro de verdade</strong>, 
            <strong> aprender num campus cheio de oportunidades</strong> e 
            <strong> ter histórias que ninguém mais vai ter</strong>.
          </p>
        </div>

        <div className="bg-black/50 p-6 rounded-xl max-w-md text-left text-white text-lg flex flex-col gap-3">
          <p>✅ <strong>Conhecer o campo, as fazendas, o agro raiz</strong>, do jeito que só quem mete a bota entende.</p>
          <p>✅ <strong>Fazer amigos do mundo inteiro</strong>, rindo com sotaques diferentes e criando conexões pra vida toda.</p>
          <p>✅ <strong>Usar seus dias livres pra explorar cidades, estradas e paisagens</strong> que vão virar suas memórias favoritas.</p>
        </div>

        <div className="bg-black/50 p-6 rounded-xl max-w-md text-center text-white text-lg">
          <p>
            E isso aqui ainda é só o <strong>esboço</strong>. 
            Imagina quando a gente <strong>ajustar cada detalhe só pra você</strong>?
          </p>
        </div>

        <button
          onClick={() => {
            if (typeof window !== "undefined" && typeof fbq !== "undefined") {
              fbq('track', 'Lead')
            }
            router.push("/etapa7")
          }}
          className="mt-6 bg-white/90 hover:bg-white text-black px-8 py-4 rounded-full shadow-xl text-xl font-bold transition transform hover:-translate-y-1"
        >
          Bora ver como fica o seu roteiro exclusivo 💥
        </button>

      </div>
    </div>
  )
}
