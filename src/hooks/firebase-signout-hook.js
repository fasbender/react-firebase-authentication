import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'
import { useAuthContext } from "./auth.context"

export const useLogout = () => {

    const { dispatch } = useAuthContext()

    const logout = async() => {
        try {
            await signOut(auth)
            dispatch({
                type: 'LOGOUT'
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return { logout }

}