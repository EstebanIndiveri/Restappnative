import React, { Fragment,useContext,useEffect,useState } from 'react';
import {View,StyleSheet } from 'react-native';
import {Container,Text,H1,H3,Button} from 'native-base';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';
import PedidosContext from '../context/pedidos/pedidosContext';

const ProgressOrder = () => {
    const {idpedido}=useContext(PedidosContext);
    return ( 
        <Text>{idpedido}</Text>
     );
}
 
export default ProgressOrder;