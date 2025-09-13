import { useFetch } from '../../hooks/useFetch'

interface User {
    id: number
    name: string
    email: string
    phone: string
    website: string
}

interface Post {
    id: number
    title: string
    body: string
    userId: number
}

export default function FetchExample() {
    const { data: users, loading: usersLoading, error: usersError, refetch: refetchUsers } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users')
    const { data: posts, loading: postsLoading, error: postsError, refetch: refetchPosts } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')

    return (
        <article>
            <header>
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                    useFetch - Peticiones HTTP
                </h2>
                <p className="text-gray-600 mb-6">
                    Custom hook para hacer peticiones HTTP con manejo de estados de loading, error y refetch.
                    Usa useEffect y useCallback para optimizar las peticiones.
                </p>
            </header>
            
            <div className="grid lg:grid-cols-2 gap-6 mb-6">
                {/* Users */}
                <section className="bg-gray-50 p-6 rounded-lg">
                    <header className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-gray-800">Usuarios</h3>
                        <button
                            onClick={refetchUsers}
                            disabled={usersLoading}
                            className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded text-sm transition duration-300"
                        >
                            {usersLoading ? 'Cargando...' : 'Refetch'}
                        </button>
                    </header>
                    
                    {usersLoading && (
                        <div className="text-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
                            <p className="text-gray-600 mt-2">Cargando usuarios...</p>
                        </div>
                    )}
                    
                    {usersError && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                            <strong>Error:</strong> {usersError}
                        </div>
                    )}
                    
                    {users && !usersLoading && (
                        <div className="space-y-3 max-h-64 overflow-y-auto">
                            {users.slice(0, 5).map(user => (
                                <div key={user.id} className="bg-white p-3 rounded border">
                                    <p className="font-medium text-gray-800">{user.name}</p>
                                    <p className="text-sm text-gray-600">{user.email}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Posts */}
                <section className="bg-gray-50 p-6 rounded-lg">
                    <header className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-gray-800">Posts Recientes</h3>
                        <button
                            onClick={refetchPosts}
                            disabled={postsLoading}
                            className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-4 py-2 rounded text-sm transition duration-300"
                        >
                            {postsLoading ? 'Cargando...' : 'Refetch'}
                        </button>
                    </header>
                    
                    {postsLoading && (
                        <div className="text-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto"></div>
                            <p className="text-gray-600 mt-2">Cargando posts...</p>
                        </div>
                    )}
                    
                    {postsError && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                            <strong>Error:</strong> {postsError}
                        </div>
                    )}
                    
                    {posts && !postsLoading && (
                        <div className="space-y-3 max-h-64 overflow-y-auto">
                            {posts.map(post => (
                                <div key={post.id} className="bg-white p-3 rounded border">
                                    <p className="font-medium text-gray-800 mb-1">{post.title}</p>
                                    <p className="text-sm text-gray-600 line-clamp-2">{post.body}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>

            <section className="space-y-4">
                <article className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <h4 className="text-white font-bold mb-2">📂 hooks/useFetch.tsx</h4>
                    <pre className="text-sm">
{`import { useState, useEffect, useCallback } from 'react'

interface UseFetchState<T> {
    data: T | null
    loading: boolean
    error: string | null
}

interface UseFetchReturn<T> extends UseFetchState<T> {
    refetch: () => void
}

export function useFetch<T>(url: string): UseFetchReturn<T> {
    const [state, setState] = useState<UseFetchState<T>>({
        data: null,
        loading: true,
        error: null
    })

    const fetchData = useCallback(async () => {
        setState(prev => ({ ...prev, loading: true, error: null }))
        
        try {
            const response = await fetch(url)
            
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`)
            }
            
            const data = await response.json()
            setState({ data, loading: false, error: null })
        } catch (error) {
            setState({
                data: null,
                loading: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            })
        }
    }, [url])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return {
        ...state,
        refetch: fetchData
    }
}`}
                    </pre>
                </article>

                <article className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <h4 className="text-white font-bold mb-2">📝 Uso del hook</h4>
                    <pre className="text-sm">
{`interface User {
    id: number
    name: string
    email: string
}

function MyComponent() {
    const { data, loading, error, refetch } = useFetch<User[]>('/api/users')

    if (loading) return <div>Cargando...</div>
    if (error) return <div>Error: {error}</div>
    
    return (
        <div>
            <button onClick={refetch}>Refetch</button>
            {data?.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    )
}`}
                    </pre>
                </article>
            </section>

            <aside className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                <h4 className="font-bold text-blue-800 mb-2">💡 Características del useFetch:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                    <li>• <strong>TypeScript genérico:</strong> Tipado automático del response</li>
                    <li>• <strong>Estados automáticos:</strong> loading, error, data</li>
                    <li>• <strong>Refetch manual:</strong> Función para rehacer la petición</li>
                    <li>• <strong>Error handling:</strong> Manejo completo de errores HTTP</li>
                    <li>• <strong>useCallback:</strong> Optimización para evitar loops infinitos</li>
                    <li>• <strong>Re-fetch automático:</strong> Se ejecuta cuando cambia la URL</li>
                </ul>
            </aside>

            <aside className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <h4 className="font-bold text-yellow-800 mb-2">⚠️ Consideraciones:</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Para apps reales, considera usar <strong>React Query</strong> o <strong>SWR</strong></li>
                    <li>• Este hook es básico, no incluye caché ni reintento automático</li>
                    <li>• Para múltiples peticiones, considera un hook más robusto</li>
                </ul>
            </aside>
        </article>
    )
}
