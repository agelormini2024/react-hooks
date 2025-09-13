import { useContador } from '../../hooks/useContador'

export default function CustomHookExample() {
    const { contador, incremento, decremento, reset } = useContador(0)

    return (
        <article>
            <header>
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                    Custom Hook - useContador
                </h2>
                <p className="text-gray-600 mb-6">
                    Ejemplo de custom hook que encapsula la lógica del contador con useCallback
                    para optimizar el rendimiento. Perfecto para reutilizar en múltiples componentes.
                </p>
            </header>

            <main className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="text-center">
                    <p className="text-3xl font-bold text-purple-600 mb-4">
                        Contador: {contador}
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
                            onClick={incremento}
                        >
                            Incrementar
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
                            onClick={decremento}
                        >
                            Decrementar
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
                            onClick={reset}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </main>

            <section className="space-y-4">
                <article className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <h3 className="text-white font-bold mb-2">📂 hooks/useContador.tsx</h3>
                    <pre className="text-sm">
                        {`import { useState, useCallback } from "react"

interface UseContadorReturn {
    contador: number
    incremento: () => void
    decremento: () => void
    reset: () => void
}

export function useContador(initialValue: number = 0): UseContadorReturn {
    const [contador, setContador] = useState(initialValue)

    const incremento = useCallback(() => {
        setContador(prev => prev + 1)
    }, [])

    const decremento = useCallback(() => {
        setContador(prev => prev - 1)
    }, [])

    const reset = useCallback(() => {
        setContador(initialValue)
    }, [initialValue])

    return { contador, incremento, decremento, reset }
}`}
                    </pre>
                </article>

                <article className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <h3 className="text-white font-bold mb-2">📝 Uso en componente</h3>
                    <pre className="text-sm">
                        {`const { contador, incremento, decremento, reset } = useContador(0)

// Las funciones están optimizadas con useCallback
<button onClick={incremento}>+</button>
<button onClick={decremento}>-</button>
<button onClick={reset}>Reset</button>`}
                    </pre>
                </article>
            </section>

            <aside className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                <h3 className="font-bold text-blue-800 mb-2">💡 Ventajas del Custom Hook:</h3>
                <ul className="text-blue-700 text-sm space-y-1">
                    <li>• <strong>Reutilización:</strong> Lógica encapsulada y reutilizable</li>
                    <li>• <strong>Performance:</strong> useCallback evita re-renders innecesarios</li>
                    <li>• <strong>Testeable:</strong> Fácil de testear por separado</li>
                    <li>• <strong>Mantenimiento:</strong> Lógica centralizada en un lugar</li>
                </ul>
            </aside>
        </article>
    )
}
