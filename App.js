/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'

export default class App extends Component {

  state = {
    places: []
  }

  //recebe o PlaceName e concatena e retorna uma lista de locais para o places do App.js
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return { //O FlatList espera um objeto e precisa de chave e valor
        places: prevState.places.concat({key: `${Math.random()}` ,value: placeName})
      }
    })
  }

  placeDeletedHandler = key => {
    this.setState(prevtState => { //prevState com function, pois state funciona de forma assincrona
      return {places: prevtState.places.filter(place => {
        return place.key !== key //se o indice do array for diferente do clicado então não deleta o item
      })}
    }) 
  } 

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
