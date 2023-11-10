import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Merchant = () => {
  return (
    <View style={styles.container}>
      <Text>Merchant</Text>
    </View>
  );
};

export default Merchant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
