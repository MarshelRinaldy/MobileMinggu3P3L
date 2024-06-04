import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';
import { Gap, RowTable, Text } from '../../components';
import satellite from '../../services/satellite';

export default function Customer() {
  const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const valDate = new Date();
  let valDdate = valDate.getDate();
  let valMonth = monthName[valDate.getMonth()];
  let valYear = valDate.getFullYear();

  const [dataReport, setDataReport] = useState([]);

  const fetchDataReport = async () => {
    try {
      const response = await satellite.get(`/bahanbaku`);
      console.log('bahanbaku', response.status);
      if (response.status === 200) {
        setDataReport(response.data.data);
      }
    } catch (error) {
      console.error('Errorserver:', error);
    }
  };

  useEffect(() => {
    fetchDataReport();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={'#f8f9fa'} barStyle={'dark-content'} />
      <View style={styles.page}>
        <View style={styles.containerHeader}>
          <Text style={styles.titleHeader}>Atma Kitchen</Text>
          <Text style={styles.subTitleHeader}>JL. CentralPark No. 10 Yogyakarta</Text>
        </View>
        <Gap height={12} />
        <View style={styles.containerSubHeader}>
          <Text style={styles.titleSubHeader}>Laporan Stok Bahan Baku</Text>
          <Gap height={3} />
          <Text style={styles.subTitleHeader}>Bulan : {valMonth}</Text>
          <Text style={styles.subTitleHeader}>Tahun : {valYear}</Text>
          <Text style={styles.subTitleHeader}>Tanggal Cetak : {valDdate + ' ' + valMonth + ' ' + valYear}</Text>
        </View>
        <Gap height={16} />
        <View style={styles.containerHeaderTable}>
          <View style={[styles.boxTable, styles.textHeaderNo]}>
            <Text style={styles.titleHeaderTable}>No</Text>
          </View>
          <View style={[styles.boxTable, styles.flex3]}>
            <Text style={styles.titleHeaderTable}>Nama Bahan</Text>
          </View>
          <View style={[styles.boxTable, styles.flex]}>
            <Text style={styles.titleHeaderTable}>Stok</Text>
          </View>
          <View style={[styles.boxTable, styles.flex2]}>
            <Text style={styles.titleHeaderTable}>Satuan</Text>
          </View>
        </View>
        <ScrollView style={styles.flex}>
          {dataReport.length === 0 ? (
            <View style={styles.containerEmpty}>
              <Text style={styles.textEmpty}>Kosong</Text>
            </View>
          ) : (
            dataReport.map((item, index) => {
              return <RowTable key={index} no={index + 1} name={item?.nama_bahan_baku} stok={item?.stok_bahan_baku} satuan={item?.satuan_bahan_baku} />;
            })
          )}
          <Gap height={16} />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  containerHeader: {
    marginHorizontal: 16,
    marginTop: 16,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  titleHeader: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
  },
  subTitleHeader: {
    fontSize: 16,
    fontWeight: '300',
    color: '#666',
  },
  containerSubHeader: {
    marginHorizontal: 16,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  titleSubHeader: {
    fontSize: 20,
    fontWeight: '700',
    textDecorationLine: 'underline',
    color: '#333',
  },
  containerHeaderTable: {
    marginHorizontal: 16,
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#ffffff',
    borderWidth: 0.5,
    borderColor: '#ccc',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginTop: 10,
  },
  boxTable: {
    height: 50,
    borderRightWidth: 0.5,
    borderRightColor: '#ccc',
    justifyContent: 'center',
  },
  titleHeaderTable: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#333',
  },
  textHeaderNo: {
    width: 40,
  },
  flex: {
    flex: 1,
    marginTop: 10,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  containerEmpty: {
    height: 50,
    borderWidth: 0.5,
    borderColor: '#ccc',
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  textEmpty: {
    fontSize: 16,
    fontWeight: '300',
    color: '#999',
  },
});
