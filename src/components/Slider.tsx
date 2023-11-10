import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { Colors, minxmins } from '../styles';

const SliderWithTooltip = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={sliderValue}
        onValueChange={handleSliderChange}
        minimumTrackTintColor={Colors.PRIMARY}
        maximumTrackTintColor={Colors.PRIMARY}
        thumbTintColor={Colors.PRIMARY}
      />
      <View style={[styles.tooltipContainer, { left: `${(sliderValue / 100) * 80}%` }]}>
        <Text style={styles.tooltipText}>{Math.round(sliderValue)}</Text>
        <View style={styles.arrowDown} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: 'center',
    marginLeft:-20,
  },
  slider: {
    width: minxmins.WINDOW_WIDTH / 1.1,
    height: 50,
  },
  tooltipContainer: {
    position: 'absolute',
    top: -10,
    marginLeft: 30,
    alignItems: 'center',
  },
  arrowDown: {
    width: 0,
    height: 0,
    marginTop:-2,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 8,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: Colors.PRIMARY,
  },
  tooltipText: {
    fontSize: 12,
    color: Colors.WHITE,
    backgroundColor: Colors.PRIMARY,
    padding: 3,
    borderRadius: 5,
  },
});

export default SliderWithTooltip;
