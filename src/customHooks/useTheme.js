import { useLayoutEffect, useState } from "react"


export const useMode = () => {
    const [mode, setMode] = useState(localStorage.getItem('mode')||'light')

    const toggleMode = () => {
        mode === 'light' ? setMode('dark') : setMode('light')
    }

    useLayoutEffect(() => {
        document.documentElement.setAttribute('mode', mode)
        localStorage.setItem('mode', mode)
    }, [mode])

    return toggleMode
}