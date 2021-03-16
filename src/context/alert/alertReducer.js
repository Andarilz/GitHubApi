import {HIDE_ALERT, SHOW_ALERT} from "../Types";

export const AlertReducer = (state, action) => {
    switch(action.type){
        case SHOW_ALERT: return action.payload
        case HIDE_ALERT: return null
        default: return state
    }
}






// import {HIDE_ALERT, SHOW_ALERT} from "../Types";
//
// export const AlertReducer = (state, action) => {
//     switch(action.type){
//         case HIDE_ALERT: return null
//         case SHOW_ALERT: return action.context
//         DEFAULT: return state
//     }
// }






















// export const alertReducer = (state, action) => {
//     switch(action.type){
//         case SHOW_ALERT: return action.payload
//         case HIDE_ALERT: return null
//         default: return state
//     }
// }













// import {HIDE_ALERT, SHOW_ALERT} from "../Types";
//
// const handlers = {
//     [SHOW_ALERT] : (state, action) => action.payload,
//     [HIDE_ALERT] : () => null,
//     DEFAULT: state => state
// }
//
// export const alertReducer = (state, action) => {
//
//     const handler = handlers[action.type] || handlers.DEFAULT
//     return handler(state, action)
// }