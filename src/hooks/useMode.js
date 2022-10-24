import { useContext } from 'react'
import { ModeContext } from '../context/ModeContext'

export const useMode = () => {
    const mode = useContext(ModeContext)

    if (mode === undefined) {
        throw new Error('useMode() must be inside a ModeProvider')
    }

    return mode
}