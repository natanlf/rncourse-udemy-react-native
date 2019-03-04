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
      return {
        places: prevState.places.concat(placeName)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.state.places}/>
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
