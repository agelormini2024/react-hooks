import { useContador } from '../../hooks/useContador'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function CombinedExample() {
    const [storedCount, setStoredCount] = useLocalStorage('combined-counter', 0)
    const { contador, incremento, decremento, reset } = useContador(storedCount)

    // Sincronizar el custom hook con localStorage
    const handleIncrement = () => {
        const newValue = contador + 1
        incremento()
        setStoredCount(newValue)
    }

    const handleDecrement = () => {
        const newValue = contador - 1
        decremento()
        setStoredCount(newValue)
    }

    const handleReset = () => {
        reset()
        setStoredCount(0)
    }

    return (
        <article>
            <header>
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                    Combinando Hooks - useContador + useLocalStorage
                </h2>
                <p className="text-gray-600 mb-6">
                    Ejemplo avanzado que combina múltiples custom hooks. 
                    Usar useContador para la lógica y useLocalStorage para la persistencia.
                </p>
            </header>
            
            <main className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="text-center">
                    <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-1">Valor del custom hook:</p>
                        <p className="text-2xl font-bold text-purple-600">
                            {contador}
                        </p>
                    </div>
                    <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-1">Valor en localStorage:</p>
                        <p className="text-2xl font-bold text-orange-600">
                            {storedCount}
                        </p>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
                            onClick={handleIncrement}
                        >
                            Incrementar
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
                            onClick={handleDecrement}
                        >
                            Decrementar
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </main>

            <section className="space-y-4">
                <article className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <h3 className="text-white font-bold mb-2">📝 Implementación</h3>
                    <pre className="text-sm">
{`function CombinedExample() {
    // Hook para persistencia
    const [storedCount, setStoredCount] = useLocalStorage('combined-counter', 0)
    
    // Hook para lógica (inicializado con valor persistido)
    const { contador, incremento, decremento, reset } = useContador(storedCount)

    // Sincronización manual entre ambos hooks
    const handleIncrement = () => {
        const newValue = contador + 1
        incremento()                    // Actualiza el custom hook
        setStoredCount(newValue)        // Persiste en localStorage
    }

    const handleDecrement = () => {
        const newValue = contador - 1
        decremento()
        setStoredCount(newValue)
    }

    const handleReset = () => {
        reset()                         // Resetea el custom hook
        setStoredCount(0)               // Resetea localStorage
    }

    return (
        <div>
            <p>Custom Hook: {contador}</p>
            <p>LocalStorage: {storedCount}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}`}
                    </pre>
                </article>

                <aside className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h3 className="font-bold text-red-800 mb-2">⚠️ Problema de Sincronización</h3>
                    <p className="text-red-700 text-sm mb-2">
                        Al combinar hooks, surge el problema de la sincronización. 
                        Los state updates son asíncronos en React:
                    </p>
                    <div className="bg-red-100 p-3 rounded text-sm font-mono">
                        <p className="text-red-800">❌ Problemático:</p>
                        <p className="text-red-600">incremento() // contador: 5 → 6 (pero no inmediato)</p>
                        <p className="text-red-600">setStoredCount(contador) // usa contador = 5 ❌</p>
                    </div>
                </aside>

                <aside className="bg-green-50 border-l-4 border-green-400 p-4">
                    <h3 className="font-bold text-green-800 mb-2">✅ Solución</h3>
                    <p className="text-green-700 text-sm mb-2">
                        Calcular el nuevo valor antes de los updates:
                    </p>
                    <div className="bg-green-100 p-3 rounded text-sm font-mono">
                        <p className="text-green-800">✅ Correcto:</p>
                        <p className="text-green-600">const newValue = contador + 1</p>
                        <p className="text-green-600">incremento() // actualiza hook</p>
                        <p className="text-green-600">setStoredCount(newValue) // usa valor calculado ✅</p>
                    </div>
                </aside>

                <aside className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h3 className="font-bold text-blue-800 mb-2">💡 Alternativas Mejores</h3>
                    <ul className="text-blue-700 text-sm space-y-1">
                        <li>• <strong>useEffect:</strong> Sincronizar automáticamente los hooks</li>
                        <li>• <strong>Hook unificado:</strong> Crear un usePersistedCounter que maneje todo</li>
                        <li>• <strong>Reducer:</strong> Usar useReducer para lógica más compleja</li>
                        <li>• <strong>Context:</strong> Para estado global compartido</li>
                    </ul>
                </aside>
            </section>
        </article>
    )
}
