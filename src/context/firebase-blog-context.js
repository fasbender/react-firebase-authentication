import { createContext, useReducer } from "react";
import { blogReducer } from '../reducers/firebase-blog-reducer'

export const BlogsContext = createContext()

const initialState = {
    blogs: []
}

export const BlogsContextProvider = ({ children }) => {

    const[state, dispatch] = useReducer(blogReducer, initialState)
    const value ={ ...state, dispatch }


    return (
        <BlogsContext.Provider value={value}>
            {children}
        </BlogsContext.Provider>
    )

}