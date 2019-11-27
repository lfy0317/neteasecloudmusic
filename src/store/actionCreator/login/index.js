// export const changeGoLogin = (isAgree=false)=>(
//     {
//         type: 'CHANGE_ISAGREE',
//         payload: {
//             isAgree
//         }
//     }
// )
export default {
    changeGoLogin(isAgree=false){
        return (dispatch)=>{
            dispatch({
                type: 'CHANGE_ISAGREE',
                payload: {
                    isAgree
                }
            })
        }
    }
}