import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Contacts = () => {
  return (
    <View style={styles.container}>
      <Text>Contacts</Text>
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
