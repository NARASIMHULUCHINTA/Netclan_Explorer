import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Professional = () => {
  return (
    <View style={styles.container}>
      <Text>Professional</Text>
    </View>
  );
};

export default Professional;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
