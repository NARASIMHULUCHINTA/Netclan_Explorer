import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import Eye from 'react-native-vector-icons/Ionicons';
import NetworkIcon from 'react-native-vector-icons/Entypo';
import Hash from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '../screens/Explore';
import Icon from 'react-native-vector-icons/AntDesign';
import Chat from '../screens/Chat';
import Contacts from '../screens/Contacts';
import Groups from '../screens/Groups';
import Network from '../screens/Network';
import { Colors, Typography } from '../styles';
import { StyleSheet } from 'react-native';

const tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <NavigationContainer independent={true}>
      <tab.Navigator screenOptions={{headerShown: false}}>
        <tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: () => <Eye name="eye" color={Colors.PRIMARY} size={30} />,
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarInactiveTintColor: Colors.PRIMARY,
            tabBarLabelStyle: styles.icontext,
          }}
        />
        <tab.Screen
          name="Network"
          component={Network}
          options={{
            tabBarIcon: () => (
              <NetworkIcon name="network" color={Colors.PRIMARY} size={30} />
            ),
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarInactiveTintColor: Colors.PRIMARY,
            tabBarLabelStyle: styles.icontext,
          }}
        />
        <tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: () => (
              <Eye
                name="chatbubble-ellipses-outline"
                color={Colors.PRIMARY}
                size={30}
              />
            ),
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarInactiveTintColor: Colors.PRIMARY,
            tabBarLabelStyle: {fontSize: 15, fontWeight: '700'},
          }}
        />
        <tab.Screen
          name="Contacts"
          component={Contacts}
          options={{
            tabBarIcon: () => (
              <Icon name="contacts" color={Colors.PRIMARY} size={30} />
            ),
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarInactiveTintColor: Colors.PRIMARY,
            tabBarLabelStyle: styles.icontext,
          }}
        />
        <tab.Screen
          name="Groups"
          component={Groups}
          options={{
            tabBarIcon: () => (
              <Hash name="hashtag" color={Colors.PRIMARY} size={30} />
            ),
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarInactiveTintColor: Colors.PRIMARY,
            tabBarLabelStyle: styles.icontext,
          }}
        />
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;


const styles = StyleSheet.create({
  icontext:{
    fontSize: Typography.FONT_SIZE_14,
     fontWeight: Typography.FONT_WEIGHT_MEDIUM
  }
})