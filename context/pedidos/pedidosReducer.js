import {SELECT_PRODUCT,CONFIRM_ORDER_PRODUCT}from '../../types';


export default(state,action)=>{
    switch(action.type){
        case SELECT_PRODUCT:
            return{
                ...state,
                platillo:action.payload,
            }
        case CONFIRM_ORDER_PRODUCT:
            return{
                ...state,
                pedido:[...state.pedido,action.payload]
            }
        default:
            return state;
    }
}