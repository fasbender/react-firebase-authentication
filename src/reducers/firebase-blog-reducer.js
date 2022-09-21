export const blogReducer = (state, action) => {
    switch(action.type) {
        case 'SET_BLOGS':
            return {
                blogs: action.payload
            }
        case 'CREATE_BLOG':
            return {
                blogs: [ action.payload, ...state.blogs ]
            }
        case 'DELETE_WORKOUT':
            return {
                blogs: state.blogs.filter((el) => el.id !== action.payload.id)
            }
        default:
            return state
    }
}