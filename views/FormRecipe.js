import React, { Fragment,useContext,useState,useEffect } from 'react';
import {StyleSheet,Alert} from 'react-native';
import PedidosContext from '../context/pedidos/pedidosContext';
import {Container,Content,Form,Icon,Button,Grid,Col,Text,Input,Thumbnail,Footer,FooterTab} from 'native-base'
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';

const FormRecipe = () => {
    const {platillo,setPedido}=useContext(PedidosContext);
    const {id}=platillo;
    const {nombre,imagen,descripcion,precio}=platillo._data;
    // cantidades:
    const [cantidad, setCantidad] = useState(1);
    const [total,setTotal]=useState(0);
    const navigation=useNavigation();

    useEffect(()=>{
        getTotal();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cantidad]);

    // total delivery
    const getTotal=()=>{
        const totalToPay=precio * cantidad;
        setTotal(totalToPay);
    }

    const decrementarOne=()=>{
        if(cantidad>1){
            const newCount = parseInt(cantidad) - 1;
        setCantidad(newCount);
        }
    }

    const incrementOne=()=>{
        const newCount = parseInt(cantidad) + 1;
        setCantidad(newCount);
    }

    const confirmOrder=()=>{
        Alert.alert(
            '¿Desea confirmar su pedido?',
            'Un pedido confirmado ya no se podrá modificar',
            [
                {
                    text:'Confirmar',
                    onPress:()=>{
                        const pedido={
                            ...platillo._data,
                            id,
                            cantidad,
                            total,
                        }
                        setPedido(pedido);
                        // pedido al arreglo del context
                        // Navigate al resumen
                        navigation.navigate('ResumeOrder');
                    },
                },
                {
                    text:'Cancelar',
                    style:'cancel',
                }
            ]
        )
    }
    
    return ( 
        <Fragment>
            <Container>
                <Content>
                    <Grid>
                    <Col style={{justifyContent:'center',alignItems:'center',}}>
                        <Thumbnail square style={globalStyles.imagenOrder} source={{uri:imagen}} />
                    </Col>
                    </Grid>
                    <Form>
                        <Text style={globalStyles.titulo}>Cantidad</Text>
                        <Grid>
                            <Col >
                                <Button
                                    props dark style={{height:80,justifyContent:'center'}}
                                    onPress={()=>decrementarOne()}
                                >
                                    <Icon style={{fontSize:40}} name="remove"/>
                                </Button>
                            </Col>

                            <Col size={3}>
                            <Input
                                    value={cantidad.toString()}
                                    keyboardType="numeric"
                                    style={{textAlign:'center',fontSize:20}}
                                    onChangeText={(count)=>setCantidad(count)}
                                    />
                            </Col>
                                   
                            <Col >
                                <Button
                                    props dark style={{height:80,justifyContent:'center'}}
                                    onPress={()=>incrementOne()}

                                >
                                    <Icon style={{fontSize:40}} name="add"/>
                                </Button>
                            </Col>

                        </Grid>
                        <Text style={globalStyles.cantida}>Subtotal: ${total}</Text>
                    </Form>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button style={globalStyles.button}
                        onPress={()=>confirmOrder()}
                        >
                            <Text style={globalStyles.ButtonText}>Orderar Platillo</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        </Fragment>
     );
}
 
export default FormRecipe;