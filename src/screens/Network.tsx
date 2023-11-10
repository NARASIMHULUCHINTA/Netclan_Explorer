import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Network = () => {
  return (
    <View style={styles.container}>
      <Text>Network</Text>
    </View>
  );
};

export default Network;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
