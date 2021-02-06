import React, { useReducer } from "react";
import PedidosContext from "./pedidosContext";

import pedidosReducer from "./pedidosReducer";
import {SELECT_PRODUCT,CONFIRM_ORDER_PRODUCT,DISPLAYRESUMEN,DELETE_PRODUCT,DELIVERY_ORDER}from '../../types';

const PedidosState=(props)=>{
    // initial state:
    const initialState={
        pedido:[],
        platillo:null,
        total:0,
        idpedido:'',
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

    //display total to pay
    const displayResume=total=>{
        dispatch({
            type:DISPLAYRESUMEN,
            payload:total,
        })
    }
    // elimina un articulo del carrito
    const deleteProduct=id=>{
        dispatch({
            type:DELETE_PRODUCT,
            payload:id,
        })
    }
    const deliveryReady=id=>{
        dispatch({
            type:DELIVERY_ORDER,
            payload:id
        })
    }
    return(
        <PedidosContext.Provider
        value={{
            pedido:state.pedido,
            platillo:state.platillo,
            selectProduct,
            setPedido,
            total:state.total,
            displayResume,
            deleteProduct,
            deliveryReady,
            idpedido:state.idpedido,
        }}
        >
            {props.children}
        </PedidosContext.Provider>
    )
}
export default PedidosState;