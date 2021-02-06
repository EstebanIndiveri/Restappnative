import React, { Fragment,useContext,useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {useNavigation}from '@react-navigation/native';
import FirebaseContext from '../context/contextFirebase/firebaseContext';
import PedidosContext from '../context/pedidos/pedidosContext';
import {Container,Separator,Content,List,ListItem,Thumbnail,Text,Body,Spinner} from 'native-base'
import globalStyles from '../styles/global';

const Menu = () => {
    const{isLoaded,menu,getProducts}=useContext(FirebaseContext);
    const {selectProduct,}=useContext(PedidosContext);
    // redirect
    const navigation=useNavigation();
    useEffect(()=>{
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const mostrarHeading=(categoria,i)=>{
        if(i>0){

            const categoriaAnterior=menu[i - 1]._data.categoria;
            // console.log(categoriaAnterior);
            if(categoriaAnterior!==categoria){
                return(
                    <Separator style={styles.separador}>
                        <Text style={styles.separadotTexto}>{categoria}</Text>
                    </Separator>
                )
            }
        }else{
            return(
                <Separator style={styles.separador}>
                    <Text style={styles.separadotTexto}>{categoria}</Text>
                </Separator>
            )
        }
    };
    return (
        <Fragment>
            <Container
            style={globalStyles.container}
            >
                <Content
                style={styles.content}
                >
                    {menu.length===0 &&(<Spinner color='yellow' />)}
                    <List style={styles.list} >
                            {menu.map((item,i)=>{
                                const{imagen,nombre,descripcion,categoria,precio}=item._data;
                                const{id}=item;
                                // console.log(id);
                                return(
                                    <Fragment key={id}>
                                        {mostrarHeading(categoria,i)}
                                        <ListItem
                                        style={[styles.listItem]}
                                        key={id}
                                        onPress={()=>{
                                            selectProduct(item);
                                            navigation.navigate('DetailRecipe')
                                        }}
                                        >
                                        <Thumbnail source={{uri:imagen}}/>
                                            <Body>
                                                <Text>{nombre}</Text>
                                                <Text note numberOfLines={2}>
                                                    {descripcion}
                                                </Text>
                                                <Text>Precio: ${precio}</Text>
                                            </Body>

                                        </ListItem>
                                    </Fragment>
                                    )
                            })}
                    </List>
                </Content>

            </Container>
        </Fragment>
     );
}
const styles=StyleSheet.create({
    content:{
        backgroundColor:'#FFF',
    },
    list:{
        backgroundColor:'transparent',
    },
    listItem:{
        borderRadius:10,
        backgroundColor:'#FFF',
        marginHorizontal:'auto',
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:4,
        marginBottom:10,
        padding:10,
        elevation:4,
    },
    separador:{
        backgroundColor:'#fffff9',
    },
    separadotTexto:{
        // color:'#FFDA00',
        color:'#323232',
        fontWeight: 'bold',
        fontSize:15,
        marginLeft:6,
        // borderBottomWidth:1,
        // borderBottomColor:'#323232',
        // width:'90%',
        textTransform:'uppercase',
    }
});

export default Menu;