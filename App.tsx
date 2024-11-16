import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Chambre from './src/pages/Chambre';
import Liste from './src/pages/Liste';
import GestionnaireListe from './src/pages/GestionnaireListe';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Chambre">
                <Stack.Screen name="Chambre" component={Chambre} />
                <Stack.Screen name="Liste" component={Liste} />
                <Stack.Screen name="GestionnaireListe" component={GestionnaireListe} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
