import React from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';

export default function LaporanPenggunaan() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.header}>Laporan Penggunaan Bahan Baku</Text>
        <Text style={styles.welcomeText}>Hi Owner or MO, Welcome in Dashboard!</Text>
        <View style={styles.datePickerContainer}>
          <TextInput style={styles.datePicker} placeholder="mm/dd/yyyy" />
          <Text style={styles.dateSeparator}>s/d</Text>
          <TextInput style={styles.datePicker} placeholder="mm/dd/yyyy" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Tampilkan</Text>
          </TouchableOpacity>
        </View>
        <Gap height={20} />
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerCell]}>Nama Bahan</Text>
          <Text style={[styles.cell, styles.headerCell]}>Satuan</Text>
          <Text style={[styles.cell, styles.headerCell]}>Jumlah Penggunaan</Text>
        </View>
        <RowTable namaBahan="Gula Pasir" satuan="kg" jumlahPenggunaan="496" />
        <RowTable namaBahan="Susu Bubuk" satuan="kg" jumlahPenggunaan="490" />
        <RowTable namaBahan="Mentega" satuan="kg" jumlahPenggunaan="480" />
        <RowTable namaBahan="Telur Ayam" satuan="butir" jumlahPenggunaan="250" />
        <RowTable namaBahan="Cokelat Bubuk" satuan="kg" jumlahPenggunaan="100" />
        <RowTable namaBahan="Keju Cheddar" satuan="kg" jumlahPenggunaan="100" />
        <RowTable namaBahan="Ragi Instan" satuan="kg" jumlahPenggunaan="200" />
        <RowTable namaBahan="Vanili" satuan="kg" jumlahPenggunaan="150" />
      </ScrollView>
    </View>
  );
}

const RowTable = ({ namaBahan, satuan, jumlahPenggunaan }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.cell}>{namaBahan}</Text>
      <Text style={styles.cell}>{satuan}</Text>
      <Text style={styles.cell}>{jumlahPenggunaan}</Text>
    </View>
  );
};

const Gap = ({ height }) => {
  return <View style={{ height }} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 16,
    marginBottom: 16,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  datePicker: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    height: 40,
    marginRight: 8,
  },
  dateSeparator: {
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: '#FFA07A',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerRow: {
    backgroundColor: '#f8d7da',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
  },
  headerCell: {
    fontWeight: 'bold',
  },
});
