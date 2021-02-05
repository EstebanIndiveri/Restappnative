import React, { useReducer,useState } from "react";
// import firebase from '../../firebase';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from "./firebaseContext";
import firestore from '@react-native-firebase/firestore';

import _ from 'lodash';

import { GET_PRODUCTS_RIGHT } from "../../types";

const FirebaseState=(props)=>{
    const [isLoaded, setIsLoaded] = useState(false);
    // console.log(firebase)
    // initial state:
    const initialState={
        menu:[],
        isloaded:isLoaded,
    };
    // reducer dispatch
    const[state,dispatch]=useReducer(FirebaseReducer,initialState);
    // function get products
    const getProducts=()=>{
        setIsLoaded(true);
            const produtsCollection=firestore().collection('productos').orderBy('categoria', 'asc').onSnapshot(getSnap);
            function getSnap(snapshot){
                let platillo=snapshot.forEach(documentSnapshot=>{
                            return {id:documentSnapshot.id,
                            ...documentSnapshot.data(),
                            };
                        });
                    // console.log(snapshot);
                    // let platillosArray=_.shortBy(platillosArray,'categoria');
                    // console.log(platillosArray);
                     dispatch({
                        type:'GET_PRODUCTS_RIGHT',
                        payload:snapshot._docs,
                    });
                    setIsLoaded(false);
            }
    }
    return(
        <FirebaseContext.Provider
        value={{
            menu:state.menu,
            firestore,
            getProducts,
            isloaded:state.isloaded,
        }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}
export default FirebaseState;