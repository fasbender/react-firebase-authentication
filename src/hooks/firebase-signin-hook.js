import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'
import { useAuthContext } from "./auth.context";

export const useLogin = () => {

    const { dispatch } = useAuthContext()
    const[error, setError] = useState(null)
    const[loading, setLoading] = useState(false)

    const login = async(email, password) => {

        try {
            setLoading(true)
            await signInWithEmailAndPassword(auth, email, password)
                .then((user) => {
                        dispatch({
                    type: 'LOGIN',
                    payload: user
                })
            }).catch((err) => {
                console.log(err.message)
                setError(err.message)
            })
        } catch (err) {
            console.log(err.message)
        }
        setLoading(false)
    }

    return { login, error, loading }

}