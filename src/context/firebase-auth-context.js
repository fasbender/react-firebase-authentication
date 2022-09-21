import { createContext, useReducer, useEffect } from "react";
import { auth } from '../firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth'
import { authReducer } from '../reducers/firebase-auth-reducer'

export const AuthContext = createContext()

const initialState = {
    user: {},
    loader: true
}

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, initialState)
    const value ={ ...state, dispatch }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
          dispatch({
                type: 'LOGIN',
                payload: currentUser
            })
        })
    }, [state.user])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}