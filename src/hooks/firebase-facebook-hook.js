import { auth } from '../firebase/firebase.config'
import { useAuthContext } from "./auth.context"
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth'

export const useFacebook = () => {

    const { dispatch } = useAuthContext()
    const provider = new FacebookAuthProvider()

    const facebook = async() => {
        try {
            await signInWithPopup(auth, provider)
                .then((user) => {
                    dispatch({
                        type: 'LOGIN',
                        payload: user
                    })
                }).catch((error) => {
                    console.log(error.message)
                })
        } catch (error) {
            
        }
    }

    return { facebook }
}