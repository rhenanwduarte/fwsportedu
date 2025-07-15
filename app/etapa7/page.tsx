"use client"

import React from "react"

export default function Page() {
  // função que dispara o evento de purchase
  const handlePurchaseClick = () => {
    if (typeof window !== "undefined" && typeof fbq !== "undefined") {
      fbq('track', 'Purchase', {
        value: 69.90,
        currency: 'BRL'
      })
    }
  }

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
        
        <h1 className="inline-flex items-center justify-center gap-2 text-4xl font-extrabold text-yellow-400 text-center drop-shadow-lg">
          Bora colocar seu sonho no mapa?
          <img src="https://i.imgur.com/IHP5eUd.gif" alt="Globo animado" className="w-8 h-8" />
        </h1>

        <div className="bg-black/50 p-6 rounded-xl max-w-md text-center text-white text-xl flex flex-col gap-3">
          <p><span className="text-green-500 mr-2">🌱</span><strong>É agro.</strong></p>
          <p><span className="text-green-500 mr-2">🎓</span><strong>É campus.</strong></p>
          <p><span className="text-green-500 mr-2">✈️</span><strong>É passaporte cheio.</strong></p>
          <p>
            É ter a FW mapeando <strong>seu caminho</strong>,
            do jeito que <strong>só você vai viver</strong>.
          </p>
          <p><strong>Tá tudo pronto.</strong></p>
          <p><strong>Só falta você me chamar pra gente começar.</strong></p>
        </div>

        <a 
          href="https://wa.me/18196204430?text=E+a%C3%AD+Jos%C3%A9%21+Quero+dar+esse+passo+e+viver+l%C3%A1+fora+tamb%C3%A9m.+Bora+planejar+juntos%3F"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handlePurchaseClick}
          className="mt-6 bg-white/90 hover:bg-white text-black px-10 py-5 rounded-full shadow-xl text-2xl font-bold flex items-center gap-3 transition transform hover:-translate-y-1"
        >
          <img src="https://i.imgur.com/ZTHZAvd.png" alt="WhatsApp" className="w-7 h-7" />
          Falar direto comigo
        </a>
      </div>
    </div>
  )
}
