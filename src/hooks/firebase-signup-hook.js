import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'
import { useAuthContext } from "./auth.context";

export const useRegister = () => {

    const { dispatch } = useAuthContext()
    const[registerLoading, setRegisterLoading] = useState(false)
    
    const register = async(email, password) => {

        try {
            setRegisterLoading(true)
            await createUserWithEmailAndPassword(auth, email, password)
                .then((user) => {
                        dispatch({
                    type: 'LOGIN',
                    payload: user
                })
            }).catch((err) => {
                console.log(err.message)
            })
        } catch (error) {
            console.log(error.message)
        }
        setRegisterLoading(false)
    }

    return { register, registerLoading }
}