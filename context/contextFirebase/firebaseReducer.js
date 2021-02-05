import React,{useReducer} from 'react';
import { GET_PRODUCTS_RIGHT } from '../../types';

export default (state,action)=>{
    switch (action.type) {
        case GET_PRODUCTS_RIGHT:
            return{
                ...state,
                menu:action.payload,
            }
        default:
            return state;
    }
}