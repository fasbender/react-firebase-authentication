import { useState } from 'react';
import { useRegister } from '../hooks/firebase-signup-hook'
import { useAuthContext } from '../hooks/auth.context';
import { Link, useNavigate } from 'react-router-dom'
import { useGoogle } from '../hooks/firebase-google-hook'
import { useFacebook } from '../hooks/firebase-facebook-hook'
import { useGithub } from '../hooks/firebase-github-hook';
import { BarLoader } from 'react-spinners'
import Saul from '../saul.jpg'

const Signup = () => {

    const { register, registerLoading }= useRegister()
    const { user } = useAuthContext()
    const { google, gload } = useGoogle()
    const { facebook } = useFacebook()
    const { github } = useGithub()
    const navigate = useNavigate()

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const[error, setError] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setError('')
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setError('')
    }

    const useFormSubmit = async(e) => {
        e.preventDefault()

        try {
            if(password !== confirmPassword) {
              return setError('Password do not match!')
            }
            await register(email, password)
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
        <BarLoader loading={ registerLoading || gload ? true : false } color="#36d7b7" className='loader' />
        <div className='saul'>
          <img src={Saul} alt="saul" />
        </div>
        <span style={{color: 'red'}}>{error}</span>
        <div>
          <input type="email" name="email" id="email" value={email} placeholder='email' onChange={handleEmail}/>
        </div>
        <div>
          <input type="password" name="password" id="password" value={password} placeholder='password' onChange={handlePassword}/>
        </div>
        <div>
          <input type="password" name="confirm-password" id="confirm-password" value={confirmPassword} placeholder='confirm password' onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div>
        <div className='logo'>
          <img onClick={handleGoogle} src={process.env.PUBLIC_URL + '/images/google.png'} alt=""/>
          <img onClick={handleGithub} src={process.env.PUBLIC_URL + '/images/github.png'} alt="" width="40px"/>
          <img onClick={handleFacebook} src={process.env.PUBLIC_URL + '/images/facebook.png'} alt="" width="40px"/>
        </div>
        <div className='button'>
          <button disabled={email === '' || password === '' || confirmPassword === '' ? true : false} type='submit'>Sign up</button>
        </div>
        <Link to="/signin" className='link'>Go to Signin page</Link>
      </form>
  )
}

export default Signup