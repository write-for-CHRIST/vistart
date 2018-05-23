import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Auth from '@bit/writeforchrist.vistart.components.auth'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Auth email="admin@phuc.am"
          password="nooneknows"
          render={(auth) => (
            <View>
              <TextInput value={auth.email} onChange={auth.updateEmail} />
              <TextInput value={auth.password} onChange={auth.updatePassword} />
              <TouchableOpacity onPress={auth.login}>
                <Text>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={auth.reset}>
                <Text>Reset</Text>
              </TouchableOpacity>
            </View>
          )}
        />
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
