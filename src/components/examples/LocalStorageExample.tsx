import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function LocalStorageExample() {
    const [storedCount, setStoredCount] = useLocalStorage('counter-demo', 0)
    const [storedName, setStoredName] = useLocalStorage('user-name', '')
    const [storedSettings, setStoredSettings] = useLocalStorage('app-settings', {
        theme: 'light',
        notifications: true
    })

    return (
        <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
                useLocalStorage - Persistencia de Datos
            </h3>
            <p className="text-gray-600 mb-6">
                Custom hook que persiste datos en localStorage automáticamente. 
                Los valores se mantienen entre sesiones del navegador.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Contador Persistente */}
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-3">Contador Persistente</h4>
                    <p className="text-2xl font-bold text-orange-600 mb-4">
                        Contador: {storedCount}
                    </p>
                    <div className="flex gap-2">
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm transition duration-300"
                            onClick={() => setStoredCount(storedCount + 1)}
                        >
                            +1
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm transition duration-300"
                            onClick={() => setStoredCount(storedCount - 1)}
                        >
                            -1
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm transition duration-300"
                            onClick={() => setStoredCount(0)}
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* Input Persistente */}
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-3">Input Persistente</h4>
                    <p className="text-sm text-gray-600 mb-3">
                        Nombre guardado: <span className="font-bold text-blue-600">{storedName || 'Sin nombre'}</span>
                    </p>
                    <div className="space-y-2">
                        <input
                            type="text"
                            value={storedName}
                            onChange={(e) => setStoredName(e.target.value)}
                            placeholder="Escribe tu nombre..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm transition duration-300"
                            onClick={() => setStoredName('')}
                        >
                            Limpiar
                        </button>
                    </div>
                </div>

                {/* Configuraciones */}
                <div className="bg-gray-50 p-6 rounded-lg md:col-span-2">
                    <h4 className="font-bold text-gray-800 mb-3">Configuraciones (Objeto)</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Tema:
                            </label>
                            <select
                                value={storedSettings.theme}
                                onChange={(e) => setStoredSettings({
                                    ...storedSettings,
                                    theme: e.target.value as 'light' | 'dark'
                                })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="light">Claro</option>
                                <option value="dark">Oscuro</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={storedSettings.notifications}
                                    onChange={(e) => setStoredSettings({
                                        ...storedSettings,
                                        notifications: e.target.checked
                                    })}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className="text-sm font-medium text-gray-700">
                                    Notificaciones activadas
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-3 p-3 bg-white rounded border">
                        <p className="text-sm">
                            <strong>Config actual:</strong> {JSON.stringify(storedSettings, null, 2)}
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <h4 className="text-white font-bold mb-2">📂 hooks/useLocalStorage.tsx</h4>
                    <pre className="text-sm">
{`import { useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.error('Error reading from localStorage:', error)
            return initialValue
        }
    })

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function 
                ? value(storedValue) 
                : value
            setStoredValue(valueToStore)
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            console.error('Error saving to localStorage:', error)
        }
    }

    return [storedValue, setValue] as const
}`}
                    </pre>
                </div>

                <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <h4 className="text-white font-bold mb-2">📝 Ejemplos de uso</h4>
                    <pre className="text-sm">
{`// Diferentes tipos de datos
const [count, setCount] = useLocalStorage<number>('count', 0)
const [name, setName] = useLocalStorage<string>('name', '')
const [user, setUser] = useLocalStorage<User>('user', defaultUser)
const [settings, setSettings] = useLocalStorage('settings', {
    theme: 'light',
    lang: 'es'
})

// Uso con función updater
setCount(prev => prev + 1)
setSettings(prev => ({ ...prev, theme: 'dark' }))`}
                    </pre>
                </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
                <h4 className="font-bold text-green-800 mb-2">💡 Características:</h4>
                <ul className="text-green-700 text-sm space-y-1">
                    <li>• <strong>Genérico:</strong> Funciona con cualquier tipo de dato</li>
                    <li>• <strong>Persistente:</strong> Los datos se mantienen entre sesiones</li>
                    <li>• <strong>Error handling:</strong> Manejo seguro de errores de JSON</li>
                    <li>• <strong>Function updater:</strong> Soporta funciones como setState</li>
                    <li>• <strong>Type-safe:</strong> TypeScript garantiza tipos correctos</li>
                </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <h4 className="font-bold text-yellow-800 mb-2">⚠️ Nota:</h4>
                <p className="text-yellow-700 text-sm">
                    Los datos se guardan automáticamente en localStorage. 
                    Recarga la página para verificar que los valores se mantienen.
                </p>
            </div>
        </div>
    )
}
