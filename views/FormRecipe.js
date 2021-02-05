import React, { Fragment,useContext,useState } from 'react';
import {StyleSheet} from 'react-native';
import PedidosContext from '../context/pedidos/pedidosContext';
import {Container,Content,Form,Icon,Button,Grid,Col,Text,Input} from 'native-base'
import globalStyles from '../styles/global';

const FormRecipe = () => {
    const {platillo}=useContext(PedidosContext);
    const {nombre,imagen,descripcion,precio}=platillo._data;
    // cantidades:
    const [cantidad, setCantidad] = useState(1);

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

  console.log(cantidad);
    return ( 
        <Fragment>
            <Container>
                <Content>
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
                    </Form>
                </Content>
            </Container>
        </Fragment>
     );
}
 
export default FormRecipe;