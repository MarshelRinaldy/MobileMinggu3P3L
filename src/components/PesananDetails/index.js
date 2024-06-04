import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import IMAGES from '../../assets/images';
import satellite from '../../services/satellite';

const PesananDetails = ({
  dataURI = [],
  imageStyle = {
    width: 200,
    height: 200,
  },
  navigation
}) => {
  const [data, setData] = useState(dataURI);
  
  useEffect(() => {
    setData(dataURI);
  }, [dataURI]);
  
  const handlePress = async (id) => {
    try {
      const response = await satellite.put(`/pesanan/`+ id, {
        status: 'selesai',
      });
      console.log('Update response:', response.status);
      if (response.status === 200) {
        alert('Pesanan berhasil diselesaikan');
        setData(prevData => prevData.filter(item => item.id !== id));
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };


  
  return (
    <View style={styles.container}>
      {
        data.length === 0 && (
          <Text style={{
            textAlign: 'center',
            fontSize: 30,
            color: '#888',
            marginVertical: 50,
          }}>Tidak ada pesanan</Text>
        )
      }
      {data.map((item, index) => (
        <View key={index}>
            <Text style={styles.transactionNumber}>No Transaksi: {item.no_transaksi}</Text>

            <Card containerStyle={styles.card}>
                {item.produk.map((item, index) => (
                    <>
                    <View key={index} style={styles.itemContainer}>
                        <Image
                            source={IMAGES.makanan} // Replace with your image URL
                            style={styles.image}
                        />
                        <View style={styles.detailsContainer}>
                            <Text style={styles.itemTitle}>{item.nama_produk}</Text>
                            <Text style={styles.itemDescription}>{item.deskripsi_produk}</Text>
                            <Text style={styles.quantity}>Quantity: {item.jumlah_produk}</Text>
                        </View>
                        <Text style={styles.price}>Rp. {item.harga * item.jumlah_produk}</Text>
                    </View>

                    <Divider style={styles.divider} />
                    </>
                ))}
            </Card>

            <View style={styles.footer}>
                <Text style={styles.shippingCost}>Biaya Ongkir: {item.biaya_ongkir}</Text>
                <Text style={styles.total}>Total: {item.total_harga}</Text>
            </View>
        
            <Text style={styles.date}>{item.tanggal_transaksi}</Text>
            {
                item.status_transaksi === 'sudah dipickup' ? (
                    <TouchableOpacity style={styles.button} onPress={() =>  handlePress(item.id)}>
                        <Text style={styles.buttonText}>Selesai</Text>
                    </TouchableOpacity>
                ) : null
            }
            
            <Divider/>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container :{
    marginBottom: 20,
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#F7F0EA',
  },
  transactionNumber: {
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  quantity: {
    fontSize: 14,
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    marginVertical: 10,
  },
  footer: {
    marginVertical: 20,
    alignItems: 'flex-start',
    marginHorizontal: 20,
  },
  shippingCost: {
    fontSize: 16,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#888',
    textAlign: 'right',
  },
});

export default PesananDetails;
