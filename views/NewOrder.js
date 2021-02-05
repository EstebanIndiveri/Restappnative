import React, { Fragment } from 'react';
import { View,StyleSheet } from 'react-native';
import {Container,Button, Text} from "native-base"
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';
const NewOrder = () => {


    const navigation=useNavigation();
    return (
        <Fragment>
            <Container style={globalStyles.container}>
                <View style={[globalStyles.content,styles.contentd]}>
                    <Button
                    style={globalStyles.button}
                    rounded
                    block
                    onPress={()=>navigation.navigate('Menu')}
                    >
                        <Text style={globalStyles.ButtonText}>Nueva Orden</Text>
                    </Button>
                </View>
            </Container>
        </Fragment>
     );
}
const styles=StyleSheet.create({
    contentd:{
        flexDirection:'column',
        justifyContent:'center',
    }
})
 
export default NewOrder;