// import React, {useReducer} from 'react'
// import {AlertContext} from "./alertContext";
// import {alertReducer} from "./alertReducer";
// import {HIDE_ALERT, SHOW_ALERT} from "../Types";
//
// export const AlertState = ({children}) => {
//     const [state, dispatch] = useReducer(alertReducer, null)
//
//     const hide = () => dispatch({type: HIDE_ALERT})
//
//     const show = (text, type = 'secondary') => {
//         dispatch({
//             type: SHOW_ALERT,
//             payload: {type, text}
//         })
//     }
//
//     return (
//         <AlertContext.Provider value={{
//             hide,
//             show,
//             alert: state
//         }}>
//             {children}
//         </AlertContext.Provider>
//     )
// }






import React, {useReducer} from 'react'
import {NewAlertContext} from './alertContext'
import {AlertReducer} from './alertReducer'
import {HIDE_ALERT, SHOW_ALERT} from "../Types";



export const MyAlertState = ({children}) => {

    const [state, dispatch] = useReducer(AlertReducer, null)

    const hide = () => dispatch({type: HIDE_ALERT})

    const show = (text, type = 'secondary') => dispatch({
        type: SHOW_ALERT,
        context: {text, type} //making state
    })

    return (
        <NewAlertContext.Provider
        value={{
            hide,
            show,
            alert: state
        }}
        >
            {children}
        </NewAlertContext.Provider>
    )
}


















// export const AlertState = ({children}) => {
//     const [state, dispatch] = useReducer(alertReducer, null)
//
//     const hide = () => dispatch({type: HIDE_ALERT})
//
//     const show = (text, type = 'secondary') => {
//         dispatch({
//             type: SHOW_ALERT,
//             payload: {type, text}
//         })
//     }
//
//     return (
//         <AlertContext.Provider value={{
//             hide,
//             show,
//             alert: state
//         }}>
//             {children}
//         </AlertContext.Provider>
//     )
// }