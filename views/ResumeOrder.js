import React, { Fragment,useContext,useEffect } from 'react';
import {StyleSheet,Alert} from 'react-native';
import PedidosContext from '../context/pedidos/pedidosContext';
import {Container,Content,List,ListItem,Left,Body,Button,Text,H1,Thumbnail,Footer,FooterTab} from 'native-base'
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';



const ResumeOrder = () => {
    const{pedido}=useContext(PedidosContext);
    console.log(pedido);
    return ( 
        <Fragment>
            <Container style={globalStyles.container}>
                <Content style={globalStyles.content}>
                    <H1 style={globalStyles.titulo}>Resumen Pedido</H1>
                    {pedido.map(platillo=>{
                        const{cantidad,nombre,imagen,id,precio}=platillo;
                        return(
                            <List key={id}>
                                <ListItem thumbnail>
                                    <Left>
                                        <Thumbnail large square source={{uri:imagen}}/>
                                    </Left>
                                    <Body>
                                        <Text>{nombre}</Text>
                                        <Text>Cantidad: {cantidad}</Text>
                                        <Text>Precio: $ {precio}</Text>

                                    </Body>
                                </ListItem>
                            </List>
                        )
                    })}
                </Content>
                <Text style={globalStyles.cantida}>Total a pagar: $</Text>
            </Container>
        </Fragment>
     );
}
 
export default ResumeOrder;