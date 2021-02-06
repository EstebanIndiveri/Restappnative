import {SELECT_PRODUCT,CONFIRM_ORDER_PRODUCT,DISPLAYRESUMEN,DELETE_PRODUCT,DELIVERY_ORDER}from '../../types';


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
        case DISPLAYRESUMEN:
            return{
                ...state,
                total:action.payload
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                pedido:state.pedido.filter(article=>article.id!==action.payload)
            }
        case DELIVERY_ORDER:
            return{
                ...state,
                idpedido:action.payload
            }
        default:
            return state;
    }
}