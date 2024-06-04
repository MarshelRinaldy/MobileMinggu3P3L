import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, SearchInput, BoxArea } from '../../components';
import { FontAwesome } from '@expo/vector-icons';
import satellite from '../../services/satellite';
import { useSelector } from 'react-redux';

export default function HistoryPesanan({ navigation }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const [dataLogin] = useSelector((state) => [state.dataLogin]);
  const profile = dataLogin.userProfile;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await satellite.get(`/pesanan/${profile.id}`);
        console.log('pesanan', response.data);
        if (response.data.status === 200) {
          setData(response.data.data);
        }
      } catch (error) {
        console.error('Errorserver:', error);
      }
    };

    fetchData();
  }, [profile.id]);

  const filterData = (searchText) => {
    const filteredData = data.filter((item) => {
      return item.nama.toLowerCase().includes(searchText.toLowerCase());
    });
    return filteredData;
  };

  return (
    <ScrollView>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        <SearchInput
          placeholder="Cari nama produk"
          border={true}
          borderColor="#000000"
          vertical={7}
          horizontal={5}
          rightIcon={<FontAwesome name="search" size={24} color={'#000000'} />}
          value={search}
          onChangeText={(value) => setSearch(value)}
          width={'80%'}
          italic={true}
          padding={10}
          left={2}
          borderRadius={20}
        />
        {/* Gunakan data hasil filter untuk ditampilkan di BoxArea */}
        <BoxArea dataURI={filterData(search)} navigation={navigation} />
        <TouchableOpacity>
            <Button
                title="Back"
                onPress={() => navigation.goBack()}
                color="#004AAD"
                width="50%"
                height={50}
                borderRadius={20}
                fontSize={20}
            />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
