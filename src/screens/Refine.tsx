import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import styles from './RefineStyle';
import {Colors, Typography, minxmins} from '../styles';
import {REFINE_DATA, purposeItemsData} from '../constants/AppConstant';
import DropdownComponent from '../components/DropDown';
import SliderWithTooltip from '../components/Slider';

const Refine = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedPurposes, setSelectedPurposes] = useState([]);
  const purposeItems = purposeItemsData;

  const handlePurposeToggle = purpose => {
    if (selectedPurposes.includes(purpose)) {
      setSelectedPurposes(selectedPurposes.filter(item => item !== purpose));
    } else {
      setSelectedPurposes([...selectedPurposes, purpose]);
    }
  };

  const handleSliderChange = value => {
    setSliderValue(value);
  };

  const handleTextChange = (text: string) => {
    const wordCount = text.split(/\s+/).filter(word => word !== '').length;
    setTextInputValue(text);
    setWordCount(wordCount);
  };

  const [wordCount, setWordCount] = useState(0);

  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={Colors.PRIMARY} />
      <View style={styles.header}>
        <AntDesign name="left" size={25} style={styles.backicon} />
        <Text style={styles.headertext}>{REFINE_DATA.REFINE}</Text>
      </View>
      <ScrollView style={styles.scrollstyle}>
        <View style={styles.insidedropdown}>
          <Text style={styles.secondheadertext}>
            {REFINE_DATA.AVAILABILITY}
          </Text>
          <DropdownComponent />
        </View>
        <View>
          <Text style={styles.secondheadertext}>{REFINE_DATA.STATUS}</Text>
          <View style={styles.textinputcontainer}>
            <TextInput
              style={styles.textinput}
              placeholder={REFINE_DATA.PLACE_HOLDER}
              multiline
              onChangeText={handleTextChange}
              value={textInputValue}
            />
          </View>
          <Text style={[styles.wordcount, styles.bottomtext]}>
            {wordCount}
            {REFINE_DATA.COUNT}
          </Text>
        </View>
        <View>
          <Text style={styles.secondheadertext}>{REFINE_DATA.DISTANCE}</Text>
          <SliderWithTooltip />
          <View style={styles.kilocontainer}>
            <Text style={styles.bottomtext}>{REFINE_DATA.KM}</Text>
            <Text style={styles.bottomtext}>{REFINE_DATA.KMS}</Text>
          </View>
        </View>
        <View style={styles.purposecontainer}>
          <Text style={styles.secondheadertext}>{REFINE_DATA.SELECT}</Text>
          <View style={styles.purposeitems}>
            {purposeItems.map(purpose => (
              <TouchableOpacity
                key={purpose}
                onPress={() => handlePurposeToggle(purpose)}
                style={[
                  styles.purposeItem,
                  {
                    backgroundColor: selectedPurposes.includes(purpose)
                      ? Colors.PRIMARY
                      : Colors.WHITE,
                  },
                ]}>
                <Text
                  style={{
                    fontSize: Typography.FONT_SIZE_14,
                    color: selectedPurposes.includes(purpose)
                      ? Colors.WHITE
                      : Colors.PRIMARY,
                  }}>
                  {purpose}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.buttoncontainer}>
          <Text style={styles.buttontext}>{REFINE_DATA.SAVE}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default Refine;
