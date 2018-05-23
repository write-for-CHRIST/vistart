import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from '@bit/writeforchrist.vistart.components.auth'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Auth header="Hello React Native with Expo" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
