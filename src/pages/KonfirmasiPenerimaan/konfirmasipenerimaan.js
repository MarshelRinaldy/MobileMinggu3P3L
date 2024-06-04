import React, { useEffect, useState } from 'react';
import { PesananDetails, Text } from '../../components';
import { ScrollView, StyleSheet,  } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import satellite from '../../services/satellite';
import { View } from 'react-native';

export default function KonfirmasiPenerimaan({navigation}) {
  const login = useSelector((state) => state.dataLogin, shallowEqual);
  const [status, setStatus] = useState('sudah dipickup');
  // || 'selesai'
  console.log('login', login);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await satellite.get(`/pesanan/pickup/`+ login.userProfile.id + '/'+ status);
        console.log('pesanan', response.status);
        if (response.status === 200) {
          setData(response.data.data);
        }
      } catch (error) {
        console.error('Errorserver:', error);
      }
    };

    fetchData();
  },[data]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
        backgroundColor: 'Transparent'
      }}>
        <Text style={{
          fontSize: 30,
          color: '#D8AC7B',
          textTransform: 'uppercase',
          marginBottom: 10,
        }}>Atma Kitchen</Text>
        <Text>Konfirmasi Pesanan</Text>
      </View>
      <PesananDetails dataURI={data} navigation={navigation}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F0EA',
    height: '100%',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});