import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons';
import { shallowEqual, useSelector } from 'react-redux';
import { Button } from '../../components';

export default function Profile({ userProfile , navigation}) {

  const user = userProfile ? userProfile : {};
   const [dataLogin] = useSelector((state) => [state.dataLogin], shallowEqual);
  console.log('Main-Login:', dataLogin.userProfile);
  const profile = dataLogin.userProfile;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>User Information</Text>
            <Button
                title="History Pesanan"
                onPress={() => navigation.navigate('HistoryPesanan')} 
                color="#004AAD"
                width="50%"
                height={50}
                borderRadius={20}
                fontSize={20}
            />
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.text}>{user.name}</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>{user.email}</Text>

          <Text style={styles.label}>Username:</Text>
          <Text style={styles.text}>{user.username}</Text>

          <Text style={styles.label}>Address:</Text>
          <Text style={styles.text}>{user.address}</Text>

          <Text style={styles.label}>Date of Birth:</Text>
          <Text style={styles.text}>{user.date_of_birth}</Text>

          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.text}>{user.phone_number}</Text>

          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.text}>{user.gender}</Text>
        </View>
        <Button
            title="Logout"
            onPress={() => navigation.navigate('Login')} 
            color="#FF007F"
            backgroundColor='#FF007F'
            width="50%"
            height={50}
            borderRadius={20}
            fontSize={20}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
  text: {
    fontSize: 16,
    marginBottom: 40,
    color: '#333',
  },
});