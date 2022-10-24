import { createContext, useReducer, ReactNode } from 'react'

export const ModeContext = createContext({} as ReturnType<typeof modeReducer>)

const modeReducer = (state: any, action: { type: string; payload: string }) => {
    switch (action.type) {
        case 'CHANGE_MODE':
            return { ...state, mode: action.payload }
        default:
            return state
    }
}

type Children = {
    children: ReactNode
}

export function ModeProvider({ children }: Children) {
    const [state, dispatch] = useReducer(modeReducer, {
        mode: 'light'
    })

    const changeMode = (mode: string) => {
        dispatch({ type: 'CHANGE_MODE', payload: mode })
    }

    return (
        <ModeContext.Provider value={{...state, changeMode}}>
            {children}
        </ModeContext.Provider>    
    )
}
