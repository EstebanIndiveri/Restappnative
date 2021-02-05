import React, { Fragment,useContext } from 'react';
import { Image } from 'react-native';
import PedidosContext from '../context/pedidos/pedidosContext';
import {Container,Content,Footer,FooterTab,Button,Body,Text,H1,Card,CardItem} from 'native-base'
import globalStyles from '../styles/global';
import {useNavigation}from '@react-navigation/native';

const DetailRecipe = () => {
    const {platillo}=useContext(PedidosContext);
    const {nombre,imagen,descripcion,precio}=platillo._data;
    const navigation=useNavigation();
    return ( 
        <Fragment>
            <Container style={globalStyles.container}>
                <Content style={globalStyles.content}>
                    <H1 style={globalStyles.titulo}>{nombre}</H1>
                    <Card>
                        <CardItem>
                            <Body>
                                <Image style={globalStyles.imagen} source={{uri:imagen}}/>
                                <Text style={{marginTop:20}}>{descripcion}</Text>
                                <Text style={globalStyles.cantida}>Precio: ${precio}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button style={globalStyles.button}
                        onPress={()=>navigation.navigate('FormRecipe')}
                        >
                            <Text style={globalStyles.ButtonText}>Orderar Platillo</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        </Fragment>
     );
}
 
export default DetailRecipe;