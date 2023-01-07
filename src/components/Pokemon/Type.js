import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';
import React from 'react'
import { capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function Type(props) {
    const {types} = props;

  return (
    <View style={styles.content}>
      {types.map(item=>(
        <View 
            key={item.type.name} 
            style={{
                backgroundColor: getColorByPokemonType(item.type.name),
                ...styles.pill
                }}
        >
            <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pill:{
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10
    }
})