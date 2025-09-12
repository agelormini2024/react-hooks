import { useCallback, useState } from "react";

interface UseContadorReturn {
    contador: number;
    incremento: () => void;
    decremento: () => void;
    reset: () => void;

}

export function useContador(initialValue: number = 0): UseContadorReturn {
    const [contador, setContador] = useState(initialValue)

    const incremento = useCallback(() => {
        setContador(prev => prev + 1)
    },[])

    const decremento = useCallback(() => {
        setContador(prev => prev - 1)
    }, []);

    const reset = useCallback(() => {
        setContador(initialValue);
    }, [initialValue]);


    return { contador, incremento, decremento, reset }
}