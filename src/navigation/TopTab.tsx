import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Professional from '../screens/Professional';
import Merchant from '../screens/Merchant';
import Explore from '../screens/Explore';
import BottomTabs from './BottomTabs';
import Individual from '../screens/Individual';
import { Colors } from '../styles';

const Tab = createMaterialTopTabNavigator();
const screenOptions = {
  tabBarActiveTintColor: Colors.WHITE,
  tabBarStyle: {backgroundColor:Colors.PRIMARY},
}

const TopTab = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen
          name="INDIVIDUAL"
          component={Individual}
          options={screenOptions}
        />
        <Tab.Screen
          name="PROFESSIONAL"
          component={Professional}
          options={screenOptions}
        />
        <Tab.Screen
          name="MERCHANT"
          component={Merchant}
          options={screenOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TopTab;

const styles = StyleSheet.create({});
