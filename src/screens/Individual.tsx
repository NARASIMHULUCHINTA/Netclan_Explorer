import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  FlatList,
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
import { Colors, minxmins } from '../styles';
import { EXPLORE_DATA, profilesdata } from '../constants/AppConstant';
import styles from './IndiviualStyle';
const Individual = () => {
  const [searchText, setSearchText] = useState('');
  const data = profilesdata;

  
const renderItem = ({ item }) => (
  <View style={styles.maincontainer}>
    <View style={styles.innercontainer}>
      <Image source={item.image} style={{ height: 90, width: 85, borderRadius: 20 }} />
      <View style={styles.namecontainer}>
        <Text style={styles.nametext}>{item.name}</Text>
        <Text style={styles.locationtext}>{item.location}</Text>
        <Progress.Bar
          progress={item.progress}
          height={10}
          width={minxmins.WINDOW_WIDTH/2.5}
          color={Colors.PRIMARY}
          borderRadius={7}
        />
      </View>
      <Text style={styles.nametext}>{EXPLORE_DATA.INVITE}</Text>
    </View>
    <View style={styles.intrestcontainer}>
      <Text style={[styles.locationtext,styles.intresttext]}>{item.interests}</Text>
      <Text style={styles.locationtext}>{item.description}</Text>
    </View>
  </View>
);

const keyExtractor = (item) => item.id;


  return (
    <View style={{flex: 1, margin: 5}}>
      <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <Icon name="search1" size={19} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <Icon2
          name="equalizer"
          size={28}
          color={Colors.PRIMARY}
          style={{transform: [{rotate: '90deg'}],alignSelf:'center'}}
        />
    </View>
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
    />
    </View>
  );
};

export default Individual;

