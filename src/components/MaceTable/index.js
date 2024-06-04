import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



const MaceTable = ({no, name, total_digunakan ,satuan}) => {
  return (
    <View style={styles.containerHeaderTable}>
        <View style={[styles.boxTable, styles.textHeaderNo]}>
          <Text style={styles.titleHeaderTable}>{no}</Text>
        </View>
        <View style={[styles.boxTable, styles.flex3]}>
          <Text style={styles.titleHeaderTable}>{name}</Text>
        </View>
        <View style={[styles.boxTable, styles.flex]}>
          <Text style={styles.titleHeaderTable}>{total_digunakan}</Text>
        </View>
        <View style={[styles.boxTable, styles.flex2]}>
          <Text style={styles.titleHeaderTable}>{satuan}</Text>
      </View>
  
      </View>
  )
}



export default MaceTable

const styles = StyleSheet.create({
    containerHeaderTable: {
        marginHorizontal: 16,
        flexDirection: 'row',
        height: 40,
        backgroundColor: 'white',
        borderWidth: 0.5,
        alignItems: 'center',
      },
      boxTable: {
        height: 40,
        borderRightWidth: 0.5,
        justifyContent: 'center',
      },
      titleHeaderTable: {
        fontSize: 14,
        alignSelf: 'center',
      },
      textHeaderNo: {
        width: 30,
      },
      flex: {
        flex: 1,
      },
      flex2: {
        flex: 2,
      },
      flex3: {
        flex: 3,
      },
})
