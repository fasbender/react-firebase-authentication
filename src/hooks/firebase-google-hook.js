import { auth } from '../firebase/firebase.config'
import { useAuthContext } from "./auth.context"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useState } from 'react'

export const useGoogle = () => {

    const { dispatch } = useAuthContext()
    const provider = new GoogleAuthProvider()
    const[error, setError] = useState(null)
    const[gload, setGload] = useState(false)

    const google = async() => {
        try {
            setGload(true)
            await signInWithPopup(auth, provider)
                .then((user) => {
                    dispatch({
                        type: 'LOGIN',
                        payload: user
                    })
                }).catch((error) => {
                    console.log(error.message)
                    setError(error.message)
                })
        } catch (error) {
            console.log(error.message)
        }
        setGload(false)
    }

    return { google, error, setError, gload }
}