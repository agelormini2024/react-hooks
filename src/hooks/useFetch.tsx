import { useState, useEffect, useCallback } from 'react'

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
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            
            const data = await response.json()
            setState({ data, loading: false, error: null })
        } catch (error) {
            setState({
                data: null,
                loading: false,
                error: error instanceof Error ? error.message : 'Error desconocido'
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
}
