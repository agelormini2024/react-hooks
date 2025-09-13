import { useState } from "react"
import BasicCounterExample from "./components/examples/BasicCounterExample"
import CustomHookExample from "./components/examples/CustomHookExample"
import LocalStorageExample from "./components/examples/LocalStorageExample"
import CombinedExample from "./components/examples/CombinedExample"
import FetchExample from "./components/examples/FetchExample"

const tabs = [
    { id: 'basic', label: '📊 useState', component: BasicCounterExample },
    { id: 'custom', label: '🔧 Custom Hook', component: CustomHookExample },
    { id: 'storage', label: '💾 localStorage', component: LocalStorageExample },
    { id: 'fetch', label: '🌐 API Fetch', component: FetchExample },
    { id: 'combined', label: '🔄 Combinado', component: CombinedExample },
]

function App() {
    const [activeTab, setActiveTab] = useState('basic')

    const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || BasicCounterExample

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
            <div className="max-w-6xl mx-auto">

                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        React Hooks - Ayuda Memoria
                    </h1>
                    <p className="text-gray-600">
                        Ejemplos prácticos de React + TypeScript + Tailwind CSS
                    </p>
                </header>

                {/* Navegación Principal */}
                <nav className="flex flex-wrap justify-center gap-2 bg-white p-2 rounded-xl shadow-lg mb-8" role="tablist" aria-label="Ejemplos de React Hooks">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            aria-controls={`panel-${tab.id}`}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-blue-500 text-white shadow-md transform scale-105'
                                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>

                {/* Contenido */}
                <main 
                    className="bg-white rounded-xl shadow-lg p-8"
                    role="tabpanel"
                    id={`panel-${activeTab}`}
                    aria-labelledby={`tab-${activeTab}`}
                >
                    <ActiveComponent />
                </main>

                <footer className="text-center mt-8 text-gray-500 text-sm">
                    <p>Template: React 19 + TypeScript + Tailwind CSS 4 + Vite 7</p>
                </footer>
            </div>
        </div>
    )
}

export default App
