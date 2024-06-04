import React from 'react';
import { LoginPage, HomePage, CustomerPage, Main, PresensiPage, KatalogPage, StatusPesananPage, PenarikanSaldoPage, GenerateLaporanPage, KonfirmasiPenerimanPage, HistoryPesananPage, LaporanPenggunaanPage } from '../../pages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { shallowEqual, useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function Router() {
  const [dataLogin] = useSelector((state) => [state.dataLogin], shallowEqual);
  // console.log('dataLogin', dataLogin);
  return (
    <Stack.Navigator
      initialRouteName={dataLogin.userProfile !== null ? 'Main' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}
      screenListeners={{
        state: (data) => {
          console.log('screen', JSON.stringify(data, null, 2));
        },
      }}
    >
      <Stack.Screen name="Login" component={LoginPage}></Stack.Screen>
      <Stack.Screen name="Main" component={Main}></Stack.Screen>
      <Stack.Screen name="Home" component={HomePage}></Stack.Screen>
      <Stack.Screen name="Pesanan" component={StatusPesananPage}></Stack.Screen>
      <Stack.Screen name="Customer" component={CustomerPage}></Stack.Screen>
      <Stack.Screen name="Katalog" component={KatalogPage}></Stack.Screen>
      <Stack.Screen name="Konfirmasi" component={KonfirmasiPenerimanPage}></Stack.Screen>
      <Stack.Screen name="Penarikan" component={PenarikanSaldoPage}></Stack.Screen>
      <Stack.Screen name="Laporan" component={GenerateLaporanPage}></Stack.Screen>
      <Stack.Screen name="LaporanPenggunaan" component={LaporanPenggunaanPage}></Stack.Screen>
      <Stack.Screen name="Presensi" component={PresensiPage}></Stack.Screen>
      <Stack.Screen name="HistoryPesanan" component={HistoryPesananPage}></Stack.Screen>
    </Stack.Navigator>
  );
}
