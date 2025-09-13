import { useState } from 'react'

export default function BasicCounterExample() {
    const [count, setCount] = useState(0)

    return (
        <article>
            <header>
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                    useState - Contador Básico
                </h2>
                <p className="text-gray-600 mb-6">
                    Ejemplo básico de useState sin persistencia. El estado se reinicia al recargar la página.
                </p>
            </header>

            <main className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600 mb-4">
                        Contador: {count}
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
                            onClick={() => setCount(count + 1)}
                        >
                            Incrementar
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
                            onClick={() => setCount(count - 1)}
                        >
                            Decrementar
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
                            onClick={() => setCount(0)}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </main>

            <section className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                <h3 className="text-white font-bold mb-2">📝 Código del useState</h3>
                <pre className="text-sm">
                    {`const [count, setCount] = useState(0)

// Incrementar
setCount(count + 1)

// Decrementar  
setCount(count - 1)

// Reset
setCount(0)

// Función updater (recomendado)
setCount(prev => prev + 1)`}
                </pre>
            </section>
        </article>
    )
}
