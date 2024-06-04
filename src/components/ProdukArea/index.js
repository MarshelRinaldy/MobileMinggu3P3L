import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from '../Button';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import IMAGES from '../../assets/images';

export default function ProdukArea({
  dataURI = [],
  imageStyle = {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  navigation
}) {
  return (
    <View style={styles.container}>
      {dataURI.map((item, index) => (
        <View key={index} style={styles.box}>
            <View style={styles.card}>
                <View style={{
                    backgroundColor: '#ffffff',
                    paddingVertical: 5,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    width: '100%',
                }}>
                    <Text style={styles.title}>{item.nama}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                }}>
                    <Image
                        source={IMAGES.makanan}
                        style={styles.image}
                    />
                    <View style={{
                        marginLeft: 5,
                    }}>
                        <Text style={styles.detailText}>Harga    : Rp {item.harga}</Text>
                        <Text style={styles.detailText}>Stok     : {item.stok}</Text>
                        <Text style={styles.detailText}>Status   : {item.status}</Text>
                        <Text style={styles.detailText}>Deskripsi: {item.deskripsi}</Text>
                    </View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  card: {
    width: 300,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  detailText: {
    fontSize: 12,
    textAlign: 'left',
    alignSelf: 'stretch',
    marginBottom: 5,
  },
});