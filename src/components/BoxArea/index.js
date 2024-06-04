import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from '../Button';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import IMAGES from '../../assets/images';

export default function BoxArea({
  dataURI = [],
  imageStyle = {
    width: 200,
    height: 200,
  },
  navigation
}) {
  return (
    <View style={styles.container}>
      {dataURI.map((item, index) => (
        <View key={index} style={styles.box}>
          <View style={styles.imageContainer}>
            <Image source={IMAGES.makanan} style={imageStyle} />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.priceText}>{item.nama}</Text>
            <Text style={[styles.addressText, {color: 'rgba(0, 0, 0, 0.50)'}]}>{item.jumlah_produk}x</Text>
            <Text style={[styles.addressText, {color: 'rgba(0, 0, 0, 0.50)'}]}>Date: {item.tanggal_transaksi}</Text>
            <Text style={[styles.addressText, {color: 'rgba(0, 0, 0, 0.50)'}]}>Address: {item.alamat_pengantaran}</Text>
            <View style={styles.buttonContainer}>
              <Text style={[styles.addressText, {color: 'black'}]}>RP. {item.total_harga}</Text>
              <Text style={[styles.addressText, {color: 'yellow'}]}>{item.status_transaksi}</Text>
            </View>
          </View>
          
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  box: {
    backgroundColor: 'white',
    borderColor: '#004AAD',
    borderWidth: 3,
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  detailsContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  imageContainer: {
    alignItems: 'center',
  }, 
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  priceText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  addressText: {
    marginTop: 5,
    fontSize: 14,
  },
});
