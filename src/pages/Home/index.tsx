import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    
    <header className="w-full text-center py-16 px-6">
      <h1 className="text-4xl font-bold mb-4">Aprenda de Forma Divertida!</h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Teste seus conhecimentos com quizzes interativos e melhore seu aprendizado de maneira divertida e eficaz.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg text-lg shadow-md transition-all">
        Comece Agora
      </button>
    </header>
    
    <section className="py-16 px-6 w-full max-w-5xl text-center">
      <h2 className="text-3xl font-semibold mb-8">Por que usar nosso Quiz Educacional?</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Aprendizado Gamificado</h3>
          <p className="text-gray-400">Transforme o aprendizado em um jogo interativo e divertido.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Desafios Personalizados</h3>
          <p className="text-gray-400">Crie quizzes adaptados às suas necessidades e níveis de conhecimento.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Acompanhe seu Progresso</h3>
          <p className="text-gray-400">Veja suas estatísticas e melhore seu desempenho ao longo do tempo.</p>
        </div>
      </div>
    </section>

    <section className="py-16 px-6 w-full max-w-4xl text-center">
      <h2 className="text-3xl font-semibold mb-8">O que nossos usuários dizem</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <p className="text-gray-300 italic">"Esse aplicativo mudou a forma como estudo! Agora aprender é muito mais divertido e eficiente."</p>
        <p className="text-blue-400 mt-4 font-bold">- João Silva</p>
      </div>
    </section>

    {/* Call to Action */}
    <section className="py-16 px-6 w-full max-w-3xl text-center">
      <h2 className="text-3xl font-semibold mb-4">Pronto para Começar?</h2>
      <p className="text-gray-400 mb-6">Junte-se a milhares de alunos que estão transformando seus estudos com nosso quiz educacional.</p>
      <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg text-lg shadow-md transition-all">
        Criar uma Conta Grátis
      </button>
    </section>
  </div>
  )
}
