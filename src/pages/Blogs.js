import { useEffect } from "react"
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase.config'

import { useBlogContext } from "../hooks/blogs.context"

const Blogs = () => {

  const blogsColloectionRef = collection(db, "blogs")
  const { blogs } = useBlogContext()
  const { dispatch } = useBlogContext()

  useEffect(() => {
    const blogs = async() => {
            try {
            const data = await getDocs(blogsColloectionRef)
            dispatch({
                type: 'SET_BLOGS',
                payload: data.docs
            })
            } catch (error) {
                
            }
        }
    blogs()
  }, [blogsColloectionRef, dispatch])

  const Data = blogs.map((doc) => ({...doc.data(), id: doc.id}))

  return (
    <div>{Data.map((data) => {
      return(
        <>
          {data.title}
        </>
      )
    })}</div>
  )
}

export default Blogs