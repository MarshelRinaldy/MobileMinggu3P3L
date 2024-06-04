import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, StyleSheet, View } from 'react-native';
import Router from './src/services/router';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./src/storage/storages"; 

export default function App() {
  return (
    <View style={styles.container}>
     <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
