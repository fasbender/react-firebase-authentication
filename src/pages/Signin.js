import { useState } from 'react';
import { useLogin } from '../hooks/firebase-signin-hook'
import { useAuthContext } from '../hooks/auth.context';
import { Link, useNavigate } from 'react-router-dom'
import { useGoogle } from '../hooks/firebase-google-hook'
import { useFacebook } from '../hooks/firebase-facebook-hook'
import { useGithub } from '../hooks/firebase-github-hook';
import { BarLoader } from 'react-spinners'
import Saul from '../saul.jpg'

const Signin = () => {

    const { login, loading } = useLogin()
    const { user } = useAuthContext()
    const { google, gload } = useGoogle()
    const { facebook } = useFacebook()
    const { github } = useGithub()
    const navigate = useNavigate()

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const useFormSubmit = async(e) => {
        e.preventDefault()

        try {
            await login(email, password)
            navigate('/')
        } catch (error) {
            console.log(error.message)
        }
        setEmail('')
        setPassword('')
    }
    const handleGoogle = async() => {
      try {
        await google()
        navigate('/')
      } catch (error) {
        console.log(error.message)
      }
    }
    const handleFacebook = async() => {
      try {
        await facebook()
        navigate('/')
      } catch (error) {
        console.log(error.message)
      }
    }
    const handleGithub = async() => {
      try {
        await github()
        navigate('/')
      } catch (error) {
        console.log(error.message)
      }
    }

  return (
    <form className={ user ? 'form form-active' : 'form' } onSubmit={useFormSubmit}>
        <BarLoader loading={ loading || gload ? true : false } color="#36d7b7" className='loader' />
        <div className='saul'>
          <img src={Saul} alt="saul" />
        </div>
        <div>
          <input type="email" name="email" id="email" value={email} placeholder='email' onChange={handleEmail}/>
        </div>
        <div>
          <input type="password" name="password" id="password" value={password} placeholder='password' onChange={handlePassword}/>
        </div>
        <div className='logo'>
          <img onClick={handleGoogle} src={process.env.PUBLIC_URL + '/images/google.png'} alt=""/>
          <img onClick={handleGithub} src={process.env.PUBLIC_URL + '/images/github.png'} alt="" width="40px"/>
          <img onClick={handleFacebook} src={process.env.PUBLIC_URL + '/images/facebook.png'} alt="" width="40px"/>
        </div>
        <div className='button'>
          <button disabled={email === '' || password === '' ? true : false} type='submit'>Sign in</button>
        </div>
        <Link to="/signup" className='link'>Go to Signup page</Link>
      </form>
  )
}

export default Signin