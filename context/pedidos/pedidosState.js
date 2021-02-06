import React, { useReducer } from "react";
import PedidosContext from "./pedidosContext";

import pedidosReducer from "./pedidosReducer";
import {SELECT_PRODUCT,CONFIRM_ORDER_PRODUCT}from '../../types';

const PedidosState=(props)=>{
    // initial state:
    const initialState={
        pedido:[],
        platillo:null
    };

    // reducer dispatch
    const[state,dispatch]=useReducer(pedidosReducer,initialState);

    // select product:
    const selectProduct=(product)=>{
        // console.log(product);
        dispatch({
            type:SELECT_PRODUCT,
            payload:product,
        });
    }

    //cofirm delivery 
    const setPedido=pedido=>{
        dispatch({
            type:CONFIRM_ORDER_PRODUCT,
            payload:pedido,
        });
    };

    return(
        <PedidosContext.Provider
        value={{
            pedido:state.pedido,
            platillo:state.platillo,
            selectProduct,
            setPedido,
        }}
        >
            {props.children}
        </PedidosContext.Provider>
    )
}
export default PedidosState;