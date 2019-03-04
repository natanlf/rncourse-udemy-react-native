import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

import ListItem from '../ListItem/ListItem'

const placeList = props => {

        //envio o valor place para o componente ListItem através da propriedade placeName
        const placesOutput = props.places.map((place, i) => 
            <ListItem key={i} placeName={place} onItemPressed={() => props.onItemDeleted(i)}/>
        )
    return(
        <ScrollView style={styles.listContainer}>
          {placesOutput}
        </ScrollView>       
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
})

export default placeList