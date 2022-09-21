import { auth } from '../firebase/firebase.config'
import { useAuthContext } from "./auth.context"
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'

export const useGithub = () => {

    const { dispatch } = useAuthContext
    const provider = new GithubAuthProvider()

    const github = async() => {
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
            console.log(error.message)
        }
    }

    return { github }
} 