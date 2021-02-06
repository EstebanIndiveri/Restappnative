import React, { Fragment,useContext,useEffect } from 'react';
import {StyleSheet,Alert} from 'react-native';
import PedidosContext from '../context/pedidos/pedidosContext';
import {Container,Content,List,ListItem,Left,Body,Button,Text,H1,Thumbnail,Footer,FooterTab} from 'native-base'
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';


const ResumeOrder = () => {
    const{pedido,total,displayResume,deleteProduct,deliveryReady}=useContext(PedidosContext);
    const navigation=useNavigation();
    useEffect(()=>{
        calculatedTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pedido]);

    const calculatedTotal=()=>{
        let newTotal=0;
        newTotal=pedido.reduce((newTotal,article)=>newTotal+article.total,0);
        displayResume(newTotal);
    }

    const redirectProgress=()=>{
        Alert.alert(
            'Revisa tu pedido',
            'Una vez realizado, no podrás cambiarlo',
            [
                {
                    text:'Confirmar',
                    onPress:async ()=>{
                        // crear un objeto
                        const pedidoObj={
                            tiempoentrega:0,
                            completado:false,
                            total:Number(total),
                            order:pedido,
                            creado:Date.now(),
                        }
                        try {
                            const pedido=await firestore().collection('pedidos').add(pedidoObj);
                            // console.log(pedido);
                            deliveryReady(pedido.id)
                        navigation.navigate('ProgressOrder');

                        } catch (error) {
                            console.log(error);
                        }
                        // console.log(pedidoObj);
                        // read in firebase
                    }
                },
                {
                    text:'Revisar',style:'cancel'
                }
            ]
        )
    } 

    
    const confirmDelete=(id,i)=>{
        Alert.alert(
            'Deseas eliminar este articulo',
            'Una vez eliminado, no podrás cambiarlo',
            [
                {
                    text:'Confirmar',
                    onPress:()=>{
                        deleteProduct(id);
                    }
                },
                {
                    text:'Cancelar',style:'cancel'
                }
            ]
        )
    }

    return ( 
        <Fragment>
            <Container style={globalStyles.container}>
                <Content style={globalStyles.content}>
                    <H1 style={globalStyles.titulo}>Resumen Pedido</H1>
                    {pedido.map((platillo,i)=>{
                        const{cantidad,nombre,imagen,precio,id}=platillo;

                        return(
                            <List key={id+i}>
                                <ListItem thumbnail>
                                    <Left>
                                        <Thumbnail large square source={{uri:imagen}}/>
                                    </Left>
                                    <Body>
                                        <Text>{nombre}</Text>
                                        <Text>Cantidad: {cantidad}</Text>
                                        <Text>Precio: $ {precio}</Text>
                                        <Button
                                        onPress={()=>confirmDelete(id,i)}
                                        full
                                        danger
                                        style={{marginTop:10,width:'50%',justifyContent:'center',alignItems:'center'}}
                                        >
                                            <Text style={[globalStyles.ButtonText,{color:'#FFF'}]}>Eliminar</Text>
                                        </Button>
                                    </Body>
                                </ListItem>
                            </List>
                        )
                    })}
                    <Button full
                    style={{marginTop:30}}
                    dark
                    onPress={()=>navigation.navigate('Menu')}
                    >
                        <Text style={[globalStyles.ButtonText,{color:'#FFF'}]}>Seguir Pidiendo</Text>
                    </Button>
                </Content>
                <Text style={globalStyles.cantida}>Total a pagar: $ {total}</Text>

                <Footer>
                    <FooterTab>
                    <Button full
                    style={globalStyles.button}
                    onPress={()=>redirectProgress()}
                    >
                        <Text style={globalStyles.ButtonText}>Ordenar Pedido</Text>
                    </Button>
                    </FooterTab>
                </Footer>
            </Container>
        </Fragment>
     );
}
 
export default ResumeOrder;