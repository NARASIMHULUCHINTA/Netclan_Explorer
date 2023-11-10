import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Locate from 'react-native-vector-icons/Entypo';
import Eye from 'react-native-vector-icons/Ionicons';
import NetworkIcon from 'react-native-vector-icons/Entypo';
import Hash from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Progress from 'react-native-progress';
import Individual from './Individual';
import TopTab from '../navigation/TopTab';
import {useNavigation} from '@react-navigation/native';
import styles from './ExploreStyle';
import { Colors } from '../styles';
import { EXPLORE_DATA, REFINE_DATA } from '../constants/AppConstant';

const Tab = createMaterialTopTabNavigator();
const tab = createBottomTabNavigator();

const Explore = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={Colors.PRIMARY} />
      <View style={styles.topcontainer}>
        <View style={styles.drawercontainer}>
          <View style={styles.menu}>
            <Menu name="text" size={35} color={Colors.WHITE} />
            <View style={{rowGap: 5}}>
              <Text style={styles.maintext}>{EXPLORE_DATA.EXPLORE}</Text>
              <View style={styles.location}>
                <Locate name="location-pin" size={20} color={Colors.WHITE} />
                <Text style={styles.locationtext}>
                  {EXPLORE_DATA.LOCATION}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.refinecontainer} onPress={()=>navigation.navigate('Refine')}>
            <Icon name="menu-unfold" size={25} color={Colors.WHITE} />
            <Text style={{color: Colors.WHITE}}>{REFINE_DATA.REFINE}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TopTab />
    </View>
  );
};

export default Explore;
