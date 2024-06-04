import React, { useEffect, useState } from 'react';
import { Text } from '../../components';
import { ScrollView, View, ImageBackground, StyleSheet, Image } from 'react-native';
import { HEIGHT, WIDTH } from '../../assets/styles';
import IMAGES from '../../assets/images';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { SearchInput, ProdukArea } from '../../components';
import satellite from '../../services/satellite';

export default function Katalog({ navigation }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await satellite.get(`/dukpro`);
        console.log('dukpro', response.status);
        if (response.status === 200) {
          setData(response.data.data);
        }
      } catch (error) {
        console.error('Errorserver:', error);
      }
    };

    fetchData();
  },[]);

  const filterData = (searchText) => {
    const filteredData = data.filter((item) => {
      return item.nama.toLowerCase().includes(searchText.toLowerCase());
    });
    return filteredData;
  };

  console.log('data', data);
  return (
    <ImageBackground
      resizeMode="cover" 
      source={IMAGES.bgScreen}
      style={{
        width: WIDTH,
        height: HEIGHT,
        alignItems: 'center',
      }}
    >
      <ScrollView>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          marginBottom: 20,
          paddingHorizontal:-20,
        }}>
          <Text style={{
            fontSize: 30,
            color: '#D8AC7B',
            textTransform: 'uppercase',
            marginBottom: 10,
          }}>Atma Kitchen</Text>
          <Text>Our Delicious Cake</Text>
        </View>
        <View>
          <SearchInput
            placeholder="Cari nama produk"
            border={true}
            borderColor="#D8AC7B"
            vertical={7}
            horizontal={5}
            rightIcon={<FontAwesome name="search" size={24} color={'#D8AC7B'} />}
            value={search}
            onChangeText={(value) => setSearch(value)}
            width={'100%'}
            italic={true}
            padding={10}
            left={2}
            borderRadius={20}
          />
          <ProdukArea  dataURI={filterData(search)} navigation={navigation} />
        </View>
      </ScrollView>
    </ImageBackground>
    
  );
}


