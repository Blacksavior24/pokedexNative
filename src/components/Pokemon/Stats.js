import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { capitalize, map } from 'lodash'

export default function Stats(props) {
    const {stats} = props

    const barStyles = (number) => {
        const color = number > 49 ? '#00ac17' : '#ff3e3e';
        return {
          backgroundColor: color,
          width: `${number}%`,
        }
    }
    return (
   <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((item)=>(
        <View key={item.stat.name} style={styles.block}>
            <View style={styles.blockname}>
                <Text style={styles.statName}>{capitalize(item.stat.name)} : </Text>
            </View>
            <View style={styles.blockinfo}>
                <Text style={styles.statNumber}>{item.base_stat}</Text>
                <View style={styles.bgBar}>
                <View style={[styles.bar, barStyles(item.base_stat)]} />
                </View>
            </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 80
    },
    title:{
        fontWeight: 'bold',
        fontSize: 25,
        paddingBottom: 5
    },
    block:{
        flexDirection: 'row',
        paddingVertical: 5
    },
    blockname:{
        width: '30%',
    },
    statName:{
        fontSize: 12,
        color: "#6b6b6b"
    },
    blockinfo:{
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    statNumber:{
        width: '12%',
        fontSize: 14
    },
    bgBar: {
        backgroundColor: '#dedede',
        width: '88%',
        height: 10,
        borderRadius: 20,
        overflow: 'hidden'
    },
    bar: {
        height: 10,
        borderRadius: 20,
    }
})