import {StyleSheet} from 'react-native'

const globalStyles=StyleSheet.create({
    container:{
        flex:1,
    },
    content:{
        marginHorizontal:'2.5%',
        flex:1,
    },
    button:{
        backgroundColor:'#FFDA00',
    },
    ButtonText:{
        textTransform:'uppercase',
        fontWeight:'bold',
        color:'#323232',
    },
    titulo:{
        textAlign:'center',
        marginTop:40,
        marginBottom:20,
        fontSize:30,
    },
    imagen:{
        height:300,
        width:'100%'
    },
    cantida:{
        marginVertical:20,
        textAlign:'center',
        fontSize:24,
        fontWeight:'bold',
    }
});
export default globalStyles;