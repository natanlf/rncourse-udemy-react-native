import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//props são as propriedades passadas de uma tela a outra
const listItem = (props) => ( //parenteses pois vai retornar uma View, componente visual
    <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
    </View>
)

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee"
    }
})

export default listItem