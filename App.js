import 'react-native-gesture-handler';
import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
// views
import NewOrder from './views/NewOrder';
import DetailRecipe from './views/DetailRecipe';
import ResumeOrder from './views/ResumeOrder';
import Menu from './views/Menu';
import FormRecipe from './views/FormRecipe';
import ProgressOrder from './views/ProgressOrder';

// state;
import FirebaseState from './context/contextFirebase/firebaseState';
import PedidosState from './context/pedidos/pedidosState';


const Stack=createStackNavigator();
const App = () => {
  return (
    <Fragment>
      <FirebaseState>
        <PedidosState>
        <StatusBar  backgroundColor="transparent" translucent barStyle="dark-content"/>
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            gestureEnabled:true,
            gestureDirection:'horizontal',
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
            headerStyle:{
              backgroundColor:'#FFDA00',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTitleStyle:{
              fontWeight:'bold',
            },
            headerTintColor:'#323232',
          }}
          headerMode="float"
          >
            <Stack.Screen
            name="NewOrder"
            component={NewOrder}
            options={{
              title:'Nueva Orden',
            }}
            />
            <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
              title:'Nuestro Menú',
            }}
            />
            <Stack.Screen
            name="DetailRecipe"
            component={DetailRecipe}
            options={{
              title:'Detalle Platillo',
            }}
            />
            <Stack.Screen
            name="FormRecipe"
            component={FormRecipe}
            options={{
              title:'Ordernar Platillo',
            }}
            />
            <Stack.Screen
            name="ResumeOrder"
            component={ResumeOrder}
            options={{
              title:'Resumen Pedido',
            }}
            />
            <Stack.Screen
            name="ProgressOrder"
            component={ProgressOrder}
            options={{
              title:'Progreso de Pedido',
            }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </PedidosState>
      </FirebaseState>
    </Fragment>
  );
};

export default App;
