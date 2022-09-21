import { useAuthContext } from "../hooks/auth.context"
import { useLogout } from "../hooks/firebase-signout-hook"
import { useNavigate } from 'react-router-dom'
import { GridLoader } from 'react-spinners'

const Home = () => {

    const { logout } = useLogout()
    const navigate = useNavigate()
    const { user, loader } = useAuthContext()

    const handleLogout = async() => {
        try {
            await logout()
            navigate('/signin')
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <div className="profile-container">
        <div className="profile">
            {
                loader ?
                <GridLoader color="#36d7b7" />
                :
                <>
                <img src={user.photoURL ? user.photoURL : process.env.PUBLIC_URL + '/images/patric.jpg'} alt="" width="50px" referrerPolicy="no-referrer"/>
                <h2>{user.displayName ? user.displayName : "User"}</h2>
                <span>{user.email}</span>
                </>
            }
        </div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home