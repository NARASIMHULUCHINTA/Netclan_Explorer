import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import Explore from '../screens/Explore';
import Refine from '../screens/Refine';
import TopTab from './TopTab';
import Chat from '../screens/Chat';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="tabs" component={BottomTabs} />
      <Stack.Screen name="Refine" component={Refine} />
      <Stack.Screen name="Explore" component={Explore} />
      
    </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default MainNavigation;
