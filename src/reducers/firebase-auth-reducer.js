export const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return{
                user: action.payload,
                loader: false
            }
        case 'LOGOUT':
            return{
                user: null
            }
        default:
            return state 
    }
}