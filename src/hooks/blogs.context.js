import { BlogsContext } from "../context/firebase-blog-context";
import { useContext } from "react";

export const useBlogContext = () => {
    const context = useContext(BlogsContext)

    if(!context) {
        throw Error('useBlogContext must be used inside an BlogContextProvider')
    }

    return context
} 