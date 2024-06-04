import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Home from '../Home';
import Customer from '../Customer';
import { Text } from './../../components';
import ICONS from '../../assets/icons';
import { shallowEqual, useSelector } from 'react-redux';
import Presensi from '../Presensi/presensi';
import Katalog from '../Katalog/katalog';
import StatusPesanan from '../StatusPesanan/statuspesanan';
import KonfirmasiPenerimaan from '../KonfirmasiPenerimaan/konfirmasipenerimaan';
import PenarikanSaldo from '../PenarikanSaldo/penarikansaldo';
import GenerateLaporan from '../GenerateLaporan/generatelaporan';
import LaporanPenggunaan from '../GenerateLaporan/laporanpenggunaan';
import Profile from '../Profile';

const Tab = createBottomTabNavigator();

export default function Main({ navigation, route }) {
  const [dataLogin] = useSelector((state) => [state.dataLogin], shallowEqual);
  console.log('Main-Login:', dataLogin.userProfile);
  const profile = dataLogin.userProfile;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarInactiveTintColor: '#CED1D4',
        tabBarActiveTintColor: '#04325F',
        tabBarIcon: ({ focused }) => {
          const iconTabActive = {
            Home: ICONS.homeActive,
            Pesanan: ICONS.homeActive,
            Customer: ICONS.homeActive,
            Katalog: ICONS.homeActive,
            Konfirmasi: ICONS.homeActive,
            Penarikan: ICONS.homeActive,
            Laporan: ICONS.homeActive,
            LaporanPenggunaan: ICONS.homeActive,
            Presensi: ICONS.homeActive,
            Profile: ICONS.homeActive,
          };
          const iconTabInactive = {
            Home: ICONS.homeInactive,
            Pesanan: ICONS.homeInactive,
            Customer: ICONS.homeInactive,
            Katalog: ICONS.homeInactive,
            Konfirmasi: ICONS.homeInactive,
            Penarikan: ICONS.homeInactive,
            Laporan: ICONS.homeInactive,
            LaporanPenggunaan: ICONS.homeActive,
            Presensi: ICONS.homeInactive,
            Profile: ICONS.homeInactive,
          };

          return (
            <View style={{ width: 24, height: 24 }}>
              <Image source={focused ? iconTabActive[route.name] : iconTabInactive[route.name]} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
            </View>
          );
        },

        tabBarLabel: ({ focused, color }) => {
          if (route.name === 'TimeSheetForm') {
            return null;
          }

          return (
            <Text fontSize={10} color={color}>
              {
                route.name === "Pesanan" ? "Status Pesanan" : 
                route.name === "Konfirmasi" ? "Konfirmasi" :
                route.name === "Penarikan" ? "Penarikan Saldo" :
                      route.name === "Laporan" ? "Generate Laporan" :
                        route.name === "LaporanPenggunaan" ? "Laporan Penggunaan" : route.name
                
              }
            </Text>
          );
        },
        tabBarStyle: {
          paddingTop: 10,
          paddingBottom: 10,
          height: 70,
        },
      })}
    >
      {(profile.role === 'admin' || profile.role === 'mo') && <Tab.Screen name="Home" component={Home} />}
      {profile.role === 'admin' && <Tab.Screen name="Status" component={StatusPesanan} />}

      {profile.role === 'customer' && <Tab.Screen name="Customer" component={Customer} />}
      {profile.role === 'customer' && <Tab.Screen name="Katalog" component={Katalog} />}
      {profile.role === 'customer' && <Tab.Screen name="Konfirmasi" component={KonfirmasiPenerimaan} />}
      {profile.role === 'customer' && <Tab.Screen name="Penarikan" component={PenarikanSaldo} />}

      {(profile.role === 'mo' || profile.role === 'owner') && <Tab.Screen name="Laporan" component={GenerateLaporan} />}
       {(profile.role === 'mo' || profile.role === 'owner') && <Tab.Screen name="LaporanPenggunaan" component={LaporanPenggunaan} />}
      {profile.role === 'mo' && <Tab.Screen name="Presensi" component={Presensi} />}

      {(profile.role === 'mo' || profile.role === 'owner' || profile.role === 'customer' || profile.role === 'owner') && 
        <Tab.Screen name="Profile">
          {props => <Profile {...props} userProfile={profile} />}
      </Tab.Screen>}
    </Tab.Navigator>
  );
}
